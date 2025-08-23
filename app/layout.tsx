import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import AboutPage from "./about/page"
import { usePathname } from "next/navigation"

export const metadata: Metadata = {
  title: "Hiyasha Solar Systems",
  description:
    "Leading solar energy solutions provider offering residential and commercial solar installations, maintenance, and consultation services.",
  icons: {
    icon: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1753778237/logo_2_oxi3zj.png",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Use client-side navigation to determine current path
  // This must be a client component to use hooks
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
