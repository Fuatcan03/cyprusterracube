import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"

export function CTA({ lang }: { lang: Locale }) {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          {lang === "tr" ? "Birlikte Çalışmaya Hazır mısınız?" : "Ready to Work Together?"}
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90">
          {lang === "tr"
            ? "Bizimle bir proje oluşturun! Ekolojik yapınız için hemen teklif alın."
            : "Create a project with us! Get a quote for your ecological structure now."}
        </p>
        <Button size="lg" variant="secondary" asChild className="text-lg">
          <Link href={`/${lang}/iletisim`}>{lang === "tr" ? "Fiyat Teklifi İste" : "Request a Quote"}</Link>
        </Button>
      </div>
    </section>
  )
}
