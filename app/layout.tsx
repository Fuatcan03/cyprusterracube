import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Libre_Baskerville, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cyprus Terra Cube | Sustainable Ecological Building Materials | Sürdürülebilir Ekolojik Yapı Malzemeleri",
    description:
      "20 years of architectural experience with innovation in traditional adobe. Build ecological, earthquake-resistant and energy-efficient structures with Terra Cube. | 20 yıllık mimari deneyimimizle geleneksel kerpiçe inovasyon kattık.",
    keywords:
      "terra cube, adobe, ecological building, sustainable construction, TRNC, North Cyprus, natural building material, energy efficient house, kerpiç, ekolojik yapı, sürdürülebilir inşaat, KKTC",
    generator: "Next.js",
    applicationName: "Cyprus Terra Cube",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Cyprus Terra Cube" }],
    creator: "Cyprus Terra Cube",
    publisher: "Cyprus Terra Cube",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://cyprusterracube.com"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      alternateLocale: "en_US",
      url: "https://cyprusterracube.com",
      title: "Cyprus Terra Cube | Sustainable Ecological Building Materials | Sürdürülebilir Ekolojik Yapı Malzemeleri",
      description:
        "20 years of architectural experience with innovation in traditional adobe. Build ecological, earthquake-resistant and energy-efficient structures with Terra Cube. | 20 yıllık mimari deneyimimizle geleneksel kerpiçe inovasyon kattık.",
      siteName: "Cyprus Terra Cube",
    },
    twitter: {
      card: "summary_large_image",
      title: "Cyprus Terra Cube | Sustainable Ecological Building Materials | Sürdürülebilir Ekolojik Yapı Malzemeleri",
      description: "Ekolojik, depreme dayanıklı ve enerji verimli yapı malzemeleri",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Site Doğrulama Meta Etiketi */}
        <meta
          name="google-site-verification"
          content="vOyzOkk8haMZpVkH3CO79yn0VVRLC0AfIJZbi98utyM"
        />
      </head>
      <body
        className={`${inter.variable} ${libreBaskerville.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
