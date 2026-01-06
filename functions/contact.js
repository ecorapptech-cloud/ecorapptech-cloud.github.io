export async function onRequestPost(context) {
  const data = await context.request.formData();

  const tipo = data.get("tipo");
  const nome = data.get("nome");
  const email = data.get("email");
  const telefono = data.get("telefono");
  const servizio = data.get("servizio");
  const fascia = data.get("fascia");
  const messaggio = data.get("messaggio");

  const testo = `
NUOVA RICHIESTA ECO RAPP TECH

Tipologia: ${tipo}
Nome: ${nome}
Email: ${email}
Telefono: ${telefono}
Servizio richiesto: ${servizio}
Fascia oraria: ${fascia}

Messaggio:
${messaggio}
`;

  // EMAIL AZIENDA
  await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: "ecorapptech@gmail.com" }] }],
      from: {
        email: "noreply@ecorapptech.pages.dev",
        name: "EcoRappTech"
      },
      subject: "Nuova richiesta dal sito EcoRappTech",
      content: [{ type: "text/plain", value: testo }]
    })
  });

  // EMAIL DI CONFERMA UTENTE
  if (email) {
    await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        personalizations: [{ to: [{ email }] }],
        from: {
          email: "noreply@ecorapptech.pages.dev",
          name: "EcoRappTech"
        },
        subject: "Conferma ricezione richiesta – EcoRappTech",
        content: [{
          type: "text/plain",
          value: `Gentile ${nome},

abbiamo ricevuto correttamente la sua richiesta.
Un operatore EcoRappTech la contatterà nel più breve tempo possibile.

EcoRappTech`
        }]
      })
    });
  }

  return Response.redirect("/", 303);
}
