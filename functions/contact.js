export async function onRequestPost({ request }) {
  return new Response("OK", {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
}
