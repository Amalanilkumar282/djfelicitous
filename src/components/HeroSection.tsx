'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Play, Volume2, Zap, Music } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{ y }}
      />
      
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 techno-grid opacity-20" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--neon-cyan)] rounded-full"
            animate={{
              x: [0, window.innerWidth || 1000],
              y: [0, (window.innerHeight || 800) * Math.random()],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 10,
            }}
            style={{
              left: Math.random() * -100,
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Glitch Effect Overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[var(--neon-cyan)] to-transparent opacity-10"
        animate={{
          x: [-1000, 1000, -1000],
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Interactive Background Elements */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(0, 255, 255, 0.1) 0%, 
            rgba(255, 0, 255, 0.05) 25%, 
            transparent 50%)`,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-orbitron text-5xl sm:text-7xl lg:text-9xl font-black mb-6"
        >
          <motion.span
            className="block bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-lime)] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            DJ
          </motion.span>
          <motion.span
            className="block neon-text neon-cyan"
            animate={{
              textShadow: [
                '0 0 20px var(--neon-cyan)',
                '0 0 40px var(--neon-cyan), 0 0 60px var(--neon-cyan)',
                '0 0 20px var(--neon-cyan)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            FELICITOUS
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light"
        >
          MULTI-GENRE ELECTRONIC MUSIC PRODUCER
        </motion.p>

        {/* Genre Tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['TECHNO', 'BOLLYWOOD', 'PSY TRANCE', 'PROGRESSIVE'].map((genre, index) => (
            <motion.span
              key={genre}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              whileHover={{ 
                scale: 1.1,
                textShadow: '0 0 20px currentColor',
              }}
              className="px-4 py-2 border border-[var(--neon-cyan)] text-[var(--neon-cyan)] rounded-full text-sm sm:text-base font-semibold hover:bg-[var(--neon-cyan)] hover:text-black transition-all cursor-default"
            >
              {genre}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-[var(--neon-magenta)] to-[var(--neon-cyan)] text-black font-bold text-lg px-8 py-4 rounded-full hover:animate-pulse-glow transition-all shadow-2xl"
          >
            <span className="flex items-center space-x-2">
              <Play size={20} />
              <span>EXPERIENCE THE SOUND</span>
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative border-2 border-[var(--neon-cyan)] text-[var(--neon-cyan)] font-bold text-lg px-8 py-4 rounded-full hover:bg-[var(--neon-cyan)] hover:text-black transition-all neon-border"
          >
            <span className="flex items-center space-x-2">
              <Volume2 size={20} />
              <span>BOOK NOW</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">TRUSTED BY WORLD-CLASS VENUES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TOMORROWLAND', 'ULTRA', 'BERGHAIN', 'FABRIC', 'AMNESIA'].map((venue) => (
              <motion.span
                key={venue}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="text-gray-500 font-orbitron text-sm tracking-wider cursor-default"
              >
                {venue}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Music Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[Music, Zap, Volume2].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-[var(--neon-cyan)] opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + index * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-[var(--neon-cyan)] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-3 bg-[var(--neon-cyan)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
