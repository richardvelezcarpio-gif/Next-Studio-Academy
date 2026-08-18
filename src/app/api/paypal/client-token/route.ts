import { NextResponse } from "next/server";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_ENV = process.env.PAYPAL_ENV || "sandbox";

const PAYPAL_BASE =
  PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function generateAccessToken() {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    throw new Error("Faltan las credenciales de PayPal.");
  }

  const auth = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`,
  ).toString("base64");

  const response = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("PayPal access token error:", data);
    throw new Error("No se pudo autenticar con PayPal.");
  }

  return data.access_token as string;
}

export async function GET() {
  try {
    const accessToken = await generateAccessToken();

    const response = await fetch(
      `${PAYPAL_BASE}/v1/identity/generate-token`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "Accept-Language": "en_US",
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("PayPal client token error:", data);

      return NextResponse.json(
        {
          error: "No se pudo generar el client token.",
        },
        {
          status: response.status,
        },
      );
    }

    return NextResponse.json({
      clientToken: data.client_token,
    });
  } catch (error) {
    console.error("Client token error:", error);

    return NextResponse.json(
      {
        error: "Ocurrió un error generando el client token.",
      },
      {
        status: 500,
      },
    );
  }
}