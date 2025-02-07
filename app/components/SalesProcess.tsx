import { ClipboardList, Lightbulb, Users } from "lucide-react"
import Image from "next/image"

export default function SalesProcess() {
  const stages = [
    {
      icon: <ClipboardList className="h-8 w-8 text-blue-500" />,
      title: "Awareness",
      description: "Their trusted content establishes brand credibility during the consumer research phase.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-red-500" />,
      title: "Consideration",
      description:
        "Their fresh perspective outside of your own self-promotion provides the reassurance and guidance consumers need to make informed buying decisions.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Customer Acquisition",
      description:
        "And by addressing questions and concerns, they inspire brand confidence, purchases and help ease buyer's remorse.",
    },
  ]

  return (
    <section id="sales-process" className="relative pb-20">
      <div className="bg-primary py-20 px-6 mb-20">
        <div className="container max-w-6xl mx-auto text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Influence Every Stage Of The Sales Process</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-12 bg-white/30" />
            <svg
              className="w-8 h-8 text-white/80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M9 9h6" />
              <path d="M9 13h6" />
              <path d="M9 17h6" />
            </svg>
            <div className="h-[1px] w-12 bg-white/30" />
          </div>
          <p className="max-w-3xl mx-auto text-white/90">
            Consumers have completed their move to digital. TikTok has become mainstream; podcasts are part of our daily
            routines; Instagram is now video-first and shopping-oriented. And, wherever possible, consumers opt-out of
            advertising. This means influencers impact every stage of the sales funnel:
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <svg className="absolute top-0 left-8 w-[2px] h-full text-gray-200" viewBox="0 0 2 500">
              <path
                d="M1 0C50 100 -50 150 1 250C50 350 -50 400 1 500"
                stroke="currentColor"
                fill="none"
                strokeDasharray="4 4"
              />
            </svg>
            {stages.map((stage, index) => (
              <div key={index} className="relative mb-16 last:mb-0 ml-4">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center flex-shrink-0 border-4 border-white relative z-10">
                    {stage.icon}
                  </div>
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl font-semibold">{stage.title}</h3>
                    <p className="text-muted-foreground">{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-8">
            <div className="relative">
              <div className="bg-blue-600 text-white p-12 rounded-[40px] space-y-6">
                <p className="text-lg italic">
                  We have arrived in a new era of democratic media consumption where consumers choose what they listen
                  to and who they trust.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Forbes-Symbol-logo-CSX40ek54xhHbbwjLRxiVqNcuuyOyW.png"
                      alt="Forbes logo"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold">-Forbes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

