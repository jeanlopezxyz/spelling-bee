// Cloudflare Pages Function — proxy de reconocimiento de voz (ElevenLabs Scribe).
// La API key vive como secret del servidor (env.ELEVENLABS_API_KEY), nunca en el cliente.
export async function onRequestPost(context) {
  const { request, env } = context;
  const key = env.ELEVENLABS_API_KEY;
  if (!key) {
    return json({ error: "server_key_missing" }, 500);
  }
  try {
    const inForm = await request.formData();
    const audio = inForm.get("file");
    if (!audio) return json({ error: "no_audio" }, 400);

    const out = new FormData();
    out.append("file", audio, "rec.webm");
    out.append("model_id", "scribe_v1");
    out.append("language_code", "eng");

    const res = await fetch("https://api.elevenlabs.io/v1/speech-to-text", {
      method: "POST",
      headers: { "xi-api-key": key },
      body: out,
    });

    const body = await res.text();
    return new Response(body, {
      status: res.status,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  } catch (e) {
    return json({ error: "proxy_failed", detail: String(e) }, 502);
  }
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
