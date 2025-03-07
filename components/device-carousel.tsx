"use client"

import { useState, useEffect } from "react"
import { ConversationBubble } from "./conversation-bubble"
import { AIAssistantVisual } from "./ai-assistant-visual"

const deviceTypes = [
  { id: "ios", label: "iOS" },
  { id: "android", label: "Android" },
  { id: "web", label: "Web" },
]

export function DeviceCarousel() {
  const [activeDevice, setActiveDevice] = useState("ios")

  // Auto-rotate devices
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDevice((current) => {
        const currentIndex = deviceTypes.findIndex((d) => d.id === current)
        const nextIndex = (currentIndex + 1) % deviceTypes.length
        return deviceTypes[nextIndex].id
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 mb-8">
        {deviceTypes.map((device) => (
          <button
            key={device.id}
            onClick={() => setActiveDevice(device.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeDevice === device.id
                ? "bg-neon text-white font-medium"
                : "bg-gray-100 hover:bg-gray-200 text-medium"
            }`}
          >
            {device.label}
          </button>
        ))}
      </div>

      <div className="flex overflow-hidden relative h-[500px] justify-center">
        {/* iOS Device */}
        <div
          className={`absolute transition-all duration-500 transform ${
            activeDevice === "ios" ? "translate-x-0 opacity-100 z-10" : "translate-x-full opacity-0 -z-10"
          }`}
        >
          <div className="relative mx-auto border-[14px] border-gray-800 rounded-[2.5rem] h-[500px] w-[250px] shadow-xl">
            <div className="absolute top-0 w-[120px] h-[25px] bg-gray-800 left-1/2 -translate-x-1/2 rounded-b-lg"></div>
            <div className="h-full w-full overflow-hidden rounded-[1.3rem] bg-white relative">
              <AIAssistantVisual />
              <div className="p-4 h-full flex flex-col">
                <div className="text-sm text-medium mb-2">Scenario: Restaurant</div>
                <div className="flex-1 overflow-y-auto space-y-3">
                  <ConversationBubble isUser={false}>
                    Hello! Welcome to our restaurant. Do you have a reservation?
                  </ConversationBubble>
                  <ConversationBubble isUser={true}>
                    No, I don't have reservation. Do you have table for two?
                  </ConversationBubble>
                  <ConversationBubble
                    isUser={false}
                    correction="No, I don't have a reservation. Do you have a table for two?"
                  >
                    You're missing articles. It should be "a reservation" and "a table".
                  </ConversationBubble>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Android Device */}
        <div
          className={`absolute transition-all duration-500 transform ${
            activeDevice === "android" ? "translate-x-0 opacity-100 z-10" : "translate-x-full opacity-0 -z-10"
          }`}
        >
          <div className="relative mx-auto border-[12px] border-gray-800 rounded-[2rem] h-[500px] w-[250px] shadow-xl">
            <div className="absolute top-0 w-[60px] h-[15px] bg-gray-800 left-1/2 -translate-x-1/2 rounded-b-lg"></div>
            <div className="h-full w-full overflow-hidden rounded-[1.3rem] bg-white relative">
              <AIAssistantVisual />
              <div className="p-4 h-full flex flex-col">
                <div className="text-sm text-medium mb-2">Scenario: Travel</div>
                <div className="flex-1 overflow-y-auto space-y-3">
                  <ConversationBubble isUser={false}>
                    Excuse me, you look lost. Can I help you find something?
                  </ConversationBubble>
                  <ConversationBubble isUser={true}>
                    Yes, I'm trying to find museum of modern art. Is it far?
                  </ConversationBubble>
                  <ConversationBubble
                    isUser={false}
                    correction="Yes, I'm trying to find the museum of modern art. Is it far?"
                  >
                    You need "the" before "museum". It's about 15 minutes away.
                  </ConversationBubble>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web Interface */}
        <div
          className={`absolute transition-all duration-500 transform ${
            activeDevice === "web" ? "translate-x-0 opacity-100 z-10" : "translate-x-full opacity-0 -z-10"
          }`}
        >
          <div className="relative mx-auto border border-gray-200 rounded-lg h-[500px] w-[700px] shadow-xl">
            <div className="h-[40px] bg-gray-100 border-b border-gray-200 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto bg-white rounded-full px-4 py-1 text-sm text-gray-500">explore.ai</div>
            </div>
            <div className="h-[calc(100%-40px)] w-full bg-white flex">
              <div className="w-1/4 border-r border-gray-200 p-4">
                <div className="text-lg font-bold mb-4">Scenarios</div>
                <div className="space-y-2">
                  <div className="p-2 bg-neon/10 rounded text-neon font-medium">Restaurant</div>
                  <div className="p-2 hover:bg-gray-100 rounded">Travel</div>
                  <div className="p-2 hover:bg-gray-100 rounded">Shopping</div>
                  <div className="p-2 hover:bg-gray-100 rounded">Job Interview</div>
                </div>
              </div>
              <div className="w-3/4 p-4 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4">
                  <ConversationBubble isUser={false}>
                    Hello! Welcome to our restaurant. Do you have a reservation?
                  </ConversationBubble>
                  <ConversationBubble isUser={true}>
                    No, I don't have reservation. Do you have table for two?
                  </ConversationBubble>
                  <ConversationBubble
                    isUser={false}
                    correction="No, I don't have a reservation. Do you have a table for two?"
                  >
                    You're missing articles. It should be "a reservation" and "a table". Let me check if we have a table
                    available.
                  </ConversationBubble>
                </div>
                <div className="mt-4 flex">
                  <input
                    type="text"
                    className="flex-1 border border-gray-200 rounded-l-lg p-3"
                    placeholder="Type your response..."
                  />
                  <button className="bg-neon text-white px-4 rounded-r-lg">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

