"use client";
import Navbar from '../../../components/Navbar';
import ScrollProgress from '../../../components/ScrollProgress';
import WhatsAppButton from '../../../components/WhatsAppButton';
import TestimonialCard from '../../../components/TestimonialCard';

const testimonials = [
  {
    name: 'Priya & Arjun',
    testimonial: 'Our wedding was a dream come true! The team handled everything with such grace and creativity.',
    image: '/user1.jpg',
  },
  {
    name: 'Rahul S.',
    testimonial: 'Professional, friendly, and detail-oriented. Highly recommend for any event!',
    image: '/user2.jpg',
  },
  {
    name: 'Meera K.',
    testimonial: 'They made our anniversary celebration unforgettable. Thank you so much!',
    image: '/user3.jpg',
  },
];

export default function Testimonials() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50">
      <ScrollProgress />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-10 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </main>
      <WhatsAppButton />
    </div>
  );
} 