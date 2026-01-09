export async function onRequestPost({ request }) {
  const data = await request.formData();

  return new Response(
    JSON.stringify({
      status: "ok",
      ricevuto: true
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
