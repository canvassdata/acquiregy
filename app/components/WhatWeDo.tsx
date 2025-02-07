import { Rocket } from "lucide-react"

export default function WhatWeDo() {
  return (
    <section id="algorithm" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      <div className="container max-w-6xl mx-auto space-y-16 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-1 mb-8 rounded-full bg-primary/10 text-primary backdrop-blur-sm">
            <span className="text-sm font-medium px-4">Supercharge Your Growth</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            We Help Train The Algorithm To Love Your Listings
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            With a passionate roster of top influencers in all major categories, we work with you to boost external
            traffic, generate verified-purchaser reviews, and build better rankings.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Rocket className="h-40 w-40 text-primary animate-float" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent blur-2xl -z-10" />
              <div className="h-24 w-1 bg-gradient-to-b from-primary/50 to-transparent absolute left-1/2 -translate-x-1/2 -bottom-20" />
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="p-6 bg-primary/5 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed mb-4">
                With day-1 sales, you'll start to skyrocket your listings.
              </h3>
              <p className="text-lg md:text-xl leading-relaxed">
                In as little as 60 days, you'll see up to{" "}
                <span className="font-semibold text-primary">5X monthly revenue growth</span>,
                <span className="font-semibold text-primary"> 7X best seller rankings</span> increases, and
                <span className="font-semibold text-primary"> 1st page positions</span> in search results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

