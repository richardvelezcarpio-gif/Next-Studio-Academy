import { NextResponse } from "next/server";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_ENV = process.env.PAYPAL_ENV || "sandbox";

const PAYPAL_BASE =
  PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

const PRODUCTS = {
  online: {
    name: "Next Studio Academy - Online en vivo",
    price: "197.00",
  },
  presencial: {
    name: "Next Studio Academy - Presencial",
    price: "297.00",
  },
} as const;

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

    const modality = body.modality as keyof typeof PRODUCTS;

    if (!modality || !PRODUCTS[modality]) {
      return NextResponse.json(
        {
          error: "Modalidad inválida.",
        },
        {
          status: 400,
        },
      );
    }

    const product = PRODUCTS[modality];
    const accessToken = await generateAccessToken();

    const response = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "PayPal-Request-Id": crypto.randomUUID(),
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: modality,
            description: product.name,
            amount: {
              currency_code: "USD",
              value: product.price,
            },
          },
        ],
      }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("PayPal create order error:", data);

      return NextResponse.json(
        {
          error: "No se pudo crear la orden.",
          details: data,
        },
        {
          status: response.status,
        },
      );
    }

    return NextResponse.json({
      id: data.id,
      status: data.status,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return NextResponse.json(
      {
        error: "Ocurrió un error creando la orden.",
      },
      {
        status: 500,
      },
    );
  }
}