"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PayPalCheckout from "@/components/PayPalCheckout";

type Modality = "online" | "presencial";

const lessons = [
  {
    number: "01",
    title: "De cero a creador digital",
    text: "Entiende cómo funciona una página web y cómo se conecta todo el proceso.",
  },
  {
    number: "02",
    title: "Domina la Inteligencia Artificial",
    text: "Aprende a crear prompts claros, corregir resultados y dirigir mejor la IA.",
  },
  {
    number: "03",
    title: "Construye tu primera página",
    text: "Pasa de la idea al navegador usando Visual Studio Code e inteligencia artificial.",
  },
  {
    number: "04",
    title: "Diseño Web Premium",
    text: "Convierte una página funcional en una experiencia visual profesional.",
  },
  {
    number: "05",
    title: "Marca, imágenes y contenido",
    text: "Crea identidad visual, mensajes, imágenes y llamados a la acción.",
  },
  {
    number: "06",
    title: "Funciones para negocios",
    text: "WhatsApp, formularios, llamadas, mapas, QR y acciones reales.",
  },
  {
    number: "07",
    title: "Publica tu página",
    text: "GitHub, Vercel, dominio, publicación y revisión final.",
  },
  {
    number: "08",
    title: "Convierte tu habilidad en dinero",
    text: "Aprende a presentar, vender, cobrar y entregar proyectos profesionalmente.",
  },
];

const benefits = [
  "Crear una página web profesional desde cero",
  "Usar inteligencia artificial como asistente de construcción",
  "Trabajar con Visual Studio Code sin ser programador tradicional",
  "Diseñar páginas que se vean modernas y premium",
  "Agregar funciones reales para negocios",
  "Publicar tu proyecto en Internet",
  "Conectar un dominio profesional",
  "Convertir esta habilidad en un servicio que puedes vender",
];

const forWho = [
  "Emprendedores que quieren crear su propia página",
  "Personas que quieren aprender una habilidad digital nueva",
  "Dueños de pequeños negocios",
  "Personas interesadas en trabajar con inteligencia artificial",
  "Freelancers que quieren ofrecer servicios web",
  "Creadores que quieren convertir ideas en productos digitales",
];

export default function CursoWebIA() {
  const [selectedModality, setSelectedModality] =
    useState<Modality>("online");

  function chooseModality(modality: Modality) {
    setSelectedModality(modality);

    setTimeout(() => {
      document
        .getElementById("inscripcion")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const selectedPrice =
    selectedModality === "online" ? "$1" : "$297";

  const selectedTitle =
    selectedModality === "online"
      ? "Online en vivo"
      : "Presencial";

  return (
    <main className="min-h-screen bg-[#f7faff] text-slate-950">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
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

          <a
            href="#precios"
            className="rounded-full bg-blue-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
          >
            Quiero inscribirme
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-800 shadow-sm">
              Curso profesional · Online y presencial
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Crea tu Página Web

              <span className="mt-2 block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                con Inteligencia Artificial
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Aprende paso a paso cómo convertir una idea en una página web
              profesional, publicarla en Internet y utilizar esta nueva
              habilidad para tu negocio o para ofrecer servicios digitales.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "8 clases",
                "16 horas",
                "Proyecto real",
                "Nivel inicial",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#precios"
                className="rounded-full bg-blue-700 px-8 py-4 text-lg font-black text-white shadow-xl shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Reservar mi lugar →
              </a>

              <a
                href="#programa"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-black text-slate-800 transition hover:bg-slate-50"
              >
                Ver programa
              </a>
            </div>

            <p className="mt-5 text-sm font-semibold text-slate-400">
              No necesitas experiencia previa en programación.
            </p>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[36px] border border-white bg-white/80 p-3 shadow-2xl shadow-blue-900/10 backdrop-blur">
              <div className="rounded-[30px] bg-gradient-to-br from-[#07152f] via-[#0c2d66] to-[#1267dc] p-8 text-white md:p-10">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                  Tu resultado final
                </p>

                <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
                  Termina con una página profesional publicada.
                </h2>

                <p className="mt-5 leading-7 text-blue-100">
                  No es un curso para quedarte solamente con teoría.
                  Construyes un proyecto real durante las clases.
                </p>

                <div className="mt-10 space-y-3">
                  {[
                    "Página funcionando",
                    "Diseño responsive",
                    "Funciones reales",
                    "Publicación online",
                    "Base para tu portafolio",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-blue-700">
                        ✓
                      </span>

                      <span className="font-semibold text-blue-50">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              El objetivo
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Aprende construyendo.

              <span className="block text-blue-700">
                No memorizando.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Vamos a utilizar herramientas reales, inteligencia artificial
              y un proceso práctico para que entiendas cómo llevar una idea
              desde cero hasta una página publicada.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Idea", "Definimos qué quieres construir."],
              ["02", "IA", "Aprendes a dirigir las herramientas."],
              [
                "03",
                "Construcción",
                "Creamos tu proyecto paso a paso.",
              ],
              [
                "04",
                "Publicación",
                "Lo ponemos frente al mundo.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-black text-blue-600">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-2 leading-7 text-slate-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              Lo que vas a aprender
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Una habilidad digital completa.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {benefits.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[26px] border border-slate-200 bg-[#f9fbff] p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 font-black text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="pt-2 font-bold leading-7 text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              ¿Para quién es?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              No necesitas ser programador para comenzar.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Está pensado para personas que quieren aprender de manera
              práctica, guiada y aplicada a un proyecto real.
            </p>
          </div>

          <div className="grid gap-3">
            {forWho.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 font-black text-white">
                  ✓
                </span>

                <span className="font-semibold text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="programa" className="bg-[#07152f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              Programa completo
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              8 clases. Un recorrido completo.
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Cada clase combina explicación, demostración en vivo y
              práctica.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {lessons.map((lesson) => (
              <div
                key={lesson.number}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 font-black text-cyan-300">
                    {lesson.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      {lesson.title}
                    </h3>

                    <p className="mt-3 leading-7 text-blue-100">
                      {lesson.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-100">
                Proyecto final
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Sales del curso con algo real.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
                Tu meta será terminar una página funcional, responsive,
                conectada y publicada para que puedas utilizarla como
                proyecto personal o como primera muestra de tu portafolio.
              </p>
            </div>

            <div className="rounded-[30px] bg-white p-7 text-slate-950 shadow-xl">
              <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                RESULTADO
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Diseño profesional",
                  "Adaptado a móvil",
                  "Funciones conectadas",
                  "URL pública",
                  "Proyecto para mostrar",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="text-lg font-black text-green-600">
                      ✓
                    </span>

                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODALITIES */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              Elige cómo aprender
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Online en vivo o presencial.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[34px] border border-blue-200 bg-blue-50 p-8">
              <span className="rounded-full bg-blue-700 px-4 py-2 text-xs font-black uppercase tracking-widest text-white">
                Online en vivo
              </span>

              <h3 className="mt-7 text-3xl font-black">
                Aprende desde donde estés.
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                Clases conmigo en vivo, compartiendo pantalla,
                explicando cada paso y resolviendo dudas durante el
                proceso.
              </p>

              <div className="mt-7 space-y-3">
                <p className="font-bold">✓ 8 clases en vivo</p>
                <p className="font-bold">✓ Proyecto práctico</p>
                <p className="font-bold">
                  ✓ Acompañamiento durante la clase
                </p>
              </div>
            </div>

            <div className="rounded-[34px] bg-[#07152f] p-8 text-white">
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
                Presencial
              </span>

              <h3 className="mt-7 text-3xl font-black">
                Taller práctico conmigo.
              </h3>

              <p className="mt-5 leading-7 text-blue-100">
                Trabajamos paso a paso en el mismo espacio, revisando cada
                proyecto y aplicando los ejercicios directamente.
              </p>

              <div className="mt-7 space-y-3 text-blue-50">
                <p className="font-bold">
                  ✓ 8 clases presenciales
                </p>
                <p className="font-bold">✓ Trabajo guiado</p>
                <p className="font-bold">
                  ✓ Revisión práctica del proyecto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="precios"
        className="border-b border-slate-200 bg-[#f7faff]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              Elige tu modalidad
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Invierte en una habilidad

              <span className="block text-blue-700">
                que puedes volver a utilizar.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              El mismo programa de 8 clases y 16 horas, con dos formas
              diferentes de vivir la experiencia.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
            {/* ONLINE PRICE */}
            <div
              className={`rounded-[36px] border bg-white p-8 shadow-xl transition md:p-10 ${
                selectedModality === "online"
                  ? "border-blue-500 ring-4 ring-blue-100"
                  : "border-blue-200"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-blue-700">
                  Online en vivo
                </span>

                {selectedModality === "online" && (
                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-black text-green-700">
                    SELECCIONADO
                  </span>
                )}
              </div>

              <h3 className="mt-6 text-3xl font-black">
                Aprende desde donde estés.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Participa conmigo en las clases en vivo, mira cada
                demostración y construye tu proyecto durante el curso.
              </p>

              <div className="mt-8 border-y border-slate-100 py-7">
                <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Inversión
                </p>

                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl font-black tracking-tight">
                    $1
                  </span>

                  <span className="pb-2 font-semibold text-slate-400">
                    USD
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "8 clases en vivo",
                  "16 horas de formación",
                  "Proyecto práctico",
                  "Demostraciones paso a paso",
                  "Acompañamiento durante las clases",
                  "Material de apoyo",
                  "Proyecto final publicado",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-black text-blue-700">
                      ✓
                    </span>

                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => chooseModality("online")}
                className="mt-9 w-full rounded-2xl bg-blue-700 px-6 py-4 font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Elegir Online — 1 →
              </button>
            </div>

            {/* PRESENCIAL PRICE */}
            <div
              className={`relative overflow-hidden rounded-[36px] bg-[#07152f] p-8 text-white shadow-2xl transition md:p-10 ${
                selectedModality === "presencial"
                  ? "ring-4 ring-cyan-300"
                  : ""
              }`}
            >
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Presencial
                  </span>

                  {selectedModality === "presencial" ? (
                    <span className="rounded-full bg-green-400 px-3 py-1.5 text-xs font-black text-[#07152f]">
                      SELECCIONADO
                    </span>
                  ) : (
                    <span className="rounded-full bg-cyan-300 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#07152f]">
                      Experiencia completa
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  Trabaja conmigo paso a paso.
                </h3>

                <p className="mt-4 leading-7 text-blue-100">
                  Una experiencia práctica donde trabajamos en el mismo
                  espacio, revisamos tu proyecto y avanzamos juntos durante
                  cada clase.
                </p>

                <div className="mt-8 border-y border-white/10 py-7">
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
                    Inversión
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-5xl font-black tracking-tight">
                      $297
                    </span>

                    <span className="pb-2 font-semibold text-blue-300">
                      USD
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    "8 clases presenciales",
                    "16 horas de formación",
                    "Proyecto práctico",
                    "Trabajo guiado conmigo",
                    "Revisión directa de tu proyecto",
                    "Material de apoyo",
                    "Proyecto final publicado",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-[#07152f]">
                        ✓
                      </span>

                      <span className="font-semibold text-blue-50">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => chooseModality("presencial")}
                  className="mt-9 w-full rounded-2xl bg-white px-6 py-4 font-black text-[#07152f] transition hover:bg-blue-50"
                >
                  Elegir Presencial — $297 →
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-blue-100 bg-white p-6 text-center shadow-sm md:p-8">
            <p className="text-lg font-black">
              No estás pagando solamente por 16 horas de clases.
            </p>

            <p className="mx-auto mt-2 max-w-3xl leading-7 text-slate-600">
              Estás aprendiendo un proceso que después puedes volver a
              utilizar para crear tus propios proyectos, mejorar tu
              negocio o comenzar a ofrecer páginas web como servicio.
            </p>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="rounded-[34px] bg-gradient-to-br from-[#07152f] to-blue-700 p-8 text-white">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
              Instructor
            </p>

            <h3 className="mt-5 text-3xl font-black">
              Aprendí construyendo proyectos reales.
            </h3>

            <p className="mt-5 leading-7 text-blue-100">
              Este curso nace del proceso práctico de aprender, probar,
              corregir, construir páginas, publicar proyectos y convertir
              ideas en soluciones digitales reales.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              Mi enfoque
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              No te voy a enseñar desde la teoría solamente.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Te voy a enseñar el proceso que puedes repetir: pensar,
              organizar, construir, revisar, publicar y seguir mejorando.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Paso a paso",
                "Lenguaje sencillo",
                "Demostraciones reales",
                "Proyecto propio",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 font-bold text-slate-700"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHECKOUT */}
      <section
        id="inscripcion"
        className="bg-[#07152f] text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Inscripción segura
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Reserva tu lugar.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Has seleccionado la modalidad{" "}
                <strong className="text-white">
                  {selectedTitle}
                </strong>
                .
              </p>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/10 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
                      Modalidad
                    </p>

                    <p className="mt-2 text-2xl font-black">
                      {selectedTitle}
                    </p>
                  </div>

                  <p className="text-4xl font-black">
                    {selectedPrice}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm leading-7 text-blue-100">
                    Pago único · 8 clases · 16 horas · Proyecto real
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedModality("online")}
                  className={`rounded-full px-4 py-2 text-sm font-black transition ${
                    selectedModality === "online"
                      ? "bg-cyan-300 text-[#07152f]"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Online $1
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedModality("presencial")
                  }
                  className={`rounded-full px-4 py-2 text-sm font-black transition ${
                    selectedModality === "presencial"
                      ? "bg-cyan-300 text-[#07152f]"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Presencial $297
                </button>
              </div>

              <div className="mt-8 space-y-3 text-sm text-blue-100">
                <p>✓ Pago procesado de forma segura por PayPal</p>
                <p>✓ Debit or Credit Card</p>
                <p>✓ No necesitas crear una cuenta PayPal</p>
                <p>✓ Estamos probando actualmente en Sandbox</p>
              </div>
            </div>

            <div className="rounded-[36px] bg-[#f8fbff] p-4 text-slate-950 shadow-2xl md:p-7">
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                  Secure Checkout
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Pagar {selectedPrice}
                </h3>

                <p className="mt-2 text-slate-500">
                  {selectedTitle} · Next Studio Academy
                </p>
              </div>

              <PayPalCheckout
                key={selectedModality}
                modality={selectedModality}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#07152f]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-blue-200 sm:flex-row lg:px-10">
          <p>Next Studio Academy</p>

          <Link
            href="/"
            className="font-bold text-white transition hover:text-cyan-300"
          >
            Volver a la Academia →
          </Link>
        </div>
      </footer>
    </main>
  );
}