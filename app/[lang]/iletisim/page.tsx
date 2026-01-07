import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslation, type Locale } from "@/lib/i18n"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslation(lang)

  return {
    title: `${t.contact.title} | Cyprus Terra Cube`,
    description: t.contact.subtitle,
    alternates: {
      canonical: `/${lang}/iletisim`,
      languages: {
        tr: "/tr/iletisim",
        en: "/en/iletisim",
      },
    },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const t = getTranslation(lang)

  return (
    <>
      <Header lang={lang} />
      <main className="pt-24">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{t.contact.title}</h1>
              <p className="text-xl text-muted-foreground">{t.contact.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.email}</h3>
                    <a href="mailto:info@cyprusterracube.com" className="text-muted-foreground hover:text-primary">
                      info@cyprusterracube.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.phone}</h3>
                    <p className="text-muted-foreground">+90 (533) XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.location}</h3>
                    <p className="text-muted-foreground">{t.contact.address}</p>
                    <p className="text-muted-foreground mt-1">
                      {lang === "tr" ? "Geçitkale, KKTC" : "Geçitkale, TRNC"}
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-xl overflow-hidden border border-border h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.8446732289645!2d33.739!3d35.186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDExJzA5LjYiTiAzM8KwNDQnMjAuNCJF!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <form className="space-y-6">
                  <div>
                    <Input placeholder={t.contact.form.name} className="h-12" />
                  </div>
                  <div>
                    <Input type="email" placeholder={t.contact.form.email} className="h-12" />
                  </div>
                  <div>
                    <Input type="tel" placeholder={t.contact.form.phone} className="h-12" />
                  </div>
                  <div>
                    <Textarea placeholder={t.contact.form.message} rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-12">
                    {t.contact.form.send}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  )
}
