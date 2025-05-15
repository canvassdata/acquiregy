"use server"

export async function submitAnalysisForm(formData: FormData) {
  try {
    const response = await fetch("https://formspree.io/f/xwpoarvl", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Formspree submission error:", errorData)
      throw new Error("Form submission failed")
    }

    return { success: true }
  } catch (error) {
    console.error("Failed to submit form:", error)
    throw new Error("Failed to submit form")
  }
}
