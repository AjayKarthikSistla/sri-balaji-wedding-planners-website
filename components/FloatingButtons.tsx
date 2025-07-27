"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle, Instagram, Phone, ArrowUp, Mail } from "lucide-react"

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [particles, setParticles] = useState<
    { left: number; top: number; delay: number; duration: number }[]
  >([])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const generated = Array.from({ length: 8 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }))
    setParticles(generated)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const whatsappNumber = "917453993593"
  const message = "Hi! I'm interested in your wedding planning services. Can we discuss my requirements?"

  const buttons = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      color: "from-green-600/90 to-green-700/90",
      hoverColor: "hover:shadow-green-500/20",
      action: () => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank"),
      delay: 0.1,
    },
    {
      icon: Instagram,
      label: "Instagram",
      color: "from-pink-600/90 to-purple-700/90",
      hoverColor: "hover:shadow-pink-500/20",
      action: () => window.open("https://www.instagram.com/balaji_wedding_planner", "_blank"),
      delay: 0.2,
    },
    {
      icon: Phone,
      label: "Call Now",
      color: "from-blue-600/90 to-blue-700/90",
      hoverColor: "hover:shadow-blue-500/20",
      action: () => window.open("tel:+917453993593"),
      delay: 0.3,
    },
    {
      icon: Mail,
      label: "Email",
      color: "from-amber-600/90 to-orange-600/90",
      hoverColor: "hover:shadow-amber-500/20",
      action: () => window.open("mailto:info@balajiwedding.com"),
      delay: 0.4,
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-gradient-to-r from-amber-600/90 to-red-600/90 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-amber-500/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.6, type: "spring" }}
      >
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          whileHover={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.3 }} className="relative z-10">
          <MessageCircle className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Action Buttons */}
      <AnimatePresence>
        {isExpanded &&
          buttons.map((button) => (
            <motion.button
              key={button.label}
              onClick={button.action}
              className={`w-14 h-14 bg-gradient-to-r ${button.color} rounded-full flex items-center justify-center text-white shadow-2xl ${button.hoverColor} hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: 50 }}
              transition={{ delay: button.delay, duration: 0.4, type: "spring" }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0, opacity: 1 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />

              <button.icon className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />

              {/* Tooltip */}
              <motion.div
                className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900/95 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ x: 10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                {button.label}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900/95" />
              </motion.div>
            </motion.button>
          ))}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="w-14 h-14 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: -360 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              whileHover={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />

            <ArrowUp className="w-6 h-6 relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />

            {/* Tooltip */}
            <motion.div
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900/95 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={{ x: 10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              Back to Top
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900/95" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Particle Effects - Hydration Safe */}
      {particles.length > 0 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-500/50 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.7, 0],
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
    </div>
  )
}
