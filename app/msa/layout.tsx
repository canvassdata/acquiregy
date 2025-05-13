import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Master Service Agreement | Acquiregy",
  description: "Terms and conditions for Acquiregy's influencer marketing services.",
}

export default function MSALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
