import type React from "react"
import { locales, type Locale } from "@/lib/i18n"

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const isEnglish = lang === "en"

  return {
    alternates: {
      canonical: `/${lang}`,
      languages: {
        tr: "/tr",
        en: "/en",
      },
    },
    openGraph: {
      locale: isEnglish ? "en_US" : "tr_TR",
      alternateLocale: isEnglish ? "tr_TR" : "en_US",
    },
  }
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}) {
  return <>{children}</>
}
