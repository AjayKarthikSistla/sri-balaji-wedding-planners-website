"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Instagram } from "lucide-react"
import Link from "next/link"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(2, 8, 23, 0)", "rgba(2, 8, 23, 0.95)"])
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"])
  const scale = useTransform(scrollY, [0, 100], [1, 0.98])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "testimonials", "gallery", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
      style={{ backgroundColor, backdropFilter: backdropBlur, scale }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center space-x-3"
        >
          <motion.div
            whileHover={{ rotate: 180, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 relative"
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-600/80 via-red-700/80 to-pink-600/80 rounded-full p-0.5">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-amber-500/90 font-bold text-lg">B</span>
              </div>
            </div>
          </motion.div>
          <div>
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-amber-600/90 via-red-700/90 to-pink-600/90 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              BALAJI
            </motion.h1>
            <motion.p
              className="text-xs text-emerald-600/80 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              WEDDING PLANNER
            </motion.p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link
                href={`#${item.id}`}
                className={`relative transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-amber-500/90 font-semibold"
                    : "text-slate-200 hover:text-amber-400/80"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600/80 to-red-600/80 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gradient-to-r from-pink-600/80 to-purple-600/80 rounded-full hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Instagram className="w-5 h-5 text-white" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-slate-200"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-amber-600/20 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.id}`}
                    className="block py-2 text-slate-200 hover:text-amber-400/80 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
