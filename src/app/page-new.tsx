'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import DJCardGrid from '@/components/DJCardGrid';
import { djProfiles } from '@/data/djProfiles';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* DJ Projects Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-lime)] bg-clip-text text-transparent animate-gradient-flow neon-text">
                MUSICAL IDENTITIES
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Explore the diverse sonic landscapes across multiple genres and projects
            </p>
            
            {/* Animated divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent mx-auto mt-8 max-w-md"
            />
          </motion.div>

          {/* DJ Cards Grid */}
          <DJCardGrid profiles={djProfiles} />
        </div>
        
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[var(--neon-cyan)] rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 neon-magenta neon-text">
              READY TO EXPERIENCE THE ENERGY?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book now for an unforgettable musical journey that will elevate your event to the next level.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-[var(--neon-magenta)] via-[var(--neon-cyan)] to-[var(--neon-lime)] text-black font-bold text-lg px-12 py-4 rounded-full hover:animate-pulse-glow transition-all shadow-2xl">
                BOOK YOUR EVENT NOW
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
