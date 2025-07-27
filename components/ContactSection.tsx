"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "../components/ui/button"
import { Phone, Mail, MapPin, Clock, Send, User, Calendar } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+917453993593"],
      color: "from-green-600/70 to-emerald-600/70",
      hoverColor: "hover:shadow-green-500/15",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@balajiwedding.com", "bookings@balajiwedding.com"],
      color: "from-blue-600/70 to-cyan-600/70",
      hoverColor: "hover:shadow-blue-500/15",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Meerut Road, Avas Vikas,", "Hapur, Uttar Pradesh 245101"],
      color: "from-red-600/70 to-pink-600/70",
      hoverColor: "hover:shadow-red-500/15",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sun: 10:00 AM - 6:00 PM"],
      color: "from-purple-600/70 to-indigo-600/70",
      hoverColor: "hover:shadow-purple-500/15",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900/15 to-slate-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-52 h-52 bg-gradient-to-br from-amber-600/6 to-red-600/6 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 120, 240, 360] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-600/6 to-purple-600/6 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 240, 120, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
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
              <Send className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-amber-600/90 via-red-700/90 to-pink-600/90 bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-slate-300/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Ready to plan your dream wedding? Let's create magic together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.h3
              className="text-3xl font-bold text-slate-200 mb-8"
              whileInView={{ scale: [0.95, 1.02, 1] }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`flex items-start space-x-4 group cursor-pointer p-4 rounded-2xl bg-gradient-to-r from-slate-800/20 to-slate-800/5 hover:from-slate-800/40 hover:to-slate-800/20 transition-all duration-300 ${info.hoverColor}`}
              >
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                  whileHover={{ rotate: 180, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-xl text-slate-200 mb-2 group-hover:text-amber-400/90 transition-colors duration-300">
                    {info.title}
                  </h4>
                  {info.details.map((detail, detailIndex) => (
                    <motion.p
                      key={detailIndex}
                      className="text-slate-400/80 group-hover:text-slate-300/90 transition-colors duration-300"
                      initial={{ opacity: 0, y: 5 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 + detailIndex * 0.05 }}
                    >
                      {detail}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-8 border-t border-slate-700/30"
            >
              <h4 className="text-xl font-semibold text-slate-200 mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {["Instagram", "Facebook", "YouTube"].map((platform, index) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-pink-600/80 to-purple-600/80 rounded-full flex items-center justify-center text-white font-semibold hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  >
                    <span className="group-hover:scale-110 transition-transform">{platform[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 backdrop-blur-lg rounded-3xl p-8 border border-slate-600/20 shadow-2xl relative overflow-hidden"
          >
            {/* Form Background Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-red-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
              whileHover={{ scale: 1.02 }}
            />

            <motion.h3
              className="text-3xl font-bold text-slate-200 mb-8 text-center relative z-10"
              whileInView={{ scale: [0.95, 1.02, 1] }}
              transition={{ duration: 0.6 }}
            >
              Plan Your Wedding
            </motion.h3>

            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="relative"
                >
                  <label className="block text-slate-300/80 mb-2 font-medium flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/30 border border-slate-600/30 text-slate-200 placeholder-slate-400/60 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {focusedField === "name" && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/20 to-red-500/20 -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="relative"
                >
                  <label className="block text-slate-300/80 mb-2 font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/30 border border-slate-600/30 text-slate-200 placeholder-slate-400/60 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {focusedField === "email" && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="relative"
                >
                  <label className="block text-slate-300/80 mb-2 font-medium flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your phone"
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/30 border border-slate-600/30 text-slate-200 placeholder-slate-400/60 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {focusedField === "phone" && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                {/* Date Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="relative"
                >
                  <label className="block text-slate-300/80 mb-2 font-medium flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Wedding Date
                  </label>
                  <motion.input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("date")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/30 border border-slate-600/30 text-slate-200 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {focusedField === "date" && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Event Type Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="relative"
              >
                <label className="block text-slate-300/80 mb-2 font-medium">Event Type</label>
                <motion.select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("eventType")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-700/30 border border-slate-600/30 text-slate-200 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Select event type</option>
                  <option value="traditional">Traditional Wedding</option>
                  <option value="royal">Royal Wedding</option>
                  <option value="destination">Destination Wedding</option>
                  <option value="reception">Reception</option>
                  <option value="sangeet">Sangeet & Mehendi</option>
                </motion.select>
                {focusedField === "eventType" && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="relative"
              >
                <label className="block text-slate-300/80 mb-2 font-medium">Tell us about your dream wedding</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Describe your vision, guest count, budget, and any special requirements..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-700/30 border border-slate-600/30 text-slate-200 placeholder-slate-400/60 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
                {focusedField === "message" && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-red-500/20 -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600/90 via-red-600/90 to-pink-600/90 hover:from-amber-700/90 hover:via-red-700/90 hover:to-pink-700/90 text-white py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden"
                  size="lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-xl"
                    initial={{ scale: 0, opacity: 1 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="flex items-center justify-center space-x-2 relative z-10"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </motion.div>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
