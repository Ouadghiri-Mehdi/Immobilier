import {defineConfig,loadEnv} from 'vite';

// Local adapter for the same handler used by Vercel. Server variables are never
// injected into the browser bundle. No local e-mail is sent until form submission.
export default defineConfig({
 plugins:[{
  name:'local-contact-api',
  configureServer(server){
   const contactKeys=['SITE_ORIGIN','CONTACT_RECIPIENT_EMAIL','CONTACT_FROM','RESEND_API_KEY'];
   const inherited=Object.fromEntries(contactKeys.map(key=>[key,process.env[key]]));
   // loadEnv normally gives process.env priority. Values loaded on a previous
   // Vite restart must not override subsequent edits to the local env files.
   let env;
   try{
    for(const key of contactKeys)delete process.env[key];
    env=loadEnv(server.config.mode,server.config.envDir,'');
   }finally{
    for(const key of contactKeys){
     const value=env?.[key]??inherited[key];
     if(value===undefined)delete process.env[key];else process.env[key]=value;
    }
   }
   const missing=['SITE_ORIGIN','CONTACT_RECIPIENT_EMAIL','CONTACT_FROM','RESEND_API_KEY'].filter(key=>!process.env[key]?.trim());
   console.info('[contact/local] Configuration:',{
    recipient:process.env.CONTACT_RECIPIENT_EMAIL||'(absent)',
    from:process.env.CONTACT_FROM||'(absent)',
    origin:process.env.SITE_ORIGIN||'(absent)',
    apiKeyLoaded:Boolean(process.env.RESEND_API_KEY?.trim())
   });
   if(missing.length)console.warn('[contact/local] HTTP 503 / unavailable: missing '+missing.join(', '));
   server.middlewares.use('/api/contact',async(req,res)=>{
    res.status=code=>{res.statusCode=code;return res;};
    res.json=body=>{res.setHeader('Content-Type','application/json');res.end(JSON.stringify(body));};
    try{
     const chunks=[];let size=0;
     for await(const chunk of req){
      size+=chunk.length;
      if(size>16000){res.status(413).json({ok:false,code:'size'});return;}
      chunks.push(chunk);
     }
     req.body=Buffer.concat(chunks).toString('utf8');
     const {default:handler}=await import('./server/contact-handler.js');
     await handler(req,res);
    }catch{if(!res.writableEnded)res.status(500).json({ok:false,code:'unavailable'});}
   });
  }
 }]
});
