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
    const formData = new FormData(event.currentTarget)
    formData.delete("services")
    await submitAnalysisForm(formData)
    setOpen(false)
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

          <form onSubmit={onSubmit} className="space-y-6 pt-4">
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

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Let's Go!
            </Button>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">*Required</p>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
