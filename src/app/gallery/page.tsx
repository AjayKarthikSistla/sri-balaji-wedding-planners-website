"use client";
import Navbar from '../../../components/Navbar';
import ScrollProgress from '../../../components/ScrollProgress';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Gallery from '../../../components/Gallery';

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50">
      <ScrollProgress />
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-10 text-center">Gallery</h2>
        <Gallery />
      </main>
      <WhatsAppButton />
    </div>
  );
} 