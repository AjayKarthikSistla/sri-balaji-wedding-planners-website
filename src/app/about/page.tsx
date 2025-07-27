"use client";
import Navbar from '../../../components/Navbar';
import ScrollProgress from '../../../components/ScrollProgress';
import WhatsAppButton from '../../../components/WhatsAppButton';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
      <ScrollProgress />
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-purple-700 mb-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Sri Balaji Planners
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          With over a decade of experience, our passionate team brings your vision to life with creativity and precision. We specialize in weddings, corporate events, and celebrations of all kinds.
        </motion.p>
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To create magical, stress-free events that exceed expectations and leave lasting memories for our clients and their guests.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <img src="/team.jpg" alt="Our Team" className="w-40 h-40 rounded-full object-cover shadow-md" />
          <div>
            <h4 className="text-lg font-semibold text-purple-700 mb-1">Meet Our Team</h4>
            <p className="text-gray-700">
              Our dedicated planners, designers, and coordinators work together to ensure every detail is perfect. We treat every event as if it were our own.
            </p>
          </div>
        </motion.div>
      </main>
      <WhatsAppButton />
    </div>
  );
} 