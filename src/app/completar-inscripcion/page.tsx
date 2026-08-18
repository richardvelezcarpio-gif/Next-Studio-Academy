"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type VerifiedPayment = {
  orderID: string;
  modality: "online" | "presencial";
  amount: string;
  currency: string;
  payerName?: string | null;
  payerEmail?: string | null;
};

type EnrollmentResult = {
  success: boolean;
  alreadyRegistered?: boolean;
  enrollmentID?: string | null;
  orderID?: string;
  modality?: "online" | "presencial";
  amount?: string;
  currency?: string;
  error?: string;
};

export default function CompletarInscripcion() {
  const [pageStatus, setPageStatus] = useState<
    "loading" | "ready" | "invalid" | "success"
  >("loading");

  const [sending, setSending] = useState(false);

  const [payment, setPayment] =
    useState<VerifiedPayment | null>(null);

  const [enrollment, setEnrollment] =
    useState<EnrollmentResult | null>(null);

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    ciudad: "",
    experiencia: "",
    objetivo: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    async function verifyOrder() {
      try {
        const params = new URLSearchParams(
          window.location.search,
        );

        const orderID = params.get("order");

        if (!orderID) {
          setPageStatus("invalid");
          return;
        }

        const response = await fetch(
          "/api/paypal/verify-order",
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

        const result = await response.json();

        if (
          !response.ok ||
          !result.verified
        ) {
          setPageStatus("invalid");
          return;
        }

        const verifiedPayment: VerifiedPayment = {
          orderID: result.orderID,
          modality: result.modality,
          amount: result.amount,
          currency: result.currency,
          payerName: result.payerName,
          payerEmail: result.payerEmail,
        };

        setPayment(verifiedPayment);

        if (result.payerName) {
          const parts =
            result.payerName
              .trim()
              .split(" ");

          setForm((current) => ({
            ...current,
            nombre:
              parts[0] ?? "",
            apellido:
              parts
                .slice(1)
                .join(" "),
            email:
              result.payerEmail ?? "",
          }));
        } else if (
          result.payerEmail
        ) {
          setForm((current) => ({
            ...current,
            email:
              result.payerEmail,
          }));
        }

        setPageStatus("ready");
      } catch (error) {
        console.error(
          "Verify enrollment error:",
          error,
        );

        setPageStatus("invalid");
      }
    }

    verifyOrder();
  }, []);

  function updateField(
    field: keyof typeof form,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!payment) {
      setPageStatus("invalid");
      return;
    }

    if (
      !form.nombre.trim() ||
      !form.apellido.trim() ||
      !form.email.trim() ||
      !form.telefono.trim()
    ) {
      setMessage(
        "Completa nombre, apellido, email y teléfono antes de continuar.",
      );

      return;
    }

    const emailLooksValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email.trim(),
      );

    if (!emailLooksValid) {
      setMessage(
        "Ingresa un email válido.",
      );

      return;
    }

    try {
      setSending(true);
      setMessage("");

      const response = await fetch(
        "/api/enrollments",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            orderID:
              payment.orderID,

            nombre:
              form.nombre.trim(),

            apellido:
              form.apellido.trim(),

            email:
              form.email.trim(),

            telefono:
              form.telefono.trim(),

            ciudad:
              form.ciudad.trim(),

            experiencia:
              form.experiencia,

            objetivo:
              form.objetivo.trim(),
          }),
        },
      );

      const result: EnrollmentResult =
        await response.json();

      if (
        !response.ok ||
        !result.success
      ) {
        setMessage(
          result.error ||
            "No pudimos guardar tu inscripción.",
        );

        setSending(false);
        return;
      }

      setEnrollment(result);

      setPageStatus("success");
      setSending(false);
    } catch (error) {
      console.error(
        "Enrollment submit error:",
        error,
      );

      setMessage(
        "Ocurrió un error guardando tu inscripción. Intenta nuevamente.",
      );

      setSending(false);
    }
  }

  if (pageStatus === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f8fd] px-6">
        <div className="w-full max-w-xl rounded-[36px] bg-white p-10 text-center shadow-2xl shadow-blue-900/10">
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
            Verificando tu inscripción...
          </h1>

          <p className="mt-3 text-slate-500">
            Estamos confirmando tu pago antes de continuar.
          </p>
        </div>
      </main>
    );
  }

  if (
    pageStatus === "invalid" ||
    !payment
  ) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f8fd] px-6">
        <div className="w-full max-w-2xl rounded-[36px] bg-white p-10 text-center shadow-2xl shadow-blue-900/10">
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
            Inscripción no verificada
          </p>

          <h1 className="mt-4 text-4xl font-black">
            No pudimos confirmar el pago.
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
            El formulario solamente se habilita cuando existe una orden
            válida y completada en PayPal.
          </p>

          <Link
            href="/curso-web-ia"
            className="mt-8 inline-flex rounded-full bg-blue-700 px-7 py-4 font-black text-white"
          >
            Volver al curso →
          </Link>
        </div>
      </main>
    );
  }

  if (
    pageStatus === "success"
  ) {
    const modalityLabel =
      payment.modality === "online"
        ? "Online en vivo"
        : "Presencial";

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f8fd] px-6 py-12">
        <div className="w-full max-w-3xl rounded-[40px] bg-white p-10 text-center shadow-2xl shadow-blue-900/10 md:p-14">
          <Image
            src="/next-studio-logo.png"
            alt="Next Studio"
            width={160}
            height={80}
            className="mx-auto h-16 w-auto object-contain"
            priority
          />

          <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-4xl font-black text-green-600">
            ✓
          </div>

          <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-green-700">
            Registro completado
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-5xl">
            ¡Tu inscripción está lista!
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Gracias,{" "}
            <strong>
              {form.nombre}
            </strong>
            . Tu información quedó registrada correctamente en Next Studio Academy.
          </p>

          {enrollment?.alreadyRegistered && (
            <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-blue-700">
              Esta orden ya estaba registrada. No se creó una inscripción duplicada.
            </div>
          )}

          <div className="mx-auto mt-8 max-w-xl rounded-[30px] bg-[#07152f] p-7 text-left text-white">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
              Resumen de inscripción
            </p>

            <div className="mt-6 space-y-4 text-blue-100">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <span>Estudiante</span>

                <strong className="text-right text-white">
                  {form.nombre}{" "}
                  {form.apellido}
                </strong>
              </div>

              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <span>Modalidad</span>

                <strong className="text-right text-white">
                  {modalityLabel}
                </strong>
              </div>

              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <span>Pago</span>

                <strong className="text-right text-white">
                  ${payment.amount}{" "}
                  {payment.currency}
                </strong>
              </div>

              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <span>Email</span>

                <strong className="break-all text-right text-white">
                  {form.email}
                </strong>
              </div>

              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <span>WhatsApp</span>

                <strong className="text-right text-white">
                  {form.telefono}
                </strong>
              </div>

              <div>
                <span className="text-sm">
                  Orden PayPal
                </span>

                <p className="mt-2 break-all font-mono text-sm font-black text-white">
                  {payment.orderID}
                </p>
              </div>
            </div>
          </div>

          {enrollment?.enrollmentID && (
            <div className="mx-auto mt-5 max-w-xl rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">
              ID interno de inscripción:{" "}
              <span className="font-mono font-bold text-slate-700">
                {enrollment.enrollmentID}
              </span>
            </div>
          )}

          <div className="mx-auto mt-8 max-w-xl rounded-[26px] border border-blue-100 bg-blue-50 p-6">
            <p className="font-black text-slate-950">
              ¿Qué sigue?
            </p>

            <p className="mt-2 leading-7 text-slate-600">
              Te enviaremos la información del próximo grupo, horario y detalles de acceso.
            </p>
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-blue-700 px-7 py-4 font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Ir a Next Studio Academy →
          </Link>
        </div>
      </main>
    );
  }

  const modalityLabel =
    payment.modality === "online"
      ? "Online en vivo"
      : "Presencial";

  return (
    <main className="min-h-screen bg-[#f5f8fd] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
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
                Registro del estudiante
              </p>
            </div>
          </div>

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-700">
            Pago verificado ✓
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-20">
          {/* PAYMENT SUMMARY */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              Último paso
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Completa tu

              <span className="block text-blue-700">
                inscripción.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Tu pago ya está confirmado. Ahora necesitamos tus datos para organizar tu participación en el curso.
            </p>

            <div className="mt-8 rounded-[30px] bg-[#07152f] p-7 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                Pago confirmado
              </p>

              <h2 className="mt-4 text-2xl font-black">
                {modalityLabel}
              </h2>

              <p className="mt-2 text-4xl font-black">
                ${payment.amount}
              </p>

              <p className="mt-1 text-sm font-semibold text-blue-300">
                {payment.currency}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-black uppercase tracking-widest text-blue-300">
                  Orden PayPal
                </p>

                <p className="mt-2 break-all font-mono text-sm text-blue-100">
                  {payment.orderID}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-[24px] border border-green-100 bg-green-50 p-5">
              <p className="font-black text-green-800">
                ✓ Tu pago ya está realizado.
              </p>

              <p className="mt-2 text-sm leading-6 text-green-700">
                Completar este formulario no generará ningún cargo adicional.
              </p>
            </div>
          </div>

          {/* STUDENT FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[38px] border border-white bg-white p-7 shadow-2xl shadow-blue-900/10 md:p-10"
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              Datos del estudiante
            </p>

            <h2 className="mt-3 text-3xl font-black">
              ¿Quién tomará el curso?
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              Utilizaremos estos datos para organizar las clases y comunicarnos contigo.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Nombre *
                </label>

                <input
                  required
                  value={form.nombre}
                  onChange={(event) =>
                    updateField(
                      "nombre",
                      event.target.value,
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="Nombre"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Apellido *
                </label>

                <input
                  required
                  value={form.apellido}
                  onChange={(event) =>
                    updateField(
                      "apellido",
                      event.target.value,
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="Apellido"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Email *
              </label>

              <input
                required
                type="email"
                value={form.email}
                onChange={(event) =>
                  updateField(
                    "email",
                    event.target.value,
                  )
                }
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="nombre@email.com"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Teléfono / WhatsApp *
              </label>

              <input
                required
                type="tel"
                value={form.telefono}
                onChange={(event) =>
                  updateField(
                    "telefono",
                    event.target.value,
                  )
                }
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="+1 000 000 0000"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Ciudad
              </label>

              <input
                value={form.ciudad}
                onChange={(event) =>
                  updateField(
                    "ciudad",
                    event.target.value,
                  )
                }
                className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="Ciudad / Estado / País"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                ¿Cuál es tu experiencia actual?
              </label>

              <select
                value={form.experiencia}
                onChange={(event) =>
                  updateField(
                    "experiencia",
                    event.target.value,
                  )
                }
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">
                  Selecciona una opción
                </option>

                <option value="principiante">
                  Estoy comenzando desde cero
                </option>

                <option value="basica">
                  Tengo conocimientos básicos
                </option>

                <option value="negocio">
                  Tengo un negocio y quiero crear mi web
                </option>

                <option value="servicios">
                  Quiero ofrecer páginas web como servicio
                </option>
              </select>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                ¿Qué te gustaría lograr con este curso?
              </label>

              <textarea
                value={form.objetivo}
                onChange={(event) =>
                  updateField(
                    "objetivo",
                    event.target.value,
                  )
                }
                rows={4}
                className="w-full resize-none rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="Cuéntanos brevemente..."
              />
            </div>

            {message && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-7 w-full rounded-2xl bg-blue-700 px-6 py-4 text-lg font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending
                ? "Guardando inscripción..."
                : "Completar mi inscripción →"}
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Tu pago ya fue procesado. Este formulario no realizará ningún cargo adicional.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}