"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "CLASE 05 · MARCA, IMÁGENES Y CONTENIDO",
    title: "Una página profesional necesita identidad propia.",
    subtitle:
      "Hoy vamos a hacer que tu web deje de verse genérica y empiece a comunicar una marca reconocible.",
    type: "hero",
    time: "8 min",
    instructor: {
      explain:
        "Explica que una web puede estar bien estructurada y aun así sentirse genérica si no existe coherencia entre logo, colores, imágenes, mensajes y tono.",
      example:
        "Compara dos negocios que ofrecen exactamente el mismo servicio: uno con identidad coherente y otro con colores, fotos y textos sin relación.",
      question:
        "Si elimináramos el logo de su página, ¿todavía tendría elementos que permitan reconocer la personalidad de la marca?",
      advance:
        "Avanza cuando comprendan que una marca no es solamente un logo.",
    },
  },
  {
    eyebrow: "IDENTIDAD VISUAL",
    title: "Tu marca debe sentirse igual en toda la página.",
    subtitle:
      "Logo, colores, tipografía, imágenes y botones deben hablar el mismo lenguaje visual.",
    type: "identity",
    time: "12 min",
    instructor: {
      explain:
        "Presenta los elementos básicos de identidad visual. No busques convertirlos en diseñadores de branding, sino enseñarles a mantener consistencia.",
      example:
        "Muestra cómo una marca tecnológica puede usar formas limpias, tonos fríos y fotografía moderna, mientras una marca holística podría necesitar una atmósfera más cálida y orgánica.",
      question:
        "¿Qué tres palabras describen cómo debería sentirse su marca?",
      advance:
        "Avanza cuando cada alumno tenga tres palabras de personalidad para su proyecto.",
    },
  },
  {
    eyebrow: "LOGO",
    title: "El logo identifica. No tiene que dominar toda la pantalla.",
    subtitle:
      "Debe verse claro, respirar y mantenerse consistente en desktop y móvil.",
    type: "logo",
    time: "10 min",
    instructor: {
      explain:
        "Explica tamaño, espacio alrededor del logo, versiones claras y oscuras, y la importancia de utilizar archivos de buena calidad.",
      example:
        "Muestra un logo demasiado grande y otro correctamente integrado dentro del header.",
      question:
        "¿Su logo funciona sobre fondo claro y sobre fondo oscuro?",
      advance:
        "Avanza cuando entiendan que el logo debe apoyar la experiencia, no competir con ella.",
    },
  },
  {
    eyebrow: "PALETA DE COLOR",
    title: "Elige pocos colores y utilízalos con intención.",
    subtitle:
      "La consistencia genera reconocimiento y evita que la página se vea improvisada.",
    type: "palette",
    time: "12 min",
    instructor: {
      explain:
        "Explica una estructura simple: color principal, secundario, acento, fondos y neutros. El objetivo es reducir decisiones improvisadas.",
      example:
        "Puedes mostrar azul oscuro para confianza, azul brillante para acciones, blanco para respiración y gris para información secundaria.",
      question:
        "¿Cuál debería ser el color que una persona asocie inmediatamente con su marca?",
      advance:
        "Avanza cuando cada alumno tenga una paleta pequeña definida.",
    },
  },
  {
    eyebrow: "IMÁGENES",
    title: "No uses una imagen solo porque se ve bonita.",
    subtitle:
      "Cada fotografía o visual debe ayudar a entender el servicio, el resultado o la personalidad del negocio.",
    type: "images",
    time: "15 min",
    instructor: {
      explain:
        "Explica tres funciones de una imagen: mostrar el producto, demostrar un resultado o crear una emoción alineada con la marca.",
      example:
        "Para un contratista, una obra terminada tiene más valor que una foto genérica de herramientas. Para un realtor, una propiedad real puede tener más fuerza que una persona usando una laptop.",
      question:
        "¿Qué debería entender el visitante al mirar las imágenes de su página sin leer todavía los textos?",
      advance:
        "Avanza cuando cada estudiante pueda justificar por qué utiliza cada imagen importante.",
    },
  },
  {
    eyebrow: "IMÁGENES CON IA",
    title: "La IA puede crear visuales. Tú debes dirigir la escena.",
    subtitle:
      "Un buen prompt visual define sujeto, entorno, composición, iluminación, estilo y propósito.",
    type: "aiImages",
    time: "15 min",
    instructor: {
      explain:
        "Enseña que un prompt visual necesita intención. Evita simplemente pedir 'una imagen profesional'. Define quién aparece, qué está haciendo, entorno, encuadre y función dentro de la página.",
      example:
        'En vez de "persona usando computadora", pedir: "dueño de pequeño negocio latino revisando su nueva página web en laptop, oficina moderna, luz natural, composición premium, espacio libre a la izquierda para texto".',
      question:
        "¿Por qué es importante indicar dónde queremos espacio libre dentro de una imagen para web?",
      advance:
        "Avanza cuando comprendan que la composición también debe considerar dónde irá el contenido.",
    },
  },
  {
    eyebrow: "CONTENIDO",
    title: "Una página no vende características. Comunica valor.",
    subtitle:
      "El visitante quiere entender qué haces, cómo le ayuda y por qué debería elegirte.",
    type: "content",
    time: "12 min",
    instructor: {
      explain:
        "Explica la diferencia entre describir características y comunicar beneficios. Los textos deben hablar desde la perspectiva de lo que obtiene el cliente.",
      example:
        'Característica: "Formulario de contacto". Beneficio: "Permite que tus clientes te contacten directamente sin salir de tu página".',
      question:
        "¿Cuál es el principal resultado que recibe el cliente cuando compra su producto o servicio?",
      advance:
        "Avanza cuando puedan convertir al menos una característica en beneficio.",
    },
  },
  {
    eyebrow: "TÍTULOS Y CTA",
    title: "Cada sección necesita una idea clara y una acción lógica.",
    subtitle:
      "Los títulos llaman la atención. Los CTA convierten esa atención en movimiento.",
    type: "cta",
    time: "10 min",
    instructor: {
      explain:
        "Explica que un buen título debe comunicar una idea rápidamente. El CTA debe indicar claramente qué ocurre cuando el visitante hace clic.",
      example:
        'Evita títulos como "Nuestros servicios" cuando puedes comunicar algo más específico. CTA: "Solicitar cotización", "Agendar consulta", "Ver propiedades".',
      question:
        "¿Qué acción principal debería realizar una persona después de visitar su página?",
      advance:
        "Avanza cuando cada alumno haya definido su CTA principal.",
    },
  },
  {
    eyebrow: "TALLER DE MARCA",
    title: "Haz que una sección parezca realmente parte de tu negocio.",
    subtitle:
      "Vamos a combinar identidad, imagen, mensaje y CTA en una sola sección.",
    type: "exercise",
    time: "20 min",
    instructor: {
      explain:
        "Cada estudiante elige una sección importante y la rehace usando su identidad visual, una imagen con propósito, un título orientado al valor y CTA claro.",
      example:
        "Puedes trabajar un hero completo en vivo antes de que los alumnos hagan el suyo.",
      question:
        "Al terminar, pregúntales: ¿esta sección podría pertenecer a cualquier empresa o se siente claramente como mi marca?",
      advance:
        "Avanza cuando todos tengan una sección coherente con su identidad.",
    },
  },
  {
    eyebrow: "CIERRE · CLASE 05",
    title: "Cuando todo comunica lo mismo, la marca comienza a sentirse real.",
    subtitle:
      "En la próxima clase agregaremos funciones que convierten la página en una herramienta útil para el negocio.",
    type: "finish",
    time: "6 min",
    instructor: {
      explain:
        "Recapitula identidad, logo, paleta, imágenes, prompts visuales, contenido, beneficios y CTA.",
      example:
        "Recuérdales que una marca fuerte se construye mediante muchas decisiones pequeñas consistentes.",
      question:
        "¿Qué elemento de su página cambió más después de pensar desde la perspectiva de marca?",
      advance:
        "Cierra preparando la transición hacia funciones reales de negocio en Clase 6.",
    },
  },
];

function SlideContent({ type }: { type: string }) {
  if (type === "hero") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["01", "Reconocer", "Crear una identidad consistente."],
          ["02", "Comunicar", "Usar imágenes y textos con intención."],
          ["03", "Conectar", "Convertir la marca en una experiencia."],
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

  if (type === "identity") {
    return (
      <div className="grid gap-4 md:grid-cols-5">
        {[
          ["Logo", "Identidad"],
          ["Color", "Atmósfera"],
          ["Tipografía", "Personalidad"],
          ["Imágenes", "Emoción"],
          ["Mensajes", "Voz"],
        ].map(([title, text], index) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-white p-5 text-center"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 font-black text-blue-700">
              {index + 1}
            </div>
            <h3 className="mt-4 font-bold">{title}</h3>
            <p className="mt-2 text-sm text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "logo") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] border border-slate-200 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            DEMASIADO
          </p>

          <div className="mt-7 flex h-44 items-center justify-center rounded-2xl bg-slate-100">
            <div className="text-5xl font-black text-blue-700">LOGO</div>
          </div>

          <p className="mt-5 text-slate-500">
            El logo domina toda la experiencia.
          </p>
        </div>

        <div className="rounded-[30px] border border-blue-200 bg-white p-7 shadow-xl shadow-blue-900/5">
          <p className="text-xs font-black uppercase tracking-widest text-blue-600">
            INTEGRADO
          </p>

          <div className="mt-7 flex h-44 items-start rounded-2xl bg-blue-50 p-5">
            <div className="text-xl font-black text-blue-700">LOGO</div>
          </div>

          <p className="mt-5 text-slate-500">
            Tiene presencia sin competir con el contenido.
          </p>
        </div>
      </div>
    );
  }

  if (type === "palette") {
    return (
      <div className="rounded-[34px] bg-[#07152f] p-8 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
          PALETA SIMPLE
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-5">
          <div className="rounded-3xl bg-[#07152f] p-5 ring-1 ring-white/20">
            <div className="h-16 rounded-2xl bg-[#07152f] ring-1 ring-white/20" />
            <p className="mt-4 font-bold">Principal</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <div className="h-16 rounded-2xl bg-blue-700" />
            <p className="mt-4 font-bold">Acción</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <div className="h-16 rounded-2xl bg-cyan-400" />
            <p className="mt-4 font-bold">Acento</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <div className="h-16 rounded-2xl bg-white" />
            <p className="mt-4 font-bold">Fondo</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <div className="h-16 rounded-2xl bg-slate-300" />
            <p className="mt-4 font-bold">Neutro</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "images") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Producto", "Muestra lo que vendes."],
          ["Resultado", "Muestra lo que consigues."],
          ["Emoción", "Muestra cómo quieres que se sienta."],
        ].map(([title, text], index) => (
          <div
            key={title}
            className="overflow-hidden rounded-[30px] border border-slate-200 bg-white"
          >
            <div className="flex h-40 items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 text-5xl">
              {index === 0 ? "📦" : index === 1 ? "✨" : "❤️"}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-slate-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "aiImages") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] bg-slate-950 p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            VAGO
          </p>

          <p className="mt-5 text-2xl font-bold">
            “Crea una persona trabajando en una computadora.”
          </p>
        </div>

        <div className="rounded-[30px] bg-gradient-to-br from-blue-700 to-cyan-500 p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-blue-100">
            DIRIGIDO
          </p>

          <p className="mt-5 text-lg font-bold leading-8">
            Dueño de pequeño negocio revisando su nueva página web en laptop,
            oficina moderna, luz natural, composición premium y espacio libre a
            la izquierda para colocar texto.
          </p>
        </div>
      </div>
    );
  }

  if (type === "content") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            CARACTERÍSTICA
          </p>

          <p className="mt-5 text-2xl font-bold">
            Formulario de contacto.
          </p>

          <p className="mt-4 text-slate-500">
            Describe lo que tiene la página.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-7">
          <p className="text-xs font-black uppercase tracking-widest text-blue-600">
            BENEFICIO
          </p>

          <p className="mt-5 text-2xl font-bold">
            Tus clientes pueden contactarte directamente desde tu web.
          </p>

          <p className="mt-4 text-slate-600">
            Explica el valor que recibe la persona.
          </p>
        </div>
      </div>
    );
  }

  if (type === "cta") {
    return (
      <div className="rounded-[34px] border border-blue-100 bg-white p-8">
        <p className="text-xs font-black uppercase tracking-widest text-blue-600">
          UNA IDEA → UNA ACCIÓN
        </p>

        <h3 className="mt-6 text-4xl font-black">
          Convierte visitantes en conversaciones.
        </h3>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">
          Haz que la siguiente acción sea clara y fácil de entender.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <button className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white">
            Solicitar cotización
          </button>

          <button className="rounded-full border border-slate-300 px-6 py-3 font-bold">
            Ver servicios
          </button>
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
          Construye una sección completamente alineada con tu marca.
        </h3>

        <div className="mt-7 grid gap-3 md:grid-cols-5">
          {["Logo", "Color", "Imagen", "Mensaje", "CTA"].map((item) => (
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
        Preparación para Clase 6
      </p>

      <h3 className="mt-4 text-3xl font-black">
        Tu web ya tiene identidad. Ahora vamos a convertirla en una herramienta.
      </h3>

      <p className="mt-4 max-w-3xl text-blue-50">
        En la próxima clase agregaremos funciones reales para comunicación,
        contacto y operación del negocio.
      </p>
    </div>
  );
}

export default function ClaseCinco() {
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
              Clase 05
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