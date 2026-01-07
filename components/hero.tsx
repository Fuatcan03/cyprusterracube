import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getTranslation, type Locale } from "@/lib/i18n"

export function Hero({ lang }: { lang: Locale }) {
  const t = getTranslation(lang)

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.hero.subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-balance">{t.hero.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">{t.hero.description1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.hero.description2}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="text-lg h-14 px-8">
                <Link href={`/${lang}/projeler`}>
                  {t.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8 bg-transparent">
                <Link href={`/${lang}/hakkimizda`}>{t.hero.learnMore}</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/modern-sustainable-terra-cube-building-natural-mat.jpg"
              alt="Terra Cube Ekolojik Yapı"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
