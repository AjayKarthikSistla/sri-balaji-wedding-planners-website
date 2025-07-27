"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Calendar, Users, Heart, Star, Award, Crown, Trophy, Gift } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counters, setCounters] = useState({ events: 0, years: 0, satisfaction: 0, rating: 0 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  const stats = [
    {
      icon: Calendar,
      label: "1200+",
      desc: "Weddings Planned",
      color: "from-amber-600/80 to-yellow-600/80",
      key: "events",
      target: 1200,
    },
    {
      icon: Users,
      label: "15+",
      desc: "Years Experience",
      color: "from-red-600/80 to-pink-600/80",
      key: "years",
      target: 15,
    },
    {
      icon: Heart,
      label: "100%",
      desc: "Happy Couples",
      color: "from-pink-600/80 to-purple-600/80",
      key: "satisfaction",
      target: 100,
    },
    {
      icon: Star,
      label: "5",
      desc: "Star Rating",
      color: "from-emerald-600/80 to-green-600/80",
      key: "rating",
      target: 5,
    },
  ]

  const features = [
    {
      icon: Crown,
      title: "Royal Treatment",
      desc: "Every couple deserves royal treatment on their special day",
      color: "text-amber-500/80",
    },
    {
      icon: Award,
      title: "Award Winning",
      desc: "Recognized for excellence in wedding planning services",
      color: "text-red-500/80",
    },
    {
      icon: Trophy,
      title: "Premium Quality",
      desc: "Only the finest vendors and highest quality services",
      color: "text-emerald-500/80",
    },
    {
      icon: Gift,
      title: "Personal Touch",
      desc: "We add personal touches that make your wedding unique",
      color: "text-purple-500/80",
    },
  ]

  // Counter animation effect
  useEffect(() => {
    if (isInView) {
      stats.forEach((stat) => {
        let start = 0
        const end = stat.target
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setCounters((prev) => ({
            ...prev,
            [stat.key]: Math.floor(start),
          }))
        }, 16)
      })
    }
  }, [isInView])

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900/30 to-slate-950 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-amber-600/8 to-red-600/8 rounded-full blur-3xl"
        style={{ y, rotate }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-600/8 to-purple-600/8 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Slide Animation */}
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
              <Crown className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-amber-600/90 via-red-700/90 to-pink-600/90 bg-clip-text text-transparent">
              About Us
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-slate-300/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Crafting Royal Weddings with Traditional Values and Modern Excellence
          </motion.p>
        </motion.div>

        {/* Main Content with Slide Animations */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side with 3D Hover Effect */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/placeholder.svg?height=600&width=800&text=Traditional Indian Wedding Ceremony"
                alt="Traditional Indian Wedding"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Floating Badge with Bounce Animation */}
              <motion.div
                className="absolute top-6 right-6 bg-gradient-to-r from-amber-600/90 to-red-600/90 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
                initial={{ scale: 0, rotate: -45 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 1, duration: 0.6, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                15+ Years
              </motion.div>
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full opacity-60 blur-xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 120, 240, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-full opacity-60 blur-xl"
              animate={{ scale: [1.2, 1, 1.2], rotate: [360, 240, 120, 0] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          {/* Content Side with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="space-y-8"
          >
            <motion.h3
              className="text-4xl md:text-5xl font-bold text-slate-200 mb-6"
              whileInView={{ scale: [0.95, 1.02, 1] }}
              transition={{ duration: 0.6 }}
            >
              Your Dream Wedding,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600/90 to-red-600/90">
                Our Expertise
              </span>
            </motion.h3>

            <motion.p
              className="text-lg text-slate-300/80 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 1 }}
            >
              At Balaji Wedding Planner, we believe every wedding is a sacred celebration that deserves royal treatment.
              With over 15 years of experience in creating magical moments, we specialize in traditional Indian weddings
              while embracing modern elegance.
            </motion.p>

            <motion.p
              className="text-lg text-slate-300/80 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
            >
              From intimate ceremonies to grand celebrations, we handle every detail with meticulous care, ensuring your
              special day reflects your unique love story and cultural traditions.
            </motion.p>

            {/* Features Grid with Hover Animations */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3, rotateY: 5 }}
                  className="bg-gradient-to-br from-slate-800/40 to-slate-800/20 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30 hover:border-amber-600/30 transition-all duration-300 cursor-pointer"
                >
                  <feature.icon className={`w-8 h-8 ${feature.color} mb-2`} />
                  <h4 className="font-semibold text-slate-200 mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-400/80">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 + index * 0.15, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05, y: -5, rotateY: 10 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div
                className="font-bold text-3xl md:text-4xl text-slate-200 mb-2"
                animate={isInView ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.key === "events"
                  ? counters.events.toLocaleString() + "+"
                  : stat.key === "years"
                    ? counters.years + "+"
                    : stat.key === "satisfaction"
                      ? counters.satisfaction + "%"
                      : counters.rating}
              </motion.div>
              <div className="text-slate-400/80 text-sm">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
