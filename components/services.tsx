import Image from "next/image"
import { Building, Hammer } from "lucide-react"
import type { Locale } from "@/lib/i18n"

export function Services({ lang }: { lang: Locale }) {
  const services = [
    {
      icon: Building,
      title: lang === "tr" ? "Mimari Projelendirme" : "Architectural Design",
      description:
        lang === "tr"
          ? "Hayalinizdeki ekolojik yapıları mimari ekibimizle size özel tasarlıyoruz."
          : "We design ecological structures tailored to your needs with our architectural team.",
      image: "/architectural-design-planning-sustainable-building.jpg",
    },
    {
      icon: Hammer,
      title: lang === "tr" ? "Proje Uygulama" : "Project Implementation",
      description:
        lang === "tr"
          ? "Temelden itibaren terracubeleri kullanarak bütün projeyi baştan sona uyguluyoruz."
          : "We implement the entire project from foundation using terra cubes.",
      image: "/construction-site-terra-cube-building-process.jpg",
    },
  ]

  const highlights =
    lang === "tr"
      ? ["Sürdürülebilirlik", "Proje Zamanında Taahhüt", "Modern Teknoloji", "Son Tasarımlar"]
      : ["Sustainability", "On-Time Project Delivery", "Modern Technology", "Latest Designs"]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{lang === "tr" ? "Hizmetlerimiz" : "Our Services"}</h2>
          <p className="text-xl text-muted-foreground">
            {lang === "tr" ? "En iyi uygulamaları takip ediyoruz" : "Following best practices"}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className={`relative h-80 rounded-xl overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div key={index} className="bg-accent/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">✓</div>
              <div className="font-medium">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
