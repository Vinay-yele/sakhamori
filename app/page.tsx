/* eslint-disable react/jsx-no-undef */
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Cloud,
  Dumbbell,
  Bike,
  Zap,
  Github,
  Linkedin,
  Music,
  Mail,
  Trophy,
  Cpu,
  Server,
  Wrench,
} from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const [skillProgress, setSkillProgress] = useState({
    promptEngineering: 0,
    azure: 0,
    machineLearning: 0,
    gyming: 0,
    bikeRiding: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillProgress({
        promptEngineering: 100,
        azure: 85,
        machineLearning: 95,
        gyming: 100,
        bikeRiding: 90,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const achievements = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "LLM Whisperer",
      description: "Trained a local LLM so well, it sends motivational quotes daily",
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Azure Survivor",
      description: "Survived 100+ Azure deployments without losing hair",
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-400" />,
      title: "MLOps Master",
      description: "Integrated MLOps so tight, models breathe CI/CD",
    },
    {
      icon: <Server className="w-8 h-8 text-orange-400" />,
      title: "DevOps Daddy",
      description: "Built pipelines so smooth, Jenkins called him 'Daddy'",
    },
  ]

  const projects = [
    {
      title: "Project LLMinator",
      description: "A local LLM that doesn't ghost you like GPT-3.5",
      tech: ["Python", "PyTorch", "Azure ML", "Docker"],
    },
    {
      title: "PromptCraft",
      description: "Crafted prompts so sharp they cut model latency",
      tech: ["OpenAI API", "LangChain", "FastAPI", "React"],
    },
    {
      title: "CloudMuscle",
      description: "Azure infrastructure that flexes harder than biceps",
      tech: ["Azure", "Terraform", "Kubernetes", "MLOps"],
    },
  ]

  const testimonials = [
    {
      name: "GPT-4",
      role: "Large Language Model",
      quote: "He asked me questions I still dream about.",
    },
    {
      name: "Jenkins",
      role: "CI/CD Platform",
      quote: "CI/CD has never been this thrilling.",
    },
    {
      name: "Gym Trainer",
      role: "Fitness Expert",
      quote: "His muscle memory applies to code too.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        {/* Add your background image below */}
        <div className="absolute inset-0 bg-[url('/your-background-image.jpg')] bg-cover bg-center opacity-20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
          ))}
        </div>

        {/* Custom background image overlay */}
        <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6">
        <Badge className="bg-purple-600 text-white text-lg px-4 py-2 mb-4">
          <Cpu className="w-5 h-5 mr-2" />
          GPT School of Promptology Graduate, Sakhamori Krishna Saket
        </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        PromptLord
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">⚠️ Warning: My prompts are stronger than your coffee ⚠️</p>
          <p className="text-xl mb-12 text-gray-300">
        Master of Prompt Engineering | MLOps Maverick | Azure Cloud Tamer | Code Rider
          </p>
          <Button
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
          >
        <Dumbbell className="w-5 h-5 mr-2" />
        See what I've built... and lifted 💪
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who Am I? Besides Being a Gym-Going, Cloud-Taming, AI-Wrangling Maverick
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  After years of breaking servers and bending GPUs to my will, I pursued a Master's in Prompt
                  Engineering — because I wanted to talk to AIs, not just build them. When I'm not crafting the perfect
                  prompt or deadlifting data pipelines, you'll find me on my Meteor 350 (aka "Code Rider") or at the
                  gym, where I bench press bugs out of my code. They say I once trained an LLM so well, it refused to
                  hallucinate. Legend has it, it still talks back.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Epic Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm text-center">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Power Levels</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-400" />
                  Prompt Engineering
                </span>
                <span className="text-purple-400">{skillProgress.promptEngineering}%</span>
              </div>
              <Progress value={skillProgress.promptEngineering} className="h-3" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold flex items-center">
                  <Cloud className="w-5 h-5 mr-2 text-blue-400" />
                  Azure Cloud
                </span>
                <span className="text-blue-400">{skillProgress.azure}%</span>
              </div>
              <Progress value={skillProgress.azure} className="h-3" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold flex items-center">
                  <Cpu className="w-5 h-5 mr-2 text-green-400" />
                  Machine Learning
                </span>
                <span className="text-green-400">{skillProgress.machineLearning}%</span>
              </div>
              <Progress value={skillProgress.machineLearning} className="h-3" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold flex items-center">
                  <Dumbbell className="w-5 h-5 mr-2 text-orange-400" />
                  Gyming 🏋️‍♂️
                </span>
                <span className="text-orange-400">{skillProgress.gyming}%</span>
              </div>
              <Progress value={skillProgress.gyming} className="h-3" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold flex items-center">
                  <Bike className="w-5 h-5 mr-2 text-red-400" />
                  Bike Riding 🏍️
                </span>
                <span className="text-red-400">{skillProgress.bikeRiding}%</span>
              </div>
              <Progress value={skillProgress.bikeRiding} className="h-3" />
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30">
              <p className="text-white text-center font-semibold">
                <Zap className="w-5 h-5 inline mr-2 text-yellow-400" />
                Special Ability: Can debug code while doing bicep curls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Life in Pixels</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <Image
                src="/bike.jpeg"
                alt="Bike"
                className="object-cover w-full h-full"
                style={{ borderRadius: 0 }}
              />
            </div>
            <CardContent className="p-4">
              <p className="text-gray-300 text-sm text-center">
                "When I'm not lifting weights, I'm lifting model accuracy."
              </p>
            </CardContent>
          </Card>

            <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-yellow-500 to-purple-600 flex items-center justify-center">
              <Image
              src="/smart.jpeg"
              alt="Smart"
              className="object-cover w-full h-full"
              style={{ borderRadius: 0 }}
              />
            </div>
            <CardContent className="p-4">
              <p className="text-gray-300 text-sm text-center">
              "Brains, brawn, and bandwidth – the holy trinity."
              </p>
            </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Image
              src="/pool.jpeg"
              alt="Pool"
              className="object-cover w-full h-full"
              style={{ borderRadius: 0 }}
              />
            </div>
            <CardContent className="p-4">
              <p className="text-gray-300 text-sm text-center">
              "Sometimes you need to dive deep—into code or the pool."
              </p>
            </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Image
                  src="/gf.jpeg"
                  alt="Girlfriend"
                  className="object-cover w-full h-full"
                  style={{ borderRadius: 0 }}
                />
              </div>
              <CardContent className="p-4">
                <p className="text-gray-300 text-sm text-center">
                  "My friend says my code gets more attention than she does. She’s not wrong."
                </p>
              </CardContent>
            </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">LLM Showcase</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">What They Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="text-right">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Wanna Collab or Bench Together?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's build something epic while discussing the perfect deadlift form
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
            >
              <Music className="w-5 h-5 mr-2" />
              Prompt While You Pump
            </Button>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Ping me if you dare
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 PromptLord. Built with React, powered by caffeine and determination.</p>
          <p className="text-gray-500 text-sm mt-2">No AIs were harmed in the making of this portfolio.</p>
        </div>
      </footer>
    </div>
  )
}
