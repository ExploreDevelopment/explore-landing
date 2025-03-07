import type React from "react"
import { AIAssistantVisual } from "./ai-assistant-visual"

interface IPadDeviceProps {
  children: React.ReactNode
  showAIVisual?: boolean
}

export function IPadDevice({ children, showAIVisual = false }: IPadDeviceProps) {
  return (
    <div className="relative mx-auto border-[14px] border-gray-800 rounded-[2.5rem] h-[800px] w-[1100px] max-w-full shadow-xl">
      <div className="absolute top-0 w-[148px] h-[18px] bg-gray-800 left-1/2 -translate-x-1/2 rounded-b-lg"></div>
      <div className="h-full w-full overflow-hidden rounded-[1.3rem] bg-white relative">
        {showAIVisual && <AIAssistantVisual />}
        {children}
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/6 h-[4px] bg-gray-800 rounded-full"></div>
    </div>
  )
}

