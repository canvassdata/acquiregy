"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { submitAnalysisForm } from "../actions/submit-form"

export function AnalysisForm() {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const marketingGoals = ["More Traffic", "More Conversions", "More Social Content", "All the above"]

  const categories = [
    "I'm an Influencer / Creator",
    "Vitamins & Supplements",
    "B2B Products",
    "Baby & Toddler",
    "Beverages",
    "Books",
    "Construction",
    "Cosmetics (Face Products)",
    "Cosmetics (Nail Products)",
    "Digital products (SaaS, Apps, etc)",
    "Electronics",
    "Fashion (Accessories)",
    "Fashion (Clothing)",
    "Fashion (Footwear)",
    "Fashion (Jewelry)",
    "Fitness & Sports",
    "Food & Cooking",
    "Hair Care",
    "Home & Garden",
    "Office & Stationery",
    "Outdoors",
    "Parents / Kids",
    "Personal Care",
    "Pets & Animal Care",
    "Skin Care",
    "Toys & Games",
  ]

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      await submitAnalysisForm(formData)
      setFormSubmitted(true)

      // Reset form after 3 seconds and close dialog
      setTimeout(() => {
        setOpen(false)
        setFormSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Button
        size="lg"
        onClick={() => setOpen(true)}
        className="text-lg px-8 py-6 rounded-full bg-yellow-400 text-primary hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Get Started Now
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="sm:max-w-[500px] bg-white border shadow-lg relative z-50 max-h-[90vh] overflow-y-auto"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "fixed" }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl text-center bg-primary text-white py-4 -mx-6 -mt-6 rounded-t-lg">
              Let's Get Started
            </DialogTitle>
          </DialogHeader>

          {formSubmitted ? (
            <div className="py-8 text-center">
              <h3 className="text-xl font-medium text-green-600 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your information has been submitted successfully.</p>
              <p className="text-gray-600">We'll be in touch soon!</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} method="POST" className="space-y-6 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name*</label>
                <Input name="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email*</label>
                <Input name="email" type="email" placeholder="Your email" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">What are your Marketplace goals?*</label>
                <Select name="marketingGoals" required>
                  <SelectTrigger className="bg-white text-black border border-gray-300 shadow-md">
                    <SelectValue placeholder="Choose one.." />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black border border-gray-300 shadow-md">
                    {marketingGoals.map((goal) => (
                      <SelectItem key={goal} value={goal}>
                        {goal}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Brand Website*</label>
                <Input name="website" placeholder="https://" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Brand Category*</label>
                <Select name="category" required>
                  <SelectTrigger className="bg-white text-black border border-gray-300 shadow-md">
                    <SelectValue placeholder="Choose one.." />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black border border-gray-300 shadow-md">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Let's Go!"}
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">*Required</p>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
