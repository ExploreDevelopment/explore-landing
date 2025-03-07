"use client"

import { useEffect, useRef } from "react"

export function AIAssistantVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const draw = () => {
      time += 0.01

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )

      gradient.addColorStop(0, "rgba(255, 44, 205, 0.2)")
      gradient.addColorStop(0.5, "rgba(255, 44, 205, 0.1)")
      gradient.addColorStop(1, "rgba(255, 44, 205, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw pulsing circles
      const numCircles = 3
      for (let i = 0; i < numCircles; i++) {
        const phase = (2 * Math.PI * i) / numCircles
        const scale = 0.8 + 0.2 * Math.sin(time * 2 + phase)

        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 4) * scale, 0, 2 * Math.PI)
        ctx.strokeStyle = `rgba(255, 44, 205, ${0.3 - i * 0.1})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // Draw center gradient circle
      const centerGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 6,
      )

      centerGradient.addColorStop(0, "rgba(255, 44, 205, 0.4)")
      centerGradient.addColorStop(1, "rgba(255, 44, 205, 0)")

      ctx.fillStyle = centerGradient
      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 6, 0, 2 * Math.PI)
      ctx.fill()

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} width={200} height={200} className="w-20 h-20 absolute top-4 right-4" />
}

