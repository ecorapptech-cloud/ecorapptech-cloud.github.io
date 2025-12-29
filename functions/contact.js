export async function onRequestPost(context) {
  const formData = await context.request.formData();

  const data = Object.fromEntries(formData);

  // Log tecnico (temporaneo)
  console.log("Nuova richiesta ricevuta", data);

  return Response.redirect("/", 303);
}
