import { redirect } from "next/navigation"
import { defaultLocale } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function RootPage() {
  redirect(`/${defaultLocale}`)

  return (
    <>
      <Header lang={defaultLocale} />
      <main>
        <Hero lang={defaultLocale} />
        <Features lang={defaultLocale} />
        <Services lang={defaultLocale} />
        <CTA lang={defaultLocale} />
        <FAQ lang={defaultLocale} />
      </main>
      <Footer lang={defaultLocale} />
    </>
  )
}
