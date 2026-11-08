const ENDPOINT = import.meta.env.VITE_WISHES_ENDPOINT;

export async function sendWish({ name, text }) {
  if (!ENDPOINT) throw new Error("VITE_WISHES_ENDPOINT is not set");
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name, message: text }),
  });
  if (!res.ok) throw new Error("Request failed");
}