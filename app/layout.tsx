import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import Script from 'next/script';
import "./globals.css"

// Load Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Explore - Your Personal AI English Tutor",
  description:
    "Practice real-life English conversations in any scenario with instant feedback to improve your fluency.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5FEW8XWSXT"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5FEW8XWSXT');
            `,
          }}
        />
      </body>
    </html>
  )
}



import './globals.css'