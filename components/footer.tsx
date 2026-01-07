import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, Youtube } from "lucide-react"
import { getTranslation, type Locale } from "@/lib/i18n"

export function Footer({ lang }: { lang: Locale }) {
  const t = getTranslation(lang)

  const footerLinks = [
    { name: t.nav.home, href: `/${lang}` },
    { name: t.nav.about, href: `/${lang}/hakkimizda` },
    { name: t.nav.projects, href: `/${lang}/projeler` },
    { name: t.nav.contact, href: `/${lang}/iletisim` },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Cyprus Terra Cube"
                width={200}
                height={67}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 leading-relaxed max-w-md mb-6">{t.footer.description}</p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/cyprusterracube"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-primary p-3 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/cyprusterracube"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-primary p-3 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@cyprusterracube"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-primary p-3 rounded-lg transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/80 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">{t.footer.contact}</h3>
            <ul className="space-y-3 text-background/80">
              <li>
                <div className="font-semibold text-background mb-1">{t.contact.email}</div>
                <a href="mailto:info@cyprusterracube.com" className="hover:text-primary transition-colors">
                  info@cyprusterracube.com
                </a>
              </li>
              <li>
                <div className="font-semibold text-background mb-1">{t.contact.location}</div>
                <p>{t.contact.address}</p>
                <p>{lang === "tr" ? "Geçitkale, KKTC" : "Geçitkale, TRNC"}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2026 Cyprus Terra Cube. {t.footer.rights}</p>
        </div>
        <div className=" pt-2 text-center text-sm text-background/60">
          <p>Prowed by <a  className="cursor-pointer text-white" href="https://fuatcanagcabay.com" target="_blank" rel="noopener noreferrer">fuatcanagcabay.com</a> · <a href="https://instagram.com/herseykibris" className="cursor-pointer text-white" target="_blank" rel="noopener noreferrer">instagram.com/herseykibris</a></p>
        </div>
      </div>
    </footer>
  )
}
