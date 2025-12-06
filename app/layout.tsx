import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "AL-HUDA Educational Consultancy Services",
  description:
    "AL-HUDA Educational Consultancy offers free admission guidance, career counseling, scholarship assistance & placement support for Medical, Engineering, MBA & more. 5000+ colleges, 200+ courses. Call 9578599785.",
  keywords: [
    "educational consultancy",
    "admission guidance",
    "career counseling",
    "MBBS admission",
    "engineering admission",
    "MBA admission",
    "scholarship guidance",
    "Coimbatore colleges",
    "free education consulting",
  ],
  authors: [{ name: "AL-HUDA Educational Consultancy" }],
  openGraph: {
    title: "AL-HUDA Educational Consultancy | Your Gateway to Academic Excellence",
    description:
      "Expert educational consulting services - Free admission guidance, career counseling & scholarship support. 5000+ partner colleges across India.",
    type: "website",
    locale: "en_IN",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0E74D2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd_ED_logo_final-removebg-preview-EmZWbBGyrR3ayEYVNsJmqvnvgjhtt3.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>

      <body className="font-sans antialiased">
        <Header />
        {/* 🔵 MAIN CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  )
}
