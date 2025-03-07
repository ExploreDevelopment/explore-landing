export function Marquee() {
  const items = [
    "Real-time feedback",
    "Custom scenarios",
    "Pronunciation practice",
    "Grammar correction",
    "Vocabulary building",
    "Fluency improvement",
    "Confidence building",
    "24/7 availability",
    "Personalized learning",
  ]

  return (
    <div className="relative py-6 overflow-hidden bg-neon/5">
      <div className="animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className="text-2xl mx-8 inline-block text-medium">
            {item} <span className="text-neon text-2xl mx-2">•</span>
          </span>
        ))}
        {items.map((item, index) => (
          <span key={`repeat-${index}`} className="text-2xl mx-8 inline-block text-medium">
            {item} <span className="text-neon text-2xl mx-2">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

