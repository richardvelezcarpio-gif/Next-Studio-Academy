"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type PaymentData = {
  orderID: string;
  modality: "online" | "presencial";
  amount: string;
  currency: string;
  payerName?: string | null;
  payerEmail?: string | null;
};

export default function InscripcionConfirmada() {
  const [status, setStatus] = useState<
    "loading" | "confirmed" | "invalid"
  >("loading");

  const [payment, setPayment] =
    useState<PaymentData | null>(null);

  useEffect(() => {
    async function verifyPayment() {
      try {
        const params = new URLSearchParams(
          window.location.search,
        );

        const orderID = params.get("order");

        if (!orderID) {
          setStatus("invalid");
          return;
        }

        const response = await fetch(
          "/api/paypal/verify-order",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID,
            }),
          },
        );

        const result = await response.json();

        if (
          !response.ok ||
          !result.verified
        ) {
          setStatus("invalid");
          return;
        }

        setPayment({
          orderID: result.orderID,
          modality: result.modality,
          amount: result.amount,
          currency: result.currency,
          payerName: result.payerName,
          payerEmail: result.payerEmail,
        });

        setStatus("confirmed");
      } catch (error) {
        console.error(
          "Payment verification error:",
          error,
        );

        setStatus("invalid");
      }
    }

    verifyPayment();
  }, []);

  const modalityLabel =
    payment?.modality === "presencial"
      ? "Presencial"
      : "Online en vivo";

  if (status === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f8fd] px-6">
        <div className="w-full max-w-xl rounded-[36px] border border-white bg-white p-10 text-center shadow-2xl shadow-blue-900/10">
          <Image
            src="/next-studio-logo.png"
            alt="Next Studio"
            width={160}
            height={80}
            className="mx-auto h-16 w-auto object-contain"
            priority
          />

          <div className="mx-auto mt-8 h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-700" />

          <h1 className="mt-7 text-2xl font-black">
            Confirmando tu pago...
          </h1>

          <p className="mt-3 text-slate-500">
            Estamos verificando tu inscripción de forma segura.
          </p>
        </div>
      </main>
    );
  }

  if (status === "invalid" || !payment) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f8fd] px-6">
        <div className="w-full max-w-2xl rounded-[36px] border border-white bg-white p-8 text-center shadow-2xl shadow-blue-900/10 md:p-12">
          <Image
            src="/next-studio-logo.png"
            alt="Next Studio"
            width={160}
            height={80}
            className="mx-auto h-16 w-auto object-contain"
            priority
          />

          <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-4xl">
            !
          </div>

          <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-amber-700">
            Pago no verificado
          </p>

          <h1 className="mt-4 text-4xl font-black">
            No pudimos confirmar esta inscripción.
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
            Esta página solamente muestra una inscripción confirmada
            después de verificar el pago directamente con PayPal.
          </p>

          <Link
            href="/curso-web-ia"
            className="mt-8 inline-flex rounded-full bg-blue-700 px-7 py-4 font-black text-white transition hover:bg-blue-800"
          >
            Volver al curso →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f8fd] text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-4">
            <Image
              src="/next-studio-logo.png"
              alt="Next Studio"
              width={150}
              height={80}
              className="h-14 w-auto object-contain"
              priority
            />

            <div className="hidden border-l border-slate-200 pl-4 sm:block">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                Academy
              </p>

              <p className="text-sm text-slate-500">
                Formación Digital
              </p>
            </div>
          </div>

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-700">
            Pago confirmado ✓
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="rounded-[40px] border border-white bg-white/90 p-8 shadow-2xl shadow-blue-900/10 backdrop-blur md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-4xl font-black text-green-600">
                ✓
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-green-700">
                ¡Tu inscripción está confirmada!
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                {payment.payerName
                  ? `¡Bienvenido, ${payment.payerName}!`
                  : "¡Bienvenido!"}

                <span className="mt-2 block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                  Next Studio Academy
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Hemos recibido tu pago e inscripción para el{" "}
                <strong className="text-slate-900">
                  Curso Web con IA.
                </strong>
                {" "}Recibirás las instrucciones de acceso antes del inicio del curso.
              </p>
            </div>

            {/* PAYMENT SUMMARY */}
            <div className="mx-auto mt-12 max-w-4xl rounded-[32px] border border-green-100 bg-green-50 p-7 md:p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-green-700">
                    Modalidad
                  </p>

                  <p className="mt-2 text-xl font-black">
                    {modalityLabel}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-green-700">
                    Pago
                  </p>

                  <p className="mt-2 text-xl font-black">
                    ${payment.amount} {payment.currency}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-green-700">
                    Estado
                  </p>

                  <p className="mt-2 text-xl font-black">
                    Confirmado ✓
                  </p>
                </div>
              </div>

              <div className="mt-7 border-t border-green-200 pt-6">
                <p className="text-xs font-black uppercase tracking-widest text-green-700">
                  Número de orden PayPal
                </p>

                <p className="mt-2 break-all font-mono text-lg font-black text-slate-900">
                  {payment.orderID}
                </p>

                {payment.payerEmail && (
                  <p className="mt-3 text-sm text-slate-600">
                    Pago asociado a:{" "}
                    <strong>{payment.payerEmail}</strong>
                  </p>
                )}
              </div>
            </div>

            {/* COURSE INFO */}
            <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-3">
              <div className="rounded-[28px] border border-slate-200 bg-[#f9fbff] p-6 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                  Curso
                </p>

                <p className="mt-3 text-lg font-black">
                  Web + IA
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-[#f9fbff] p-6 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                  Duración
                </p>

                <p className="mt-3 text-lg font-black">
                  8 clases · 16 horas
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-[#f9fbff] p-6 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                  Proyecto
                </p>

                <p className="mt-3 text-lg font-black">
                  Página publicada
                </p>
              </div>
            </div>

            {/* NEXT STEPS */}
            <div className="mx-auto mt-10 max-w-4xl rounded-[32px] bg-[#07152f] p-8 text-white md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Próximos pasos
              </p>

              <div className="mt-7 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 font-black text-cyan-300">
                    01
                  </div>

                  <div>
                    <h3 className="font-black">
                      Completa tus datos de estudiante
                    </h3>

                    <p className="mt-1 leading-7 text-blue-100">
                      En el siguiente paso registraremos tu teléfono y
                      la información necesaria para el curso.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 font-black text-cyan-300">
                    02
                  </div>

                  <div>
                    <h3 className="font-black">
                      Recibe la información del grupo
                    </h3>

                    <p className="mt-1 leading-7 text-blue-100">
                      Las instrucciones de acceso serán enviadas antes del
                      inicio del curso.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 font-black text-cyan-300">
                    03
                  </div>

                  <div>
                    <h3 className="font-black">
                      Comienza tu proyecto
                    </h3>

                    <p className="mt-1 leading-7 text-blue-100">
                      Llegarás a la primera clase preparado para
                      construir desde el primer día.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-blue-100 bg-blue-50 p-6 text-center">
              <p className="text-lg font-black">
                Guarda tu número de orden.
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                Esta página verificó tu pago directamente con PayPal y
                funciona como confirmación de tu inscripción.
              </p>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/curso-web-ia"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-black text-slate-800 transition hover:bg-slate-50"
              >
                Ver información del curso
              </Link>

              <Link
  href={`/completar-inscripcion?order=${encodeURIComponent(
    payment.orderID,
  )}`}
  className="rounded-full bg-blue-700 px-7 py-4 text-center font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
>
  Completar mi inscripción →
</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row lg:px-10">
          <p>Next Studio Academy</p>
          <p>Building Digital Businesses</p>
        </div>
      </footer>
    </main>
  );
}
