"use client"

import type React from "react"

import { useState, useRef } from "react"
import type { ReactNode } from "react"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function ThreeDCard({ children, className = "", intensity = 15 }: ThreeDCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * intensity * -1
    const rotateYValue = ((x - centerX) / centerX) * intensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={cardRef}
      className={`perspective-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease",
      }}
    >
      <div className="perspective-card-inner h-full">{children}</div>
    </div>
  )
}

