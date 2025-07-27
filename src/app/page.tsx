"use client"
import Navigation from "../../components/Navigation"
import HeroSection from "../../components/HeroSection"
import AboutSection from "../../components/AboutSection"
import ServicesSection from "../../components/ServicesSection"
import TestimonialsSection from "../../components/TestimonialsSection"
import GallerySection from "../../components/GallerySection"
import ContactSection from "../../components/ContactSection"
import FloatingButtons from "../../components/FloatingButtons"
import Footer from "../../components/Footer"
import ScrollProgress from "../../components/ScrollProgress"

// Navigation Component with Scroll Tracking
// function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState("home")
//   const { scrollY } = useScroll()
//   const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"])
//   const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"])

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "about", "services", "testimonials", "gallery", "contact"]
//       const scrollPosition = window.scrollY + 100

//       for (const section of sections) {
//         const element = document.getElementById(section)
//         if (element) {
//           const { offsetTop, offsetHeight } = element
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section)
//             break
//           }
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "services", label: "Services" },
//     { id: "testimonials", label: "Testimonials" },
//     { id: "gallery", label: "Gallery" },
//     { id: "contact", label: "Contact" },
//   ]

//   return (
//     <motion.nav
//       className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
//       style={{ backgroundColor, backdropFilter: backdropBlur }}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent"
//         >
//           Elegant Events
//         </motion.div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.id}
//               href={`#${item.id}`}
//               className={`relative transition-colors ${
//                 activeSection === item.id ? "text-rose-600 font-medium" : "text-gray-700 hover:text-rose-500"
//               }`}
//             >
//               {item.label}
//               {activeSection === item.id && (
//                 <motion.div
//                   layoutId="activeSection"
//                   className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-500 rounded-full"
//                 />
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.id}
//               href={`#${item.id}`}
//               className="block py-2 text-gray-700 hover:text-rose-500"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </motion.div>
//       )}
//     </motion.nav>
//   )
// }

// Hero Section
// function HeroSection() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   })

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

//   return (
//     <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-rose-100 via-purple-50 to-pink-100"
//         style={{ y }}
//       />

//       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           style={{ opacity }}
//         >
//           <motion.h1
//             className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Creating Magical Moments
//           </motion.h1>

//           <motion.p
//             className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Transform your special occasions into unforgettable experiences with our expert event planning services
//           </motion.p>

//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-8 py-3 rounded-full"
//             >
//               Plan Your Event
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full bg-transparent"
//             >
//               View Portfolio
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Floating Elements */}
//       <motion.div
//         className="absolute top-20 left-10 text-rose-300"
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
//       >
//         <Sparkles size={24} />
//       </motion.div>
//       <motion.div
//         className="absolute top-40 right-20 text-purple-300"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
//       >
//         <Heart size={20} />
//       </motion.div>
//       <motion.div
//         className="absolute bottom-40 left-20 text-pink-300"
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
//       >
//         <Star size={18} />
//       </motion.div>
//     </section>
//   )
// }

// About Section
// function AboutSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
//             About Elegant Events
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             With over a decade of experience in creating extraordinary events, we specialize in turning your dreams into
//             reality
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <Image
//               src="/placeholder.svg?height=500&width=600"
//               alt="About Us"
//               width={600}
//               height={500}
//               className="rounded-2xl shadow-2xl"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <h3 className="text-3xl font-bold text-gray-800">Your Vision, Our Expertise</h3>
//             <p className="text-gray-600 leading-relaxed">
//               We believe every event tells a unique story. Our passionate team of event planners works closely with you
//               to understand your vision and bring it to life with meticulous attention to detail.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               From intimate gatherings to grand celebrations, we handle every aspect of your event planning process,
//               ensuring a seamless and stress-free experience for you and your guests.
//             </p>

//             <div className="grid grid-cols-2 gap-4 mt-8">
//               {[
//                 { icon: Calendar, label: "500+ Events", desc: "Successfully Planned" },
//                 { icon: Users, label: "10+ Years", desc: "Of Experience" },
//                 { icon: Heart, label: "100%", desc: "Client Satisfaction" },
//                 { icon: Star, label: "5 Star", desc: "Average Rating" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                   className="text-center p-4 bg-gradient-to-br from-rose-50 to-purple-50 rounded-xl"
//                 >
//                   <stat.icon className="w-8 h-8 text-rose-500 mx-auto mb-2" />
//                   <div className="font-bold text-2xl text-gray-800">{stat.label}</div>
//                   <div className="text-sm text-gray-600">{stat.desc}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// Services Section
// function ServicesSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const services = [
//     {
//       icon: Heart,
//       title: "Wedding Planning",
//       description: "Complete wedding planning services from engagement to reception",
//       features: ["Venue Selection", "Vendor Coordination", "Timeline Management", "Day-of Coordination"],
//     },
//     {
//       icon: Users,
//       title: "Corporate Events",
//       description: "Professional corporate event planning for all business occasions",
//       features: ["Conference Planning", "Team Building", "Product Launches", "Award Ceremonies"],
//     },
//     {
//       icon: Calendar,
//       title: "Social Celebrations",
//       description: "Birthday parties, anniversaries, and milestone celebrations",
//       features: ["Theme Development", "Entertainment", "Catering", "Photography"],
//     },
//     {
//       icon: Sparkles,
//       title: "Luxury Events",
//       description: "High-end exclusive events with premium service and attention to detail",
//       features: ["VIP Services", "Custom Design", "Premium Vendors", "Concierge Service"],
//     },
//   ]

//   return (
//     <section id="services" className="py-20 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
//             Our Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive event planning services tailored to make your special moments unforgettable
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="group"
//             >
//               <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <CardContent className="p-6">
//                   <div className="text-center mb-4">
//                     <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                       <service.icon className="w-8 h-8 text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
//                     <p className="text-gray-600 mb-4">{service.description}</p>
//                   </div>
//                   <ul className="space-y-2">
//                     {service.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center text-sm text-gray-600">
//                         <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// Testimonials Section
// function TestimonialsSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       event: "Wedding",
//       rating: 5,
//       text: "Elegant Events made our wedding day absolutely perfect! Every detail was flawlessly executed, and we couldn't have asked for a better team to bring our vision to life.",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       name: "Michael Chen",
//       event: "Corporate Gala",
//       rating: 5,
//       text: "Professional, creative, and incredibly organized. Our annual gala was a huge success thanks to their expertise and attention to detail.",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       name: "Emily Rodriguez",
//       event: "Birthday Celebration",
//       rating: 5,
//       text: "They transformed my 30th birthday into a magical celebration that exceeded all my expectations. The team is simply amazing!",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       name: "David Thompson",
//       event: "Anniversary Party",
//       rating: 5,
//       text: "Our 25th anniversary party was everything we dreamed of and more. The team's creativity and professionalism made it truly special.",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//   ]

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   return (
//     <section id="testimonials" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
//             What Our Clients Say
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Don't just take our word for it - hear from our satisfied clients
//           </p>
//         </motion.div>

//         <div className="relative max-w-4xl mx-auto">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center"
//           >
//             <div className="flex justify-center mb-6">
//               {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                 <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
//               ))}
//             </div>

//             <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
//               "{testimonials[currentIndex].text}"
//             </blockquote>

//             <div className="flex items-center justify-center space-x-4">
//               <Image
//                 src={testimonials[currentIndex].image || "/placeholder.svg"}
//                 alt={testimonials[currentIndex].name}
//                 width={80}
//                 height={80}
//                 className="rounded-full"
//               />
//               <div className="text-left">
//                 <div className="font-bold text-gray-800 text-lg">{testimonials[currentIndex].name}</div>
//                 <div className="text-rose-600">{testimonials[currentIndex].event}</div>
//               </div>
//             </div>
//           </motion.div>

//           <button
//             onClick={prevTestimonial}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-600" />
//           </button>

//           <button
//             onClick={nextTestimonial}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-600" />
//           </button>

//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   index === currentIndex ? "bg-rose-500" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// Gallery Section
// function GallerySection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const galleryImages = [
//     { src: "/placeholder.svg?height=400&width=600", alt: "Wedding Ceremony", category: "Wedding" },
//     { src: "/placeholder.svg?height=400&width=600", alt: "Corporate Event", category: "Corporate" },
//     { src: "/placeholder.svg?height=400&width=600", alt: "Birthday Party", category: "Birthday" },
//     { src: "/placeholder.svg?height=400&width=600", alt: "Luxury Event", category: "Luxury" },
//     { src: "/placeholder.svg?height=400&width=600", alt: "Wedding Reception", category: "Wedding" },
//     { src: "/placeholder.svg?height=400&width=600", alt: "Anniversary", category: "Anniversary" },
//   ]

//   return (
//     <section id="gallery" className="py-20 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
//             Our Portfolio
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Take a look at some of our most memorable events and celebrations
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryImages.map((image, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
//             >
//               <Image
//                 src={image.src || "/placeholder.svg"}
//                 alt={image.alt}
//                 width={600}
//                 height={400}
//                 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <Badge className="bg-rose-500 text-white mb-2">{image.category}</Badge>
//                   <h3 className="text-lg font-semibold">{image.alt}</h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// Contact Section
// function ContactSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
//             Let's Plan Your Perfect Event
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to create something magical? Get in touch with us today
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full flex items-center justify-center">
//                 <Phone className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-800">Phone</h3>
//                 <p className="text-gray-600">+1 (555) 123-4567</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full flex items-center justify-center">
//                 <Mail className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-800">Email</h3>
//                 <p className="text-gray-600">hello@elegantevents.com</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full flex items-center justify-center">
//                 <MapPin className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-800">Location</h3>
//                 <p className="text-gray-600">123 Event Street, City, State 12345</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8"
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
//             <form className="space-y-4">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Event Type"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none"
//               />
//               <textarea
//                 placeholder="Tell us about your event..."
//                 rows={4}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:outline-none resize-none"
//               ></textarea>
//               <Button className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white py-3 rounded-lg">
//                 Send Message
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// WhatsApp Button
// function WhatsAppButton() {
//   const whatsappNumber = "1234567890" // Replace with actual WhatsApp number
//   const message = "Hi! I'm interested in your event planning services."

//   return (
//     <motion.a
//       href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       initial={{ opacity: 0, scale: 0 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 2, duration: 0.5 }}
//     >
//       <MessageCircle className="w-6 h-6" />
//     </motion.a>
//   )
// }

// Main Component
export default function BalajiWeddingPlanner() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <FloatingButtons />
      <Footer />
    </div>
  )
}
