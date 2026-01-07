import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslation, type Locale } from "@/lib/i18n"
import { ProjectGallery } from "@/components/project-gallery"
import type { Metadata } from "next"

const projects = [
  {
    id: "bedri-artug-cetiner",
    name: "Prof. Dr. Bedri Artuğ Çetiner",
    imageCount: 4,
  },
  {
    id: "salahi-atalar",
    name: "Salahi Atalar",
    imageCount: 7,
  },
  {
    id: "terracube-ofis",
    name: "Terracube Ofis",
    imageCount: 5,
  },
  {
    id: "mehmet-ali-tuncbilek",
    name: "Dr. Mehmet Ali Tunçbilek'e Ait Butik Otel",
    imageCount: 4,
  },
  {
    id: "oyap-akdeniz",
    name: "Oyap Akdeniz Ekolojik Tatil Köyü",
    imageCount: 4,
  },
]

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslation(lang)

  return {
    title: `${t.projects.title} | Cyprus Terra Cube`,
    description: t.projects.subtitle,
    alternates: {
      canonical: `/${lang}/projeler`,
      languages: {
        tr: "/tr/projeler",
        en: "/en/projeler",
      },
    },
  }
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const t = getTranslation(lang)

  return (
    <>
      <Header lang={lang} />
      <main className="pt-24">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">{t.projects.title}</h1>
              <p className="text-xl text-muted-foreground">{t.projects.subtitle}</p>
            </div>

            <div className="space-y-24">
              {projects.map((project) => (
                <div key={project.id} className="border-b border-border pb-16 last:border-0">
                  <ProjectGallery project={project} lang={lang} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  )
}
