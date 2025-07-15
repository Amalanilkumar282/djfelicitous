'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Music, Headphones } from 'lucide-react';

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
      
      {/* Professional accent elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-electric-cyan rounded-full animate-subtle-pulse" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-electric-orange rounded-full animate-subtle-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-acid-green rounded-full animate-subtle-pulse" style={{ animationDelay: '2s' }} />

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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
          >
            <Music size={20} />
            <span>BOOK EVENT</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
          >
            <Play size={20} />
            <span>LISTEN NOW</span>
          </motion.button>
        </motion.div>

        {/* Professional Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '500+', label: 'Events Performed' },
            { number: '50+', label: 'Venues Worldwide' },
            { number: '10+', label: 'Years Experience' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-electric-cyan mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Professional floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/6 text-electric-cyan opacity-20"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Headphones size={24} />
        </motion.div>
        
        <motion.div
          className="absolute top-3/4 right-1/6 text-electric-cyan opacity-20"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Music size={20} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
