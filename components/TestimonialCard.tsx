import { motion } from 'framer-motion';

type Props = {
  name: string;
  testimonial: string;
  image: string;
};

export default function TestimonialCard({ name, testimonial, image }: Props) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center max-w-xs mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4 object-cover" />
      <p className="text-gray-700 italic mb-2">"{testimonial}"</p>
      <span className="font-semibold text-purple-700">- {name}</span>
    </motion.div>
  );
} 