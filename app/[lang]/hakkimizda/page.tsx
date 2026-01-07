import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslation, type Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslation(lang)

  return {
    title: `${t.about.title} | Cyprus Terra Cube`,
    description: t.about.description,
    alternates: {
      canonical: `/${lang}/hakkimizda`,
      languages: {
        tr: "/tr/hakkimizda",
        en: "/en/hakkimizda",
      },
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const t = getTranslation(lang)

  return (
    <>
      <Header lang={lang} />
      <main className="pt-24">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">{t.about.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{t.about.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-3xl font-serif font-bold mb-4 text-primary">{t.about.mission}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.about.missionText}</p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-3xl font-serif font-bold mb-4 text-primary">{t.about.vision}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.about.visionText}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  )
}
