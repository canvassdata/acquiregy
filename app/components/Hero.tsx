"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect } from "react"

export default function Hero() {
  useEffect(() => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
      if (href && href.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll as unknown as EventListener)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll as unknown as EventListener)
      })
    }
  }, [])

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-8">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Influence{" "}
              </span>
              <span className="text-foreground">Purchase Behavior</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We help marketplace merchants use influencers at scale to boost monthly revenue up to 5X in 60 days.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="#algorithm">
                <Button
                  size="lg"
                  className="group text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[4/3]">
              <div className="absolute inset-0 rounded-2xl bg-white shadow-2xl p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202025-01-27%20at%2011.56.26%20PM-UC69vkumnh4fT4DBhw93AKYUfO05Ts.png"
                  alt="Analytics dashboard showing growth metrics"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
