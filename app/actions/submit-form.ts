"use server"

export async function submitAnalysisForm(formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    marketingGoals: formData.get("marketingGoals"),
    services: formData.get("services"),
    website: formData.get("website"),
    category: formData.get("category"),
  }

  // Send email using your preferred email service
  try {
    await fetch("https://api.your-email-service.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "hello@acquiregy.com",
        subject: "New Analysis Request",
        text: `
          New request from ${data.name}
          
          Email: ${data.email}
          Website: ${data.website}
          Category: ${data.category}
          Marketing Goals: ${data.marketingGoals}
          Services Interest: ${data.services}
        `,
      }),
    })
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to submit form")
  }
}

