"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "CLASE 04 · DISEÑO WEB PREMIUM",
    title: "Funcionar no es suficiente. También debe transmitir valor.",
    subtitle:
      "Hoy vamos a transformar una página básica en una experiencia visual que inspire confianza y se sienta profesional.",
    type: "hero",
    time: "8 min",
    instructor: {
      explain:
        "Explica que una web puede funcionar perfectamente y aun así verse económica, desordenada o poco confiable. Hoy aprenderán principios visuales que permiten mejorarla sin convertirse en diseñadores profesionales.",
      example:
        "Compara una tarjeta de presentación hecha rápidamente en Word con una diseñada profesionalmente. Ambas contienen la misma información, pero no producen la misma percepción.",
      question:
        "Cuando entran por primera vez a una página, ¿cuánto tiempo creen que necesitan para sentir si el negocio parece profesional?",
      advance:
        "Avanza cuando comprendan que el diseño también comunica confianza, calidad y posicionamiento.",
    },
  },
  {
    eyebrow: "PRIMER PRINCIPIO",
    title: "Premium no significa llenar la pantalla.",
    subtitle:
      "Una de las diferencias más visibles entre un diseño básico y uno profesional es saber utilizar el espacio.",
    type: "space",
    time: "10 min",
    instructor: {
      explain:
        "Introduce el concepto de espacio en blanco. Explica que no todo espacio necesita texto, imágenes o botones. El espacio ayuda a separar ideas y dirigir la mirada.",
      example:
        "Compara una tienda donde todos los productos están amontonados con una tienda premium donde cada producto tiene espacio para destacar.",
      question:
        "¿Cuál de las dos experiencias creen que permite prestar más atención a lo importante?",
      advance:
        "Avanza cuando comprendan que espacio vacío no significa espacio desperdiciado.",
    },
  },
  {
    eyebrow: "JERARQUÍA VISUAL",
    title: "La página debe decirle al ojo qué mirar primero.",
    subtitle:
      "Título, subtítulo, acción y contenido secundario no pueden competir por la misma atención.",
    type: "hierarchy",
    time: "12 min",
    instructor: {
      explain:
        "Explica jerarquía utilizando tamaño, peso, contraste y posición. El visitante debe poder entender rápidamente qué es importante.",
      example:
        "Muestra que un H1 grande puede comunicar la promesa principal, mientras un párrafo más pequeño la explica y un botón destaca la acción.",
      question:
        "Si todo el texto tuviera exactamente el mismo tamaño y peso, ¿cómo sabríamos qué leer primero?",
      advance:
        "Avanza cuando puedan identificar título principal, información secundaria y CTA.",
    },
  },
  {
    eyebrow: "EL HERO",
    title: "La primera pantalla debe responder tres preguntas.",
    subtitle:
      "¿Qué haces? ¿Para quién? ¿Qué quieres que haga el visitante?",
    type: "heroSection",
    time: "15 min",
    instructor: {
      explain:
        "Explica que el hero no debe ser solamente una imagen bonita. Debe comunicar propuesta de valor, contexto y una acción clara.",
      example:
        "En vez de 'Bienvenido a nuestra página', utiliza algo como 'Construimos páginas profesionales para negocios que quieren crecer'.",
      question:
        "¿Puede una persona que nunca ha visto su negocio entender lo que hacen mirando solamente el hero?",
      advance:
        "Avanza cuando cada estudiante pueda explicar la promesa principal de su página en una frase.",
    },
  },
  {
    eyebrow: "COLOR + TIPOGRAFÍA",
    title: "Menos decisiones visuales crean más consistencia.",
    subtitle:
      "No necesitamos diez colores ni cinco tipografías para conseguir personalidad.",
    type: "branding",
    time: "12 min",
    instructor: {
      explain:
        "Recomienda una paleta sencilla: color principal, secundario, neutros y un acento cuando sea necesario. Para tipografía, normalmente una familia bien utilizada puede ser suficiente.",
      example:
        "Explica cómo Next Studio utiliza azul oscuro, azul, blanco y tonos claros de apoyo para mantener consistencia.",
      question:
        "¿Qué sensación debería transmitir visualmente el proyecto de cada alumno: confianza, lujo, energía, calma, tecnología?",
      advance:
        "Avanza cuando cada estudiante tenga una dirección visual sencilla.",
    },
  },
  {
    eyebrow: "IMÁGENES Y MOCKUPS",
    title: "La imagen debe explicar, no solamente decorar.",
    subtitle:
      "Una buena imagen ayuda al visitante a imaginar el producto, servicio o resultado.",
    type: "images",
    time: "12 min",
    instructor: {
      explain:
        "Explica la diferencia entre imágenes genéricas y visuales que realmente apoyan el mensaje. Introduce mockups para mostrar webs, apps y productos digitales.",
      example:
        "Para una plataforma digital, mostrarla dentro de una laptop o teléfono comunica mucho más que utilizar una fotografía genérica de tecnología.",
      question:
        "¿La imagen actual de su hero ayuda a entender el negocio o solamente ocupa espacio?",
      advance:
        "Avanza cuando entiendan que cada imagen debería tener una función dentro de la comunicación.",
    },
  },
  {
    eyebrow: "COMPOSICIÓN",
    title: "No conviertas toda tu página en una colección de cajas.",
    subtitle:
      "Alternar composiciones hace que una web tenga ritmo y se sienta diseñada.",
    type: "composition",
    time: "10 min",
    instructor: {
      explain:
        "Explica que utilizar tarjetas para absolutamente todo puede hacer que una página se vea repetitiva. Alternaremos secciones amplias, columnas, tarjetas, imágenes y bloques destacados.",
      example:
        "Hero amplio → logos → sección dos columnas → tarjetas → imagen grande → CTA final.",
      question:
        "¿Qué ocurre visualmente si diez secciones consecutivas tienen exactamente la misma estructura?",
      advance:
        "Avanza cuando comprendan el concepto de ritmo visual.",
    },
  },
  {
    eyebrow: "RESPONSIVE",
    title: "Premium también significa funcionar bien en el teléfono.",
    subtitle:
      "Una página no está terminada hasta que revisamos desktop, tablet y móvil.",
    type: "responsive",
    time: "12 min",
    instructor: {
      explain:
        "Explica responsive de manera práctica. Columnas pueden convertirse en una sola, títulos reducen tamaño y botones deben continuar siendo fáciles de utilizar.",
      example:
        "Abre Chrome DevTools o reduce el navegador para mostrar cómo cambia una sección.",
      question:
        "¿Qué problemas creen que aparecen cuando diseñamos pensando únicamente en una pantalla grande?",
      advance:
        "Avanza cuando entiendan que móvil no es simplemente una versión pequeña del desktop.",
    },
  },
  {
    eyebrow: "TALLER DE DISEÑO",
    title: "Transforma una sección básica en una sección premium.",
    subtitle:
      "Ahora aplicaremos espacio, jerarquía, color, imagen y composición sobre nuestro proyecto.",
    type: "exercise",
    time: "20 min",
    instructor: {
      explain:
        "Cada estudiante debe elegir su hero o una sección importante y mejorarla utilizando los principios aprendidos. No deben rediseñar toda la web todavía.",
      example:
        "Puedes mejorar en vivo un hero básico: limitar ancho del texto, aumentar espacio, mejorar título, CTA y añadir un mockup.",
      question:
        "Antes y después: ¿qué cambió en la percepción de la página aunque el servicio siga siendo exactamente el mismo?",
      advance:
        "Avanza cuando cada alumno tenga al menos una sección claramente mejorada.",
    },
  },
  {
    eyebrow: "CIERRE · CLASE 04",
    title: "El diseño premium no es decoración. Es claridad.",
    subtitle:
      "En la próxima clase construiremos una identidad visual coherente utilizando marca, imágenes y contenido.",
    type: "finish",
    time: "9 min",
    instructor: {
      explain:
        "Recapitula espacio, jerarquía, hero, color, tipografía, imágenes, composición y responsive.",
      example:
        "Recuérdales que no necesitan llenar una web de efectos para que se vea profesional. Muchas veces quitar, ordenar y jerarquizar produce una mejora mayor.",
      question:
        "¿Cuál de los principios de hoy produjo el cambio visual más fuerte en su proyecto?",
      advance:
        "Cierra pidiendo que conserven la versión actual para continuar trabajando sobre ella en Clase 5.",
    },
  },
];

function SlideContent({ type }: { type: string }) {
  if (type === "hero") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["01", "Ordenar", "Crear claridad visual."],
          ["02", "Elevar", "Mejorar la percepción de valor."],
          ["03", "Conectar", "Guiar al visitante hacia la acción."],
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

  if (type === "space") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] border border-slate-200 bg-white p-5">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            Saturado
          </p>

          <div className="mt-5 space-y-2 rounded-2xl bg-slate-100 p-3">
            <div className="h-8 rounded bg-slate-300" />
            <div className="h-16 rounded bg-slate-300" />
            <div className="grid grid-cols-3 gap-1">
              <div className="h-16 rounded bg-slate-300" />
              <div className="h-16 rounded bg-slate-300" />
              <div className="h-16 rounded bg-slate-300" />
            </div>
            <div className="h-10 rounded bg-slate-300" />
          </div>
        </div>

        <div className="rounded-[30px] border border-blue-200 bg-white p-7 shadow-xl shadow-blue-900/5">
          <p className="text-xs font-black uppercase tracking-widest text-blue-600">
            Con espacio
          </p>

          <div className="mt-8">
            <div className="h-4 w-24 rounded-full bg-blue-200" />
            <div className="mt-5 h-9 w-3/4 rounded-lg bg-blue-700" />
            <div className="mt-5 h-3 w-full rounded bg-slate-200" />
            <div className="mt-2 h-3 w-2/3 rounded bg-slate-200" />
            <div className="mt-8 h-11 w-32 rounded-full bg-blue-600" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "hierarchy") {
    return (
      <div className="rounded-[34px] border border-slate-200 bg-white p-8">
        <p className="text-sm font-black uppercase tracking-widest text-blue-600">
          EJEMPLO DE JERARQUÍA
        </p>

        <h3 className="mt-6 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          Construye una presencia digital que inspire confianza.
        </h3>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          Diseño, tecnología y estrategia trabajando juntos para presentar tu
          negocio profesionalmente.
        </p>

        <button className="mt-7 rounded-full bg-blue-700 px-6 py-3 font-bold text-white">
          Comenzar →
        </button>
      </div>
    );
  }

  if (type === "heroSection") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["01", "Qué haces", "Tu propuesta principal."],
          ["02", "Para quién", "La persona o negocio que ayudas."],
          ["03", "Qué sigue", "La acción principal o CTA."],
        ].map(([number, title, text]) => (
          <div
            key={number}
            className="rounded-3xl bg-gradient-to-br from-white to-blue-50 p-6 ring-1 ring-blue-100"
          >
            <span className="font-black text-blue-600">{number}</span>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "branding") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] bg-[#07152f] p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
            PALETA
          </p>

          <div className="mt-6 flex gap-3">
            <div className="h-16 flex-1 rounded-2xl bg-blue-700" />
            <div className="h-16 flex-1 rounded-2xl bg-cyan-400" />
            <div className="h-16 flex-1 rounded-2xl bg-white" />
            <div className="h-16 flex-1 rounded-2xl bg-slate-300" />
          </div>

          <p className="mt-6 text-blue-100">
            Una familia visual consistente.
          </p>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-blue-600">
            TIPOGRAFÍA
          </p>

          <p className="mt-6 text-4xl font-black">Título fuerte</p>

          <p className="mt-4 text-lg leading-7 text-slate-500">
            Texto secundario fácil de leer y con suficiente contraste.
          </p>
        </div>
      </div>
    );
  }

  if (type === "images") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] border border-slate-200 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            IMAGEN GENÉRICA
          </p>

          <div className="mt-6 flex h-44 items-center justify-center rounded-2xl bg-slate-100 text-5xl">
            🖼️
          </div>

          <p className="mt-5 text-slate-500">
            Puede verse bonita, pero no necesariamente explica el producto.
          </p>
        </div>

        <div className="rounded-[30px] bg-[#07152f] p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
            VISUAL CON PROPÓSITO
          </p>

          <div className="mt-6 flex h-44 items-center justify-center rounded-2xl bg-white/10">
            <div className="rounded-xl border-4 border-slate-300 bg-white px-12 py-8 text-center text-blue-700 shadow-xl">
              Tu Web
            </div>
          </div>

          <p className="mt-5 text-blue-100">
            El visitante puede visualizar inmediatamente lo que estás
            ofreciendo.
          </p>
        </div>
      </div>
    );
  }

  if (type === "composition") {
    return (
      <div className="rounded-[34px] border border-blue-100 bg-white p-7">
        <p className="text-xs font-black uppercase tracking-widest text-blue-600">
          RITMO DE UNA PÁGINA
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {[
            "Hero",
            "→",
            "Confianza",
            "→",
            "2 columnas",
            "→",
            "Servicios",
            "→",
            "Visual",
            "→",
            "CTA",
          ].map((item, index) =>
            item === "→" ? (
              <span key={index} className="font-black text-blue-400">
                →
              </span>
            ) : (
              <span
                key={index}
                className="rounded-2xl bg-blue-50 px-5 py-4 font-bold text-blue-800"
              >
                {item}
              </span>
            ),
          )}
        </div>

        <p className="mt-7 text-slate-500">
          Las secciones pueden pertenecer a la misma marca sin tener exactamente
          la misma composición.
        </p>
      </div>
    );
  }

  if (type === "responsive") {
    return (
      <div className="flex items-end justify-center gap-6 rounded-[34px] bg-[#07152f] p-8 text-white">
        <div className="w-1/2 max-w-md">
          <p className="mb-3 text-center text-xs font-bold text-blue-200">
            DESKTOP
          </p>
          <div className="aspect-video rounded-xl border-4 border-slate-400 bg-white p-3">
            <div className="h-full rounded bg-blue-50" />
          </div>
        </div>

        <div className="w-28">
          <p className="mb-3 text-center text-xs font-bold text-blue-200">
            MOBILE
          </p>
          <div className="aspect-[9/18] rounded-[20px] border-4 border-slate-400 bg-white p-2">
            <div className="h-full rounded-xl bg-blue-50" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "exercise") {
    return (
      <div className="rounded-[34px] bg-gradient-to-br from-[#07152f] to-blue-800 p-8 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
          TALLER
        </p>

        <h3 className="mt-4 text-3xl font-black">
          Elige una sección y elévala.
        </h3>

        <div className="mt-7 grid gap-3 md:grid-cols-5">
          {["Espacio", "Jerarquía", "Color", "Imagen", "CTA"].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/10 p-5 text-center font-bold"
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
        Preparación para Clase 5
      </p>

      <h3 className="mt-4 text-3xl font-black">
        Tu página ya funciona. Ahora comenzaremos a convertirla en una marca.
      </h3>

      <p className="mt-4 max-w-3xl text-blue-50">
        En la siguiente clase trabajaremos identidad, imágenes y contenido para
        que toda la experiencia comunique la misma personalidad.
      </p>
    </div>
  );
}

export default function ClaseCuatro() {
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
              Clase 04
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
                onClick={() => setCurrent(index)}
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
                    className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 disabled:opacity-30"
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
                    className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white disabled:opacity-30"
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