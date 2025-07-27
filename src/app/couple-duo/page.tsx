'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Instagram, Calendar, Star, Quote } from 'lucide-react';
import { FaSoundcloud, FaYoutube } from 'react-icons/fa';
import { getProfileByRoute } from '@/data/djProfiles';
import FloatingContactWidget from '../../components/FloatingContactWidget';
import ContactOptionsModal from '../../components/ContactOptionsModal';
import BookingModal from '../../components/BookingModal';
import { useState } from 'react';

export default function CoupleduoPage() {
  const profile = getProfileByRoute('/couple-duo');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 bg-executive-platinum">
      {/* Floating Contact Widget */}
      <FloatingContactWidget />

      {/* Contact Options Modal */}
      <ContactOptionsModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        djName={profile.name}
        djGenre={profile.genre}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/couple-duo-hero.jpg"
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced dark overlay for better content visibility */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-executive-charcoal/90 via-executive-charcoal/50 to-black/60" />
        </div>

        {/* Professional Accent Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-executive-teal rounded-full opacity-20"
              animate={{
                y: [0, -50, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
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

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-10 text-white">
              {profile.name}
            </h1>
            <p className="text-2xl md:text-3xl text-executive-silver mb-12 font-light">
              {profile.subtitle}
            </p>
            <p className="text-xl text-executive-chrome mb-12 max-w-2xl mx-auto">
              {profile.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                onClick={() => setIsContactModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden group w-auto"
              >
                <span className="relative z-10">BOOK THE DUO</span>
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </motion.button>
              
              <Link href="/discography">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-pink-500 text-pink-500 font-bold rounded-lg hover:bg-pink-500/10 transition-colors duration-300 flex items-center gap-2 w-auto"
                >
                  <Play size={20} />
                  <span>LISTEN TO OUR SETS</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-10 neon-pink neon-text section-heading">
                OUR STORY
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {profile.bio}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {profile.social.instagram && (
                  <motion.a
                    href={profile.social.instagram.startsWith('@') ? `https://instagram.com/${profile.social.instagram}` : `https://instagram.com/${profile.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-magenta rounded-full flex items-center justify-center text-black"
                  >
                    <Instagram size={20} />
                  </motion.a>
                )}
                {profile.social.soundcloud && (
                  <motion.a
                    href={profile.social.soundcloud.startsWith('http') ? profile.social.soundcloud : `https://soundcloud.com/${profile.social.soundcloud}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-amber rounded-full flex items-center justify-center text-black"
                  >
                    <FaSoundcloud size={20} />
                  </motion.a>
                )}
                {profile.social.youtube && (
                  <motion.a
                    href={profile.social.youtube.startsWith('http') ? profile.social.youtube : `https://youtube.com/${profile.social.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-black"
                  >
                    <FaYoutube size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {profile.gallery.slice(0, 4).map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-32 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${profile.name} gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/20 to-transparent" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gigs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 neon-cyan neon-text">
                RECENT VENUES & FESTIVALS
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                From intimate venues to massive festivals, we&apos;ve brought our unique energy to stages worldwide
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {profile.gigs.map((gig, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/50 backdrop-blur-md border border-neon-pink/30 rounded-lg p-4 text-center min-h-[120px] flex flex-col justify-center"
              >
                <Calendar className="w-6 h-6 text-neon-pink mx-auto mb-3 flex-shrink-0" />
                <h3 className="font-medium text-sm mb-3 break-words hyphens-auto leading-snug px-1">{gig}</h3>
                <div className="flex items-center justify-center space-x-1 text-yellow-400 flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {profile.testimonials && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-10 neon-lime neon-text content-heading">
                WHAT PEOPLE SAY
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profile.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-neon-lime/30 rounded-lg p-6"
                >
                  <Quote className="w-8 h-8 text-neon-lime mb-4" />
                  <p className="text-gray-300 mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-neon-lime to-neon-cyan rounded-full flex items-center justify-center">
                      <span className="font-bold text-black">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.venue}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-neon-pink/20 to-neon-magenta/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 neon-pink neon-text">
              BOOK DJ FELICITOUS & DJ GEETZ
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to create unforgettable memories with the dynamic duo? 
              Let&apos;s make your event extraordinary.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm interested in booking DJ Felicitous & DJ Geetz for a couple's event. Could you please provide a quote?");
                window.open(`https://wa.me/919847352182?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-neon-pink via-neon-magenta to-neon-cyan text-black font-bold text-lg px-12 py-4 rounded-full hover:animate-pulse-glow transition-all shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">GET QUOTE VIA WHATSAPP</span>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
