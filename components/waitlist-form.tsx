"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when Explore launches.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border-gray-200 text-dark placeholder:text-gray-400 h-14 text-lg"
          required
        />
        <Button
          type="submit"
          className="w-full bg-neon text-white hover:bg-neon/90 h-14 text-lg font-medium cyber-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : <span className="text-xl">Join the waitlist!</span>}
        </Button>
      </form>
      <p className="text-sm mt-3 text-medium text-center">
        We'll notify you when Explore is <span className="text-neon">ready to transform</span> your English learning.
      </p>
      <Toaster />
    </div>
  )
}

