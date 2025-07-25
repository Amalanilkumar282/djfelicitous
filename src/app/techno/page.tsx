'use client';

import { motion } from 'framer-motion';
import { Calendar, Star, ExternalLink, Volume2 } from 'lucide-react';
import { djProfiles } from '@/data/djProfiles';
import { placeholderImages } from '@/utils/placeholders';
import Link from 'next/link';
import Image from 'next/image';
import FloatingContactWidget from '../../components/FloatingContactWidget';

const TechnoPage = () => {
  const profile = djProfiles.find(dj => dj.id === 'techno')!;

  // Sample gallery images
//   const galleryImages = [
//     { src: placeholderImages.gallery.techno1, alt: 'Techno performance at underground club', caption: 'Underground Vibes' },
//     { src: placeholderImages.gallery.techno2, alt: 'DJ Nexus at festival main stage', caption: 'Festival Main Stage' },
//     { src: placeholderImages.gallery.techno3, alt: 'Late night techno session', caption: 'After Hours' },
//     { src: placeholderImages.gallery.techno4, alt: 'Industrial warehouse rave', caption: 'Warehouse Rave' },
//     { src: placeholderImages.gallery.techno5, alt: 'Techno crowd dancing', caption: 'United by Bass' },
//     { src: placeholderImages.gallery.techno6, alt: 'DJ equipment close-up', caption: 'Tools of the Trade' },
//   ];

  // Sample playlist
//   const playlist = [
//     { id: '1', title: 'Industrial Revolution', duration: '7:45', spotifyUrl: '#', soundcloudUrl: '#' },
//     { id: '2', title: 'Neon Underground', duration: '6:32', spotifyUrl: '#', soundcloudUrl: '#' },
//     { id: '3', title: 'Cyber Dreams', duration: '8:15', spotifyUrl: '#', soundcloudUrl: '#' },
//     { id: '4', title: 'Electric Pulse', duration: '7:23', spotifyUrl: '#', soundcloudUrl: '#' },
//     { id: '5', title: 'Digital Warfare', duration: '9:11', spotifyUrl: '#', soundcloudUrl: '#' },
//     { id: '6', title: 'Synthetic Reality', duration: '6:48', spotifyUrl: '#', soundcloudUrl: '#' },
//   ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const technoVariants = {
    hidden: { opacity: 0, x: -32 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    pulse: {
      scale: [1, 1.02, 1],
      boxShadow: [
        "0 0 16px rgba(13, 115, 119, 0.3)",
        "0 0 24px rgba(20, 160, 133, 0.4)",
        "0 0 16px rgba(13, 115, 119, 0.3)",
      ],
      transition: { 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-black text-white overflow-hidden">
      {/* Floating Contact Widget */}
      <FloatingContactWidget />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-black" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        
        {/* Laser lines */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-400 to-transparent"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-cyan-400 to-transparent"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -100, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-3 h-3 bg-cyan-300 rounded-full"
          animate={{
            y: [0, 100, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.h1
              className="text-6xl lg:text-8xl font-bold mb-6 text-cyan-400"
              variants={technoVariants}
              animate="pulse"
              style={{ fontFamily: 'monospace' }}
            >
              TNT
            </motion.h1>
            <motion.p
              className="text-2xl lg:text-3xl mb-6 text-cyan-300 font-light"
              variants={itemVariants}
            >
              {profile.subtitle}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-none text-cyan-300 font-medium backdrop-blur-sm font-mono">
                {profile.genre}
              </span>
            </motion.div>
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-none neon-glow hover:scale-105 transition-transform duration-300 flex items-center gap-2 font-mono">
                <Volume2 className="w-5 h-5" />
                ENTER THE UNDERGROUND
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-none hover:bg-cyan-400/10 transition-colors duration-300 font-mono">
                TECHNO SETS
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl opacity-30" />
              
              {/* Techno grid overlay */}
              <div className="absolute inset-0 border-2 border-cyan-400/30 z-10" />
              <div className="absolute inset-4 border border-cyan-400/20 z-10" />
              <div className="absolute inset-8 border border-cyan-400/10 z-10" />
              
              <Image
                src={placeholderImages.techno}
                alt="TNT"
                fill
                className="border-4 border-cyan-400/50 object-cover relative z-20 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-8 text-cyan-400 font-mono"
            variants={itemVariants}
          >
            THE UNDERGROUND
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-8 font-mono"
            variants={itemVariants}
          >
            {profile.bio}
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            <div className="text-center border border-cyan-400/30 p-6 bg-black/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">140</div>
              <div className="text-gray-400 font-mono">BPM AVERAGE</div>
            </div>
            <div className="text-center border border-cyan-400/30 p-6 bg-black/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">24/7</div>
              <div className="text-gray-400 font-mono">UNDERGROUND MODE</div>
            </div>
            <div className="text-center border border-cyan-400/30 p-6 bg-black/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">MAX</div>
              <div className="text-gray-400 font-mono">BASS LEVELS</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-cyan-400 font-mono"
            variants={itemVariants}
          >
            UNDERGROUND SESSIONS
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {profile.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden group cursor-pointer border-2 border-cyan-400/20 hover:border-cyan-400/60 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={placeholderImages.techno}
                  alt={`Underground session ${index + 1}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Volume2 className="w-8 h-8 text-cyan-400" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Underground Venues */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-cyan-400 font-mono"
            variants={itemVariants}
          >
            UNDERGROUND VENUES
          </motion.h2>
          <motion.div className="space-y-6" variants={containerVariants}>
            {profile.gigs.slice(0, 6).map((gig, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border border-cyan-400/30 p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
                      <h3 className="text-2xl font-bold text-cyan-300 font-mono">{gig}</h3>
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-300 font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-cyan-400" />
                        <span>UNDERGROUND</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold font-mono hover:scale-105 transition-transform duration-300">
                    ACCESS
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-cyan-400 font-mono"
            variants={itemVariants}
          >
            UNDERGROUND FEEDBACK
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {profile.testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border border-cyan-400/30 p-6 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic font-mono">&quot;{testimonial.text}&quot;</p>
                <div className="text-cyan-300 font-semibold font-mono">- {testimonial.name}</div>
                <div className="text-gray-400 text-sm font-mono">{testimonial.venue}</div>
              </motion.div>
            )) || (
              // Fallback testimonials
              <>
                <motion.div
                  className="bg-black/50 border border-cyan-400/30 p-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic font-mono">&quot;TNT brings the real underground sound. Pure techno perfection.&quot;</p>
                  <div className="text-cyan-300 font-semibold font-mono">- TECHNO HEAD</div>
                  <div className="text-gray-400 text-sm font-mono">BERGHAIN</div>
                </motion.div>
                <motion.div
                  className="bg-black/50 border border-cyan-400/30 p-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic font-mono">&quot;The bass hits different when TNT is behind the decks.&quot;</p>
                  <div className="text-cyan-300 font-semibold font-mono">- RAVER</div>
                  <div className="text-gray-400 text-sm font-mono">FABRIC</div>
                </motion.div>
                <motion.div
                  className="bg-black/50 border border-cyan-400/30 p-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic font-mono">&quot;Industrial strength techno. TNT delivers the underground experience.&quot;</p>
                  <div className="text-cyan-300 font-semibold font-mono">- CLUB OWNER</div>
                  <div className="text-gray-400 text-sm font-mono">TRESOR</div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6 text-cyan-400 font-mono"
            variants={itemVariants}
          >
            ENTER THE UNDERGROUND
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 font-mono"
            variants={itemVariants}
          >
            Experience the pure essence of underground techno with TNT. Industrial beats, hypnotic rhythms, and raw energy.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold font-mono neon-glow hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              <Volume2 className="w-5 h-5" />
              BOOK UNDERGROUND SESSION
            </button>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold font-mono hover:bg-cyan-400/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
            >
              <span>EXIT TO SURFACE</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default TechnoPage;
