import type React from "react"
interface HolographicTextProps {
  children: React.ReactNode
  className?: string
}

export function HolographicText({ children, className = "" }: HolographicTextProps) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        background: "linear-gradient(90deg, #00ff8c, #00c6ff, #00ff8c)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "gradient 3s linear infinite",
      }}
    >
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
      {children}
    </span>
  )
}

