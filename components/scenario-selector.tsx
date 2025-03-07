"use client"

import { useState } from "react"
import { MobileDevice } from "./mobile-device"
import { ConversationBubble } from "./conversation-bubble"
import { ThreeDCard } from "./3d-card"

const scenarios = [
  {
    id: "restaurant",
    title: "Restaurant Ordering",
    description: "Practice ordering food, asking about menu items, and handling special requests.",
    conversation: [
      {
        isUser: false,
        text: "Hello! Welcome to our restaurant. Are you ready to order?",
      },
      {
        isUser: true,
        text: "Yes, I would like the pasta with tomato sauce, but can you make it not too spicy?",
      },
      {
        isUser: false,
        text: "Of course. Would you like any appetizers to start with?",
      },
      {
        isUser: true,
        text: "Yes, I'll take garlic bread please. And can I see wine menu?",
      },
      {
        isUser: false,
        correction: "Yes, I'll take garlic bread please. And can I see the wine menu?",
        text: "You're missing the article 'the' before 'wine menu'. I'll bring the wine menu right away.",
      },
    ],
  },
  {
    id: "travel",
    title: "Travel Conversation",
    description: "Practice asking for directions, booking accommodations, and navigating transportation.",
    conversation: [
      {
        isUser: false,
        text: "Excuse me, you look lost. Can I help you find something?",
      },
      {
        isUser: true,
        text: "Yes, I'm trying to find the museum of modern art. Is it far from here?",
      },
      {
        isUser: false,
        text: "It's about a 15-minute walk. Do you want me to give you directions?",
      },
      {
        isUser: true,
        text: "Yes please. I'm not familiar with this area. Is there bus that goes there?",
      },
      {
        isUser: false,
        correction: "Yes please. I'm not familiar with this area. Is there a bus that goes there?",
        text: "You need the article 'a' before 'bus'. Yes, bus number 42 stops right in front of the museum.",
      },
    ],
  },
  {
    id: "shopping",
    title: "Shopping Experience",
    description: "Practice shopping conversations, asking about products, and negotiating prices.",
    conversation: [
      {
        isUser: false,
        text: "Hi there! Can I help you find anything specific today?",
      },
      {
        isUser: true,
        text: "I'm looking for winter jacket. Do you have any on sale?",
      },
      {
        isUser: false,
        correction: "I'm looking for a winter jacket. Do you have any on sale?",
        text: "You need the article 'a' before 'winter jacket'. Yes, we have several winter jackets on sale in the back section.",
      },
      {
        isUser: true,
        text: "Great! I prefer something waterproof and warm but not too expensive.",
      },
      {
        isUser: false,
        text: "I can show you our North Face collection. They're high quality and currently 30% off. Would you like to see them?",
      },
    ],
  },
]

export function ScenarioSelector() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0])

  return (
    <div className="bg-black/40 border border-soft-teal/10 rounded-2xl p-6 backdrop-blur-sm gradient-border">
      <h3 className="text-2xl font-bold mb-6 text-center">
        <span className="text-highlight">Choose a scenario</span> to practice
      </h3>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setActiveScenario(scenario)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeScenario.id === scenario.id ? "bg-neon text-black font-medium" : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {scenario.title}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-xl font-bold mb-3">{activeScenario.title}</h4>
          <p className="text-soft-teal/90 mb-6">{activeScenario.description}</p>
          <div className="p-4 bg-white/5 rounded-lg border border-soft-teal/10">
            <p className="text-soft-teal/90 text-sm">
              <span className="text-neon font-bold">Pro tip:</span>{" "}
              <span className="text-lg">Practice makes perfect!</span> Try this scenario multiple times with different
              responses to improve your fluency.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-neon/10 blur-xl rounded-full"></div>
          <div className="relative z-10">
            <ThreeDCard>
              <MobileDevice>
                <div className="bg-dark h-full w-full p-4 flex flex-col">
                  <div className="text-sm text-soft-teal/60 mb-2">Scenario: {activeScenario.title}</div>
                  <div className="flex-1 overflow-y-auto space-y-4">
                    {activeScenario.conversation.map((message, index) => (
                      <ConversationBubble key={index} isUser={message.isUser} correction={message.correction}>
                        {message.text}
                      </ConversationBubble>
                    ))}
                  </div>
                </div>
              </MobileDevice>
            </ThreeDCard>
          </div>
        </div>
      </div>
    </div>
  )
}

