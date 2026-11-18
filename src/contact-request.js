// Shared transport only: no recipient address or credentials belong here.
export async function sendContactRequest(endpoint,payload){
 if(!endpoint)return {ok:false,code:'unavailable'};
 try{
  const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(18000)});
  const result=await response.json();
  return response.ok&&result.ok===true?{ok:true}:{ok:false,code:result.code||'delivery'};
 }catch{return {ok:false,code:'delivery'};}
}
