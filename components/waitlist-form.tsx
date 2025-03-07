"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const MAILCHIMP_URL = 'https://tech.us22.list-manage.com/subscribe/post-json?u=9ea6b2ddbb412bab0b5b54909&amp;id=a7bbf06138&amp;f_id=00f1c2e1f0';

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const { toast } = useToast();

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

    try {
      await fetch(`${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}`, {
        method: 'POST',
        mode: 'no-cors'
      });

      setShowSuccessDialog(true)
      setEmail("");

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
    <>
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
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Welcome aboard!</DialogTitle>
            <DialogDescription>
              You've been successfully added to our waitlist. We'll notify you when Explore launches and your journey to transform your English learning begins.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button className="w-full bg-neon text-white hover:bg-neon/90 h-14 text-lg font-medium cyber-button" onClick={() => setShowSuccessDialog(false)}>
              Got it, thanks!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

