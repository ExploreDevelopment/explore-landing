"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NoiseBackground } from "@/components/noise-background"
import { GeometricShapes } from "@/components/geometric-shapes"
import { DecorativeElements } from "@/components/decorative-elements"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-light text-dark overflow-hidden">
      <NoiseBackground />
      <GeometricShapes />
      <DecorativeElements />

      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tighter">
            <Link href="/">
              <span className="text-neon">explore</span>
            </Link>
          </div>
        </div>
        <Button
          variant="outline"
          className="border-neon text-neon hover:bg-neon hover:text-white transition-all cyber-button"
          asChild
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy for <span className="text-neon">Explore</span></h1>
          
          <p className="mb-6 text-sm text-gray-500">Last updated: April 03, 2025</p>
          
          <p className="mb-8">
            At Explore, your privacy is very important to us. This Privacy Policy describes how we collect, use, share, and protect your personal data
            when you use our web application and services ("Explore" or the "Service"). By using Explore, you agree to the practices outlined in this policy.
          </p>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Who We Are</h2>
          <p className="mb-6">
            Explore is a web application developed and operated by Explore, a company registered in Ukraine.
          </p>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Data We Collect</h2>
          <p className="mb-4">We collect the following types of data:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Account Information</strong>: Email address and other basic details provided when you register.</li>
            <li><strong>Voice Data</strong>: Audio messages you submit and receive via the AI companion.</li>
            <li><strong>Usage Data</strong>: Logs, device type, browser, interaction timestamps, and general behavior within the app.</li>
          </ul>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">We use your data to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide and improve the functionality of the Service.</li>
            <li>Process your voice messages and generate responses using AI.</li>
            <li>Manage your subscription and provide customer support.</li>
            <li>Communicate updates, changes, or promotional offers (with your consent).</li>
          </ul>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Sharing</h2>
          <p className="mb-4">
            We share certain data with third-party service providers strictly for the functionality of the app:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>OpenAI</strong>: for language model processing.</li>
            <li><strong>ElevenLabs</strong>: for converting text responses into voice.</li>
            <li><strong>Plata by Monobank</strong>: for payment processing.</li>
          </ul>
          <p className="mb-6">
            We do <strong>not</strong> sell or rent your personal data to third parties.
          </p>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Storage and Retention</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>All messages, including voice messages, are stored indefinitely unless you request deletion.</li>
            <li>If you request account deletion, all associated data is erased immediately.</li>
          </ul>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to safeguard your data. 
            However, no system can be 100% secure. You use the Service at your own risk.
          </p>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Request access to the data we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Withdraw consent to data processing (note: this may limit your use of the Service).</li>
          </ul>
          <p className="mb-6">
            To exercise any of these rights, contact us using the contact information provided on our website.
          </p>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
          <p className="mb-6">
            Explore is not intended for users under the age of 18. We do not knowingly collect data from individuals under 18.
          </p>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date. 
            Continued use of the Service indicates your acceptance of the changes.
          </p>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
          <p className="mb-6">
            If you have questions about this Privacy Policy or our data practices, please contact us 
            using the contact details listed on our website.
          </p>
        </div>
      </main>

      <footer className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter mb-4 md:mb-0">
              <Link href="/">
                <span className="text-neon">explore</span>
              </Link>
            </div>
            <div className="flex gap-6">
              <div className="text-sm text-medium">© {new Date().getFullYear()} Explore. All rights reserved.</div>
              <div className="flex gap-6">
                <Link href="/privacy-policy" className="text-sm text-medium hover:text-neon transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="text-sm text-medium hover:text-neon transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 