"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Modality = "online" | "presencial";

type PayPalCheckoutProps = {
  modality: Modality;
};

type CardFieldsInstance = {
  isEligible: () => boolean;

  NameField: (options?: {
    placeholder?: string;
  }) => {
    render: (selector: string) => Promise<void>;
  };

  NumberField: (options?: {
    placeholder?: string;
  }) => {
    render: (selector: string) => Promise<void>;
  };

  ExpiryField: (options?: {
    placeholder?: string;
  }) => {
    render: (selector: string) => Promise<void>;
  };

  CVVField: (options?: {
    placeholder?: string;
  }) => {
    render: (selector: string) => Promise<void>;
  };

  submit: () => Promise<void>;
};

declare global {
  interface Window {
    paypal?: {
      CardFields: (options: {
        createOrder: () => Promise<string>;

        onApprove: (data: {
          orderID: string;
          liabilityShift?: string;
        }) => Promise<void>;

        onError?: (error: unknown) => void;

        style?: Record<string, unknown>;
      }) => CardFieldsInstance;
    };
  }
}

export default function PayPalCheckout({
  modality,
}: PayPalCheckoutProps) {
  const router = useRouter();

  const price =
    modality === "online"
      ? "197.00"
      : "297.00";

  const clientId =
    process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const cardFieldsRef =
    useRef<CardFieldsInstance | null>(null);

  const [clientToken, setClientToken] =
    useState("");

  const [sdkReady, setSdkReady] =
    useState(false);

  const [cardReady, setCardReady] =
    useState(false);

  const [status, setStatus] = useState<
    "idle" |
    "processing" |
    "success" |
    "error"
  >("idle");

  const [message, setMessage] =
    useState("");

  /*
   * 1. Get temporary PayPal client token
   */
  useEffect(() => {
    async function getClientToken() {
      try {
        const response = await fetch(
          "/api/paypal/client-token",
          {
            method: "GET",
            cache: "no-store",
          },
        );

        const data = await response.json();

        if (
          !response.ok ||
          !data.clientToken
        ) {
          throw new Error(
            "Client token missing",
          );
        }

        setClientToken(
          data.clientToken,
        );
      } catch (error) {
        console.error(
          "Client token error:",
          error,
        );

        setStatus("error");

        setMessage(
          "No pudimos preparar el pago seguro.",
        );
      }
    }

    getClientToken();
  }, []);

  /*
   * 2. Create PayPal order
   */
  async function createOrder() {
    const response = await fetch(
      "/api/paypal/create-order",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          modality,
        }),
      },
    );

    const result =
      await response.json();

    if (
      !response.ok ||
      !result.id
    ) {
      console.error(
        "Create order failed:",
        result,
      );

      throw new Error(
        result?.error ||
          "No se pudo crear la orden.",
      );
    }

    return result.id as string;
  }

  /*
   * 3. Capture approved order
   */
  async function captureOrder(
    orderID: string,
  ) {
    setStatus("processing");

    setMessage(
      "Confirmando tu pago...",
    );

    const response = await fetch(
      "/api/paypal/capture-order",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          orderID,
        }),
      },
    );

    const result =
      await response.json();

    if (
      !response.ok ||
      result.status !== "COMPLETED"
    ) {
      console.error(
        "Capture failed:",
        result,
      );

      setStatus("error");

      setMessage(
        "No pudimos confirmar el pago.",
      );

      return;
    }

    setStatus("success");

    setMessage(
      `Pago completado correctamente. Orden: ${result.id}`,
    );

    const params = new URLSearchParams({
      order: result.id,
      modalidad: modality,
      precio: price,
    });

    router.push(
      `/inscripcion-confirmada?${params.toString()}`
    );
  }

  /*
   * 4. Initialize PayPal Card Fields
   */
  useEffect(() => {
    if (!sdkReady) {
      return;
    }

    if (
      !window.paypal?.CardFields
    ) {
      console.error(
        "paypal.CardFields not available",
      );

      setStatus("error");

      setMessage(
        "PayPal Card Fields no está disponible.",
      );

      return;
    }

    try {
      const cardFields =
        window.paypal.CardFields({
          createOrder,

          async onApprove(data) {
            await captureOrder(
              data.orderID,
            );
          },

          onError(error) {
            console.error(
              "Card Fields error:",
              error,
            );

            setStatus("error");

            setMessage(
              "Ocurrió un problema procesando la tarjeta.",
            );
          },

          style: {
            input: {
              "font-size": "16px",
              "font-family":
                "Arial, sans-serif",
              color: "#0f172a",
            },

            ".invalid": {
              color: "#dc2626",
            },

            ".valid": {
              color: "#0f172a",
            },
          },
        });

      if (
        !cardFields.isEligible()
      ) {
        console.warn(
          "PayPal Card Fields not eligible",
        );

        setStatus("error");

        setMessage(
          "El pago directo con tarjeta no está disponible para esta operación.",
        );

        return;
      }

      cardFieldsRef.current =
        cardFields;

      async function render() {
        try {
          await cardFields
            .NameField({
              placeholder:
                "Nombre como aparece en la tarjeta",
            })
            .render(
              "#card-name-field",
            );

          await cardFields
            .NumberField({
              placeholder:
                "Número de tarjeta",
            })
            .render(
              "#card-number-field",
            );

          await cardFields
            .ExpiryField({
              placeholder:
                "MM/AA",
            })
            .render(
              "#card-expiry-field",
            );

          await cardFields
            .CVVField({
              placeholder:
                "CVV",
            })
            .render(
              "#card-cvv-field",
            );

          setCardReady(true);

          setStatus("idle");

          setMessage("");
        } catch (error) {
          console.error(
            "Card Fields render error:",
            error,
          );

          setStatus("error");

          setMessage(
            "No pudimos cargar los campos de tarjeta.",
          );
        }
      }

      render();
    } catch (error) {
      console.error(
        "PayPal initialization error:",
        error,
      );

      setStatus("error");

      setMessage(
        "No pudimos iniciar PayPal.",
      );
    }
  }, [sdkReady, modality]);

  /*
   * 5. Submit card
   */
  async function handlePayment() {
    if (
      !cardFieldsRef.current
    ) {
      setStatus("error");

      setMessage(
        "El formulario todavía no está listo.",
      );

      return;
    }

    try {
      setStatus("processing");

      setMessage(
        "Procesando tu tarjeta...",
      );

      await cardFieldsRef.current.submit();
    } catch (error) {
      console.error(
        "Card submit error:",
        error,
      );

      setStatus("error");

      setMessage(
        "Revisa los datos de la tarjeta e intenta nuevamente.",
      );
    }
  }

  if (!clientId) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-bold text-red-700">
        Falta configurar NEXT_PUBLIC_PAYPAL_CLIENT_ID.
      </div>
    );
  }

  return (
    <div className="space-y-5">

      {clientToken && (
        <Script
          id={`paypal-sdk-${modality}`}

          src={`https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
            clientId,
          )}&currency=USD&intent=capture&components=buttons,card-fields`}

          data-client-token={
            clientToken
          }

          strategy="afterInteractive"

          onLoad={() => {
            console.log(
              "PayPal SDK loaded",
            );

            setSdkReady(true);
          }}

          onError={(error) => {
            console.error(
              "PayPal SDK load error:",
              error,
            );

            setStatus("error");

            setMessage(
              "No pudimos cargar PayPal.",
            );
          }}
        />
      )}

      <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">

        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-600">
          Pago seguro
        </p>

        <h3 className="mt-2 text-2xl font-black text-slate-950">
          Tarjeta de débito o crédito
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Paga directamente con tu
          tarjeta. No necesitas iniciar
          sesión ni crear una cuenta
          PayPal.
        </p>

        {!cardReady && (
          <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-center text-sm font-semibold text-slate-500">
            Cargando pago seguro...
          </div>
        )}

        <div className="mt-6 space-y-4">

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Nombre en la tarjeta
            </label>

            <div
              id="card-name-field"
              className="h-[52px] overflow-hidden rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Número de tarjeta
            </label>

            <div
              id="card-number-field"
              className="h-[52px] overflow-hidden rounded-xl border border-slate-300 bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Vencimiento
              </label>

              <div
                id="card-expiry-field"
                className="h-[52px] overflow-hidden rounded-xl border border-slate-300 bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                CVV
              </label>

              <div
                id="card-cvv-field"
                className="h-[52px] overflow-hidden rounded-xl border border-slate-300 bg-white"
              />
            </div>

          </div>
        </div>

        <button
          type="button"
          onClick={handlePayment}
          disabled={
            !cardReady ||
            status === "processing"
          }
          className="mt-6 w-full rounded-2xl bg-blue-700 px-6 py-4 text-lg font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "processing"
            ? "Procesando..."
            : `Pagar $${price}`}
        </button>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
          🔒 Procesado de forma
          segura por PayPal
        </div>
      </div>

      {message && (
        <div
          className={`rounded-2xl p-4 text-sm font-semibold ${
            status === "success"
              ? "border border-green-200 bg-green-50 text-green-700"
              : status === "error"
                ? "border border-red-200 bg-red-50 text-red-700"
                : "border border-blue-100 bg-blue-50 text-blue-700"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
