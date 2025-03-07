import type React from "react"

interface ConversationBubbleProps {
  children: React.ReactNode
  isUser: boolean
  correction?: string
}

export function ConversationBubble({ children, isUser, correction }: ConversationBubbleProps) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl p-3 ${
          isUser ? "bg-neon text-white rounded-br-none" : "bg-gray-100 text-dark rounded-bl-none"
        }`}
      >
        <div className="text-sm">{children}</div>

        {correction && (
          <div className={`mt-2 pt-2 text-xs ${isUser ? "border-t border-white/20" : "border-t border-gray-300"}`}>
            <span className="font-semibold">Correction:</span> {correction}
          </div>
        )}
      </div>
    </div>
  )
}

