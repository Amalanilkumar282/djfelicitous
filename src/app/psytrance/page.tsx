'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, ExternalLink, Zap } from 'lucide-react';
import { djProfiles } from '@/data/djProfiles';
import { placeholderImages } from '@/utils/placeholders';
import Link from 'next/link';
import Image from 'next/image';
import FloatingContactWidget from '../../components/FloatingContactWidget';

const PsytrancePage = () => {
  const profile = djProfiles.find(dj => dj.id === 'psytrance')!;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const executiveVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1,
        type: "spring" as const,
        bounce: 0.2
      }
    },
  };

  return (
    <div className="min-h-screen pt-20 bg-executive-platinum text-executive-charcoal overflow-hidden">
      {/* Floating Contact Widget */}
      <FloatingContactWidget />

      {/* Professional Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-executive-teal/10 via-executive-chrome/5 to-executive-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,201,151,0.1)_0%,transparent_70%)]" />
        
        {/* Subtle floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-3 h-3 bg-executive-teal/30 rounded-full blur-sm"
          animate={{
            y: [0, -50, 0],
            x: [0, 50, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-violet-300 rounded-full blur-sm"
          animate={{
            y: [0, 80, 0],
            x: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-400 rounded-full blur-sm"
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"
              variants={executiveVariants}
              animate="cosmic"
            >
              TINITROCOSMIC
            </motion.h1>
            <motion.p
              className="text-2xl lg:text-3xl mb-6 text-purple-300 font-light"
              variants={itemVariants}
            >
              {profile.subtitle}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 rounded-full text-purple-300 font-medium backdrop-blur-sm">
                {profile.genre}
              </span>
            </motion.div>
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg neon-glow hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Enter the Journey
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400/10 transition-colors duration-300">
                Cosmic Mixes
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-40 animate-pulse" />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-purple-400 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-violet-400 opacity-40"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <Image
                src={placeholderImages.psytrance}
                alt="TinitroCosmic"
                fill
                className="rounded-full border-4 border-purple-400/50 object-cover relative z-10"
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
            className="text-4xl lg:text-6xl font-bold mb-8 text-purple-400"
            variants={itemVariants}
          >
            The Cosmic Journey
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-8"
            variants={itemVariants}
          >
            {profile.bio}
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-400">Infinite Journeys</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">100+</div>
              <div className="text-gray-400">Festivals Played</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">🌌</div>
              <div className="text-gray-400">Cosmic Dimensions</div>
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
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-purple-400"
            variants={itemVariants}
          >
            Visual Journey
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {profile.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={placeholderImages.psytrance}
                  alt={`Cosmic journey ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-purple-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Festival History */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-purple-400"
            variants={itemVariants}
          >
            Festival Dimensions
          </motion.h2>
          <motion.div className="space-y-6" variants={containerVariants}>
            {profile.gigs.slice(0, 8).map((gig, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-purple-400/50 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-purple-300 mb-2">{gig}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span>2023-2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span>Worldwide</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span>Psychedelic Journey</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300">
                    Experience
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
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-purple-400"
            variants={itemVariants}
          >
            Cosmic Testimonials
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {profile.testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="text-purple-300 font-semibold">- {testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.venue}</div>
              </motion.div>
            )) || (
              // Fallback testimonials if none exist
              <>
                <motion.div
                  className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&quot;A transcendental journey through sound and space. TinitroCosmic takes you beyond reality.&quot;</p>
                  <div className="text-purple-300 font-semibold">- Festival Attendee</div>
                  <div className="text-gray-400 text-sm">Boom Festival</div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&quot;The most psychedelic experience I&apos;ve ever had on a dance floor. Pure cosmic energy!&quot;</p>
                  <div className="text-purple-300 font-semibold">- Psy Trance Lover</div>
                  <div className="text-gray-400 text-sm">Ozora Festival</div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&quot;TinitroCosmic doesn&apos;t just play music, they open portals to other dimensions.&quot;</p>
                  <div className="text-purple-300 font-semibold">- Spiritual Seeker</div>
                  <div className="text-gray-400 text-sm">Rainbow Serpent</div>
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
            className="text-4xl lg:text-6xl font-bold mb-6 text-purple-400"
            variants={itemVariants}
          >
            Ready for Transcendence?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Join TinitroCosmic on a journey beyond the physical realm. Experience the cosmic consciousness through sound.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg neon-glow hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Book Cosmic Journey
            </button>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
            >
              <span>Return to Reality</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PsytrancePage;
