"use client"

import Link from "next/link"
import WaitlistForm from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"
import { MobileDevice } from "@/components/mobile-device"
import { ConversationBubble } from "@/components/conversation-bubble"
import { NoiseBackground } from "@/components/noise-background"
import { Marquee } from "@/components/marquee"
import { GeometricShapes } from "@/components/geometric-shapes"
import { ThreeDCard } from "@/components/3d-card"
import { DecorativeElements } from "@/components/decorative-elements"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Star4 from '@/public/star-4.png';
import Mic from '@/public/mic.svg';
import { Toaster } from '@/components/ui/toaster';
import { useIsMobile } from '@/hooks/use-mobile';

const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return displayText;
};

const scenarios = [
  {
    id: "interview",
    title: "Interview at Apple",
    conversation: [
      {
        isUser: false,
        text: "Thanks for joining today. Can you tell me a bit about your experience with team collaboration on software projects?",
      },
      {
        isUser: true,
        text: "Sure! I've worked in Agile teams, collaborating with designers and product manager to stay aligned on goals and deliverables.",
        correction: "\"Product manager\" should be plural (\"product managers\") to match \"designers\" and keep the list consistent.",
      },
      {
        isUser: false,
        text: "Great! How do you handle tight deadlines when there are unexpected challenges with your code?",
      },
      {
        isUser: true,
        text: "I prioritize tasks, communicate early if there's an issue, and ask for help when needed to stay on track",
      },
      {
        isUser: false,
        text: "That's great to hear. Lastly, how do you stay updated with new technologies and trends?",
      },
      {
        isUser: true,
        text: "I read blogs, take courses, and participate in online communities to keep learning.",
      },
    ],
  },
  {
    id: "chalamet",
    title: "Timothée Chalamet",
    conversation: [
      {
        isUser: false,
        text: "Did you see Timothée Chalamet at the Oscars? His zoot suit was... something else",
      },
      {
        isUser: true,
        text: "Yeah, I couldn't believe it. It was so unexpected but somehow work!",
        correction: "\"Work\" should be \"worked\" to match the past tense of the sentence.",
      },
      {
        isUser: false,
        text: "It definitely had a vintage vibe to it. I saw a ton of memes right after",
      },
      {
        isUser: true,
        text: "I saw one where they compared him to The Matrix. It was hilarious, but honestly, I respect him for taking that risk",
      },
      {
        isUser: false,
        text: "Same here. Some people weren't fans, but I think it's cool to stand out like that",
      },
      {
        isUser: true,
        text: "Exactly! He owns it. You either love it or you don't, but you can't ignore it",
      },
      {
        isUser: false,
        text: "For sure, he's got the confidence to pull off a look like that. Not everyone could.",
      },
    ],
  },
  {
    id: "shopping",
    title: "Ferrari shopping",
    conversation: [
      {
        isUser: false,
        text: "Hey there! Welcome to Ferrari. Looking for something special today?",
      },
      {
        isUser: true,
        text: "Yeah, I want something fast and, you know, turns heads",
      },
      {
        isUser: false,
        text: "You're in the right place! How about the SF90 Stradale? Nearly 1,000 horsepower, 0-60 in 2.5 seconds. Absolute beast",
      },
      {
        isUser: true,
        text: "That sounds insane. Got it in red?",
      },
      {
        isUser: false,
        text: "Of course—Rosso Corsa. The classic Ferrari look",
      },
      {
        isUser: true,
        text: "This feels unreal. What's the damage?",
      },
      {
        isUser: false,
        text: "Around $550K, depending on extras. But hey, it's not just a car — it's a statement",
      },
      {
        isUser: true,
        text: "I love it. Let's talk numbers and make this happen",
      },
    ],
  },
]

export default function Home() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const isMobile = useIsMobile()
  const intervalRef = useRef<any>(null);
  const typedText = useTypewriter("Did you see Timothée Chalamet at the Oscars? It was... something else", 20);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveScenarioIndex((current) => (current + 1) % scenarios.length)
    }, 16000)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-light text-dark overflow-hidden">
      <NoiseBackground />
      <GeometricShapes />
      <DecorativeElements />

      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-neon">explore</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#solution" className="text-medium hover:text-neon transition-colors">
            How It Works
          </Link>
          <Link href="#whyExplore" className="text-medium hover:text-neon transition-colors">
            Why Explore
          </Link>
          <Link href="#waitlist" className="text-medium hover:text-neon transition-colors">
            Join Waitlist
          </Link>
        </nav>
        <Button
          variant="outline"
          className="border-neon text-neon hover:bg-neon hover:text-white transition-all cyber-button"
          asChild
        >
          <Link href="#waitlist">Join Waitlist</Link>
        </Button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 mb-8">
                <span className="w-4 h-4 bg-neon rounded-full mr-2"></span>
                <span className="text-sm font-medium">We're launching soon</span>
                <Link href="#waitlist" className="text-sm text-neon ml-2 font-medium">
                  Join waitlist →
                </Link>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-center max-w-4xl">
                Master English with
                <br />
                <span className="text-neon">AI conversations</span>
              </h1>

              <p className="text-xl text-medium mb-8 max-w-2xl text-center">
                Overcome the language barrier with an AI tutor that understands you
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-black/90 text-lg px-8 py-6 rounded-full w-full sm:w-auto"
                  asChild
                >
                  <Link href="#waitlist">
                    <span className="text-xl">Start learning</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-white border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-full w-full sm:w-auto"
                  asChild
                >
                  <Link href="https://dariadiachuk.youcanbook.me/">
                    <span className="text-xl">Contact founder</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-20">
              <div className="relative max-w-5xl mx-auto">
                <div className="absolute -inset-10 bg-neon/20 blur-[100px] rounded-full"></div>
                <div className="relative z-10 flex justify-center">
                  <ThreeDCard className="w-full max-w-md">
                    <MobileDevice showAIVisual={false}>
                      <div className="bg-white h-full w-full p-4 flex flex-col">
                        <div className="flex-1 overflow-y-auto space-y-4">
                          <div className="mt-16 px-8 text-sm mb-2 text-center">{typedText}</div>
                          <div
                            className="top-44 opacity-90 recording-box absolute h-56 w-56 left-6 rounded-[50%] p-[12%] pt-[17%] record-animation"
                          >
                            <div
                              className="h-full w-full rounded-[50%]"
                              style={{ background: 'linear-gradient(rgba(255, 44, 205, 0.54), #B1CED5)' }}
                            />
                          </div>
                        </div>
                        <div className="w-full flex justify-center mb-5">
                          <div className="border-2 rounded-full w-[44px] flex justify-center cursor-pointer hover:bg-neon hover:border-neon">
                            <Link href="#waitlist">
                              <Image src={Mic} alt="mic" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </MobileDevice>
                  </ThreeDCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <Marquee />

        {/* Problem Section */}
        <section id="problem" className="py-24 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-16">
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
                    Traditional language apps <span className="text-neon">suck</span>
                  </h2>
                  <p className="text-xl text-medium mb-8 text-center md:text-left">
                    They focus on vocabulary and grammar, but <span className="text-neon">fail miserably</span> at
                    preparing you for real conversations.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="space-y-8">
                    <ThreeDCard>
                      <div className="light-card p-6 rounded-xl backdrop-blur-sm">
                        <div className="text-2xl font-bold mb-3">No real speaking practice</div>
                        <p className="text-medium">
                          Most apps don't let you practice actual conversations in contexts that{" "}
                          <span className="text-neon">matter to you</span>.
                        </p>
                      </div>
                    </ThreeDCard>
                    <ThreeDCard>
                      <div className="light-card p-6 rounded-xl backdrop-blur-sm">
                        <div className="text-2xl font-bold mb-3">Generic scenarios</div>
                        <p className="text-medium">
                          Pre-made dialogues don't match your specific needs or interests.{" "}
                          <span className="text-neon">Boring!</span>
                        </p>
                      </div>
                    </ThreeDCard>
                    <ThreeDCard>
                      <div className="light-card p-6 rounded-xl backdrop-blur-sm">
                        <div className="text-2xl font-bold mb-3">No personalized feedback</div>
                        <p className="text-medium">
                          You don't get real-time corrections on your specific mistakes.{" "}
                          <span className="text-neon">How will you improve?</span>
                        </p>
                      </div>
                    </ThreeDCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-24 relative slant-bg">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-neon">Explore</span> is your safe space for English practice
                </h2>
                <p className="text-xl text-medium max-w-2xl mx-auto">
                  Discuss any topic you are <span className="text-neon">passionate</span> about and get instant feedback
                  to improve your fluency.
                </p>
              </div>

              <div className="mb-16 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24">
                <div className="bg-white/80 rounded-2xl backdrop-blur-md shadow-xl p-6 md:p-10">

                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Left side - Phone */}
                    {!isMobile && (
                      <div className="md:col-span-5 relative">
                      <div className="absolute -inset-4 bg-neon/10 blur-xl rounded-full"></div>
                      <div className="relative z-10 flex justify-center">
                        <ThreeDCard>
                          <MobileDevice>
                            <div className="bg-white h-full w-full p-4 flex flex-col">
                              <div className="flex-1 overflow-y-auto space-y-4 pt-10">
                                {scenarios[activeScenarioIndex].conversation.map((message, index) => (
                                  <ConversationBubble
                                    key={index}
                                    isUser={message.isUser}
                                    correction={message.correction}
                                  >
                                    {message.text}
                                  </ConversationBubble>
                                ))}
                              </div>
                            </div>
                          </MobileDevice>
                        </ThreeDCard>
                      </div>
                    </div>
                    )}

                    {/* Right side - Features */}
                    <div className="md:col-span-7">
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        Choose a scenario to practice
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-6 justify-center">
                        {scenarios.map((scenario, index) => (
                          <button
                            key={scenario.id}
                            onClick={() => setActiveScenarioIndex(index)}
                            className={`px-4 py-2 rounded-full text-sm transition-all ${
                              activeScenarioIndex === index
                                ? "bg-neon text-white font-medium"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          >
                            {scenario.title}
                          </button>
                        ))}
                      </div>
                      {isMobile && (
                        <div className="md:col-span-5 relative pt-3 pb-10">
                          <div className="absolute -inset-4 bg-neon/10 blur-xl rounded-full"></div>
                          <div className="relative z-10 flex justify-center">
                            <ThreeDCard>
                              <MobileDevice>
                                <div className="bg-white h-full w-full p-4 flex flex-col">
                                  <div className="flex-1 overflow-y-auto space-y-4">
                                    {scenarios[activeScenarioIndex].conversation.map((message, index) => (
                                      <ConversationBubble
                                        key={index}
                                        isUser={message.isUser}
                                        correction={message.correction}
                                      >
                                        {message.text}
                                      </ConversationBubble>
                                    ))}
                                  </div>
                                </div>
                              </MobileDevice>
                            </ThreeDCard>
                          </div>
                        </div>
                      )}

                      <div className="space-y-6">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold mb-2 flex items-center">
                            <span className="text-neon mr-2">
                              <Image src={Star4} width={20} height={20} alt="" />
                            </span>
                            Real-time Corrections
                          </h4>
                          <p className="text-medium">
                            Get instant feedback on your grammar, vocabulary, and pronunciation mistakes as you practice
                            conversations.
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold mb-2 flex items-center">
                            <span className="text-neon mr-2">
                              <Image src={Star4} width={20} height={20} alt="" />
                            </span>
                            Discuss anything
                          </h4>
                          <p className="text-medium">
                            Choose from a variety of scenarios or create your own custom conversations based on your
                            specific needs and interests.
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold mb-2 flex items-center">
                            <span className="text-neon mr-2">
                              <Image src={Star4} width={20} height={20} alt="" />
                            </span>
                            Practice Anytime
                          </h4>
                          <p className="text-medium">
                            Available 24/7, allowing you to practice English conversations whenever and wherever you
                            want, at your own pace.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how" className="py-24 relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                How <span className="text-neon">Explore</span> works
              </h2>
              <p className="text-xl text-medium max-w-2xl mx-auto">
                A simple three-step process to <span className="text-neon">skyrocket</span> your English speaking skills
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden md:block"></div>
              <div className="grid md:grid-cols-3 gap-12">
                <ThreeDCard className="relative">
                  <div className="light-card rounded-2xl p-8 h-full">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-neon flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 text-center">Create Your Scenario</h3>
                      <p className="text-medium text-center">
                        Select from templates or create your own <span className="text-neon">custom</span> conversation
                        scenarios.
                      </p>
                    </div>
                  </div>
                </ThreeDCard>

                <ThreeDCard className="relative">
                  <div className="light-card rounded-2xl p-8 h-full">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-neon flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 text-center">Practice Speaking</h3>
                      <p className="text-medium text-center">
                        Practice dialogues that prepare you for <span className="text-neon">real-world</span> situations.
                      </p>
                    </div>
                  </div>
                </ThreeDCard>

                <ThreeDCard className="relative">
                  <div className="light-card rounded-2xl p-8 h-full">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-neon flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div className="pt-6">
                      <h3 className="text-2xl font-bold mb-4 text-center">Get Detailed Feedback</h3>
                      <p className="text-medium text-center">
                        Review your conversation with highlighted mistakes and{" "}
                        <span className="text-neon">crystal-clear</span> explanations.
                      </p>
                    </div>
                  </div>
                </ThreeDCard>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="whyExplore" className="py-24 relative slant-bg">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Why choose <span className="text-neon">Explore</span>
                </h2>
                <p className="text-xl text-medium max-w-full mx-auto">
                  Our unique approach to language learning <span className="text-neon">blows</span> the competition away
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 backdrop-blur-sm hover:bg-white transition-colors h-full">
                    <div className="text-2xl font-bold mb-4">Designed just for you</div>
                    <p className="text-medium">
                      Practice exactly what you need based on your interests, profession, and learning goals.{" "}
                      <span className="text-neon">No more generic lessons!</span>
                    </p>
                  </div>
                </ThreeDCard>

                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 backdrop-blur-sm hover:bg-white transition-colors h-full">
                    <div className="text-2xl font-bold mb-4">Real-World Conversations</div>
                    <p className="text-medium">
                      Practice authentic dialogues that prepare you for actual situations you'll encounter.{" "}
                      <span className="text-neon">Be ready for anything!</span>
                    </p>
                  </div>
                </ThreeDCard>

                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 backdrop-blur-sm hover:bg-white transition-colors h-full">
                    <div className="text-2xl font-bold mb-4">Instant Feedback</div>
                    <p className="text-medium">
                      Receive immediate corrections and explanations to help you improve faster.{" "}
                      <span className="text-neon">Learn from your mistakes!</span>
                    </p>
                  </div>
                </ThreeDCard>

                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 backdrop-blur-sm hover:bg-white transition-colors h-full">
                    <div className="text-2xl font-bold mb-4">Available 24/7</div>
                    <p className="text-medium">
                      Practice whenever you want, as much as you want, without scheduling constraints.{" "}
                      <span className="text-neon">Your time, your rules!</span>
                    </p>
                  </div>
                </ThreeDCard>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="waitlist" className="py-24 relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent"></div>
          <div className="absolute inset-0 bg-neon/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-neon">Unleash</span> your English power <span className="text-neon">now</span>
              </h2>
              <p className="text-xl text-medium mb-8 max-w-2xl mx-auto">
                Be among the first to experience Explore and take your English speaking skills to the{" "}
                <span className="text-neon">next level</span>.
              </p>
              <ThreeDCard>
                <div className="light-card p-8 rounded-2xl backdrop-blur-md">
                  <WaitlistForm />
                </div>
              </ThreeDCard>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter mb-4 md:mb-0">
              <span className="text-neon">explore</span>
            </div>
            <div className="text-sm text-medium">© {new Date().getFullYear()} Explore. All rights reserved.</div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}

