"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "CLASE 01 · BIENVENIDA",
    title: "De cero a creador digital",
    subtitle:
      "Hoy comienza un recorrido práctico: entender, construir y publicar una página web profesional.",
    type: "hero",
    time: "8 min",
    instructor: {
      explain:
        "Da la bienvenida y explica que este curso no está diseñado para convertirlos en programadores tradicionales. La meta es aprender a construir proyectos digitales utilizando la inteligencia artificial como asistente.",
      example:
        "Cuenta brevemente tu propio recorrido: comenzaste sin ser programador, aprendiendo mediante práctica, preguntas, errores, correcciones y proyectos reales.",
      question:
        "¿Cuántos de ustedes pensaban que para crear una página web primero tenían que aprender programación?",
      advance:
        "Avanza cuando los alumnos entiendan que el objetivo del curso es aprender construyendo.",
    },
  },
  {
    eyebrow: "UNA NUEVA FORMA DE CREAR",
    title: "La tecnología cambió. La forma de aprender también.",
    subtitle:
      "Antes, crear una página web podía exigir meses de aprendizaje técnico. Hoy la inteligencia artificial puede acompañarnos durante gran parte del proceso.",
    type: "change",
    time: "10 min",
    instructor: {
      explain:
        "Explica que la programación sigue existiendo y sigue siendo importante. Lo que cambió es nuestra capacidad de utilizar IA para ayudarnos a escribir, entender, revisar y modificar código.",
      example:
        "Compara escribir cada línea manualmente con tener un asistente al que puedes explicar exactamente lo que necesitas y después revisar el resultado.",
      question:
        "¿Qué harían si pudieran describir una herramienta para su negocio y verla comenzar a tomar forma frente a ustedes?",
      advance:
        "Avanza cuando quede clara la diferencia entre utilizar IA como asistente y pensar que la IA hace absolutamente todo sola.",
    },
  },
  {
    eyebrow: "CONCEPTO FUNDAMENTAL",
    title: "¿Qué pasa cuando alguien visita una página web?",
    subtitle:
      "No necesitas memorizar términos complicados. Primero necesitas entender el recorrido.",
    type: "flow",
    time: "12 min",
    instructor: {
      explain:
        "Utiliza el recorrido visual para explicar que una persona escribe un dominio, Internet dirige la solicitud hacia el lugar donde está publicada la web y finalmente el navegador muestra la página.",
      example:
        "Usa un negocio ficticio. Una persona escribe www.mirestaurante.com y aparece el menú, las fotografías, la dirección y los botones del restaurante.",
      question:
        "¿Cuál creen que es la diferencia entre el dominio y la página web?",
      advance:
        "Avanza cuando puedan explicar con sus propias palabras qué función cumple un dominio.",
    },
  },
  {
    eyebrow: "LAS PIEZAS",
    title: "Una web profesional tiene varias partes.",
    subtitle:
      "Vamos a entenderlas con palabras sencillas antes de comenzar a construir.",
    type: "parts",
    time: "12 min",
    instructor: {
      explain:
        "Explica frontend, backend, base de datos, dominio y hosting sin profundizar todavía en código. El objetivo es que entiendan el concepto, no que memoricen definiciones técnicas.",
      example:
        "Compara una web con un restaurante: frontend es el área que ve el cliente; backend es la cocina; la base de datos guarda información; el dominio es la dirección.",
      question:
        "Si una página solamente muestra información, fotos y botones, ¿creen que siempre necesita una base de datos?",
      advance:
        "Avanza cuando comprendan que una página puede tener distintas capas y que no todos los proyectos necesitan la misma complejidad.",
    },
  },
  {
    eyebrow: "NUESTRO EQUIPO DIGITAL",
    title: "Cinco herramientas. Un solo proceso.",
    subtitle:
      "Durante el curso aprenderemos para qué sirve cada herramienta y cuándo utilizarla.",
    type: "tools",
    time: "15 min",
    instructor: {
      explain:
        "Presenta ChatGPT como asistente, Visual Studio Code como lugar de trabajo, Chrome como lugar de prueba, GitHub como repositorio del proyecto y Vercel como plataforma para publicar.",
      example:
        "Explícales el recorrido completo: pensamos y planificamos, trabajamos los archivos, vemos el resultado, guardamos el proyecto y finalmente lo publicamos.",
      question:
        "¿Cuáles de estas herramientas ya conocen y cuáles nunca han utilizado?",
      advance:
        "No configures todavía todas las cuentas. Esta pantalla solamente presenta el ecosistema que utilizarán.",
    },
  },
  {
    eyebrow: "INTELIGENCIA ARTIFICIAL",
    title: "La IA no es magia. Necesita dirección.",
    subtitle:
      "Una instrucción vaga produce resultados vagos. Aprender a dirigir la IA será una de tus habilidades más importantes.",
    type: "ai",
    time: "15 min",
    instructor: {
      explain:
        "Explica que la calidad del resultado depende mucho del contexto y de las instrucciones. Una IA puede ayudar muchísimo, pero necesita entender qué negocio estamos creando, para quién y con qué objetivo.",
      example:
        'Compara “Hazme una página bonita” con una instrucción que especifique negocio, público, objetivo, colores, secciones, estilo y funciones.',
      question:
        "¿Cuál de las dos instrucciones creen que producirá un resultado más cercano a lo que queremos?",
      advance:
        "Diles que la Clase 2 estará dedicada precisamente a aprender a crear instrucciones profesionales.",
    },
  },
  {
    eyebrow: "MÉTODO DEL CURSO",
    title: "No vamos a improvisar. Vamos a seguir un proceso.",
    subtitle:
      "Este será nuestro mapa cada vez que construyamos un proyecto digital.",
    type: "method",
    time: "10 min",
    instructor: {
      explain:
        "Presenta el método Idea → Plan → Construcción → Revisión → Publicación. Explica que saltarse el plan suele generar muchas correcciones después.",
      example:
        "Cuenta cómo pedir cambios uno detrás de otro sin tener una estructura clara puede terminar creando inconsistencias. Primero definimos lo que queremos.",
      question:
        "¿En qué etapa creen que normalmente una persona tiene más ganas de saltarse pasos?",
      advance:
        "Avanza cuando comprendan que la IA no reemplaza un proceso organizado.",
    },
  },
  {
    eyebrow: "DEMOSTRACIÓN EN VIVO",
    title: "Ahora vamos a abrir Visual Studio Code.",
    subtitle:
      "Vamos a conocer cómo se organiza un proyecto real sin preocuparnos todavía por programar.",
    type: "demo",
    time: "20 min",
    instructor: {
      explain:
        "Aquí deja la presentación y abre Visual Studio Code. Enseña el Explorer, las carpetas, page.tsx, public y el navegador. No profundices todavía en sintaxis.",
      example:
        "Haz un cambio pequeño en un título, guarda el archivo y muestra cómo el cambio aparece inmediatamente en localhost.",
      question:
        "¿Qué creen que sucederá cuando cambiemos este título y guardemos el archivo?",
      advance:
        "Regresa a la presentación cuando todos hayan visto un cambio real aparecer en el navegador.",
    },
  },
  {
    eyebrow: "TU PROYECTO",
    title: "¿Qué vas a construir durante este curso?",
    subtitle:
      "El aprendizaje será más poderoso si trabajas desde hoy sobre una idea real.",
    type: "exercise",
    time: "12 min",
    instructor: {
      explain:
        "Da tiempo para que cada estudiante defina su proyecto. No necesitan crear algo complejo. Lo importante es elegir una idea real que puedan desarrollar durante las próximas clases.",
      example:
        "Puede ser una web para un restaurante, contratista, realtor, terapeuta, salón de belleza, consultor, imprenta o negocio personal.",
      question:
        "Cada alumno debe responder: ¿qué representa mi web?, ¿a quién quiero ayudar o vender? y ¿qué acción quiero que realice el visitante?",
      advance:
        "Avanza cuando cada estudiante tenga una idea concreta escrita.",
    },
  },
  {
    eyebrow: "CIERRE · CLASE 01",
    title: "Hoy no aprendiste código. Aprendiste el mapa.",
    subtitle:
      "En la próxima clase aprenderemos a comunicarnos con la inteligencia artificial para convertir nuestras ideas en instrucciones claras.",
    type: "finish",
    time: "6 min",
    instructor: {
      explain:
        "Recapitula lo aprendido: cómo funciona una web, sus principales partes, las herramientas que utilizarán y el proceso general del curso.",
      example:
        "Recuérdales que varios conceptos que quizás parecían complicados al comenzar ahora ya tienen una explicación sencilla.",
      question:
        "Pregunta a dos o tres estudiantes cuál fue el concepto más importante que aprendieron durante esta primera clase.",
      advance:
        "Finaliza recordando que deben llegar a la Clase 2 con su idea de proyecto definida.",
    },
  },
];

function SlideContent({ type }: { type: string }) {
  if (type === "hero") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["01", "Entender", "Cómo funciona el mundo web."],
          ["02", "Construir", "Crear usando IA como asistente."],
          ["03", "Publicar", "Llevar nuestro proyecto a Internet."],
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

  if (type === "change") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            Antes
          </p>

          <p className="mt-5 text-2xl font-bold">
            Aprende primero todo el código.
          </p>

          <p className="mt-3 leading-7 text-slate-500">
            Meses estudiando antes de poder construir algo útil.
          </p>
        </div>

        <div className="rounded-3xl bg-blue-700 p-7 text-white shadow-xl shadow-blue-700/20">
          <p className="text-xs font-black uppercase tracking-widest text-blue-200">
            Ahora
          </p>

          <p className="mt-5 text-2xl font-bold">
            Aprende construyendo con IA.
          </p>

          <p className="mt-3 leading-7 text-blue-100">
            Entiende el proceso, dirige la herramienta y mejora el resultado.
          </p>
        </div>
      </div>
    );
  }

  if (type === "flow") {
    return (
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        {["Tu dominio", "Internet", "Servidor", "Tu página"].map(
          (item, index) => (
            <div key={item} className="contents">
              <div className="flex-1 rounded-3xl border border-blue-100 bg-white p-6 text-center shadow-sm">
                <span className="text-xs font-bold text-blue-500">
                  PASO {index + 1}
                </span>

                <p className="mt-2 font-bold">{item}</p>
              </div>

              {index < 3 && (
                <span className="text-center text-2xl text-blue-500">
                  →
                </span>
              )}
            </div>
          ),
        )}
      </div>
    );
  }

  if (type === "parts") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["Frontend", "Lo que la persona ve y utiliza."],
          ["Backend", "La lógica que trabaja detrás."],
          ["Base de datos", "Donde una aplicación guarda información."],
          ["Dominio + hosting", "La dirección y el lugar donde vive tu web."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-xl font-bold text-blue-700">{title}</h3>
            <p className="mt-2 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "tools") {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {["ChatGPT", "VS Code", "Chrome", "GitHub", "Vercel"].map(
          (tool, index) => (
            <div
              key={tool}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 font-black text-blue-700">
                {index + 1}
              </div>

              <p className="mt-4 font-bold">{tool}</p>
            </div>
          ),
        )}
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="rounded-[32px] bg-[#07152f] p-8 text-white">
        <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
          Ejemplo
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-slate-300">Instrucción vaga</p>

            <p className="mt-3 text-xl font-bold">
              “Hazme una página bonita.”
            </p>
          </div>

          <div className="rounded-2xl bg-blue-500/20 p-6 ring-1 ring-blue-300/30">
            <p className="text-sm text-cyan-200">
              Instrucción dirigida
            </p>

            <p className="mt-3 text-xl font-bold">
              Objetivo + cliente + contenido + estilo + funciones.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "method") {
    return (
      <div className="grid gap-3 md:grid-cols-5">
        {["Idea", "Plan", "Construcción", "Revisión", "Publicación"].map(
          (item, index) => (
            <div
              key={item}
              className="rounded-3xl bg-gradient-to-br from-white to-blue-50 p-6 text-center ring-1 ring-blue-100"
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

  if (type === "demo") {
    return (
      <div className="rounded-[34px] border border-blue-200 bg-blue-50 p-8">
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-2xl text-white">
            ▶
          </div>

          <div>
            <p className="font-black text-blue-800">
              PAUSA LA PRESENTACIÓN
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Demostración práctica del instructor
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Abre Visual Studio Code. Enseña el Explorer, las carpetas, un
              archivo y cómo un cambio puede aparecer en el navegador.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "exercise") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["1", "¿Qué negocio o idea quieres representar?"],
          ["2", "¿A quién quieres ayudar o vender?"],
          ["3", "¿Qué acción quieres que haga el visitante?"],
        ].map(([number, question]) => (
          <div
            key={number}
            className="rounded-3xl bg-white p-6 shadow-sm"
          >
            <span className="font-black text-blue-600">{number}</span>

            <p className="mt-4 text-lg font-bold">{question}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-[34px] bg-gradient-to-r from-blue-700 to-cyan-500 p-8 text-white">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
        Antes de la próxima clase
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Trae definida la idea de la página que vas a construir.
      </h3>

      <p className="mt-3 text-blue-50">
        No tiene que ser perfecta. Solo necesitamos un punto de partida real.
      </p>
    </div>
  );
}

export default function ClaseUno() {
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
              Clase 01
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