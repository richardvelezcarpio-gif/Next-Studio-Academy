"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "CLASE 03 · CONSTRUCCIÓN",
    title: "Hoy vas a ver tu primera página funcionando.",
    subtitle:
      "Pasamos de la idea y el Master Prompt a un proyecto real dentro de Visual Studio Code.",
    type: "hero",
    time: "8 min",
    instructor: {
      explain:
        "Abre la clase recordando que ya tienen una idea definida y un Master Prompt. Hoy ese trabajo previo se convierte en una página visible en el navegador.",
      example:
        "Recuérdales que no necesitan entender cada línea de código antes de empezar. Primero aprenderán el flujo de trabajo.",
      question:
        "¿Qué creen que se siente diferente cuando una idea deja de estar escrita y empieza a aparecer realmente en pantalla?",
      advance:
        "Avanza cuando entiendan que esta clase será principalmente práctica.",
    },
  },
  {
    eyebrow: "ANTES DE EMPEZAR",
    title: "Nuestro espacio de trabajo.",
    subtitle:
      "Vamos a entender dónde vive el proyecto y qué herramientas tendremos abiertas.",
    type: "workspace",
    time: "10 min",
    instructor: {
      explain:
        "Presenta Visual Studio Code, Terminal y Chrome. Explica que normalmente trabajaremos viendo código y navegador al mismo tiempo.",
      example:
        "Puedes mostrar tu propia pantalla dividida: VS Code de un lado y Chrome del otro.",
      question:
        "¿Cuál creen que será la herramienta donde veremos inmediatamente el resultado de nuestros cambios?",
      advance:
        "Avanza cuando ubiquen claramente VS Code, Terminal y navegador.",
    },
  },
  {
    eyebrow: "CREAMOS EL PROYECTO",
    title: "Una carpeta se convierte en una aplicación.",
    subtitle:
      "Vamos a crear la base de nuestro proyecto paso a paso.",
    type: "create",
    time: "15 min",
    instructor: {
      explain:
        "Haz la demostración de crear un proyecto Next.js. Explica que el comando crea automáticamente una estructura inicial para trabajar.",
      example:
        "Muestra cómo un comando puede crear carpetas, dependencias y archivos sin que tengamos que construir todo manualmente.",
      question:
        "¿Por qué creen que es útil comenzar desde una estructura ya preparada?",
      advance:
        "Avanza cuando todos tengan el proyecto creado o entiendan el proceso.",
    },
  },
  {
    eyebrow: "EXPLORER",
    title: "No necesitas memorizar todas las carpetas.",
    subtitle:
      "Solo necesitas reconocer las que utilizaremos con mayor frecuencia.",
    type: "folders",
    time: "12 min",
    instructor: {
      explain:
        "Enseña src/app, page.tsx, layout.tsx, globals.css y public. Explica cada una de manera sencilla.",
      example:
        "page.tsx puede compararse con la pantalla principal; public es el lugar donde guardamos imágenes y archivos visibles.",
      question:
        "Si quisieran cambiar el contenido principal de la página, ¿qué archivo revisarían primero?",
      advance:
        "Avanza cuando sepan identificar page.tsx y public.",
    },
  },
  {
    eyebrow: "LOCALHOST",
    title: "Tu página puede funcionar antes de estar en Internet.",
    subtitle:
      "Localhost es nuestro espacio privado de prueba mientras construimos.",
    type: "localhost",
    time: "10 min",
    instructor: {
      explain:
        "Explica que localhost solo existe en la computadora mientras el servidor de desarrollo está encendido.",
      example:
        "Ejecuta npm run dev y muestra localhost:3000 en Chrome.",
      question:
        "¿Puede otra persona en otro país entrar a localhost:3000 desde su computadora?",
      advance:
        "Avanza cuando quede clara la diferencia entre local y público.",
    },
  },
  {
    eyebrow: "PRIMER CAMBIO",
    title: "Cambia una línea. Mira el resultado.",
    subtitle:
      "Aquí comienza la relación entre código, archivo y navegador.",
    type: "firstchange",
    time: "12 min",
    instructor: {
      explain:
        "Cambia un título dentro de page.tsx. Guarda con Command + S y muestra cómo el navegador se actualiza.",
      example:
        "Cambia el título predeterminado por el nombre del proyecto del alumno.",
      question:
        "¿Qué acaba de suceder entre el archivo y el navegador cuando guardamos?",
      advance:
        "Avanza cuando todos hayan visto al menos un cambio reflejado en la pantalla.",
    },
  },
  {
    eyebrow: "USAMOS LA IA",
    title: "Ahora el Master Prompt entra en acción.",
    subtitle:
      "Vamos a utilizar nuestras instrucciones para generar una primera estructura de página.",
    type: "ai",
    time: "15 min",
    instructor: {
      explain:
        "Explica cómo entregar el Master Prompt a la IA y pedir una primera estructura clara, sin intentar crear todo el proyecto de una sola vez.",
      example:
        "Pide primero header, hero y secciones principales antes de añadir funciones avanzadas.",
      question:
        "¿Por qué creen que es mejor construir por partes que pedir un proyecto enorme de una sola vez?",
      advance:
        "Avanza cuando comprendan la importancia de trabajar por etapas.",
    },
  },
  {
    eyebrow: "REVISAR ANTES DE SEGUIR",
    title: "Construir rápido no significa aceptar todo.",
    subtitle:
      "Cada cambio debe revisarse antes de continuar.",
    type: "review",
    time: "10 min",
    instructor: {
      explain:
        "Enséñales a mirar alineación, textos, botones, imágenes, espaciado y funcionamiento antes de pedir nuevos cambios.",
      example:
        "Muestra un detalle pequeño incorrecto y corrígelo antes de seguir agregando secciones.",
      question:
        "¿Qué puede pasar si seguimos agregando cosas encima de un problema que todavía no corregimos?",
      advance:
        "Avanza cuando entiendan el valor de revisar por etapas.",
    },
  },
  {
    eyebrow: "EJERCICIO EN VIVO",
    title: "Construye la primera versión de tu Home.",
    subtitle:
      "No buscamos perfección. Buscamos una estructura real que podamos mejorar.",
    type: "exercise",
    time: "20 min",
    instructor: {
      explain:
        "Da tiempo para que cada alumno construya hero, propuesta principal y al menos dos secciones de su propia página.",
      example:
        "Puedes acompañar al grupo usando un proyecto ficticio mientras ellos hacen el suyo.",
      question:
        "Al terminar, cada alumno debe poder explicar qué ofrece su página, para quién es y cuál es su CTA principal.",
      advance:
        "Avanza cuando todos tengan una primera versión visible en localhost.",
    },
  },
  {
    eyebrow: "CIERRE · CLASE 03",
    title: "Tu idea ya existe en una pantalla.",
    subtitle:
      "En la próxima clase aprenderemos a transformar esta primera versión en un diseño realmente premium.",
    type: "finish",
    time: "8 min",
    instructor: {
      explain:
        "Recapitula creación del proyecto, carpetas, localhost, primer cambio, IA y revisión.",
      example:
        "Haz que comparen la idea con la que llegaron y la primera versión que ahora pueden ver.",
      question:
        "¿Cuál fue el momento de hoy en que sintieron que realmente estaban construyendo?",
      advance:
        "Cierra recordando que no deben preocuparse todavía si el diseño no se ve perfecto. Eso será el foco de la Clase 4.",
    },
  },
];

function SlideContent({ type }: { type: string }) {
  if (type === "hero") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["01", "Crear", "Preparamos el proyecto."],
          ["02", "Ver", "Lo ejecutamos en localhost."],
          ["03", "Construir", "Empezamos la página real."],
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

  if (type === "workspace") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Visual Studio Code", "Donde editamos el proyecto."],
          ["Terminal", "Donde ejecutamos comandos."],
          ["Chrome", "Donde vemos el resultado."],
        ].map(([title, text], index) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-white p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 font-black text-blue-700">
              {index + 1}
            </div>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "create") {
    return (
      <div className="rounded-[32px] bg-[#07152f] p-8 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
          TERMINAL
        </p>

        <div className="mt-6 rounded-2xl bg-black/30 p-6 font-mono text-lg text-blue-100">
          npx create-next-app@latest mi-proyecto
        </div>

        <p className="mt-6 max-w-3xl leading-7 text-blue-100">
          Este comando crea la estructura inicial de nuestra aplicación para que
          podamos comenzar con una base organizada.
        </p>
      </div>
    );
  }

  if (type === "folders") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["src/app/page.tsx", "Contenido principal de una página."],
          ["src/app/layout.tsx", "Estructura general compartida."],
          ["src/app/globals.css", "Estilos globales del proyecto."],
          ["public/", "Imágenes, logos y archivos públicos."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-white p-6"
          >
            <p className="font-mono text-sm font-bold text-blue-700">{title}</p>
            <p className="mt-3 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "localhost") {
    return (
      <div className="rounded-[34px] bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white">
        <p className="text-sm font-black uppercase tracking-widest text-blue-100">
          TU LABORATORIO PRIVADO
        </p>

        <h3 className="mt-5 text-4xl font-black">localhost:3000</h3>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
          Aquí probamos la página mientras construimos. Todavía no está
          publicada para el resto del mundo.
        </p>
      </div>
    );
  }

  if (type === "firstchange") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl bg-slate-950 p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            ARCHIVO
          </p>
          <div className="mt-5 font-mono text-lg text-blue-300">
            &lt;h1&gt;Mi Primera Página&lt;/h1&gt;
          </div>
        </div>

        <div className="rounded-3xl border border-blue-200 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-blue-500">
            NAVEGADOR
          </p>
          <p className="mt-5 text-3xl font-black">Mi Primera Página</p>
        </div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="rounded-[34px] border border-blue-200 bg-white p-8">
        <p className="text-xs font-black uppercase tracking-widest text-blue-600">
          PRIMER PEDIDO A LA IA
        </p>

        <p className="mt-5 text-2xl font-bold leading-9">
          “Usa mi Master Prompt y crea solamente la estructura inicial del Home:
          header, hero, propuesta principal y dos secciones de servicios.”
        </p>

        <div className="mt-7 rounded-2xl bg-blue-50 p-5 font-semibold text-blue-800">
          Regla: construir por etapas.
        </div>
      </div>
    );
  }

  if (type === "review") {
    return (
      <div className="grid gap-3 md:grid-cols-5">
        {["Textos", "Espacios", "Botones", "Imágenes", "Funciones"].map(
          (item, index) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-center"
            >
              <span className="text-xs font-black text-blue-500">
                0{index + 1}
              </span>
              <p className="mt-3 font-bold">{item}</p>
            </div>
          ),
        )}
      </div>
    );
  }

  if (type === "exercise") {
    return (
      <div className="rounded-[34px] bg-[#07152f] p-8 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
          EJERCICIO DE CLASE
        </p>

        <h3 className="mt-4 text-3xl font-black">
          Construye tu primera Home.
        </h3>

        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {[
            "Header",
            "Hero",
            "Propuesta principal",
            "2 secciones",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/10 p-5 font-bold text-blue-50"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[34px] bg-gradient-to-r from-blue-700 to-cyan-500 p-8 text-white">
      <p className="text-sm font-black uppercase tracking-widest text-blue-100">
        Preparación para Clase 4
      </p>

      <h3 className="mt-4 text-3xl font-black">
        Conserva tu primera versión. No intentes perfeccionarla todavía.
      </h3>

      <p className="mt-4 max-w-3xl text-blue-50">
        En la próxima clase aprenderemos cómo convertir una página funcional en
        una experiencia visual premium.
      </p>
    </div>
  );
}

export default function ClaseTres() {
  const [current, setCurrent] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const slide = slides[current];

  const previous = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
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
              className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700"
            >
              Notas del instructor
            </button>

            <Link
              href="/"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600"
            >
              ← Curso
            </Link>

            <span className="hidden rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 sm:block">
              Clase 03
            </span>
          </div>
        </div>

        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-blue-700 to-cyan-400 transition-all duration-300"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
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
            onClick={previous}
            disabled={current === 0}
            className="rounded-full border border-slate-200 px-6 py-3 font-bold text-slate-700 disabled:opacity-30"
          >
            ← Anterior
          </button>

          <div className="hidden gap-1.5 md:flex">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Ir a pantalla ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-blue-700"
                    : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white disabled:opacity-30"
          >
            Siguiente →
          </button>
        </div>
      </nav>

      {showNotes && (
        <>
          <button
            type="button"
            onClick={() => setShowNotes(false)}
            className="fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-[2px]"
            aria-label="Cerrar notas"
          />

          <aside className="fixed right-0 top-0 z-50 h-screen w-full overflow-y-auto bg-white shadow-2xl sm:w-[520px] lg:w-[600px]">
            <div className="sticky top-0 bg-[#07152f] px-7 py-6 text-white">
              <div className="flex justify-between gap-5">
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
                  onClick={() => setShowNotes(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl"
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
                <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                  Qué explicar
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  {slide.instructor.explain}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6">
                <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                  Ejemplo
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  {slide.instructor.example}
                </p>
              </div>

              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="text-xs font-black uppercase tracking-widest text-blue-700">
                  Pregunta al grupo
                </p>
                <p className="mt-4 font-semibold leading-7">
                  {slide.instructor.question}
                </p>
              </div>

              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Cuándo avanzar
                </p>
                <p className="mt-4 font-semibold leading-7">
                  {slide.instructor.advance}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-5">
                <button
                  onClick={previous}
                  disabled={current === 0}
                  className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold disabled:opacity-30"
                >
                  ← Anterior
                </button>

                <span className="text-sm font-bold text-slate-400">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>

                <button
                  onClick={next}
                  disabled={current === slides.length - 1}
                  className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white disabled:opacity-30"
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </aside>
        </>
      )}
    </main>
  );
}