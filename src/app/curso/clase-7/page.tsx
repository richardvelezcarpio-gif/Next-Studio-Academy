"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "CLASE 07 · PUBLICACIÓN",
    title: "Hoy tu página deja localhost y sale al mundo.",
    subtitle:
      "Vamos a entender el proceso completo para guardar nuestro proyecto, publicarlo y conectarlo a un dominio profesional.",
    type: "hero",
    time: "8 min",
    instructor: {
      explain:
        "Abre la clase explicando que hasta ahora el proyecto funciona localmente. Hoy aprenderán cómo convertirlo en una página accesible desde cualquier lugar.",
      example:
        "Muestra localhost:3000 y después una página pública real. Explica que visualmente pueden ser iguales, pero una solamente existe en nuestra computadora y la otra está disponible en Internet.",
      question:
        "¿Qué creen que necesitamos para que alguien en otra ciudad pueda abrir nuestra página?",
      advance:
        "Avanza cuando comprendan claramente la diferencia entre local y público.",
    },
  },
  {
    eyebrow: "EL RECORRIDO",
    title: "Cuatro etapas llevan nuestro proyecto a Internet.",
    subtitle:
      "Visual Studio Code, GitHub, Vercel y dominio cumplen funciones diferentes.",
    type: "journey",
    time: "10 min",
    instructor: {
      explain:
        "Presenta el flujo completo antes de entrar en detalles. Visual Studio es donde trabajamos, GitHub guarda el proyecto, Vercel lo publica y el dominio proporciona la dirección profesional.",
      example:
        "Utiliza una analogía: VS Code es el taller, GitHub es el almacén seguro, Vercel es el local abierto al público y el dominio es la dirección del negocio.",
      question:
        "¿Cuál de estas herramientas creen que es responsable de mostrar realmente la página en Internet?",
      advance:
        "Avanza cuando puedan explicar la función básica de cada herramienta.",
    },
  },
  {
    eyebrow: "GITHUB",
    title: "GitHub guarda la historia de nuestro proyecto.",
    subtitle:
      "No es solamente un lugar donde guardar archivos. Nos permite controlar versiones y trabajar con mayor seguridad.",
    type: "github",
    time: "15 min",
    instructor: {
      explain:
        "Introduce repository, commit y push sin entrar demasiado en teoría de Git. El objetivo es que comprendan el flujo práctico.",
      example:
        "Explica commit como tomar una fotografía del estado del proyecto y push como enviar esa fotografía al repositorio remoto.",
      question:
        "¿Qué ventaja tenemos si algo se rompe después de haber guardado versiones anteriores?",
      advance:
        "Avanza cuando entiendan repository, commit y push a nivel práctico.",
    },
  },
  {
    eyebrow: "ANTES DE PUBLICAR",
    title: "Primero comprobamos que el proyecto puede construirse.",
    subtitle:
      "Una página que funciona en localhost todavía puede tener errores que aparecen durante el build.",
    type: "build",
    time: "12 min",
    instructor: {
      explain:
        "Enseña npm run build y explica que esta prueba intenta preparar la versión que utilizará producción.",
      example:
        "Ejecuta el comando en Terminal. Si termina correctamente, muestra el mensaje de éxito. Si aparece un error, explica que debemos corregirlo antes de publicar.",
      question:
        "¿Por qué creen que es mejor descubrir un error aquí que después de entregar la página al cliente?",
      advance:
        "No avances hasta explicar claramente la diferencia entre npm run dev y npm run build.",
    },
  },
  {
    eyebrow: "VERCEL",
    title: "Vercel convierte nuestro código en una página pública.",
    subtitle:
      "Conectamos el repositorio y obtenemos una URL que cualquier persona puede visitar.",
    type: "vercel",
    time: "15 min",
    instructor: {
      explain:
        "Explica el proceso conceptual: conectar GitHub, seleccionar repositorio, detectar Next.js y desplegar.",
      example:
        "Muestra cómo después del deployment obtenemos una dirección parecida a proyecto.vercel.app.",
      question:
        "¿Qué diferencia existe entre la URL de Vercel y localhost?",
      advance:
        "Avanza cuando comprendan que Vercel aloja y publica la aplicación.",
    },
  },
  {
    eyebrow: "DOMINIO",
    title: "La URL técnica se convierte en una dirección de marca.",
    subtitle:
      "El dominio hace que la página sea más fácil de recordar, compartir y presentar profesionalmente.",
    type: "domain",
    time: "12 min",
    instructor: {
      explain:
        "Explica dominio sin profundizar demasiado en DNS. Diferencia dominio comprado, dominio de Vercel y conexión entre ambos.",
      example:
        "proyecto.vercel.app puede convertirse en www.minegocio.com después de conectar el dominio.",
      question:
        "¿Cuál de esas dos direcciones transmitiría mayor confianza al presentar un negocio?",
      advance:
        "Avanza cuando entiendan que comprar el dominio y crear la página son procesos separados.",
    },
  },
  {
    eyebrow: "DNS",
    title: "El dominio necesita saber dónde vive la página.",
    subtitle:
      "Los registros DNS conectan el nombre del dominio con el servicio que publica nuestro sitio.",
    type: "dns",
    time: "12 min",
    instructor: {
      explain:
        "Explica DNS utilizando una analogía sencilla. No conviertas esta parte en una clase técnica avanzada. Lo importante es entender por qué Vercel puede pedir registros específicos.",
      example:
        "Compara DNS con un directorio: alguien escribe el nombre del negocio y el sistema sabe a qué servidor debe dirigirlo.",
      question:
        "Si compramos un dominio pero nunca lo conectamos al proyecto, ¿qué ocurrirá?",
      advance:
        "Avanza cuando comprendan que los valores DNS deben copiarse exactamente como indica el proveedor.",
    },
  },
  {
    eyebrow: "ERRORES COMUNES",
    title: "Publicado no significa terminado.",
    subtitle:
      "Ahora debemos comprobar imágenes, enlaces, móvil, formularios y acciones reales.",
    type: "errors",
    time: "15 min",
    instructor: {
      explain:
        "Presenta los problemas comunes después de publicar. Enseña a diagnosticar en lugar de entrar en pánico.",
      example:
        "Una imagen funciona localmente pero no en producción por diferencia entre mayúsculas y minúsculas. Un botón puede apuntar a localhost por error.",
      question:
        "¿Qué partes de la página probarían primero después del deployment?",
      advance:
        "Avanza cuando entiendan que siempre debe existir una revisión de producción.",
    },
  },
  {
    eyebrow: "CHECKLIST DE ENTREGA",
    title: "Antes de decir “terminado”, recorremos la página como cliente.",
    subtitle:
      "Desktop, móvil, botones, formularios, dominio y contenido deben pasar una última revisión.",
    type: "checklist",
    time: "15 min",
    instructor: {
      explain:
        "Haz una revisión real. Abre la página pública y recórrela de arriba abajo. Después revisa móvil y ejecuta las acciones principales.",
      example:
        "Prueba navegación, WhatsApp, teléfono, formulario, imágenes, enlaces externos, logo y dominio.",
      question:
        "¿Confiarían en entregar un proyecto sin haber probado personalmente cada botón importante?",
      advance:
        "Avanza únicamente después de explicar el concepto de QA o control de calidad.",
    },
  },
  {
    eyebrow: "CIERRE · CLASE 07",
    title: "Ya no tienes un proyecto. Tienes una página publicada.",
    subtitle:
      "En la última clase vamos a aprender cómo convertir esta nueva habilidad en un servicio que puedes presentar, cobrar y vender.",
    type: "finish",
    time: "6 min",
    instructor: {
      explain:
        "Recapitula localhost, GitHub, build, Vercel, dominio, DNS y QA. Destaca el logro: el alumno puede llevar una idea desde su computadora hasta Internet.",
      example:
        "Pide que cada alumno abra su URL pública desde su teléfono. Ese momento debe sentirse como un logro importante del curso.",
      question:
        "¿Cómo cambia la percepción de su proyecto ahora que pueden enviar un enlace real a otra persona?",
      advance:
        "Cierra preparando la Clase 8: producto, precio, cliente, propuesta, cobro, producción y entrega.",
    },
  },
];

function SlideContent({ type }: { type: string }) {
  if (type === "hero") {
    return (
      <div className="rounded-[36px] bg-[#07152f] p-8 text-white md:p-10">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
          HOY HACEMOS EL SALTO
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="w-full rounded-3xl bg-white/10 p-6 md:w-[40%]">
            <p className="text-xs font-bold text-blue-200">ANTES</p>
            <p className="mt-3 text-2xl font-black">localhost:3000</p>
            <p className="mt-2 text-sm text-blue-100">
              Solo en tu computadora
            </p>
          </div>

          <div className="text-4xl font-black text-cyan-300">→</div>

          <div className="w-full rounded-3xl bg-white p-6 text-slate-950 md:w-[45%]">
            <p className="text-xs font-bold text-blue-600">DESPUÉS</p>
            <p className="mt-3 text-2xl font-black">www.tunegocio.com</p>
            <p className="mt-2 text-sm text-slate-500">
              Disponible para el mundo
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "journey") {
    return (
      <div className="grid gap-3 md:grid-cols-4">
        {[
          ["01", "VS Code", "Construimos"],
          ["02", "GitHub", "Guardamos"],
          ["03", "Vercel", "Publicamos"],
          ["04", "Dominio", "Presentamos"],
        ].map(([number, title, text]) => (
          <div
            key={number}
            className="relative rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm"
          >
            <span className="text-xs font-black text-blue-600">{number}</span>

            <h3 className="mt-5 text-2xl font-black">{title}</h3>

            <p className="mt-2 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "github") {
    return (
      <div className="rounded-[34px] bg-[#0d1117] p-8 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-slate-400">
          FLUJO GIT
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <span className="font-mono text-sm text-blue-300">01</span>
            <h3 className="mt-4 text-xl font-black">Cambios</h3>
            <p className="mt-2 text-sm text-slate-400">
              Modificamos nuestro proyecto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <span className="font-mono text-sm text-blue-300">02</span>
            <h3 className="mt-4 text-xl font-black">Commit</h3>
            <p className="mt-2 text-sm text-slate-400">
              Guardamos una versión.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <span className="font-mono text-sm text-blue-300">03</span>
            <h3 className="mt-4 text-xl font-black">Push</h3>
            <p className="mt-2 text-sm text-slate-400">
              La enviamos a GitHub.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-black/40 p-5 font-mono text-sm text-green-300">
          git add .
          <br />
          git commit -m &quot;prepare website for launch&quot;
          <br />
          git push
        </div>
      </div>
    );
  }

  if (type === "build") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] bg-slate-950 p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            DESARROLLO
          </p>

          <div className="mt-6 rounded-2xl bg-black/40 p-5 font-mono text-xl text-blue-300">
            npm run dev
          </div>

          <p className="mt-5 leading-7 text-slate-400">
            Trabajamos y vemos cambios mientras construimos.
          </p>
        </div>

        <div className="rounded-[30px] bg-gradient-to-br from-blue-700 to-cyan-500 p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-blue-100">
            PRODUCCIÓN
          </p>

          <div className="mt-6 rounded-2xl bg-white/10 p-5 font-mono text-xl">
            npm run build
          </div>

          <p className="mt-5 leading-7 text-blue-50">
            Comprobamos que el proyecto pueda prepararse correctamente para
            producción.
          </p>
        </div>
      </div>
    );
  }

  if (type === "vercel") {
    return (
      <div className="rounded-[34px] border border-slate-200 bg-white p-8">
        <p className="text-xs font-black uppercase tracking-widest text-blue-600">
          DEPLOYMENT
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
          {[
            "GitHub",
            "→",
            "Import Project",
            "→",
            "Build",
            "→",
            "READY",
          ].map((item, index) =>
            item === "→" ? (
              <span
                key={index}
                className="text-2xl font-black text-blue-400"
              >
                →
              </span>
            ) : (
              <div
                key={index}
                className={`rounded-2xl px-6 py-5 font-black ${
                  item === "READY"
                    ? "bg-green-50 text-green-700"
                    : "bg-blue-50 text-blue-800"
                }`}
              >
                {item}
              </div>
            ),
          )}
        </div>

        <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
          <span className="text-sm text-slate-400">Production URL</span>
          <p className="mt-2 font-mono text-lg text-cyan-300">
            https://mi-proyecto.vercel.app
          </p>
        </div>
      </div>
    );
  }

  if (type === "domain") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] border border-slate-200 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            URL TÉCNICA
          </p>

          <p className="mt-6 break-all font-mono text-xl font-bold text-slate-700">
            mi-negocio-website.vercel.app
          </p>

          <p className="mt-5 text-slate-500">
            Funciona y permite publicar el proyecto.
          </p>
        </div>

        <div className="rounded-[30px] bg-[#07152f] p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
            DOMINIO PROFESIONAL
          </p>

          <p className="mt-6 break-all text-3xl font-black">
            www.minegocio.com
          </p>

          <p className="mt-5 text-blue-100">
            Fácil de recordar, compartir y presentar.
          </p>
        </div>
      </div>
    );
  }

  if (type === "dns") {
    return (
      <div className="rounded-[34px] bg-gradient-to-br from-[#07152f] to-blue-800 p-8 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
          DNS · LA CONEXIÓN
        </p>

        <div className="mt-8 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <div className="rounded-2xl bg-white/10 p-6 text-center">
            <p className="text-sm text-blue-200">PERSONA ESCRIBE</p>
            <p className="mt-3 font-black">minegocio.com</p>
          </div>

          <div className="text-center text-2xl font-black text-cyan-300">
            →
          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center">
            <p className="text-sm text-blue-200">DNS INDICA</p>
            <p className="mt-3 font-black">Dónde buscar</p>
          </div>

          <div className="text-center text-2xl font-black text-cyan-300">
            →
          </div>

          <div className="rounded-2xl bg-white p-6 text-center text-slate-950">
            <p className="text-sm text-blue-600">VERCEL ENTREGA</p>
            <p className="mt-3 font-black">La página</p>
          </div>
        </div>

        <p className="mt-7 max-w-3xl leading-7 text-blue-100">
          No necesitamos memorizar todos los registros. Necesitamos entender la
          conexión y copiar exactamente los valores requeridos.
        </p>
      </div>
    );
  }

  if (type === "errors") {
    const errors = [
      ["Imagen no aparece", "Revisa nombre, ruta y mayúsculas."],
      ["Botón no funciona", "Comprueba el enlace final."],
      ["Dominio no abre", "Revisa DNS y configuración."],
      ["Formulario falla", "Haz una prueba real de envío."],
      ["Móvil se rompe", "Revisa responsive en pantalla pequeña."],
      ["Link usa localhost", "Cámbialo por la URL pública."],
    ];

    return (
      <div className="grid gap-3 md:grid-cols-3">
        {errors.map(([title, text], index) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-white p-5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-sm font-black text-amber-700">
              !
            </div>

            <h3 className="mt-4 font-black">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>

            <p className="mt-4 text-xs font-black text-slate-300">
              0{index + 1}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "checklist") {
    const checks = [
      "Desktop",
      "Mobile",
      "Navegación",
      "Imágenes",
      "WhatsApp",
      "Formularios",
      "Links",
      "Dominio",
    ];

    return (
      <div className="rounded-[34px] border border-blue-100 bg-white p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-blue-600">
              QA · CONTROL DE CALIDAD
            </p>

            <h3 className="mt-4 text-3xl font-black">
              Prueba antes de entregar.
            </h3>
          </div>

          <span className="rounded-full bg-green-50 px-5 py-2 text-sm font-black text-green-700">
            8 verificaciones
          </span>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {checks.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 p-4 font-bold"
            >
              <span className="mr-2 text-green-600">✓</span>
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
        ÚLTIMA CLASE
      </p>

      <h3 className="mt-4 max-w-4xl text-3xl font-black">
        Ya sabes construir y publicar. Ahora vamos a aprender cómo cobrar por
        esa capacidad.
      </h3>

      <p className="mt-5 max-w-3xl leading-7 text-blue-50">
        Clase 8: cómo convertir tu conocimiento en un servicio, conseguir
        clientes, crear propuestas, definir precios, cobrar y entregar
        profesionalmente.
      </p>
    </div>
  );
}

export default function ClaseSiete() {
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
              Clase 07
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