// Newsletter subscribe edge function.
// Routes the email to Brevo (via the connector gateway) when BREVO_API_KEY is set.
// Falls back to a clear error so the UI can prompt the owner to connect Brevo.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return json({ error: "Please enter a valid email." }, 400);
    }

    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    const brevoKey = Deno.env.get("BREVO_API_KEY");

    if (!lovableKey || !brevoKey) {
      return json(
        { error: "Newsletter is not configured yet. Please connect Brevo in the project." },
        503,
      );
    }

    const res = await fetch("https://connector-gateway.lovable.dev/brevo/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": brevoKey,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        attributes: { SOURCE: "pustikabooks.in homepage" },
      }),
    });

    if (!res.ok && res.status !== 204) {
      const body = await res.text();
      // Brevo returns 400 with code "duplicate_parameter" when contact already exists — treat as success.
      if (body.includes("duplicate_parameter") || body.includes("Contact already exist")) {
        return json({ ok: true, duplicate: true });
      }
      return json({ error: `Brevo error (${res.status})` }, 500);
    }

    return json({ ok: true });
  } catch (e) {
    return json({ error: (e as Error).message ?? "Unexpected error" }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}