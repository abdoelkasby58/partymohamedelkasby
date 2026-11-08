const EMAILJS = {
  serviceId: "service_9ydn4pk",
  templateId: "template_6hbnjmr",
  publicKey: "WhltTzKJyOP-SmJ4g",
};

export async function sendWish({ name, text }) {
  const res = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: EMAILJS.serviceId,
        template_id: EMAILJS.templateId,
        user_id: EMAILJS.publicKey,
        template_params: {
          name,
          message: text,
        },
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to send wish");
  }
}