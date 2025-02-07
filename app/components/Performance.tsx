import { BarChart, Users, Zap, PieChart } from "lucide-react"

export default function Performance() {
  const metrics = [
    {
      icon: <BarChart className="h-12 w-12" />,
      title: "Prove ROI",
      description: "With specific KPIs that align with your objectives.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      hoverBg: "hover:bg-green-100/50",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Gain Audience Insights",
      description: "How they perceive your content and brand.",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
      hoverBg: "hover:bg-red-100/50",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Fine-tune Marketing Efforts",
      description: "See what works, learn why and optimize accordingly.",
      bgColor: "bg-white",
      iconColor: "text-primary",
      borderColor: "border-gray-200",
      hoverBg: "hover:bg-gray-50",
    },
    {
      icon: <PieChart className="h-12 w-12" />,
      title: "Holistic Measurement",
      description: "From TikTok to Instagram, examine multi-platform data and impact.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      hoverBg: "hover:bg-orange-100/50",
    },
  ]

  return (
    <section id="performance" className="py-20 px-6 bg-gradient-to-b from-muted/50 to-background">
      <div className="container">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Our Performance Is GUARANTEED</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We remove the guesswork from influencer marketing. Our strategic process involves working with you to set
            custom metrics up front. And we are so confident of success that we guarantee organic results and more
            importantly, measurement that goes beyond 'likes' and 'shares' to demonstrating how a program impacted the
            things that really matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center space-y-4 p-6 rounded-xl border transition-all duration-300 ${metric.bgColor} ${metric.borderColor} ${metric.hoverBg}`}
            >
              <div className={`${metric.iconColor}`}>{metric.icon}</div>
              <h3 className="text-xl font-semibold">{metric.title}</h3>
              <p className="text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

