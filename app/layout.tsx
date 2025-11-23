import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "CASACUSIA KIDS 2025 - Evento para chicos con hipoacusia",
  description:
    "Un evento gratuito para que chicos y chicas con hipoacusia se diviertan, jueguen y vean que no son los únicos. 30 de Noviembre, Parque de la Innovación.",
  generator: "v0.app",
  icons: {
    icon: "/images/isotipo-color.png",
    shortcut: "/images/isotipo-color.png",
    apple: "/images/isotipo-color.png",
  },
    openGraph: {
    title: "CASACUSIA Kids",
    description: "Una tarde mágica donde los chicos con hipoacusia se encuentran y descubren que no son los únicos 💙",
    url: "https://kids.casacusia.org",
    siteName: "CASACUSIA",
    images: [
      {
        url: "images/kids-casacusia-share.png",
        width: 1200,
        height: 630,
        alt: "CASACUSIA Kids - Comunidad y Juego",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
