"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "CLASE 06 · FUNCIONES PARA NEGOCIOS",
    title: "Una web profesional no solo informa. También trabaja para el negocio.",
    subtitle:
      "Hoy conectaremos acciones reales para que un visitante pueda contactar, preguntar, ubicarse y convertirse en una oportunidad.",
    type: "hero",
    time: "8 min",
    instructor: {
      explain:
        "Explica la evolución del proyecto. Primero construimos la página, después mejoramos su diseño y marca. Ahora vamos a convertirla en una herramienta que permita al visitante realizar acciones reales.",
      example:
        "Una persona puede entrar a la página, entender el servicio y después escribir por WhatsApp, llamar, enviar un formulario o encontrar el negocio en Maps.",
      question:
        "¿Qué acción sería la más valiosa que un visitante pudiera realizar desde su página?",
      advance:
        "Avanza cuando comprendan que una función debe existir porque ayuda al usuario o al negocio.",
    },
  },
  {
    eyebrow: "CONVERSIÓN",
    title: "Cada página necesita una acción principal.",
    subtitle:
      "Antes de agregar botones y funciones debemos decidir qué queremos que haga el visitante.",
    type: "conversion",
    time: "10 min",
    instructor: {
      explain:
        "Introduce el concepto de conversión de forma sencilla. Una conversión ocurre cuando el visitante realiza una acción importante para el negocio.",
      example:
        "Para un contratista puede ser solicitar un estimado. Para un terapeuta, agendar una sesión. Para un restaurante, llamar o ver el menú.",
      question:
        "¿Cuál sería la conversión principal del proyecto de cada alumno?",
      advance:
        "Avanza cuando cada estudiante tenga una acción principal definida.",
    },
  },
  {
    eyebrow: "WHATSAPP",
    title: "Convierte un botón en una conversación.",
    subtitle:
      "WhatsApp puede eliminar pasos y permitir que el cliente contacte al negocio inmediatamente.",
    type: "whatsapp",
    time: "15 min",
    instructor: {
      explain:
        "Enseña cómo funciona un enlace wa.me y explica que podemos incluir un mensaje previamente escrito para facilitar el contacto.",
      example:
        "Crea un botón Solicitar información que abra WhatsApp con un mensaje como: Hola, vi su página web y quiero información sobre sus servicios.",
      question:
        "¿Qué mensaje inicial ayudaría a identificar inmediatamente por qué está escribiendo ese prospecto?",
      advance:
        "Avanza cuando los alumnos comprendan número, enlace y mensaje predefinido.",
    },
  },
  {
    eyebrow: "LLAMADA + EMAIL",
    title: "Reduce la distancia entre interés y contacto.",
    subtitle:
      "Desde un teléfono podemos permitir llamadas y correos con un solo toque.",
    type: "contact",
    time: "12 min",
    instructor: {
      explain:
        "Explica los protocolos tel: y mailto:. No necesitan memorizar código complejo; necesitan entender que el navegador puede abrir acciones externas.",
      example:
        "Un botón Llamar ahora puede abrir directamente la aplicación de teléfono en móvil.",
      question:
        "¿En qué tipo de negocio tendría más sentido priorizar llamada sobre email?",
      advance:
        "Avanza cuando hayan probado al menos uno de los enlaces.",
    },
  },
  {
    eyebrow: "FORMULARIOS",
    title: "Un formulario convierte información en un lead.",
    subtitle:
      "No pidas veinte datos cuando necesitas cinco para comenzar una conversación.",
    type: "forms",
    time: "15 min",
    instructor: {
      explain:
        "Explica la estructura de un formulario de contacto o cotización. Enseña que cada campo adicional genera fricción, por lo que debemos pedir solamente información útil.",
      example:
        "Nombre, teléfono o email, servicio de interés y mensaje pueden ser suficientes para una primera conversación.",
      question:
        "¿Qué información realmente necesita el negocio antes de contactar a un prospecto?",
      advance:
        "Avanza cuando cada alumno pueda definir los campos de su formulario.",
    },
  },
  {
    eyebrow: "UBICACIÓN",
    title: "Si el cliente debe visitarte, haz que encontrarte sea fácil.",
    subtitle:
      "Google Maps puede convertir una dirección escrita en una experiencia interactiva.",
    type: "maps",
    time: "10 min",
    instructor: {
      explain:
        "Explica cuándo tiene sentido integrar un mapa: tiendas, restaurantes, oficinas, academias y negocios con ubicación física.",
      example:
        "Muestra cómo una dirección puede acompañarse de mapa y botón Cómo llegar.",
      question:
        "¿Su proyecto necesita mostrar ubicación física o sería información innecesaria?",
      advance:
        "Avanza cuando comprendan que no todas las funciones deben instalarse en todas las páginas.",
    },
  },
  {
    eyebrow: "QR CODE",
    title: "Un QR conecta el mundo físico con tu página.",
    subtitle:
      "Tarjetas, flyers, vitrinas, banners y productos impresos pueden llevar tráfico directamente a una experiencia digital.",
    type: "qr",
    time: "10 min",
    instructor: {
      explain:
        "Explica que el QR normalmente contiene una URL. Al escanearlo, el teléfono abre la página o acción relacionada.",
      example:
        "Un QR en una tarjeta de presentación puede abrir una tarjeta digital; uno en un restaurante puede abrir el menú.",
      question:
        "¿Dónde podrían colocar físicamente un QR para generar visitas a su proyecto?",
      advance:
        "Avanza cuando comprendan la relación físico → QR → URL → acción.",
    },
  },
  {
    eyebrow: "CTA INTELIGENTES",
    title: "No todos los botones tienen la misma importancia.",
    subtitle:
      "Una acción principal debe destacar. Las acciones secundarias deben acompañarla.",
    type: "cta",
    time: "10 min",
    instructor: {
      explain:
        "Explica CTA principal y secundario. Evita colocar cinco botones con el mismo peso visual porque obliga al visitante a decidir demasiado.",
      example:
        "Principal: Solicitar cotización. Secundario: Ver trabajos. WhatsApp puede permanecer como acceso flotante.",
      question:
        "Si solo pudieran dejar un botón visible en el hero, ¿cuál debería ser?",
      advance:
        "Avanza cuando hayan identificado CTA principal y secundario.",
    },
  },
  {
    eyebrow: "TALLER PRÁCTICO",
    title: "Conecta tres funciones reales a tu página.",
    subtitle:
      "Ahora dejamos de hablar de posibilidades y hacemos que el proyecto realmente responda.",
    type: "exercise",
    time: "25 min",
    instructor: {
      explain:
        "Cada alumno debe agregar tres funciones útiles. Recomienda WhatsApp o llamada, un formulario y una tercera función apropiada para su negocio.",
      example:
        "Haz en vivo un botón de WhatsApp, un botón de llamada y un pequeño formulario antes de que trabajen individualmente.",
      question:
        "Prueba cada función como si fueras un cliente. ¿La acción que ocurre después del clic es exactamente la que esperabas?",
      advance:
        "No avances hasta que hayan probado sus funciones y confirmado que los enlaces no están rotos.",
    },
  },
  {
    eyebrow: "CIERRE · CLASE 06",
    title: "Tu página ya no es solamente una presentación. Ahora puede generar acciones.",
    subtitle:
      "En la próxima clase vamos a sacar el proyecto de localhost y publicarlo en Internet.",
    type: "finish",
    time: "5 min",
    instructor: {
      explain:
        "Recapitula conversión, WhatsApp, llamada, email, formularios, Maps, QR y CTA. Refuerza que una función debe tener propósito.",
      example:
        "Haz una prueba rápida recorriendo una página como cliente: entrar, entender, hacer clic y contactar.",
      question:
        "¿Qué función agregada hoy puede producir el mayor impacto comercial en su proyecto?",
      advance:
        "Cierra explicando que en Clase 7 llegará un momento importante: la página dejará de existir solamente en su computadora.",
    },
  },
];

function SlideContent({ type }: { type: string }) {
  if (type === "hero") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["01", "Atraer", "El visitante llega a tu página."],
          ["02", "Conectar", "Encuentra una acción clara."],
          ["03", "Convertir", "Se transforma en una oportunidad."],
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

  if (type === "conversion") {
    return (
      <div className="rounded-[34px] bg-[#07152f] p-8 text-white">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
          RECORRIDO DEL VISITANTE
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {[
            ["01", "VISITA"],
            ["02", "INTERÉS"],
            ["03", "ACCIÓN"],
            ["04", "LEAD"],
          ].map(([number, title]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/10 p-5"
            >
              <span className="text-xs font-black text-cyan-300">
                {number}
              </span>

              <p className="mt-3 font-black">{title}</p>
            </div>
          ))}
        </div>

        <p className="mt-7 max-w-3xl leading-7 text-blue-100">
          El diseño llama la atención. La función permite convertir esa atención
          en una acción útil para el negocio.
        </p>
      </div>
    );
  }

  if (type === "whatsapp") {
    return (
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] bg-[#07152f] p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
            ESTRUCTURA
          </p>

          <p className="mt-6 font-mono text-lg leading-8 text-blue-100">
            https://wa.me/
            <br />
            NUMERO
            <br />
            ?text=MENSAJE
          </p>
        </div>

        <div className="rounded-[30px] border border-blue-100 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-blue-600">
            EXPERIENCIA DEL CLIENTE
          </p>

          <h3 className="mt-5 text-2xl font-black">
            ¿Necesitas información?
          </h3>

          <p className="mt-3 text-slate-500">
            Habla directamente con nuestro equipo.
          </p>

          <button
            type="button"
            className="mt-7 rounded-full bg-green-600 px-6 py-3 font-bold text-white"
          >
            Abrir WhatsApp →
          </button>
        </div>
      </div>
    );
  }

  if (type === "contact") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[30px] border border-blue-100 bg-white p-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
            ☎
          </div>

          <p className="mt-6 text-xs font-black uppercase tracking-widest text-blue-600">
            LLAMADA
          </p>

          <p className="mt-3 font-mono text-xl font-bold">
            tel:+1XXXXXXXXXX
          </p>

          <button
            type="button"
            className="mt-6 rounded-full bg-blue-700 px-6 py-3 font-bold text-white"
          >
            Llamar ahora
          </button>
        </div>

        <div className="rounded-[30px] border border-blue-100 bg-white p-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
            ✉
          </div>

          <p className="mt-6 text-xs font-black uppercase tracking-widest text-blue-600">
            EMAIL
          </p>

          <p className="mt-3 font-mono text-xl font-bold">
            mailto:info@negocio.com
          </p>

          <button
            type="button"
            className="mt-6 rounded-full border border-blue-200 px-6 py-3 font-bold text-blue-700"
          >
            Enviar email
          </button>
        </div>
      </div>
    );
  }

  if (type === "forms") {
    return (
      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            MENOS FRICCIÓN
          </p>

          <h3 className="mt-4 text-3xl font-black">
            Pide solamente lo necesario.
          </h3>

          <p className="mt-4 leading-7 text-slate-500">
            Formularios más cortos suelen ser más fáciles de completar y
            permiten iniciar la conversación rápidamente.
          </p>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl shadow-blue-900/5">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-400">
              Nombre
            </div>

            <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-400">
              Teléfono / Email
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-400">
            Servicio de interés
          </div>

          <div className="mt-3 h-24 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-400">
            Cuéntanos qué necesitas...
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-blue-700 px-5 py-3 font-bold text-white"
          >
            Enviar solicitud
          </button>
        </div>
      </div>
    );
  }

  if (type === "maps") {
    return (
      <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white">
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600">
              UBICACIÓN
            </p>

            <h3 className="mt-5 text-3xl font-black">
              Haz que encontrarte sea sencillo.
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Dirección, mapa y una acción clara para obtener indicaciones.
            </p>

            <button
              type="button"
              className="mt-7 rounded-full bg-blue-700 px-6 py-3 font-bold text-white"
            >
              Cómo llegar →
            </button>
          </div>

          <div className="flex min-h-64 items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-4xl text-white shadow-xl">
                ⌖
              </div>

              <p className="mt-5 font-black text-blue-900">
                GOOGLE MAPS
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Ubicación interactiva
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "qr") {
    return (
      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex items-center justify-center rounded-[30px] bg-[#07152f] p-8">
          <div className="rounded-3xl bg-white p-6">
            <div className="grid h-40 w-40 grid-cols-5 gap-1">
              {[
                1, 1, 0, 1, 1,
                1, 0, 1, 0, 1,
                0, 1, 1, 1, 0,
                1, 0, 1, 0, 1,
                1, 1, 0, 1, 1,
              ].map((value, index) => (
                <div
                  key={index}
                  className={value ? "bg-slate-950" : "bg-white"}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            CONEXIÓN FÍSICA + DIGITAL
          </p>

          <h3 className="mt-5 text-3xl font-black">
            Escanear → abrir → actuar.
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Tarjeta",
              "Flyer",
              "Menú",
              "Vitrina",
              "Banner",
              "Producto",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "cta") {
    return (
      <div className="rounded-[34px] border border-blue-100 bg-white p-8">
        <p className="text-xs font-black uppercase tracking-widest text-blue-600">
          JERARQUÍA DE ACCIONES
        </p>

        <h3 className="mt-5 text-3xl font-black">
          Una acción principal. Las demás acompañan.
        </h3>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="rounded-full bg-blue-700 px-7 py-4 font-black text-white shadow-lg shadow-blue-700/20"
          >
            Solicitar cotización
          </button>

          <button
            type="button"
            className="rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700"
          >
            Ver trabajos
          </button>

          <span className="text-sm font-semibold text-slate-400">
            Principal
          </span>
        </div>
      </div>
    );
  }

  if (type === "exercise") {
    return (
      <div className="rounded-[34px] bg-gradient-to-br from-[#07152f] to-blue-800 p-8 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
          TALLER PRÁCTICO
        </p>

        <h3 className="mt-4 max-w-3xl text-3xl font-black">
          Agrega tres funciones y pruébalas como si fueras tu propio cliente.
        </h3>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {[
            ["01", "Contacto", "WhatsApp, llamada o email"],
            ["02", "Captura", "Formulario de contacto"],
            ["03", "Acción extra", "Mapa, QR u otra función"],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-white/10 p-5"
            >
              <span className="text-xs font-black text-cyan-300">
                {number}
              </span>

              <p className="mt-3 text-lg font-black">
                {title}
              </p>

              <p className="mt-2 text-sm text-blue-100">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-white/10 p-5 font-bold text-blue-50">
          ✓ No basta con verlo bonito. Haz clic y comprueba que realmente
          funciona.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[34px] bg-gradient-to-r from-blue-700 to-cyan-500 p-8 text-white">
      <p className="text-sm font-black uppercase tracking-widest text-blue-100">
        Próxima parada
      </p>

      <h3 className="mt-4 max-w-4xl text-3xl font-black">
        La página funciona. Ahora vamos a sacarla de tu computadora y ponerla
        frente al mundo.
      </h3>

      <p className="mt-5 max-w-3xl leading-7 text-blue-50">
        Clase 7: GitHub, Vercel, dominio, publicación y las verificaciones que
        debemos hacer antes de entregar una web.
      </p>
    </div>
  );
}

export default function ClaseSeis() {
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
              Clase 06
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