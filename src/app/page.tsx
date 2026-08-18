import Image from "next/image";
import Link from "next/link";

const lessons = [
  {
    number: "01",
    title: "De cero a creador digital",
    description:
      "Entiende cómo funciona una página web y prepara tu proyecto.",
    duration: "2 horas",
    href: "/curso/clase-1",
  },
  {
    number: "02",
    title: "Domina la Inteligencia Artificial",
    description:
      "Aprende a comunicarte con la IA y crear prompts profesionales.",
    duration: "2 horas",
    href: "/curso/clase-2",
  },
  {
    number: "03",
    title: "Construye tu primera página",
    description:
      "De la idea al navegador usando Visual Studio Code e IA.",
    duration: "2 horas",
    href: "/curso/clase-3",
  },
  {
    number: "04",
    title: "Diseño Web Premium",
    description:
      "Convierte una página básica en una experiencia profesional.",
    duration: "2 horas",
    href: "/curso/clase-4",
  },
  {
    number: "05",
    title: "Marca, imágenes y contenido",
    description:
      "Crea identidad visual, imágenes y contenido que comunique valor.",
    duration: "2 horas",
    href: "/curso/clase-5",
  },
  {
    number: "06",
    title: "Funciones para negocios",
    description:
      "WhatsApp, formularios, mapas, QR, contactos y más.",
    duration: "2 horas",
    href: "/curso/clase-6",
  },
  {
    number: "07",
    title: "Publica tu página",
    description:
      "GitHub, Vercel, dominio y publicación de tu proyecto.",
    duration: "2 horas",
    href: "/curso/clase-7",
  },
  {
    number: "08",
    title: "Convierte tu habilidad en dinero",
    description:
      "Aprende a presentar, vender, cobrar y entregar proyectos.",
    duration: "2 horas",
    href: "/curso/clase-8",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7faff] text-slate-950">
      <header className="border-b border-slate-200/70 bg-white/90">
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Academy
              </p>

              <p className="text-sm font-medium text-slate-500">
                Formación Digital
              </p>
            </div>
          </div>

          <Link
            href="/curso/clase-1"
            className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-bold text-blue-800 transition hover:bg-blue-100"
          >
            Modo Instructor
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute left-1/3 top-20 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-800 shadow-sm">
              Curso Profesional · Next Studio Academy
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Crea tu Página Web

              <span className="mt-2 block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                con Inteligencia Artificial
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Aprende paso a paso cómo transformar una idea en una página web
              profesional, publicarla en Internet y convertir esta habilidad en
              una oportunidad real de negocio.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "8 clases",
                "16 horas",
                "Proyecto real",
                "Nivel inicial",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#programa"
                className="rounded-full bg-blue-700 px-7 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Ver programa del curso ↓
              </a>

              <Link
                href="/curso/clase-1"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                Presentar curso
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[32px] border border-white bg-white/80 p-3 shadow-2xl shadow-blue-900/10 backdrop-blur">
              <div className="rounded-[26px] bg-gradient-to-br from-[#07152f] via-[#0c2d66] to-[#1267dc] p-8 text-white">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
                    Tu recorrido
                  </span>

                  <span className="text-sm text-blue-100">
                    01 → 08
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-sm font-semibold text-cyan-200">
                    PROYECTO FINAL
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight">
                    Tu primera página profesional publicada.
                  </h2>

                  <p className="mt-4 leading-7 text-blue-100">
                    No terminarás solamente con teoría. Construirás un proyecto
                    real durante el curso.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <strong className="text-2xl">8</strong>
                    <p className="mt-1 text-xs text-blue-100">Módulos</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <strong className="text-2xl">16h</strong>
                    <p className="mt-1 text-xs text-blue-100">Práctica</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <strong className="text-2xl">1</strong>
                    <p className="mt-1 text-xs text-blue-100">Web real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="programa"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"
      >
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Programa
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Tu recorrido, clase por clase.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Cada módulo combina explicación, demostración y práctica. La meta
            es avanzar sobre un proyecto real desde la primera clase.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {lessons.map((lesson) => (
            <div
              key={lesson.number}
              className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-700">
                  {lesson.number}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-slate-950">
                      {lesson.title}
                    </h3>

                    <span className="whitespace-nowrap text-xs font-semibold text-slate-400">
                      {lesson.duration}
                    </span>
                  </div>

                  <p className="mt-3 leading-7 text-slate-600">
                    {lesson.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href={lesson.href}
                      className="text-sm font-bold text-blue-700 transition hover:text-blue-900"
                    >
                      {lesson.number === "01"
                        ? "Comenzar clase"
                        : "Abrir clase"}
                    </Link>

                    <span className="text-xl text-blue-700 transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="overflow-hidden rounded-[36px] bg-[#07152f] px-8 py-12 text-white md:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Resultado final
          </p>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black md:text-4xl">
                No vienes solamente a aprender.

                <span className="block text-blue-300">
                  Vienes a construir.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                Al terminar tendrás una página profesional publicada y el
                proceso necesario para volver a hacerlo.
              </p>
            </div>

            <Link
              href="/curso/clase-1"
              className="w-fit rounded-full bg-white px-7 py-4 font-bold text-[#07152f] transition hover:bg-blue-50"
            >
              Comenzar Clase 1 →
            </Link>
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