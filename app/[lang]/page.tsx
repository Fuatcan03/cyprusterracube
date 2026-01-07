import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import type { Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  return {
    alternates: {
      canonical: `/${lang}`,
      languages: {
        tr: "/tr",
        en: "/en",
      },
    },
  }
}

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params

  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <Services lang={lang} />
        <CTA lang={lang} />
        <FAQ lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
