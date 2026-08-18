"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "CLASE 08 · DE HABILIDAD A NEGOCIO",
    title: "Ya sabes crear. Ahora aprende a convertir esa habilidad en ingresos.",
    subtitle:
      "Una página web puede ser más que un proyecto: puede convertirse en un servicio profesional que resuelve problemas reales.",
    type: "hero",
    time: "8 min",
    instructor: {
      explain:
        "Abre recordando todo el recorrido. El alumno comenzó entendiendo qué era una página y ahora puede construir, diseñar, conectar funciones y publicar. La última pieza es aprender a comercializar esa capacidad.",
      example:
        "Explica que el cliente no compra HTML, React, Next.js o inteligencia artificial. Compra una solución: presencia profesional, contactos, ventas, reservas o una mejor operación.",
      question:
        "¿Qué problema real podría resolver hoy su nueva habilidad para un pequeño negocio?",
      advance:
        "Avanza cuando comprendan que vender una web significa vender una solución, no código.",
    },
  },
  {
    eyebrow: "TU SERVICIO",
    title: "No vendas “una página”. Define exactamente qué estás ofreciendo.",
    subtitle:
      "Un servicio claro es más fácil de explicar, cotizar, producir y entregar.",
    type: "service",
    time: "12 min",
    instructor: {
      explain:
        "Enseña a convertir la habilidad técnica en un producto comercial. Deben definir qué incluye, qué no incluye y cuál es el resultado final.",
      example:
        "Website para pequeño negocio: diseño responsive, Home, servicios, contacto, WhatsApp, formulario, dominio conectado y publicación.",
      question:
        "Si un cliente les pregunta ahora mismo qué incluye su servicio, ¿podrían responder en treinta segundos?",
      advance:
        "Avanza cuando cada alumno pueda describir su servicio de manera simple.",
    },
  },
  {
    eyebrow: "PRECIO",
    title: "No cobres solamente por las horas frente a la computadora.",
    subtitle:
      "El precio debe considerar alcance, dificultad, tiempo, herramientas, revisiones y valor para el cliente.",
    type: "pricing",
    time: "15 min",
    instructor: {
      explain:
        "Aclara que no existe un precio universal. Enseña los factores que deben considerar y evita prometer tarifas específicas como regla para todos los mercados.",
      example:
        "Una landing sencilla no tiene el mismo alcance que una web de múltiples páginas con formularios, automatización, tienda o funciones personalizadas.",
      question:
        "¿Qué ocurre si aceptamos un proyecto sin definir primero qué incluye?",
      advance:
        "Avanza cuando comprendan que alcance y precio deben definirse juntos.",
    },
  },
  {
    eyebrow: "PAQUETES",
    title: "Los paquetes facilitan la decisión del cliente.",
    subtitle:
      "En lugar de improvisar cada cotización, crea niveles de servicio que puedas adaptar.",
    type: "packages",
    time: "12 min",
    instructor: {
      explain:
        "Presenta tres niveles como ejercicio educativo. Aclara que nombres, precios y contenido pueden adaptarse al mercado y especialidad de cada alumno.",
      example:
        "Inicial para presencia básica, Business para una solución comercial más completa y Pro para funciones avanzadas.",
      question:
        "¿Qué diferencia clara tendría que existir para justificar pasar de un paquete al siguiente?",
      advance:
        "Avanza cuando comprendan que cada nivel debe agregar valor, no solamente páginas.",
    },
  },
  {
    eyebrow: "PRIMEROS CLIENTES",
    title: "Tu primer mercado puede estar mucho más cerca de lo que imaginas.",
    subtitle:
      "Empieza buscando problemas digitales que ya puedes resolver.",
    type: "clients",
    time: "15 min",
    instructor: {
      explain:
        "Enseña prospección sencilla y ética. Buscar negocios con páginas antiguas, sin web, mala experiencia móvil o información difícil de encontrar.",
      example:
        "Restaurantes, contratistas, profesionales independientes, salones, academias, agentes inmobiliarios y negocios locales pueden necesitar soluciones digitales.",
      question:
        "¿Qué cinco negocios conocen personalmente que podrían mejorar su presencia digital?",
      advance:
        "Avanza cuando cada estudiante tenga una lista inicial de prospectos reales.",
    },
  },
  {
    eyebrow: "LA CONVERSACIÓN",
    title: "Primero entiende el problema. Después presenta la solución.",
    subtitle:
      "Una buena venta comienza haciendo preguntas, no hablando durante veinte minutos.",
    type: "sales",
    time: "15 min",
    instructor: {
      explain:
        "Enseña una conversación consultiva sencilla. Preguntar qué hace el negocio, cómo llegan los clientes, qué necesitan mejorar y qué acción desean generar desde la web.",
      example:
        "En lugar de decir 'te hago una web con IA', pregunta: '¿Cómo llegan hoy nuevos clientes y qué te gustaría que pudieran hacer desde tu página?'",
      question:
        "¿Qué información necesitarían conocer antes de recomendar una solución?",
      advance:
        "Avanza cuando entiendan que primero diagnosticamos y después ofrecemos.",
    },
  },
  {
    eyebrow: "PROPUESTA + PAGO",
    title: "Lo hablado debe convertirse en un acuerdo claro.",
    subtitle:
      "Alcance, precio, pagos, tiempos y revisiones deben quedar definidos antes de comenzar.",
    type: "proposal",
    time: "15 min",
    instructor: {
      explain:
        "Explica que una propuesta protege a ambas partes. Debe documentar qué se hará, precio, forma de pago, responsabilidades y límites de revisiones.",
      example:
        "Proyecto: website de cinco secciones. Incluye responsive, formulario y publicación. Dos rondas de cambios. Pago según los términos acordados antes de iniciar producción.",
      question:
        "¿Por qué es peligroso comenzar un proyecto basándose únicamente en una conversación informal?",
      advance:
        "Avanza cuando comprendan que alcance y condiciones deben quedar por escrito.",
    },
  },
  {
    eyebrow: "ONBOARDING",
    title: "Después de vender, necesitas información para producir.",
    subtitle:
      "Un proceso organizado evita perseguir al cliente por logos, fotos y textos durante semanas.",
    type: "onboarding",
    time: "12 min",
    instructor: {
      explain:
        "Introduce onboarding. Enseña a pedir toda la información necesaria mediante una lista o formulario antes de comenzar la producción principal.",
      example:
        "Logo, nombre del negocio, teléfono, email, servicios, textos, fotos, redes sociales, colores, dominio y referencias visuales.",
      question:
        "¿Qué ocurre con el tiempo de entrega cuando el cliente tarda una semana en enviar las imágenes?",
      advance:
        "Avanza cuando comprendan que producción depende también de materiales del cliente.",
    },
  },
  {
    eyebrow: "CAMBIOS Y REVISIONES",
    title: "Un proyecto sin límites puede convertirse en un proyecto infinito.",
    subtitle:
      "Define revisiones, centraliza comentarios y diferencia corrección de nuevo alcance.",
    type: "revisions",
    time: "12 min",
    instructor: {
      explain:
        "Enseña a establecer rondas de revisión. Una corrección dentro del alcance es diferente a agregar una nueva página o funcionalidad que nunca se acordó.",
      example:
        "Cambiar una fotografía puede ser una revisión. Agregar una tienda completa cuando el proyecto original era informativo es nuevo alcance.",
      question:
        "¿Cómo responderían si el cliente pide una función grande que nunca estuvo incluida?",
      advance:
        "Avanza cuando comprendan que pueden cotizar trabajo adicional sin crear conflicto.",
    },
  },
  {
    eyebrow: "ENTREGA PROFESIONAL",
    title: "No termines con “aquí está el link”. Entrega una solución.",
    subtitle:
      "Revisa, demuestra, explica y deja claro qué ocurre después de la publicación.",
    type: "delivery",
    time: "12 min",
    instructor: {
      explain:
        "Explica una entrega profesional: QA, presentación al cliente, aprobación, publicación final, accesos correspondientes y explicación de mantenimiento cuando aplique.",
      example:
        "Abre la web con el cliente, recorre desktop y móvil, prueba funciones y explica cómo se manejarán futuros cambios.",
      question:
        "¿Qué impresión genera una entrega organizada comparada con simplemente enviar una URL por mensaje?",
      advance:
        "Avanza cuando comprendan que la experiencia del cliente continúa hasta después de publicar.",
    },
  },
  {
    eyebrow: "TALLER FINAL",
    title: "Construye tu primera oferta comercial.",
    subtitle:
      "Antes de terminar el curso vas a definir qué vendes, para quién, qué incluye y cómo lo presentarás.",
    type: "exercise",
    time: "20 min",
    instructor: {
      explain:
        "Da tiempo para que cada estudiante construya una oferta real utilizando el proyecto que desarrolló durante el curso como primera demostración de su capacidad.",
      example:
        "Servicio: Website para negocios locales. Cliente ideal: contratistas. Incluye diseño responsive, servicios, galería, WhatsApp, formulario y publicación.",
      question:
        "¿Podrían presentar esta oferta mañana a un negocio real?",
      advance:
        "No cierres el taller hasta que cada alumno pueda explicar verbalmente su oferta.",
    },
  },
  {
    eyebrow: "CIERRE · CLASE 08",
    title: "No necesitas saberlo todo para comenzar.",
    subtitle:
      "Necesitas resolver un problema real, entregar un buen trabajo y continuar aprendiendo.",
    type: "finish",
    time: "10 min",
    instructor: {
      explain:
        "Cierra conectando todo el recorrido. El objetivo del curso nunca fue memorizar código. Fue demostrar que pueden aprender, construir, resolver problemas y crear algo que otra persona puede utilizar.",
      example:
        "Recuerda el punto de partida de la Clase 1 y compáralo con el resultado actual: proyecto diseñado, funcional, publicado y convertido en una oferta.",
      question:
        "¿Cuál será la primera acción concreta que realizarán después de terminar este curso?",
      advance:
        "Finaliza celebrando el proyecto terminado y pidiendo que definan una acción para las próximas 48 horas.",
    },
  },
];

function SlideContent({ type }: { type: string }) {
  if (type === "hero") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["01", "Habilidad", "Sabes construir una solución."],
          ["02", "Servicio", "La conviertes en una oferta clara."],
          ["03", "Cliente", "Resuelves un problema y generas valor."],
        ].map(([number, title, text]) => (
          <div
            key={number}
            className="rounded-[30px] border border-blue-100 bg-white p-7 shadow-sm"
          >
            <span className="text-sm font-black text-blue-600">{number}</span>
            <h3 className="mt-5 text-2xl font-black">{title}</h3>
            <p className="mt-3 leading-7 text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "service") {
    return (
      <div className="rounded-[34px] bg-[#07152f] p-8 text-white">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
          DE HABILIDAD A PRODUCTO
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["Problema", "¿Qué necesita el cliente?"],
            ["Solución", "¿Qué vas a construir?"],
            ["Alcance", "¿Qué está incluido?"],
            ["Resultado", "¿Qué recibirá al final?"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/10 p-5"
            >
              <h3 className="font-black text-cyan-200">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-white p-5 text-slate-900">
          <strong>No vendas código.</strong>{" "}
          Vende una solución que el cliente pueda entender y valorar.
        </div>
      </div>
    );
  }

  if (type === "pricing") {
    return (
      <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-7">
          <p className="text-xs font-black uppercase tracking-widest text-blue-600">
            EL PRECIO DEPENDE DEL PROYECTO
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Alcance",
              "Complejidad",
              "Tiempo",
              "Herramientas",
              "Revisiones",
              "Valor generado",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-blue-50 p-4 font-bold text-blue-950"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-gradient-to-br from-blue-700 to-cyan-500 p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-blue-100">
            REGLA IMPORTANTE
          </p>

          <h3 className="mt-6 text-3xl font-black leading-tight">
            Primero define el alcance.
            <span className="block text-blue-100">
              Después define el precio.
            </span>
          </h3>

          <p className="mt-5 leading-7 text-blue-50">
            Si el proyecto cambia, el precio y el tiempo también pueden cambiar.
          </p>
        </div>
      </div>
    );
  }

  if (type === "packages") {
    const packages = [
      {
        title: "STARTER",
        subtitle: "Presencia digital",
        items: ["Página profesional", "Responsive", "Contacto", "Publicación"],
      },
      {
        title: "BUSINESS",
        subtitle: "Generación de oportunidades",
        items: ["Más contenido", "WhatsApp", "Formulario", "Integraciones"],
      },
      {
        title: "PRO",
        subtitle: "Solución avanzada",
        items: ["Funciones especiales", "Automatización", "Integraciones", "Soporte"],
      },
    ];

    return (
      <div className="grid gap-4 md:grid-cols-3">
        {packages.map((pack, index) => (
          <div
            key={pack.title}
            className={`rounded-[30px] p-7 ${
              index === 1
                ? "bg-[#07152f] text-white shadow-2xl shadow-blue-900/15"
                : "border border-slate-200 bg-white"
            }`}
          >
            <p
              className={`text-xs font-black tracking-widest ${
                index === 1 ? "text-cyan-300" : "text-blue-600"
              }`}
            >
              {pack.title}
            </p>

            <h3 className="mt-4 text-2xl font-black">{pack.subtitle}</h3>

            <div className="mt-6 space-y-3">
              {pack.items.map((item) => (
                <p
                  key={item}
                  className={index === 1 ? "text-blue-100" : "text-slate-500"}
                >
                  ✓ {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "clients") {
    const clients = [
      "Restaurantes",
      "Contratistas",
      "Realtors",
      "Salones",
      "Profesionales",
      "Academias",
      "Tiendas",
      "Negocios locales",
    ];

    return (
      <div className="rounded-[34px] border border-blue-100 bg-white p-8">
        <p className="text-xs font-black uppercase tracking-widest text-blue-600">
          OBSERVA TU MERCADO
        </p>

        <h3 className="mt-4 max-w-3xl text-3xl font-black">
          Busca negocios que tengan un problema digital que ya sabes resolver.
        </h3>

        <div className="mt-8 flex flex-wrap gap-3">
          {clients.map((client) => (
            <span
              key={client}
              className="rounded-full bg-blue-50 px-5 py-3 font-bold text-blue-900"
            >
              {client}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-slate-600">
          Sin página · Página antigua · Mala experiencia móvil · Contacto
          difícil · Información desactualizada
        </div>
      </div>
    );
  }

  if (type === "sales") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] border border-red-100 bg-red-50 p-7">
          <p className="text-xs font-black uppercase tracking-widest text-red-600">
            EVITA
          </p>

          <p className="mt-5 text-2xl font-black text-slate-900">
            “Yo hago páginas con inteligencia artificial.”
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Hablar primero de la herramienta no descubre qué necesita el
            cliente.
          </p>
        </div>

        <div className="rounded-[30px] border border-blue-200 bg-blue-50 p-7">
          <p className="text-xs font-black uppercase tracking-widest text-blue-700">
            PREGUNTA
          </p>

          <p className="mt-5 text-2xl font-black text-slate-900">
            “¿Cómo llegan hoy sus clientes y qué le gustaría mejorar?”
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Primero entiende. Después recomienda una solución.
          </p>
        </div>
      </div>
    );
  }

  if (type === "proposal") {
    return (
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] bg-[#07152f] p-7 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
            PROPUESTA
          </p>

          <h3 className="mt-5 text-3xl font-black">
            Lo que se acuerda debe quedar claro.
          </h3>

          <p className="mt-5 leading-7 text-blue-100">
            Una propuesta profesional reduce confusión y ayuda a controlar el
            proyecto.
          </p>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["01", "Alcance"],
              ["02", "Entregables"],
              ["03", "Precio"],
              ["04", "Forma de pago"],
              ["05", "Tiempo estimado"],
              ["06", "Revisiones"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-2xl bg-slate-50 p-4"
              >
                <span className="text-xs font-black text-blue-600">
                  {number}
                </span>
                <p className="mt-2 font-black">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "onboarding") {
    const items = [
      "Logo",
      "Información",
      "Servicios",
      "Textos",
      "Fotografías",
      "Contacto",
      "Redes",
      "Dominio",
    ];

    return (
      <div className="rounded-[34px] bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white">
        <p className="text-xs font-black uppercase tracking-widest text-blue-100">
          ONBOARDING DEL CLIENTE
        </p>

        <h3 className="mt-4 text-3xl font-black">
          Reúne los materiales antes de construir.
        </h3>

        <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/10 p-4 font-bold"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "revisions") {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[30px] border border-green-100 bg-green-50 p-7">
          <p className="text-xs font-black uppercase tracking-widest text-green-700">
            REVISIÓN
          </p>

          <h3 className="mt-5 text-2xl font-black">Dentro del alcance</h3>

          <div className="mt-5 space-y-3 text-slate-600">
            <p>✓ Cambiar fotografía</p>
            <p>✓ Corregir un texto</p>
            <p>✓ Ajustar información</p>
          </div>
        </div>

        <div className="rounded-[30px] border border-amber-100 bg-amber-50 p-7">
          <p className="text-xs font-black uppercase tracking-widest text-amber-700">
            NUEVO ALCANCE
          </p>

          <h3 className="mt-5 text-2xl font-black">Trabajo adicional</h3>

          <div className="mt-5 space-y-3 text-slate-600">
            <p>+ Nueva página</p>
            <p>+ Tienda completa</p>
            <p>+ Función no acordada</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "delivery") {
    return (
      <div className="rounded-[34px] border border-blue-100 bg-white p-8">
        <p className="text-xs font-black uppercase tracking-widest text-blue-600">
          ENTREGA
        </p>

        <div className="mt-7 grid gap-3 md:grid-cols-5">
          {[
            ["01", "QA"],
            ["02", "Presentar"],
            ["03", "Aprobar"],
            ["04", "Publicar"],
            ["05", "Entregar"],
          ].map(([number, title]) => (
            <div
              key={number}
              className="rounded-2xl bg-blue-50 p-5"
            >
              <span className="text-xs font-black text-blue-600">
                {number}
              </span>
              <p className="mt-3 font-black text-blue-950">{title}</p>
            </div>
          ))}
        </div>

        <p className="mt-7 max-w-3xl leading-7 text-slate-500">
          El cliente debe sentir que recibió un proyecto terminado, revisado y
          profesionalmente presentado.
        </p>
      </div>
    );
  }

  if (type === "exercise") {
    return (
      <div className="rounded-[36px] bg-[#07152f] p-8 text-white">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
          TU PRIMERA OFERTA
        </p>

        <h3 className="mt-4 text-3xl font-black">
          Antes de salir de esta clase, define estas cinco cosas.
        </h3>

        <div className="mt-8 grid gap-3 md:grid-cols-5">
          {[
            ["01", "Cliente ideal"],
            ["02", "Problema"],
            ["03", "Solución"],
            ["04", "Qué incluye"],
            ["05", "Próximo paso"],
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

        <div className="mt-6 rounded-2xl bg-white p-5 font-bold text-slate-900">
          Tu proyecto del curso puede convertirse en la primera pieza de tu
          portafolio.
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#07152f] via-blue-800 to-cyan-500 p-8 text-white md:p-10">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
        CURSO COMPLETADO
      </p>

      <h3 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
        No necesitas saberlo todo para comenzar.
      </h3>

      <p className="mt-5 max-w-3xl text-xl leading-8 text-blue-50">
        Necesitas resolver un problema real, entregar un buen trabajo y
        continuar aprendiendo.
      </p>

      <div className="mt-9 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {[
          "Aprendiste",
          "Construiste",
          "Publicaste",
          "Ahora puedes ofrecer",
        ].map((item, index) => (
          <div
            key={item}
            className="rounded-2xl bg-white/10 p-5"
          >
            <span className="text-xs font-black text-cyan-200">
              0{index + 1}
            </span>
            <p className="mt-3 font-black">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClaseOcho() {
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
              Clase 08
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

          {current === slides.length - 1 ? (
            <Link
              href="/"
              className="rounded-full bg-[#07152f] px-6 py-3 font-bold text-white shadow-lg"
            >
              Finalizar curso ✓
            </Link>
          ) : (
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
            >
              Siguiente →
            </button>
          )}
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