'use strict';
// Fonction serveur pour Vercel. Aucun secret ne doit être placé dans dist/.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ok:false}); }
  const origin = req.headers.origin;
  const allowedOrigin = process.env.SITE_ORIGIN;
  if (!allowedOrigin || !origin || origin !== allowedOrigin) return res.status(403).json({ok:false});
  const contentType = req.headers['content-type'] || '';
  if (!contentType.toLowerCase().startsWith('application/json')) return res.status(415).json({ok:false});
  if (Number(req.headers['content-length'] || 0) > 12000) return res.status(413).json({ok:false});
  let data;
  try { data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; } catch { return res.status(400).json({ok:false}); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return res.status(400).json({ok:false});
  if (data.website) return res.status(400).json({ok:false});
  const subjects = ['Achat immobilier','Location','Vente de mon bien','Locaux professionnels','Séjour','Décoration et aménagement'];
  const {name,email,subject,message,privacy} = data;
  if (typeof name !== 'string' || !name.trim() || name.length>120 || typeof email !== 'string' || email.length>254 || !/^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(email) || typeof message !== 'string' || !message.trim() || message.length>3000 || privacy !== true || !subjects.includes(subject)) return res.status(400).json({ok:false});
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM || !process.env.CONTACT_TO) return res.status(503).json({ok:false});
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method:'POST', headers:{'Authorization':'Bearer '+process.env.RESEND_API_KEY,'Content-Type':'application/json'},
      signal:AbortSignal.timeout(12000),
      body:JSON.stringify({from:process.env.CONTACT_FROM,to:[process.env.CONTACT_TO],reply_to:email.trim(),subject:'Demande immobilière — '+subject,text:'Nom : '+name.trim()+'\nE-mail : '+email.trim()+'\nProjet : '+subject+'\nAccord pour être recontacté : oui\n\n'+message.trim()})
    });
    if (!response.ok) return res.status(502).json({ok:false});
    const result = await response.json();
    if (!result.id) return res.status(502).json({ok:false});
    return res.status(200).json({ok:true});
  } catch { return res.status(502).json({ok:false}); }
}
