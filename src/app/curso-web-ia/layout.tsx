import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Curso Web con IA Online | Next Studio Academy";
const description = "Aprende a crear y publicar una página web profesional con inteligencia artificial. Curso online en español del 28 de agosto al 4 de septiembre de 2026.";
const canonical = "https://www.nextstudio.agency/es/curso-web-ia";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical, languages: { es: canonical } },
  openGraph: { title, description, url: canonical, type: "website", siteName: "Next Studio Academy", locale: "es_US" },
  twitter: { card: "summary_large_image", title, description },
};

export default function CursoWebIALayout({ children }: { children: ReactNode }) {
  return children;
}
