"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.slice(1)
      const element = document.getElementById(id!)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    // Only add smooth scrolling on the home page
    if (isHomePage) {
      const links = document.querySelectorAll('a[href^="#"]')
      links.forEach((link) => {
        link.addEventListener("click", handleScroll)
      })

      return () => {
        links.forEach((link) => {
          link.removeEventListener("click", handleScroll)
        })
      }
    }
  }, [isHomePage])

  // Prefix for section links - use "/" for non-home pages to link back to home
  const linkPrefix = isHomePage ? "" : "/"

  return (
    <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border/40">
      <div className="container flex items-center justify-between">
        <Link href="/" className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_transparent_background_1600x326-lL6ZfJaMfPf2F0j7ztRchmyEgLhT9M.png"
            alt="Acquiregy"
            width={200}
            height={41}
            priority
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href={`${linkPrefix}#algorithm`} className="text-muted-foreground hover:text-primary transition-colors">
            What We Do
          </Link>
          <Link
            href={`${linkPrefix}#sales-process`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Process
          </Link>
          <Link
            href={`${linkPrefix}#performance`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Performance
          </Link>
        </nav>
        <Link href="mailto:hello@acquiregy.com">
          <Button className="bg-yellow-400 text-primary hover:bg-yellow-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Contact Us
          </Button>
        </Link>
      </div>
    </header>
  )
}
