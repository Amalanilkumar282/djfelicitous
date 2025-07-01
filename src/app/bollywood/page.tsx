'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Star, ExternalLink } from 'lucide-react';
import { djProfiles } from '@/data/djProfiles';
import { placeholderImages } from '@/utils/placeholders';
import Link from 'next/link';
import Image from 'next/image';

const BollywoodPage = () => {
  const profile = djProfiles.find(dj => dj.id === 'bollywood')!;

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

  const glitchVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8
      }
    },
    glitch: {
      x: [0, -2, 2, -1, 1, 0],
      textShadow: [
        "0 0 0 transparent",
        "-2px 0 #ff00ff, 2px 0 #00ffff",
        "2px 0 #ff00ff, -2px 0 #00ffff", 
        "-1px 0 #ff00ff, 1px 0 #00ffff",
        "1px 0 #ff00ff, -1px 0 #00ffff",
        "0 0 0 transparent"
      ],
      transition: { 
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-orange-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1)_0%,transparent_50%)]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(255,105,180,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255,140,0,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(138,43,226,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
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
              className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent"
              variants={glitchVariants}
              animate="glitch"
            >
              DJ FELICITOUS
            </motion.h1>
            <motion.p
              className="text-2xl lg:text-3xl mb-6 text-pink-300 font-light"
              variants={itemVariants}
            >
              {profile.subtitle}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-400/30 rounded-full text-pink-300 font-medium backdrop-blur-sm">
                {profile.genre}
              </span>
            </motion.div>
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-lg neon-glow hover:scale-105 transition-transform duration-300">
                Book Now
              </button>
              <button className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-bold rounded-lg hover:bg-pink-400/10 transition-colors duration-300">
                View Mixes
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <Image
                src={placeholderImages.bollywood}
                alt="DJ Felicitous"
                fill
                className="rounded-full border-4 border-pink-400/50 object-cover relative z-10"
              />
              <div className="absolute inset-0 rounded-full border-4 border-pink-400 animate-spin-slow opacity-50" />
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
            className="text-4xl lg:text-6xl font-bold mb-8 text-pink-400"
            variants={itemVariants}
          >
            About the Artist
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
              <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-gray-400">Events Played</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-400">Happy Dancers</div>
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
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-pink-400"
            variants={itemVariants}
          >
            Gallery
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={placeholderImages.bollywood}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Gigs */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-pink-400"
            variants={itemVariants}
          >
            Recent Shows
          </motion.h2>
          <motion.div className="space-y-6" variants={containerVariants}>
            {profile.gigs.slice(0, 6).map((gig, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-pink-900/20 to-orange-900/20 border border-pink-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-pink-400/50 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pink-300 mb-2">{gig}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-400" />
                        <span>2023-2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-pink-400" />
                        <span>Various Venues</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-pink-400" />
                        <span>Live Performance</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300">
                    View More
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
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-pink-400"
            variants={itemVariants}
          >
            What People Say
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {profile.testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-400/30 rounded-lg p-6 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="text-pink-300 font-semibold">- {testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.venue}</div>
              </motion.div>
            ))}
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
            className="text-4xl lg:text-6xl font-bold mb-6 text-pink-400"
            variants={itemVariants}
          >
            Ready to Party?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Book DJ Felicitous for your next event and let&apos;s create an unforgettable Bollywood experience!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-lg neon-glow hover:scale-105 transition-transform duration-300">
              Book Now
            </button>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-bold rounded-lg hover:bg-pink-400/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
            >
              <span>Back to Home</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BollywoodPage;
