"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { RefObject, useRef, useState } from "react"
import { Badge } from "../components/ui/badge"
import { Eye, Heart, Share2, Play, ZoomIn } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Traditional", "Royal", "Destination", "Reception", "Sangeet", "Mehendi"]
const galleryImages = [
  {
    src: "/placeholder.svg?height=500&width=700&text=Traditional Wedding Mandap",
    alt: "Traditional Wedding Mandap",
    category: "Traditional",
    likes: 245,
    views: 1200,
    isVideo: false,
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Royal Wedding Ceremony",
    alt: "Royal Wedding Ceremony",
    category: "Royal",
    likes: 389,
    views: 2100,
    isVideo: true,
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Destination Beach Wedding",
    alt: "Destination Beach Wedding",
    category: "Destination",
    likes: 156,
    views: 890,
    isVideo: false,
  },
  {
    src: "/placeholder.svg?height=400&width=700&text=Grand Reception Hall",
    alt: "Grand Reception Hall",
    category: "Reception",
    likes: 298,
    views: 1500,
    isVideo: false,
  },
  {
    src: "/placeholder.svg?height=500&width=600&text=Sangeet Dance Performance",
    alt: "Sangeet Dance Performance",
    category: "Sangeet",
    likes: 167,
    views: 750,
    isVideo: true,
  },
  {
    src: "/placeholder.svg?height=600&width=600&text=Bridal Portrait Session",
    alt: "Bridal Portrait Session",
    category: "Traditional",
    likes: 445,
    views: 2800,
    isVideo: false,
  },
  {
    src: "/placeholder.svg?height=400&width=800&text=Royal Wedding Procession",
    alt: "Royal Wedding Procession",
    category: "Royal",
    likes: 234,
    views: 1100,
    isVideo: false,
  },
  {
    src: "/placeholder.svg?height=500&width=700&text=Mehendi Ceremony",
    alt: "Mehendi Ceremony",
    category: "Mehendi",
    likes: 312,
    views: 1450,
    isVideo: false,
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Destination Mountain Wedding",
    alt: "Mountain Wedding Ceremony",
    category: "Destination",
    likes: 189,
    views: 950,
    isVideo: true,
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Reception Dinner Setup",
    alt: "Reception Dinner Setup",
    category: "Reception",
    likes: 278,
    views: 1300,
    isVideo: false,
  },
  {
    src: "/placeholder.svg?height=500&width=700&text=Traditional Fire Ceremony",
    alt: "Traditional Fire Ceremony",
    category: "Traditional",
    likes: 356,
    views: 1800,
    isVideo: false,
  },
  {
    src: "/placeholder.svg?height=600&width=600&text=Mehendi Design Close-up",
    alt: "Mehendi Design Close-up",
    category: "Mehendi",
    likes: 198,
    views: 820,
    isVideo: false,
  },
]


export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState("All")
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  // Create masonry layout heights for variety
  const getMasonryHeight = (index: number) => {
    const heights = [380, 450, 320, 400, 360, 480, 340, 420]
    return heights[index % heights.length]
  }

  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900/15 to-slate-950 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute top-20 right-20 w-56 h-56 bg-gradient-to-br from-amber-600/4 to-red-600/4 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-pink-600/4 to-purple-600/4 rounded-full blur-3xl" />
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
              <Eye className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-amber-600/90 via-red-700/90 to-pink-600/90 bg-clip-text text-transparent">
              Our Gallery
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-slate-300/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Witness the magic of our celebrations through these beautiful moments
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden ${
                filter === category
                  ? "bg-gradient-to-r from-amber-600/80 to-red-600/80 text-white shadow-2xl scale-105"
                  : "bg-slate-800/40 text-slate-300 hover:bg-slate-700/60 border border-slate-600/30"
              }`}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 1 + index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {filter === category && (
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Gallery Grid with Parallax Cards */}
        <motion.div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6" layout>
          {filteredImages.map((image, index) => {
            const ref = imageRefs.current[index]
            const { scrollYProgress: imageProgress } = useScroll({
              target: ref ? { current: ref } : undefined,
              offset: ["start end", "end start"],
            })

            const imageY = useTransform(imageProgress, [0, 1], [30, -30])
            const imageScale = useTransform(imageProgress, [0, 0.5, 1], [0.9, 1, 0.9])

            return (
              <motion.div
                key={`${image.category}-${index}`}
                ref={(el) => {
                  imageRefs.current[index] = el
                }}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredImage(index)}
                onHoverEnd={() => setHoveredImage(null)}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 break-inside-avoid mb-6 cursor-pointer"
                style={{
                  height: getMasonryHeight(index),
                  y: imageY,
                  scale: imageScale,
                }}
              >
                {/* Image with Parallax Effect */}
                <motion.div
                  className="relative h-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />

                  {/* Video Indicator */}
                  {image.isVideo && (
                    <motion.div
                      className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full p-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-4 h-4 text-white fill-current" />
                    </motion.div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge with Animation */}
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <Badge className="bg-gradient-to-r from-amber-600/90 to-red-600/90 text-white border-0 shadow-lg backdrop-blur-sm">
                      {image.category}
                    </Badge>
                  </motion.div>

                  {/* Hover Actions */}
                  <motion.div
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ y: -20 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <motion.button
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ZoomIn className="w-4 h-4 text-white" />
                    </motion.button>
                    <motion.button
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart className="w-4 h-4 text-white" />
                    </motion.button>
                    <motion.button
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </motion.button>
                  </motion.div>

                  {/* Image Info */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                  >
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{image.alt}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <motion.span className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                          <Heart className="w-4 h-4" />
                          <span>{image.likes}</span>
                        </motion.span>
                        <motion.span className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                          <Eye className="w-4 h-4" />
                          <span>{image.views}</span>
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Animated Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-amber-600/60 via-red-600/60 to-pink-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      hoveredImage === index
                        ? "linear-gradient(45deg, rgba(245, 158, 11, 0.6), rgba(239, 68, 68, 0.6), rgba(236, 72, 153, 0.6))"
                        : "transparent",
                    padding: "2px",
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-slate-950" />
                </motion.div>

                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5, opacity: [0, 0.3, 0] }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className="group bg-gradient-to-r from-amber-600/80 via-red-600/80 to-pink-600/80 hover:from-amber-700/80 hover:via-red-700/80 hover:to-pink-700/80 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              whileHover={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
              View More Photos
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
