'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Elite Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"
        style={{ y }}
      />
      
      {/* Refined Grid Overlay */}
      <div className="absolute inset-0 techno-grid opacity-30" />

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
            <span className="block text-white bg-gradient-to-r from-electric-cyan via-white to-electric-cyan bg-clip-text text-transparent">
              DJ FELICITOUS
            </span>
          </h1>
        </motion.div>

        {/* Round Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-primary p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                {/* Placeholder for photo - you can replace this with an actual image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <Music size={48} className="text-electric-cyan opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-text-secondary mb-12 font-light max-w-4xl mx-auto leading-relaxed text-center"
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
              className="px-4 py-2 border border-secondary rounded-lg text-sm font-medium text-text-muted hover:border-electric-cyan hover:text-electric-cyan transition-all cursor-default"
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
