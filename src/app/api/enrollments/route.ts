import { NextResponse } from "next/server";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_ENV = process.env.PAYPAL_ENV || "sandbox";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY;

const APPS_SCRIPT_WEBHOOK_URL =
  process.env.APPS_SCRIPT_WEBHOOK_URL;

const APPS_SCRIPT_SECRET =
  process.env.APPS_SCRIPT_SECRET;

const PAYPAL_BASE =
  PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

type EnrollmentBody = {
  orderID?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  ciudad?: string;
  experiencia?: string;
  objetivo?: string;
};

async function getPayPalAccessToken() {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    throw new Error("Faltan las credenciales de PayPal.");
  }

  const auth = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`,
  ).toString("base64");

  const response = await fetch(
    `${PAYPAL_BASE}/v1/oauth2/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
      cache: "no-store",
    },
  );

  const data = await response.json();

  if (!response.ok || !data.access_token) {
    console.error("PayPal token error:", data);
    throw new Error("No se pudo autenticar con PayPal.");
  }

  return data.access_token as string;
}

async function verifyPayPalOrder(orderID: string) {
  const accessToken = await getPayPalAccessToken();

  const response = await fetch(
    `${PAYPAL_BASE}/v2/checkout/orders/${encodeURIComponent(
      orderID,
    )}`,
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
    console.error("PayPal order verification error:", data);

    return {
      verified: false as const,
    };
  }

  const purchaseUnit = data.purchase_units?.[0];

  const modality =
    purchaseUnit?.reference_id === "online"
      ? "online"
      : purchaseUnit?.reference_id === "presencial"
        ? "presencial"
        : null;

  const amount = purchaseUnit?.amount?.value ?? null;
  const currency = purchaseUnit?.amount?.currency_code ?? null;

  const capture =
    purchaseUnit?.payments?.captures?.[0] ?? null;

  const isCompleted =
    data.status === "COMPLETED" &&
    (!capture || capture.status === "COMPLETED");

  if (
    !isCompleted ||
    !modality ||
    !amount ||
    currency !== "USD"
  ) {
    return {
      verified: false as const,
    };
  }

  const expectedAmount =
    modality === "online"
      ? "197.00"
      : "297.00";

  if (amount !== expectedAmount) {
    console.error(
      "PayPal amount mismatch:",
      amount,
      expectedAmount,
    );

    return {
      verified: false as const,
    };
  }

  return {
    verified: true as const,
    orderID: data.id as string,
    modality,
    amount,
    currency,
  };
}

function normalize(value: unknown) {
  return typeof value === "string"
    ? value.trim()
    : "";
}

export async function POST(request: Request) {
  try {
    if (!SUPABASE_URL || !SUPABASE_SECRET_KEY) {
      console.error(
        "Missing Supabase server environment variables.",
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "La base de datos no está configurada.",
        },
        {
          status: 500,
        },
      );
    }

    const body =
      (await request.json()) as EnrollmentBody;

    const orderID = normalize(body.orderID);
    const nombre = normalize(body.nombre);
    const apellido = normalize(body.apellido);
    const email = normalize(body.email).toLowerCase();
    const telefono = normalize(body.telefono);
    const ciudad = normalize(body.ciudad);
    const experiencia = normalize(body.experiencia);
    const objetivo = normalize(body.objetivo);

    if (
      !orderID ||
      !nombre ||
      !apellido ||
      !email ||
      !telefono
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Completa todos los campos obligatorios.",
        },
        {
          status: 400,
        },
      );
    }

    const emailLooksValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailLooksValid) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Ingresa un email válido.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * SECURITY:
     * Never trust modality or price from the browser.
     * Get them directly from PayPal.
     */
    const payment =
      await verifyPayPalOrder(orderID);

    if (!payment.verified) {
      return NextResponse.json(
        {
          success: false,
          error:
            "No pudimos verificar un pago completado para esta orden.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * Check whether this PayPal order was already registered.
     */
    const existingResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/enrollments?paypal_order_id=eq.${encodeURIComponent(
        payment.orderID,
      )}&select=id,paypal_order_id`,
      {
        method: "GET",
        headers: {
          apikey: SUPABASE_SECRET_KEY,
          Authorization: `Bearer ${SUPABASE_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!existingResponse.ok) {
      const errorText =
        await existingResponse.text();

      console.error(
        "Supabase duplicate check error:",
        errorText,
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "No pudimos revisar la inscripción.",
        },
        {
          status: 500,
        },
      );
    }

    const existing =
      (await existingResponse.json()) as Array<{
        id: string;
        paypal_order_id: string;
      }>;

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: true,
          alreadyRegistered: true,
          enrollmentID: existing[0].id,
          orderID: payment.orderID,
        },
        {
          status: 200,
        },
      );
    }

    /*
     * Insert enrollment.
     */
    const insertResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/enrollments`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_SECRET_KEY,
          Authorization: `Bearer ${SUPABASE_SECRET_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          paypal_order_id: payment.orderID,
          payment_status: "COMPLETED",
          modality: payment.modality,
          amount: payment.amount,
          currency: payment.currency,

          first_name: nombre,
          last_name: apellido,
          email,
          phone: telefono,

          city: ciudad || null,
          experience: experiencia || null,
          goal: objetivo || null,
        }),
        cache: "no-store",
      },
    );

    const insertData =
      await insertResponse.json();

    if (!insertResponse.ok) {
      console.error(
        "Supabase enrollment insert error:",
        insertData,
      );

      /*
       * PostgreSQL unique violation.
       * This protects us against simultaneous duplicate requests.
       */
      if (insertData?.code === "23505") {
        return NextResponse.json(
          {
            success: true,
            alreadyRegistered: true,
            orderID: payment.orderID,
          },
          {
            status: 200,
          },
        );
      }

      return NextResponse.json(
        {
          success: false,
          error:
            "No pudimos guardar la inscripción.",
        },
        {
          status: 500,
        },
      );
    }

   const enrollment =
  Array.isArray(insertData)
    ? insertData[0]
    : insertData;

/*
 * Send notification email through Google Apps Script.
 * Important: enrollment remains successful even if email fails.
 */
if (
  APPS_SCRIPT_WEBHOOK_URL &&
  APPS_SCRIPT_SECRET
) {
  try {
    const emailResponse = await fetch(
      APPS_SCRIPT_WEBHOOK_URL,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          secret:
            APPS_SCRIPT_SECRET,

          firstName:
            nombre,

          lastName:
            apellido,

          email,

          phone:
            telefono,

          city:
            ciudad || "",

          experience:
            experiencia || "",

          goal:
            objetivo || "",

          modality:
            payment.modality,

          amount:
            payment.amount,

          currency:
            payment.currency,

          paypalOrderID:
            payment.orderID,

          enrollmentID:
            enrollment?.id ?? "",

          courseName:
            "Curso Web con IA",

          courseStart:
            payment.modality === "online" ? "Viernes, 28 de agosto de 2026" : "Por confirmar al completar un grupo mínimo de 10 personas",

          coursePeriod:
            payment.modality === "online" ? "28 de agosto al 4 de septiembre de 2026" : "Por confirmar",

          courseSchedule:
            payment.modality === "online" ? "7:00 PM – 9:00 PM" : "Por confirmar",

          accessInstructions:
            payment.modality === "online" ? "Las instrucciones de acceso serán enviadas antes del inicio del curso." : "Te notificaremos cuando se confirme la fecha del grupo presencial en New York.",
        }),
      },
    );

    const emailText =
      await emailResponse.text();

    let emailResult;

    try {
      emailResult =
        JSON.parse(emailText);
    } catch {
      emailResult = {
        success: false,
        raw: emailText,
      };
    }

    if (!emailResponse.ok || !emailResult.success) {
      console.error(
        "Apps Script email error:",
        emailResult,
      );
    } else {
      console.log(
        "Enrollment notification email sent.",
      );
    }
  } catch (error) {
    console.error(
      "Apps Script notification error:",
      error,
    );
  }
}

return NextResponse.json(
  {
    success: true,
    alreadyRegistered: false,
    enrollmentID:
      enrollment?.id ?? null,
    orderID: payment.orderID,
    modality: payment.modality,
    amount: payment.amount,
    currency: payment.currency,
  },
  {
    status: 201,
  },
);
} catch (error) {
  console.error(
    "Enrollment API error:",
    error,
  );

  return NextResponse.json(
    {
      success: false,
      error:
        "Ocurrió un error procesando la inscripción.",
    },
    {
      status: 500,
    },
  );
}
}
