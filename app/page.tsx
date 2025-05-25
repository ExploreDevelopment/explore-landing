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
    id: "pitching",
    title: "Pitching to an early stage VC fund",
    conversation: [
      {
        isUser: false,
        text: "Alright, let’s get to it. What exactly are you building, and why should I care?",
      },
      {
        isUser: true,
        text: "We’re building an AI language coach for professionals who use English at work. It helps them speak and write more clearly in high-stakes situations.!",
      },
      {
        isUser: false,
        text: "Isn’t that what Grammarly does?",
      },
      {
        isUser: true,
        text: "Grammarly checks grammar. We help users perform — like in live meetings, pitches, or sales calls. Explore gives context-aware feedback and trains people to communicate confidently.",
      },
      {
        isUser: false,
        text: "Okay. Who’s actually using this?",
      },
      {
        isUser: true,
        text: "We launched three months ago. Right now, we’ve got 500 weekly active users — mostly consultants, founders, and business teams in Europe and Asia.",
      },
      {
        isUser: false,
        text: "500 isn’t much. What's the traction story here?",
      },
      {
        isUser: true,
        text: "It’s early, but the engagement is strong — over 30% of users come back daily. We’re building for a global market that feels this pain every day, and we’re moving fast.",
      },
      {
        isUser: false,
        text: "Alright. What's your unfair advantage?",
      },
      {
        isUser: true,
        text: "We’re language-first founders who lived this pain. Plus, our tech goes beyond templates — it learns how you speak, and helps you improve fast. That’s hard to copy.",
      },
    ],
  },
  {
    id: "feedback",
    title: "Giving critical feedback to a colleague",
    conversation: [
      {
        isUser: true,
        text: "Hey Alex, do you have a minute to talk about the meeting?",
      },
      {
        isUser: false,
        text: "Sure, what’s up?",
      },
      {
        isUser: true,
        text: "Great job with the demo—your points were strong and clear. One quick thing I noticed: during Q&A, there were a couple of times you spoke over the client.",
      },
      {
        isUser: false,
        text: "Oh, really? I didn’t mean to.",
      },
      {
        isUser: true,
        text: "Totally get it—it happens. I think if we pause a bit more and let them finish, it can help build trust and make them feel heard.",
      },
      {
        isUser: false,
        text: "Yeah, that makes sense. Thanks for telling me.",
      },
      {
        isUser: true,
        text: "Of course. Your energy is great—it’s just about finding the right balance.",
      },
    ],
  },
]

export default function Home() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const isMobile = useIsMobile()
  const intervalRef = useRef<any>(null);
  const typedText = useTypewriter("So, I’ve looked through the pitch deck you sent me… honestly, why would anyone fund this? I’ve seen 10 tools like yours this week.", 20);

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
          {/* TODO: replace with pricing */}
          <Link href="#waitlist" className="text-medium hover:text-neon transition-colors">
            Go to app
          </Link>
          {/*<Link href="#waitlist" className="text-medium hover:text-neon transition-colors">*/}
          {/*  Pricing*/}
          {/*</Link>*/}
        </nav>
        <Button
          variant="outline"
          className="border-neon text-neon hover:bg-neon hover:text-white transition-all cyber-button"
          asChild
        >
          <Link href="https://app.explorelabs.tech">Go to app</Link>
        </Button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center">

              <h1 className="text-5xl md:text-6xl py-9 font-bold tracking-tight mb-6 text-center max-w-4xl">
                Your AI Copilot for <br /><span className="text-neon">Professional Communication</span><br /> in any language
              </h1>

              <p className="text-xl text-medium mb-8 max-w-2xl text-center">
                Built for advanced language learners who need to lead, pitch, and persuade under pressure — in a second language.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-black/90 text-lg px-8 py-6 rounded-full w-full sm:w-auto"
                  asChild
                >
                  <Link href="https://app.explorelabs.tech">
                    <span className="text-xl">Try Explore for Free</span>
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
                            className="bottom-28 opacity-90 recording-box absolute h-56 w-56 left-6 rounded-[50%] p-[12%] pt-[17%] record-animation"
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
                    Fluency isn’t enough. Professionals need to <span className="text-neon">perform</span>
                  </h2>
                  <p className="text-xl text-medium mb-8 text-center md:text-left">
                     Even advanced language learners struggle to <span className="text-neon">lead, pitch, or persuade</span> in a second language when the stakes are high.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="space-y-8">
                    <ThreeDCard>
                      <div className="light-card p-6 rounded-xl backdrop-blur-sm">
                        <div className="text-2xl font-bold mb-3">Apps teach grammar, not performance</div>
                        <p className="text-medium">
                          They don’t prepare you for meetings, interviews, or <span className="text-neon">real-time</span> conversations.
                        </p>
                      </div>
                    </ThreeDCard>
                    <ThreeDCard>
                      <div className="light-card p-6 rounded-xl backdrop-blur-sm">
                        <div className="text-2xl font-bold mb-3">Tutors lack context and don’t scale</div>
                        <p className="text-medium">
                          They can’t support day-to-day work or field-specific {" "}
                          <span className="text-neon">challenges.</span>
                        </p>
                      </div>
                    </ThreeDCard>
                    <ThreeDCard>
                      <div className="light-card p-6 rounded-xl backdrop-blur-sm">
                        <div className="text-2xl font-bold mb-3">AI tools edit, but don’t coach</div>
                        <p className="text-medium">
                          They fix grammar, but not delivery, tone, or{" "}
                          <span className="text-neon">confidence.</span>
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-neon">Explore</span> is an AI copilot for professionals who use a second language to succeed at work.
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
                            Practice high-pressure scenarios in your field
                          </h4>
                          <p className="text-medium">
                            From presentations to negotiations
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold mb-2 flex items-center">
                            <span className="text-neon mr-2">
                              <Image src={Star4} width={20} height={20} alt="" />
                            </span>
                            Master strategic communication
                          </h4>
                          <p className="text-medium">
                            Refine tone, delivery, and structure
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold mb-2 flex items-center">
                            <span className="text-neon mr-2">
                              <Image src={Star4} width={20} height={20} alt="" />
                            </span>
                            Perform with precision in any language you use at work
                          </h4>
                          <p className="text-medium">
                            English, German, and more
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
                      <h3 className="text-2xl font-bold mb-4 text-center">Choose your scenario</h3>
                      <p className="text-medium text-center">
                        Select real-world situations, from presentations to <span className="text-neon">industry-specific</span> emails and negotiations.
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
                      <h3 className="text-2xl font-bold mb-4 text-center">Talk to your AI copilot</h3>
                      <p className="text-medium text-center">
                        Engage in personalized speaking practice that <span className="text-neon">adapts</span> to your needs in real-time.
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
                      <h3 className="text-2xl font-bold mb-4 text-center">Get instant feedback</h3>
                      <p className="text-medium text-center">
                        Receive actionable insights on clarity, tone, structure, and language. <span className="text-neon">Improve</span> both your speaking and writing to fit the demands of your industry.
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
                  Go beyond grammar — we help you <span className="text-neon">drive</span> your career forward
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 backdrop-blur-sm hover:bg-white transition-colors h-full">
                    <div className="text-2xl font-bold mb-4">Context-Aware</div>
                    <p className="text-medium">
                      Fine-tune your copilot by adding your <span className="text-neon">own content</span>, ensuring personalized feedback tailored to your specific goals.
                    </p>
                  </div>
                </ThreeDCard>

                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 backdrop-blur-sm hover:bg-white transition-colors h-full">
                    <div className="text-2xl font-bold mb-4">Industry-Specific Practice</div>
                    <p className="text-medium">
                      Sharpen your <span className="text-neon">communication</span> with scenarios like client presentations, negotiations, or team meetings.
                    </p>
                  </div>
                </ThreeDCard>

                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 backdrop-blur-sm hover:bg-white transition-colors h-full">
                    <div className="text-2xl font-bold mb-4">High-Stakes Performance</div>
                    <p className="text-medium">
                      Simulate real pressure and <span className="text-neon">get feedback</span> on tone, clarity, and structure for critical career moments.
                    </p>
                  </div>
                </ThreeDCard>

                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 backdrop-blur-sm hover:bg-white transition-colors h-full">
                    <div className="text-2xl font-bold mb-4">Integrated Into Your Workflow</div>
                    <p className="text-medium">
                      Practice language skills in real-time as you prepare for meetings, emails, or presentations — <span className="text-neon">no extra time needed.</span>
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
                Master <span className="text-neon">high-impact</span> communication in any language
              </h2>
              <p className="text-xl text-medium mb-8 max-w-2xl mx-auto">
                Get started with Explore and <span className="text-neon">master</span> the art of high-stakes conversations.
              </p>
              <ThreeDCard>
                <div className="light-card p-8 rounded-2xl backdrop-blur-md">
                  <Link href="https://app.explorelabs.tech">
                    <Button
                      asChild
                      type="submit"
                      className="w-3/4 bg-neon text-white hover:bg-neon/90 h-14 text-lg font-medium cyber-button"
                    >
                      <span className="text-xl">Go to app</span>
                    </Button>
                    </Link>
                </div>
              </ThreeDCard>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent"></div>
          <div className="absolute inset-0 bg-neon/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Choose your plan
              </h2>
              <p className="text-xl text-medium mb-12 max-w-2xl mx-auto">
                Upgrade your English practice experience with our premium features
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 h-full flex flex-col">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2">Basic</h3>
                      <p className="text-medium">Perfect for beginners</p>
                    </div>
                    <div className="text-4xl font-bold mb-6">
                      $19.99<span className="text-medium text-lg">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Up 30 personalized AI companions
                      </li>
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Limited daily speaking practice
                      </li>
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Personalized feedback and corrections
                      </li>
                    </ul>
                    <Button className="w-full bg-black hover:bg-black/90" size="lg" asChild>
                      <Link href="https://app.explorelabs.tech">Subscribe Now</Link>
                    </Button>
                  </div>
                </ThreeDCard>

                {/* Premium Plan */}
                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 h-full flex flex-col relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-white px-4 py-1 rounded-full text-sm">
                      Popular
                    </div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2">Premium</h3>
                      <p className="text-medium">Most popular choice</p>
                    </div>
                    <div className="text-4xl font-bold mb-6">
                      $34.99<span className="text-medium text-lg">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Unlimited number of AI companions
                      </li>
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Unlimited daily speaking practice
                      </li>
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Realtime calls practice
                      </li>
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Personalized feedback and corrections
                      </li>
                    </ul>
                    <Button className="w-full bg-neon hover:bg-neon/90" size="lg" asChild>
                      <Link href="https://app.explorelabs.tech">Subscribe Now</Link>
                    </Button>
                  </div>
                </ThreeDCard>

                {/* Annual Plan */}
                <ThreeDCard>
                  <div className="light-card rounded-2xl p-8 h-full flex flex-col">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2">Annual</h3>
                      <p className="text-medium">Best value</p>
                    </div>
                    <div className="text-4xl font-bold mb-6">
                      $149.99<span className="text-medium text-lg">/year</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Unlimited number of AI companions
                      </li>
                      <li className="flex i tems-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Unlimited daily speaking practice
                      </li>
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Realtime calls practice
                      </li>
                      <li className="flex items-center gap-2 text-medium">
                        <span className="text-neon">✓</span> Personalized feedback and corrections
                      </li>
                    </ul>
                    <Button className="w-full bg-black hover:bg-black/90" size="lg" asChild>
                      <Link href="https://app.explorelabs.tech">Subscribe Now</Link>
                    </Button>
                  </div>
                </ThreeDCard>
              </div>
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
            <div className="flex gap-6">
              <div className="text-sm text-medium">© {new Date().getFullYear()} Explore. All rights reserved.</div>
              <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-medium hover:text-neon transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-sm text-medium hover:text-neon transition-colors">
                Terms & Conditions
              </Link>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}

