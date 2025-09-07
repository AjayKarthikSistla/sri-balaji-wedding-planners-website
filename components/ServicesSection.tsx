"use client"

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import {
  Heart,
  Users,
  Sparkles,
  Crown,
  Music,
  Camera,
  Utensils,
  Flower,
  Gift,
  Palette,
  MapPin,
  Headphones,
  Star,
  Calendar,
  Award,
  Coffee,
  Cake,
  Car,
  Building,
  Mic,
} from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Traditional Weddings",
    description: "Complete traditional Indian wedding ceremonies with all sacred rituals",
    features: ["Vedic Ceremonies", "Mandap Decoration", "Priest Coordination", "Traditional Music"],
    color: "from-red-600/70 to-pink-600/70",
    category: "wedding",
    price: "₹2,50,000+",
  },
  {
    icon: Crown,
    title: "Royal Celebrations",
    description: "Luxury wedding experiences fit for royalty with premium services",
    features: ["Palace Venues", "Royal Decor", "VIP Services", "Premium Catering"],
    color: "from-amber-600/70 to-yellow-600/70",
    category: "luxury",
    price: "₹8,00,000+",
  },
  {
    icon: Users,
    title: "Destination Weddings",
    description: "Exotic locations for your dream destination wedding celebration",
    features: ["Location Scouting", "Travel Coordination", "Guest Management", "Local Vendors"],
    color: "from-emerald-600/70 to-green-600/70",
    category: "destination",
    price: "₹5,00,000+",
  },
  {
    icon: Sparkles,
    title: "Reception Planning",
    description: "Grand reception parties with entertainment and exquisite dining",
    features: ["Entertainment", "DJ Services", "Dance Floor", "Photo Booth"],
    color: "from-purple-600/70 to-pink-600/70",
    category: "reception",
    price: "₹1,50,000+",
  },
  {
    icon: Music,
    title: "Sangeet & Mehendi",
    description: "Pre-wedding celebrations with music, dance, and traditional henna",
    features: ["Choreography", "Live Music", "Mehendi Artists", "Stage Decoration"],
    color: "from-blue-600/70 to-purple-600/70",
    category: "prewedding",
    price: "₹75,000+",
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "Professional photography and videography to capture every moment",
    features: ["Pre-wedding Shoots", "Candid Photography", "Drone Coverage", "Same Day Edit"],
    color: "from-pink-600/70 to-red-600/70",
    category: "photography",
    price: "₹1,20,000+",
  },
  {
    icon: Flower,
    title: "Floral Design",
    description: "Stunning floral arrangements and decorations for all ceremonies",
    features: ["Bridal Bouquets", "Venue Decoration", "Car Decoration", "Stage Flowers"],
    color: "from-green-600/70 to-emerald-600/70",
    category: "decoration",
    price: "₹80,000+",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Multi-cuisine catering with traditional and modern delicacies",
    features: ["Indian Cuisine", "Continental Food", "Live Counters", "Special Diets"],
    color: "from-orange-600/70 to-red-600/70",
    category: "catering",
    price: "₹1,200/plate",
  },
  {
    icon: Gift,
    title: "Wedding Favors",
    description: "Personalized gifts and return gifts for your wedding guests",
    features: ["Custom Packaging", "Traditional Items", "Modern Gifts", "Bulk Orders"],
    color: "from-teal-600/70 to-cyan-600/70",
    category: "gifts",
    price: "₹200/piece",
  },
  {
    icon: Palette,
    title: "Theme Decoration",
    description: "Creative theme-based decorations tailored to your vision",
    features: ["Custom Themes", "Backdrop Design", "Lighting Setup", "Props Arrangement"],
    color: "from-indigo-600/70 to-purple-600/70",
    category: "decoration",
    price: "₹2,00,000+",
  },
  {
    icon: MapPin,
    title: "Venue Booking",
    description: "Premium venue selection and booking services nationwide",
    features: ["Venue Search", "Site Visits", "Booking Assistance", "Contract Negotiation"],
    color: "from-gray-600/70 to-slate-600/70",
    category: "venue",
    price: "₹25,000 fee",
  },
  {
    icon: Headphones,
    title: "Sound & Lighting",
    description: "Professional audio-visual setup for perfect ambiance",
    features: ["Sound Systems", "Stage Lighting", "Special Effects", "Backup Equipment"],
    color: "from-yellow-600/70 to-orange-600/70",
    category: "technical",
    price: "₹60,000+",
  },
  {
    icon: Star,
    title: "Bridal Makeup",
    description: "Professional bridal makeup and styling services",
    features: ["Bridal Makeup", "Hair Styling", "Trial Sessions", "Touch-up Service"],
    color: "from-rose-600/70 to-pink-600/70",
    category: "beauty",
    price: "₹35,000+",
  },
  {
    icon: Calendar,
    title: "Event Coordination",
    description: "Complete day-of coordination for seamless event execution",
    features: ["Timeline Management", "Vendor Coordination", "Guest Assistance", "Emergency Handling"],
    color: "from-blue-700/70 to-indigo-600/70",
    category: "coordination",
    price: "₹50,000+",
  },
  {
    icon: Award,
    title: "Celebrity Management",
    description: "Celebrity appearances and performances for grand celebrations",
    features: ["Artist Booking", "Performance Setup", "Green Room Arrangement", "Security Coordination"],
    color: "from-purple-700/70 to-pink-600/70",
    category: "entertainment",
    price: "₹2,00,000+",
  },
  {
    icon: Coffee,
    title: "Welcome Drinks",
    description: "Traditional and modern welcome drink services for guests",
    features: ["Traditional Drinks", "Modern Cocktails", "Non-alcoholic Options", "Service Staff"],
    color: "from-amber-700/70 to-orange-600/70",
    category: "catering",
    price: "₹150/person",
  },
  {
    icon: Cake,
    title: "Wedding Cakes",
    description: "Custom wedding cakes and dessert arrangements",
    features: ["Multi-tier Cakes", "Custom Designs", "Flavor Varieties", "Dessert Tables"],
    color: "from-pink-700/70 to-red-600/70",
    category: "catering",
    price: "₹8,000+",
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Luxury transportation for bride, groom, and guests",
    features: ["Bridal Car", "Guest Buses", "Airport Transfers", "Decorated Vehicles"],
    color: "from-gray-700/70 to-blue-600/70",
    category: "transport",
    price: "₹15,000/day",
  },
  {
    icon: Building,
    title: "Accommodation",
    description: "Guest accommodation booking and management services",
    features: ["Hotel Bookings", "Group Rates", "Check-in Assistance", "Special Requests"],
    color: "from-teal-700/70 to-green-600/70",
    category: "accommodation",
    price: "₹3,000/room",
  },
  {
    icon: Mic,
    title: "Entertainment Shows",
    description: "Live entertainment shows and cultural performances",
    features: ["Cultural Dance", "Live Bands", "Stand-up Comedy", "Magic Shows"],
    color: "from-red-700/70 to-orange-600/70",
    category: "entertainment",
    price: "₹75,000+",
  },
]

const categories = [
  { id: "all", label: "All Services", count: services.length },
  { id: "wedding", label: "Wedding", count: services.filter((s) => s.category === "wedding").length },
  { id: "luxury", label: "Luxury", count: services.filter((s) => s.category === "luxury").length },
  { id: "decoration", label: "Decoration", count: services.filter((s) => s.category === "decoration").length },
  { id: "catering", label: "Catering", count: services.filter((s) => s.category === "catering").length },
  {
    id: "entertainment",
    label: "Entertainment",
    count: services.filter((s) => s.category === "entertainment").length,
  },
]

  
  
export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const filteredServices = selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900/20 to-slate-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-amber-600/4 to-red-600/4 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-pink-600/4 to-purple-600/4 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600/80 to-red-600/80 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-amber-600/90 via-red-700/90 to-pink-600/90 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-slate-300/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Comprehensive wedding planning services to make your special day perfect
          </motion.p>
        </motion.div>

        {/* Category Filter with Animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-amber-600/80 to-red-600/80 text-white shadow-2xl scale-105"
                  : "bg-slate-800/40 text-slate-300 hover:bg-slate-700/60 border border-slate-600/30"
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Interactive Services Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -40 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  layout: { duration: 0.3 },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/30 to-slate-800/10 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative">
                  {/* Animated Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1.2, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Glowing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={
                      hoveredCard === index
                        ? {
                            background: [
                              "linear-gradient(0deg, transparent, rgba(245, 158, 11, 0.2), transparent)",
                              "linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.2), transparent)",
                              "linear-gradient(180deg, transparent, rgba(245, 158, 11, 0.2), transparent)",
                              "linear-gradient(270deg, transparent, rgba(245, 158, 11, 0.2), transparent)",
                              "linear-gradient(360deg, transparent, rgba(245, 158, 11, 0.2), transparent)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <CardContent className="p-6 relative z-10">
                    {/* Icon with Rotation Animation */}
                    <motion.div className="text-center mb-4" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Content with Slide Animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.02 }}
                    >
                      <h3 className="text-lg font-bold text-slate-200 mb-2 text-center group-hover:text-amber-300/90 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-400/80 mb-4 text-center text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Price Badge */}
                      <motion.div className="text-center mb-4" whileHover={{ scale: 1.05 }}>
                        <span className="bg-gradient-to-r from-emerald-600/80 to-green-600/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {service.price}
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* Features with Stagger Animation */}
                    <motion.ul
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.02 }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-slate-400/70 group-hover:text-slate-300/80 transition-colors duration-300 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.02 + featureIndex * 0.05 }}
                          whileHover={{ x: 3 }}
                        >
                          <motion.div
                            className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-2 flex-shrink-0`}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: featureIndex * 0.2,
                            }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Hover Effect Line */}
                    <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600/80 via-red-600/80 to-pink-600/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <motion.h3
            className="text-3xl font-bold text-slate-200 mb-6"
            whileInView={{ scale: [0.95, 1.02, 1] }}
            transition={{ duration: 0.6 }}
          >
            Need a Custom Package?
          </motion.h3>
          <motion.p
            className="text-slate-400/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            We create personalized wedding packages tailored to your specific needs and budget. Contact us for a
            detailed consultation.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-amber-600/80 via-red-600/80 to-pink-600/80 hover:from-amber-700/80 hover:via-red-700/80 hover:to-pink-700/80 text-white px-8 py-3 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
