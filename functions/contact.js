export async function onRequestPost({ request }) {
  try {
    const data = await request.formData();

    const tipo = data.get("tipo");
    const nome = data.get("nome");
    const email = data.get("email");
    const messaggio = data.get("messaggio");

    return new Response(
      JSON.stringify({
        status: "ok",
        tipo,
        nome,
        email,
        messaggio
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (err) {
    return new Response(
      "ERRORE: " + err.message,
      { status: 500 }
    );
  }
}
