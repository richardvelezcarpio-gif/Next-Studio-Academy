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
    console.error("PayPal token error:", data);
    throw new Error("No se pudo autenticar con PayPal.");
  }

  return data.access_token as string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const orderID = body.orderID;

    if (!orderID || typeof orderID !== "string") {
      return NextResponse.json(
        {
          error: "Falta el orderID.",
        },
        {
          status: 400,
        },
      );
    }

    const accessToken = await generateAccessToken();

    const response = await fetch(
      `${PAYPAL_BASE}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("PayPal capture error:", data);

      return NextResponse.json(
        {
          error: "No se pudo capturar el pago.",
          details: data,
        },
        {
          status: response.status,
        },
      );
    }

    const capture =
      data.purchase_units?.[0]?.payments?.captures?.[0];

    return NextResponse.json({
      id: data.id,
      status: data.status,
      captureID: capture?.id ?? null,
      captureStatus: capture?.status ?? null,
      payerEmail: data.payer?.email_address ?? null,
      payerName:
        data.payer?.name?.given_name ||
        data.payer?.name?.surname
          ? `${data.payer?.name?.given_name ?? ""} ${
              data.payer?.name?.surname ?? ""
            }`.trim()
          : null,
    });
  } catch (error) {
    console.error("Capture order error:", error);

    return NextResponse.json(
      {
        error: "Ocurrió un error capturando el pago.",
      },
      {
        status: 500,
      },
    );
  }
}