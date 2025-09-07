"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState, useMemo } from "react" // ✅ added useMemo
import { Button } from "../components/ui/button"
import { Sparkles, Heart, Star, Crown, Flower, Diamond } from "lucide-react"
import Image from "next/image"

// Floating icons configuration (kept small for performance)
const floatingElements = [
  { icon: Sparkles, delay: 0, x: "8%", y: "15%", color: "text-amber-500/60", size: 20 },
  { icon: Heart, delay: 0.5, x: "85%", y: "25%", color: "text-red-500/60", size: 18 },
  { icon: Star, delay: 1, x: "12%", y: "65%", color: "text-pink-500/60", size: 16 },
  { icon: Crown, delay: 1.5, x: "88%", y: "55%", color: "text-purple-500/60", size: 22 },
  { icon: Flower, delay: 2, x: "45%", y: "8%", color: "text-emerald-500/60", size: 19 },
  { icon: Diamond, delay: 2.5, x: "75%", y: "75%", color: "text-amber-400/60", size: 17 },
]

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
    }))
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950"
    >
      {/* Subtle Background Pattern */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-red-600/5 to-pink-600/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05),transparent_50%)]" />
      </motion.div>

      {/* Floating Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} will-change-transform`}
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

      {/* Main Content */}
      <motion.div className="relative z-10 text-center px-6 mx-auto flex items-center justify-evenly flex-wrap w-screen" style={{ opacity, scale }}>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} className="mb-8">
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.6 }} className="inline-block">
            <Image src="/logo.png" alt="Balaji Wedding Planner Logo" width={320} height={320} className="mx-auto drop-shadow-2xl" />
          </motion.div>
        </motion.div>

        <div>
        <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1.2 }}>
          <motion.span
            className="bg-gradient-to-r from-amber-600/90 via-red-700/90 via-pink-600/90 to-purple-600/90 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            BALAJI
          </motion.span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1 }} className="mb-8">
          <motion.p
            className="text-2xl md:text-4xl text-emerald-600/80 font-semibold tracking-widest mb-6"
            animate={{
              textShadow: [
                "0 0 10px rgba(5, 150, 105, 0.3)",
                "0 0 20px rgba(5, 150, 105, 0.5)",
                "0 0 10px rgba(5, 150, 105, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            WEDDING PLANNER
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-slate-300/90 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1.2 }}
          >
            “Your Day, Your Way” 
            <br />
            <motion.span
              className="text-amber-500/80 font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Crafted to Perfection
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }}>
          <motion.div whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} className="relative overflow-hidden rounded-full">
            <Button size="lg" className="bg-gradient-to-r from-amber-600/90 via-red-600/90 to-pink-600/90 hover:from-amber-700/90 hover:via-red-700/90 hover:to-pink-700/90 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 relative z-10">
              Plan Your Wedding
            </Button>
            <motion.div className="absolute inset-0 bg-white/20 rounded-full" initial={{ scale: 0, opacity: 1 }} whileHover={{ scale: 1.5, opacity: 0 }} transition={{ duration: 0.6 }} />
          </motion.div>

          <motion.div whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} className="relative overflow-hidden rounded-full">
            <Button size="lg" variant="outline" className="border-2 border-emerald-600/80 text-emerald-500/90 hover:bg-emerald-600/80 hover:text-white px-12 py-4 rounded-full text-lg font-semibold bg-transparent backdrop-blur-sm transition-all duration-500 relative z-10">
              View Portfolio
            </Button>
            <motion.div className="absolute inset-0 bg-emerald-500/10 rounded-full" initial={{ scale: 0 }} whileHover={{ scale: 1 }} transition={{ duration: 0.4 }} />
          </motion.div>
        </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5, duration: 1 }}>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} className="text-amber-500/70">
            <div className="w-0.5 h-12 bg-gradient-to-b from-amber-500/70 to-transparent mx-auto mb-2" />
            <Sparkles size={16} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Particle Effects (Hydration-safe) */}
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
    </section>
  )
}
