import { motion } from 'framer-motion';

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
      {images.map((src, i) => (
        <motion.div
          key={src}
          className="overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300" />
        </motion.div>
      ))}
    </div>
  );
} 