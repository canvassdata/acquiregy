import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Acquiregy - Influencer Marketing for Marketplace Merchants",
  description:
    "Boost your marketplace listings with our micro-influencer network. Achieve up to 5X revenue growth in 60 days.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dot-pattern`}>{children}</body>
    </html>
  )
}
