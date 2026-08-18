"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "CLASE 02 · INTELIGENCIA ARTIFICIAL",
    title: "Domina la IA antes de pedirle que construya.",
    subtitle:
      "La calidad del resultado empieza mucho antes del código. Empieza en cómo explicamos lo que queremos.",
    type: "hero",
    time: "8 min",
    instructor: {
      explain:
        "Abre la clase recordando que la IA puede ser muy poderosa, pero no sabe automáticamente lo que estamos imaginando. Nuestro trabajo es darle dirección, contexto y límites claros.",
      example:
        "Recuerda alguna ocasión en la que una IA te entregó algo demasiado simple porque la instrucción inicial era demasiado general.",
      question:
        "¿Alguna vez le pidieron algo a una IA y recibieron una respuesta totalmente diferente a lo que tenían en mente?",
      advance:
        "Avanza cuando comprendan que aprender a dirigir la IA es una habilidad independiente de saber programar.",
    },
  },
  {
    eyebrow: "CONCEPTO CLAVE",
    title: "¿Qué es realmente un prompt?",
    subtitle:
      "No es solamente una pregunta. Es una instrucción con contexto, objetivo y condiciones.",
    type: "prompt",
    time: "10 min",
    instructor: {
      explain:
        "Define prompt de forma sencilla. Es la información que entregamos a la IA para explicarle qué queremos, para quién, con qué propósito y bajo qué condiciones.",
      example:
        "Compara decirle a una persona 'haz algo bonito' con entregarle un brief profesional del trabajo.",
      question:
        "¿Qué información necesitarían ustedes si un cliente les pidiera crear una página web?",
      advance:
        "Avanza cuando entiendan que un buen prompt se parece mucho a un buen brief.",
    },
  },
  {
    eyebrow: "ANATOMÍA DE UNA BUENA INSTRUCCIÓN",
    title: "Cinco piezas que cambian el resultado.",
    subtitle:
      "Cuanto mejor organizamos la información, menos necesitamos corregir después.",
    type: "anatomy",
    time: "12 min",
    instructor: {
      explain:
        "Explica las cinco piezas: contexto, objetivo, público, estilo y restricciones. No tienen que memorizar todavía una fórmula exacta; deben comprender qué aporta cada pieza.",
      example:
        "Usa un restaurante como ejemplo: no es igual crear una web para un restaurante familiar económico que para un restaurante premium en Manhattan.",
      question:
        "¿Qué cambiaría en una página si el cliente ideal fuera diferente?",
      advance:
        "Avanza cuando puedan identificar al menos tres tipos de información importantes antes de comenzar un proyecto.",
    },
  },
  {
    eyebrow: "COMPARACIÓN",
    title: "Una instrucción vaga vs. una instrucción profesional.",
    subtitle:
      "La diferencia no está en escribir muchísimo. Está en incluir la información correcta.",
    type: "comparison",
    time: "15 min",
    instructor: {
      explain:
        "Lee ambos ejemplos y explica por qué el segundo reduce ambigüedad. Señala negocio, objetivo, público, estilo visual y acción principal.",
      example:
        'Prompt débil: "Hazme una página para un realtor". Prompt dirigido: explica ubicación, tipo de cliente, propiedades, tono, secciones y CTA.',
      question:
        "¿Qué información del segundo prompt creen que tiene más impacto en el diseño?",
      advance:
        "Avanza cuando comprendan que agregar contexto útil es mejor que simplemente escribir instrucciones más largas.",
    },
  },
  {
    eyebrow: "EL CONTEXTO IMPORTA",
    title: "La IA no conoce tu negocio hasta que tú se lo explicas.",
    subtitle:
      "Un pequeño detalle puede cambiar completamente el diseño, el contenido y la estrategia de una página.",
    type: "context",
    time: "10 min",
    instructor: {
      explain:
        "Explica que contexto significa información previa que permite interpretar correctamente la tarea: negocio, ciudad, servicio, cliente ideal, personalidad de marca, objetivos y limitaciones.",
      example:
        "Un contratista residencial y una empresa de construcción comercial pueden ofrecer construcción, pero sus webs no deberían hablar ni verse igual.",
      question:
        "¿Qué cinco cosas sobre su proyecto deberían contarle a la IA antes de pedirle una página?",
      advance:
        "Avanza cuando cada alumno pueda mencionar información concreta de su propio proyecto.",
    },
  },
  {
    eyebrow: "CUANDO LA IA SE EQUIVOCA",
    title: "No empieces otra vez. Aprende a corregir.",
    subtitle:
      "Parte del trabajo con IA consiste en revisar, señalar el problema y pedir un cambio específico.",
    type: "correction",
    time: "12 min",
    instructor: {
      explain:
        "Enseña que no deben aceptar el primer resultado ni reiniciar siempre desde cero. Primero identificamos exactamente qué está mal y damos una instrucción específica para corregirlo.",
      example:
        'En vez de "no me gusta, hazlo otra vez", decir: "Mantén la estructura, pero reduce el tamaño del hero, usa más espacio blanco y cambia los botones a azul oscuro".',
      question:
        "¿Cuál de estas dos formas de corregir creen que protege mejor el trabajo que ya estaba bien?",
      advance:
        "Avanza cuando comprendan la diferencia entre corregir con precisión y volver a generar todo.",
    },
  },
  {
    eyebrow: "PROTEGER LO QUE YA FUNCIONA",
    title: "Una buena corrección también dice qué NO cambiar.",
    subtitle:
      "Esto evita que una mejora dañe otras partes del proyecto.",
    type: "protect",
    time: "10 min",
    instructor: {
      explain:
        "Presenta una regla útil: cuando algo ya está correcto, indícalo explícitamente. Mantén X, modifica Y, no cambies Z.",
      example:
        'Ejemplo: "Mantén exactamente el header y los colores actuales. Modifica únicamente las tarjetas de servicios. No cambies rutas ni funcionalidades".',
      question:
        "¿Por qué creen que esta forma de trabajar se vuelve más importante a medida que el proyecto crece?",
      advance:
        "Avanza cuando entiendan que una instrucción profesional también establece límites.",
    },
  },
  {
    eyebrow: "MASTER PROMPT",
    title: "Crea una base que puedas reutilizar durante todo el proyecto.",
    subtitle:
      "En lugar de explicar el negocio desde cero cada vez, crearemos una ficha maestra.",
    type: "master",
    time: "15 min",
    instructor: {
      explain:
        "Introduce el concepto de Master Prompt: una descripción organizada del proyecto que sirve como contexto base para futuras solicitudes.",
      example:
        "Incluye nombre del negocio, servicio, público, objetivo, estilo visual, colores, secciones, CTA, idioma y restricciones.",
      question:
        "¿Qué dato de su proyecto creen que nunca debería faltar en su Master Prompt?",
      advance:
        "Avanza cuando cada alumno comprenda que el Master Prompt se seguirá mejorando durante el curso.",
    },
  },
  {
    eyebrow: "EJERCICIO PRÁCTICO",
    title: "Construye el Master Prompt de tu propia página.",
    subtitle:
      "Ahora vas a transformar tu idea de la Clase 1 en instrucciones que una IA pueda entender.",
    type: "exercise",
    time: "20 min",
    instructor: {
      explain:
        "Da tiempo real de trabajo. Cada estudiante debe completar los bloques de su Master Prompt. Camina entre ellos o revisa algunos ejemplos en vivo.",
      example:
        "Puedes construir uno junto al grupo usando un negocio ficticio antes de que trabajen individualmente.",
      question:
        "Revisa con cada alumno: ¿la IA puede entender claramente qué negocio es, para quién y qué debe lograr la página?",
      advance:
        "Avanza cuando todos tengan al menos una primera versión funcional de su Master Prompt.",
    },
  },
  {
    eyebrow: "CIERRE · CLASE 02",
    title: "La IA trabaja mejor cuando tú piensas mejor.",
    subtitle:
      "En la próxima clase utilizaremos estas instrucciones para comenzar a construir nuestra primera página real.",
    type: "finish",
    time: "8 min",
    instructor: {
      explain:
        "Recapitula: prompt, contexto, objetivo, público, estilo, restricciones, correcciones y Master Prompt.",
      example:
        "Refuerza que un buen resultado no depende solamente de qué herramienta de IA utilizamos, sino de cómo organizamos nuestro pensamiento.",
      question:
        "Pregunta qué elemento van a mejorar primero en el Master Prompt que crearon hoy.",
      advance:
        "Finaliza diciendo que deberán traer su Master Prompt listo para utilizarlo en la Clase 3.",
    },
  },
];

function SlideContent({ type }: { type: string }) {
  if (type === "hero") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["01", "Pensar", "Define lo que realmente quieres."],
          ["02", "Dirigir", "Entrega contexto e instrucciones claras."],
          ["03", "Corregir", "Mejora sin destruir lo que funciona."],
        ].map(([number, title, text]) => (
          <div
            key={number}
            className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm"
          >
            <span className="text-sm font-black text-blue-600">{number}</span>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "prompt") {
    return (
      <div className="rounded-[34px] bg-[#07152f] p-8 text-white">
        <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
          PROMPT
        </p>

        <p className="mt-5 max-w-4xl text-3xl font-bold leading-tight">
          Una instrucción que le entrega a la IA suficiente información para
          entender qué debe hacer y cómo debe hacerlo.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Contexto", "Objetivo", "Público", "Estilo", "Restricciones"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    );
  }

  if (type === "anatomy") {
    return (
      <div className="grid gap-4 md:grid-cols-5">
        {[
          ["01", "Contexto", "¿Qué negocio o proyecto es?"],
          ["02", "Objetivo", "¿Qué queremos conseguir?"],
          ["03", "Público", "¿Para quién estamos creando?"],
          ["04", "Estilo", "¿Cómo debe sentirse visualmente?"],
          ["05", "Límites", "¿Qué debe respetar o evitar?"],
        ].map(([number, title, text]) => (
          <div
            key={number}
            className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm"
          >
            <span className="text-xs font-black text-blue-500">{number}</span>
            <h3 className="mt-4 font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "comparison") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] border border-slate-200 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            Prompt débil
          </p>

          <p className="mt-5 text-2xl font-bold">
            “Hazme una página profesional para un realtor.”
          </p>

          <p className="mt-5 text-slate-500">
            Demasiadas decisiones quedan abiertas a interpretación.
          </p>
        </div>

        <div className="rounded-[30px] bg-gradient-to-br from-blue-700 to-cyan-500 p-7 text-white shadow-xl shadow-blue-700/15">
          <p className="text-xs font-black uppercase tracking-widest text-blue-100">
            Prompt dirigido
          </p>

          <p className="mt-5 text-xl font-bold leading-8">
            Crea una web premium para un realtor en New York dirigido a
            compradores de primera vivienda, con estilo limpio, confianza,
            propiedades destacadas y CTA para agendar una consulta.
          </p>
        </div>
      </div>
    );
  }

  if (type === "context") {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          "Tipo de negocio",
          "Ubicación",
          "Cliente ideal",
          "Servicios principales",
          "Personalidad de marca",
          "Objetivo principal",
        ].map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 font-black text-blue-700">
              {index + 1}
            </div>
            <p className="font-bold">{item}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "correction") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl bg-red-50 p-7 ring-1 ring-red-100">
          <p className="text-xs font-black uppercase tracking-widest text-red-500">
            Evita esto
          </p>

          <p className="mt-5 text-2xl font-bold text-slate-900">
            “No me gusta. Hazlo otra vez.”
          </p>
        </div>

        <div className="rounded-3xl bg-emerald-50 p-7 ring-1 ring-emerald-100">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-600">
            Mejor
          </p>

          <p className="mt-5 text-xl font-bold leading-8 text-slate-900">
            “Mantén la estructura. Reduce el hero, agrega más espacio blanco y
            cambia únicamente los botones a azul oscuro.”
          </p>
        </div>
      </div>
    );
  }

  if (type === "protect") {
    return (
      <div className="rounded-[34px] border border-blue-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-black uppercase tracking-widest text-blue-600">
          Fórmula de corrección
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-xs font-black uppercase tracking-wider text-emerald-600">
              Mantén
            </p>
            <p className="mt-3 font-bold">Lo que ya funciona.</p>
          </div>

          <div className="rounded-3xl bg-blue-50 p-6">
            <p className="text-xs font-black uppercase tracking-wider text-blue-600">
              Modifica
            </p>
            <p className="mt-3 font-bold">La parte específica que quieres mejorar.</p>
          </div>

          <div className="rounded-3xl bg-slate-100 p-6">
            <p className="text-xs font-black uppercase tracking-wider text-slate-500">
              No cambies
            </p>
            <p className="mt-3 font-bold">Rutas, funciones o diseño aprobado.</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "master") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["Negocio", "Quién eres y qué haces."],
          ["Público", "A quién quieres atraer."],
          ["Objetivo", "Qué quieres que ocurra."],
          ["Estilo", "Cómo debe verse y sentirse."],
          ["Contenido", "Qué secciones necesita."],
          ["Restricciones", "Qué no debe modificar o inventar."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-lg font-bold text-blue-700">{title}</h3>
            <p className="mt-2 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "exercise") {
    return (
      <div className="rounded-[34px] bg-[#07152f] p-8 text-white">
        <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
          EJERCICIO
        </p>

        <h3 className="mt-4 text-3xl font-black">
          Completa tu Master Prompt.
        </h3>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {[
            "Mi negocio es...",
            "Mi cliente ideal es...",
            "La página debe lograr...",
            "El estilo debe sentirse...",
            "Las secciones principales son...",
            "La IA no debe...",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/10 p-5 font-semibold text-blue-50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[34px] bg-gradient-to-r from-blue-700 to-cyan-500 p-8 text-white">
      <p className="text-sm font-black uppercase tracking-widest text-blue-100">
        Preparación para Clase 3
      </p>

      <h3 className="mt-4 text-3xl font-black">
        Llega con tu Master Prompt terminado.
      </h3>

      <p className="mt-4 max-w-2xl text-blue-50">
        En la siguiente clase lo utilizaremos para comenzar a construir tu
        primera página real.
      </p>
    </div>
  );
}

export default function ClaseDos() {
  const [current, setCurrent] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const slide = slides[current];

  const previous = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <main className="min-h-screen bg-[#f5f8fd] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Image
              src="/next-studio-logo.png"
              alt="Next Studio"
              width={120}
              height={60}
              className="h-11 w-auto object-contain"
              priority
            />

            <div className="hidden border-l border-slate-200 pl-4 sm:block">
              <p className="text-xs font-black uppercase tracking-widest text-blue-700">
                Academy
              </p>

              <p className="text-xs text-slate-500">
                Crea tu Página Web con IA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowNotes(true)}
              className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
            >
              Notas del instructor
            </button>

            <Link
              href="/"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            >
              ← Curso
            </Link>

            <span className="hidden rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 sm:block">
              Clase 02
            </span>
          </div>
        </div>

        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-blue-700 to-cyan-400 transition-all duration-300"
            style={{
              width: `${((current + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-150px)] max-w-7xl items-center px-6 py-10">
        <div className="w-full">
          <div className="mb-10">
            <div className="flex items-center justify-between gap-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                {slide.eyebrow}
              </p>

              <p className="text-sm font-bold text-slate-400">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </p>
            </div>

            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {slide.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              {slide.subtitle}
            </p>
          </div>

          <SlideContent type={slide.type} />
        </div>
      </section>

      <nav className="sticky bottom-0 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            type="button"
            onClick={previous}
            disabled={current === 0}
            className="rounded-full border border-slate-200 px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ← Anterior
          </button>

          <div className="hidden gap-1.5 md:flex">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Ir a pantalla ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-blue-700"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            disabled={current === slides.length - 1}
            className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Siguiente →
          </button>
        </div>
      </nav>

      {showNotes && (
        <>
          <button
            type="button"
            aria-label="Cerrar notas del instructor"
            onClick={() => setShowNotes(false)}
            className="fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-[2px]"
          />

          <aside className="fixed right-0 top-0 z-50 h-screen w-full overflow-y-auto border-l border-slate-200 bg-white shadow-2xl sm:w-[520px] lg:w-[600px]">
            <div className="sticky top-0 z-10 bg-[#07152f] px-7 py-6 text-white">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                    Guía privada
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Notas del instructor
                  </h2>

                  <p className="mt-2 text-sm text-blue-100">
                    Pantalla {String(current + 1).padStart(2, "0")} de{" "}
                    {String(slides.length).padStart(2, "0")}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowNotes(false)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-bold transition hover:bg-white/20"
                  aria-label="Cerrar notas"
                >
                  ×
                </button>
              </div>

              <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                Tiempo sugerido: {slide.time}
              </div>
            </div>

            <div className="space-y-5 p-7">
              <div className="rounded-3xl border border-slate-200 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                  Qué explicar
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {slide.instructor.explain}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                  Ejemplo
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {slide.instructor.example}
                </p>
              </div>

              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">
                  Pregunta al grupo
                </p>

                <p className="mt-4 font-semibold leading-7 text-slate-800">
                  {slide.instructor.question}
                </p>
              </div>

              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Cuándo avanzar
                </p>

                <p className="mt-4 font-semibold leading-7 text-slate-700">
                  {slide.instructor.advance}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={previous}
                    disabled={current === 0}
                    className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ← Anterior
                  </button>

                  <span className="text-sm font-bold text-slate-400">
                    {String(current + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={next}
                    disabled={current === slides.length - 1}
                    className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Siguiente →
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}
    </main>
  );
}