export async function onRequestPost(context) {
  const formData = await context.request.formData();

  // Qui in futuro collegheremo email, CRM, archiviazione GDPR
  console.log("Nuova richiesta ricevuta", Object.fromEntries(formData));

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/"
    }
  });
}
