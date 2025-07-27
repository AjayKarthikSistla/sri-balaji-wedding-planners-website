"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "../components/ui/button"
import { Sparkles, Heart, Star, Crown, Flower, Diamond } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  const floatingElements = [
    { icon: Sparkles, delay: 0, x: "8%", y: "15%", color: "text-amber-500/60", size: 20 },
    { icon: Heart, delay: 0.5, x: "85%", y: "25%", color: "text-red-500/60", size: 18 },
    { icon: Star, delay: 1, x: "12%", y: "65%", color: "text-pink-500/60", size: 16 },
    { icon: Crown, delay: 1.5, x: "88%", y: "55%", color: "text-purple-500/60", size: 22 },
    { icon: Flower, delay: 2, x: "45%", y: "8%", color: "text-emerald-500/60", size: 19 },
    { icon: Diamond, delay: 2.5, x: "75%", y: "75%", color: "text-amber-400/60", size: 17 },
  ]

  const [particles, setParticles] = useState<
    { left: number; top: number; delay: number; duration: number }[]
  >([])

  useEffect(() => {
    const generated = Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
    }))
    setParticles(generated)
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950"
    >
      {/* Subtle Background Pattern */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-red-600/5 to-pink-600/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05),transparent_50%)]" />
      </motion.div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color}`}
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: [0, 0.7, 0.4, 0.7],
            scale: [0, 1.1, 0.9, 1],
            rotate: [0, 180, 360],
            y: [0, -15, 5, -10, 0],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <element.icon size={element.size} />
        </motion.div>
      ))}

      {/* Enhanced Particle Effects - Hydration-safe */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-500/40 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
