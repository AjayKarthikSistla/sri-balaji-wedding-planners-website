"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = [
    {
      name: "Priya & Rajesh Sharma",
      event: "Traditional Wedding",
      rating: 5,
      text: "Balaji Wedding Planner made our dream wedding come true! Every ritual was perfectly organized, and the decorations were absolutely stunning. They understood our vision and exceeded our expectations in every way.",
      image: "/placeholder.svg?height=120&width=120&text=Priya+Rajesh",
      location: "Mumbai, Maharashtra",
      venue: "Heritage Palace",
      guests: "500+",
      date: "December 2023",
    },
    {
      name: "Anita & Vikram Patel",
      event: "Destination Wedding",
      rating: 5,
      text: "Our destination wedding in Rajasthan was magical thanks to Balaji team. They handled everything from guest accommodation to traditional ceremonies flawlessly. The royal treatment we received was unforgettable!",
      image: "/placeholder.svg?height=120&width=120&text=Anita+Vikram",
      location: "Udaipur, Rajasthan",
      venue: "City Palace",
      guests: "300+",
      date: "February 2024",
    },
    {
      name: "Meera & Arjun Singh",
      event: "Royal Wedding",
      rating: 5,
      text: "The royal treatment we received was beyond imagination. From the grand mandap to the exquisite catering, every detail was perfect. Our guests are still talking about the magnificent celebration!",
      image: "/placeholder.svg?height=120&width=120&text=Meera+Arjun",
      location: "Delhi, NCR",
      venue: "Grand Ballroom",
      guests: "800+",
      date: "November 2023",
    },
    {
      name: "Kavya & Rohit Gupta",
      event: "Modern Traditional Wedding",
      rating: 5,
      text: "Perfect blend of tradition and modernity. The team understood our need for contemporary touches while maintaining traditional values. Outstanding service and flawless execution throughout!",
      image: "/placeholder.svg?height=120&width=120&text=Kavya+Rohit",
      location: "Bangalore, Karnataka",
      venue: "Resort Wedding",
      guests: "400+",
      date: "January 2024",
    },
    {
      name: "Sneha & Karthik Reddy",
      event: "South Indian Wedding",
      rating: 5,
      text: "Balaji team perfectly executed our South Indian wedding with all traditional customs. The attention to detail and cultural sensitivity was remarkable. Highly recommended for authentic celebrations!",
      image: "/placeholder.svg?height=120&width=120&text=Sneha+Karthik",
      location: "Chennai, Tamil Nadu",
      venue: "Temple Wedding",
      guests: "600+",
      date: "March 2024",
    },
  ]

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900/20 to-slate-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-52 h-52 bg-gradient-to-br from-amber-600/6 to-red-600/6 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 120, 240, 360] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-600/6 to-purple-600/6 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 240, 120, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600/80 to-red-600/80 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-amber-600/90 via-red-700/90 to-pink-600/90 bg-clip-text text-transparent">
              Happy Couples
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-slate-300/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Hear what our couples say about their magical wedding experience
          </motion.p>
        </motion.div>

        {/* 3D Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto perspective-1000">
          <div className="relative h-[600px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 },
                }}
                className="absolute w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="bg-gradient-to-br from-slate-800/40 to-slate-800/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-600/20 shadow-2xl max-w-4xl mx-auto">
                  {/* Quote Icon with Animation */}
                  <motion.div
                    className="absolute -top-6 left-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600/90 to-red-600/90 rounded-full flex items-center justify-center shadow-xl">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Stars with Cascade Animation */}
                  <motion.div
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      >
                        <Star className="w-7 h-7 text-amber-500/90 fill-current mx-1" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.blockquote
                    className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 text-center font-light italic"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.blockquote>

                  {/* Client Info Card */}
                  <motion.div
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    {/* Profile Image */}
                    <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-gradient-to-r from-amber-600/80 to-red-600/80 shadow-xl"
                      />
                      <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-600/20 to-red-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Client Details */}
                    <div className="text-center md:text-left">
                      <motion.h4 className="font-bold text-2xl text-slate-200 mb-2" whileHover={{ scale: 1.02 }}>
                        {testimonials[currentIndex].name}
                      </motion.h4>
                      <motion.p
                        className="text-amber-500/90 font-semibold mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                      >
                        {testimonials[currentIndex].event}
                      </motion.p>
                      <div className="text-slate-400/80 text-sm space-y-1">
                        <p>{testimonials[currentIndex].location}</p>
                        <p>{testimonials[currentIndex].venue}</p>
                        <p>
                          {testimonials[currentIndex].guests} guests • {testimonials[currentIndex].date}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-amber-600/90 to-red-600/90 rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-red-600/90 to-pink-600/90 rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </motion.button>

          {/* Enhanced Dots Indicator */}
          <motion.div
            className="flex justify-center mt-12 space-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-amber-600/90 to-red-600/90 scale-125"
                    : "bg-slate-600/50 hover:bg-slate-500/70"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 1 }}
        >
          {[
            { number: "1200+", label: "Happy Couples", icon: "💕" },
            { number: "15+", label: "Years Experience", icon: "🏆" },
            { number: "5★", label: "Average Rating", icon: "⭐" },
            { number: "100%", label: "Satisfaction Rate", icon: "✨" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <motion.div
                className="text-4xl mb-2 group-hover:scale-110 transition-transform"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600/90 to-red-600/90 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-400/80 group-hover:text-slate-300/90 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
