import { Leaf, Zap, Shield, Recycle } from "lucide-react"
import { getTranslation, type Locale } from "@/lib/i18n"

export function Features({ lang }: { lang: Locale }) {
  const t = getTranslation(lang)

  const features = [
    {
      icon: Leaf,
      title: lang === "tr" ? "Tamamen Doğal" : "100% Natural",
      description:
        lang === "tr"
          ? "Doğal malzemelerden üretilir, zararlı katkı içermez."
          : "Made from natural materials with no harmful additives.",
    },
    {
      icon: Zap,
      title: lang === "tr" ? "Enerji Verimliliği" : "Energy Efficiency",
      description:
        lang === "tr"
          ? "Diğer yapı malzemelerinden daha düşük enerji tüketimi."
          : "Lower energy consumption than other building materials.",
    },
    {
      icon: Shield,
      title: lang === "tr" ? "Depreme Dayanıklı" : "Earthquake Resistant",
      description:
        lang === "tr"
          ? "Betonarme yapılara göre 2 kat daha dayanıklı."
          : "2x more durable than reinforced concrete structures.",
    },
    {
      icon: Recycle,
      title: lang === "tr" ? "Geri Dönüştürülebilir" : "Recyclable",
      description:
        lang === "tr"
          ? "Hizmet ömrü sonunda tamamen yeniden kullanılabilir."
          : "Completely reusable at the end of its service life.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === "tr" ? "Terra Cube Nedir?" : "What is Terra Cube?"}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">{t.hero.description3}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-20 bg-background rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-border">
          <p className="text-lg text-center leading-relaxed text-muted-foreground">{t.hero.description4}</p>
        </div>
      </div>
    </section>
  )
}
