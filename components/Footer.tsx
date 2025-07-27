"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Crown } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const footerLinks = {
    services: [
      "Traditional Weddings",
      "Royal Celebrations",
      "Destination Weddings",
      "Reception Planning",
      "Sangeet & Mehendi",
      "Photography & Video",
    ],
    quickLinks: ["About Us", "Our Services", "Gallery", "Testimonials", "Contact", "Blog"],
    legal: ["Privacy Policy", "Terms of Service", "Cancellation Policy", "Refund Policy"],
  }

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/balaji_wedding_planner",
      color: "from-pink-600/80 to-purple-700/80",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/balajiweddingplanner",
      color: "from-blue-600/80 to-blue-700/80",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/balajiweddingplanner",
      color: "from-red-600/80 to-red-700/80",
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-52 h-52 bg-gradient-to-br from-amber-600/4 to-red-600/4 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 120, 240, 360] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-600/4 to-purple-600/4 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 240, 120, 0] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.02 }}>
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-amber-600/80 to-red-600/80 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Crown className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600/90 to-red-600/90 bg-clip-text text-transparent">
                  BALAJI
                </h3>
                <p className="text-emerald-600/80 text-sm tracking-widest">WEDDING PLANNER</p>
              </div>
            </motion.div>

            <motion.p
              className="text-slate-400/80 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Creating royal celebrations and unforgettable moments for over 15 years. Where dreams meet tradition in
              perfect harmony.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: "+91 74539 93593" },
                { icon: Mail, text: "info@balajiwedding.com" },
                { icon: MapPin, text: "Hapur, Uttar Pradesh" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-slate-400/70 hover:text-slate-300/90 transition-colors duration-300 cursor-pointer"
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 3 }}
                >
                  <item.icon className="w-4 h-4 text-amber-500/80" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-slate-200 mb-6 relative">
              Our Services
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-600/80 to-red-600/80"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.08, duration: 0.6 }}
                >
                  <Link
                    href="#services"
                    className="text-slate-400/70 hover:text-amber-500/80 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-slate-200 mb-6 relative">
              Quick Links
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600/80 to-pink-600/80"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.08, duration: 0.6 }}
                >
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-slate-400/70 hover:text-red-500/80 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-slate-200 mb-6 relative">
              Stay Connected
              <motion.div
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-600/80 to-purple-600/80"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
              />
            </h4>

            <motion.p
              className="text-slate-400/80 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Subscribe to get updates on our latest wedding trends and offers.
            </motion.p>

            {/* Newsletter Signup */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-l-xl bg-slate-700/30 border border-slate-600/30 text-slate-200 placeholder-slate-400/60 focus:border-amber-500/60 focus:outline-none transition-colors duration-300"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-amber-600/90 to-red-600/90 rounded-r-xl text-white font-semibold hover:from-amber-700/90 hover:to-red-700/90 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-700/30 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p className="text-slate-400/70 text-center md:text-left" whileHover={{ scale: 1.01 }}>
              © 2024 Balaji Wedding Planner. All rights reserved. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="inline-block"
              >
                <Heart className="w-4 h-4 text-red-500/80 inline fill-current" />
              </motion.span>{" "}
              for couples in love.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-slate-400/70 hover:text-slate-300/90 text-sm transition-colors duration-300"
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.6 + index * 0.08, duration: 0.6 }}
                  whileHover={{ y: -1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
