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
          verified: false,
          error: "Falta el número de orden.",
        },
        {
          status: 400,
        },
      );
    }

    const accessToken = await generateAccessToken();

    const response = await fetch(
      `${PAYPAL_BASE}/v2/checkout/orders/${encodeURIComponent(orderID)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("PayPal verify order error:", data);

      return NextResponse.json(
        {
          verified: false,
          error: "No pudimos verificar esta orden.",
        },
        {
          status: response.status,
        },
      );
    }

    const purchaseUnit = data.purchase_units?.[0];

    const modality =
      purchaseUnit?.reference_id === "presencial"
        ? "presencial"
        : purchaseUnit?.reference_id === "online"
          ? "online"
          : null;

    const amount = purchaseUnit?.amount?.value ?? null;
    const currency = purchaseUnit?.amount?.currency_code ?? null;

    const capture =
      purchaseUnit?.payments?.captures?.[0] ?? null;

    const completed =
      data.status === "COMPLETED" &&
      (!capture || capture.status === "COMPLETED");

    const expectedAmount = modality === "online" ? "197.00" : modality === "presencial" ? "297.00" : null;

    if (!completed || !modality || !expectedAmount || amount !== expectedAmount || currency !== "USD") {
      return NextResponse.json({
        verified: false,
        status: data.status ?? null,
      });
    }

    return NextResponse.json({
      verified: true,
      orderID: data.id,
      status: data.status,
      modality,
      amount,
      currency,
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
    console.error("Verify PayPal order error:", error);

    return NextResponse.json(
      {
        verified: false,
        error: "Ocurrió un error verificando el pago.",
      },
      {
        status: 500,
      },
    );
  }
}
