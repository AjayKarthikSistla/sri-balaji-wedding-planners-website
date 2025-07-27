"use client";
import Navbar from '../../components/Navbar';
import ScrollProgress from '../../components/ScrollProgress';
import WhatsAppButton from '../../components/WhatsAppButton';
import { motion } from 'framer-motion';

export default function Home() {
  return (

    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50">
      <ScrollProgress />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-purple-700 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Celebrate Your Special Moments<br />With <span className="text-yellow-500">Sri Balaji Planners</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We craft unforgettable weddings and events with elegance, creativity, and care. Let us turn your dreams into reality!
        </motion.p>
        <motion.a
          href="/about"
          className="inline-block bg-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-400 hover:text-purple-800 transition-colors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Learn More About Us
        </motion.a>
      </main>
      <WhatsAppButton />
    </div>
  );
} 