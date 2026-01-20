// _worker.js nel repository GitHub del pannello admin Pages
const username = 'admin';
const password = 'Sparviero!1234@';

async function handleRequest(request) {
  const auth = request.headers.get('Authorization');

  if (!auth || !auth.startsWith('Basic ')) {
    return new Response('Accesso non autorizzato', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Area Riservata EcoRappTech"',
      },
    });
  }

  const encodedCredentials = auth.substring(6);
  // Decodifica Base64 per verificare
  const expectedCredentials = btoa(`${username}:${password}`); 

  if (encodedCredentials === expectedCredentials) {
    // Credenziali valide, prosegui con il sito Pages
    return await env.ASSETS.fetch(request);
  } else {
    return new Response('Credenziali non valide', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Area Riservata EcoRappTech"',
      },
    });
  }
}

export default {
  fetch: handleRequest,
};
