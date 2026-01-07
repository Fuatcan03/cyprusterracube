"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTranslation, type Locale } from "@/lib/i18n"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header({ lang }: { lang: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = getTranslation(lang)

  const navigation = [
    { name: t.nav.home, href: `/${lang}` },
    { name: t.nav.about, href: `/${lang}/hakkimizda` },
    { name: t.nav.projects, href: `/${lang}/projeler` },
    { name: t.nav.contact, href: `/${lang}/iletisim` },
  ]

  const toggleLanguage = (newLang: Locale) => {
    const currentPath = window.location.pathname
    const newPath = currentPath.replace(`/${lang}`, `/${newLang}`)
    window.location.href = newPath
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center">
          <Image src="/images/logo.png" alt="Cyprus Terra Cube" width={180} height={60} className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Globe className="w-4 h-4" />
                {lang.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => toggleLanguage("tr")}>🇹🇷 Türkçe</DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("en")}>🇬🇧 English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="lg" className="h-11">
            <Link href={`/${lang}/iletisim`}>{t.nav.getQuote}</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-base font-semibold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex gap-2 pt-4 border-t border-border">
              <Button
                variant={lang === "tr" ? "default" : "outline"}
                size="sm"
                onClick={() => toggleLanguage("tr")}
                className="flex-1"
              >
                🇹🇷 TR
              </Button>
              <Button
                variant={lang === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => toggleLanguage("en")}
                className="flex-1"
              >
                🇬🇧 EN
              </Button>
            </div>

            <Button asChild className="w-full h-12 text-base">
              <Link href={`/${lang}/iletisim`} onClick={() => setMobileMenuOpen(false)}>
                {t.nav.getQuote}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
