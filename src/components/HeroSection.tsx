'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music } from 'lucide-react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src="/images/hero.jpg"
          alt="DJ Felicitous Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Reduced Dark Overlay for Content Visibility */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Lighter Gradient Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/40" />
      
      {/* Refined Grid Overlay */}
      <div className="absolute inset-0 techno-grid opacity-15" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-16 sm:pt-20 lg:pt-24">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="font-space-grotesk text-5xl sm:text-7xl lg:text-8xl font-bold mb-4">
            <span className="block text-white bg-gradient-to-r from-electric-cyan via-white to-electric-cyan bg-clip-text text-transparent drop-shadow-lg">
              DJ FELICITOUS
            </span>
          </h1>
        </motion.div>

        {/* Professional Integrated Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
            {/* Background sampling effect - creates a frosted glass backdrop */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full backdrop-blur-md bg-gradient-to-br from-white/10 via-white/5 to-white/10 shadow-2xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-cyan/20 via-transparent to-chrome-cyan/20" />
            </div>
            
            {/* Dynamic light reflections */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    'radial-gradient(circle at 30% 30%, rgba(45, 212, 191, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 70% 70%, rgba(45, 212, 191, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 30% 30%, rgba(45, 212, 191, 0.3) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
            
            {/* Chromatic aberration effect */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5 mix-blend-multiply" />
            
            {/* Main professional frame */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 shadow-2xl">
              {/* Inner glass effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/5 to-transparent" />
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="DJ Felicitous"
                  fill
                  className="object-cover rounded-full mix-blend-normal"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />
                
                {/* Professional overlay system */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/15 via-transparent to-chrome-cyan/10 rounded-full mix-blend-overlay" />
                
                {/* Subtle vignette effect */}
                <div className="absolute inset-0 rounded-full shadow-inner shadow-black/30" />
              </div>
              
              
            </div>
            
            {/* Ambient particle system */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-electric-cyan/60 rounded-full"
                  animate={{
                    x: [0, Math.random() * 40 - 20, 0],
                    y: [0, Math.random() * 40 - 20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: Math.random() * 3,
                  }}
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                />
              ))}
            </div>
            
            {/* Professional reflection highlights */}
            <div className="absolute inset-4 rounded-full">
              <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 rounded-full blur-sm" />
              <div className="absolute top-4 right-8 w-4 h-4 bg-electric-cyan/30 rounded-full blur-sm" />
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-white/15 rounded-full blur-sm" />
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-100 mb-12 font-light max-w-4xl mx-auto leading-relaxed text-center drop-shadow-md"
        >
          A genre-fluid DJ based in Bangalore, DJ Felicitous blends sound and soul across every kind of dance floor. Known for curating energy-rich sets that span Bollywood, South Indian hits, Commercial, Hip-Hop, Techno, and Psytrance, Felicitous adapts to every crowd with unmatched versatility and stage presence. From high-energy club nights and wedding celebrations to underground raves and psychedelic festivals, every set is a unique story — crafted with rhythm, vibe, and connection.
        </motion.p>

        {/* Genre Tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-12 max-w-4xl mx-auto"
        >
          {['BOLLYWOOD', 'SOUTH-INDIAN HITS', 'BOLLY-TECH', 'TECHNO', 'DEEP HOUSE', 'TECH-HOUSE', 'PROGRESSIVE HOUSE', 'ELECTRO HOUSE', 'PSYTRANCE'].map((genre, index) => (
            <motion.span
              key={genre}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.05 }}
              className="px-4 py-2 border border-gray-300/40 rounded-lg text-sm font-medium text-gray-200 hover:border-electric-cyan hover:text-electric-cyan transition-all cursor-default backdrop-blur-sm bg-black/15 hover:bg-black/25"
            >
              {genre}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
