import Header from "./components/Header"
import Hero from "./components/Hero"
import WhatWeDo from "./components/WhatWeDo"
import SalesProcess from "./components/SalesProcess"
import Performance from "./components/Performance"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <SalesProcess />
        <Performance />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
