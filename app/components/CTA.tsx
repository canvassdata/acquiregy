"use client"

import { AnalysisForm } from "./AnalysisForm"

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground">
      <div className="container text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Ready to Influence Purchase Behavior?</h2>
        <p className="text-xl mb-8">
          Influencers will transform your business – establishing overall brand trust, demonstrating innovativeness or
          an unforgettable experience. Our informed influencer marketing programs are designed to hit on those drivers,
          and scale your business.
        </p>
        <AnalysisForm />
      </div>
    </section>
  )
}
