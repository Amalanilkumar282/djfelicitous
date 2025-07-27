'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Star, ExternalLink, Music2 } from 'lucide-react';
import { djProfiles } from '@/data/djProfiles';
import { placeholderImages } from '@/utils/placeholders';
import Link from 'next/link';
import Image from 'next/image';
import FloatingContactWidget from '../../components/FloatingContactWidget';
import ContactOptionsModal from '../../components/ContactOptionsModal';
import BookingModal from '../../components/BookingModal';

const BollywoodPage = () => {
  const profile = djProfiles.find(dj => dj.id === 'bollywood')!;
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8
      }
    },
  };

  return (
    <div className="min-h-screen pt-20 bg-executive-platinum overflow-hidden">
      {/* Floating Contact Widget */}
      <FloatingContactWidget />

      {/* Contact Options Modal */}
      <ContactOptionsModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onBookingFormOpen={() => {
          setIsContactModalOpen(false);
          setIsBookingModalOpen(true);
        }}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        djName="DJ Felicitous"
        djGenre="Bollywood"
      />

      {/* Executive Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-executive-teal/5 via-executive-chrome/5 to-executive-accent/5" />
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
              className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-executive-teal via-executive-accent to-executive-teal-light bg-clip-text text-transparent"
              variants={executiveVariants}
              animate="visible"
            >
              DJ FELICITOUS
            </motion.h1>
            <motion.p
              className="text-2xl lg:text-3xl mb-6 text-executive-slate font-light"
              variants={itemVariants}
            >
              {profile.subtitle}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <span className="px-4 py-2 bg-executive-teal/10 border border-executive-teal/30 rounded-full text-executive-teal font-medium backdrop-blur-sm shadow-executive-subtle">
                {profile.genre}
              </span>
            </motion.div>
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => setIsContactModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Now</span>
                <Music2 className="w-5 h-5 relative z-10" />
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
                  className="px-8 py-4 border-2 border-gradient-to-r from-pink-500 to-orange-500 border-pink-500 text-pink-500 font-bold rounded-lg hover:bg-pink-500/10 transition-colors duration-300 flex items-center gap-2"
                >
                  View Mixes
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-executive-teal to-executive-teal-light rounded-full blur-3xl opacity-20 animate-executive-pulse" />
              <Image
                src={placeholderImages.bollywood}
                alt="DJ Felicitous"
                fill
                className="rounded-full border-4 border-executive-teal/50 object-cover relative z-10 shadow-executive-strong"
              />
              <div className="absolute inset-0 rounded-full border-4 border-executive-teal animate-executive-float opacity-50" />
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
            className="text-4xl lg:text-6xl font-bold mb-8 text-executive-teal"
            variants={itemVariants}
          >
            About the Artist
          </motion.h2>
          <motion.p
            className="text-lg text-executive-slate leading-relaxed mb-8"
            variants={itemVariants}
          >
            {profile.bio}
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-executive-teal mb-2">10+</div>
              <div className="text-executive-chrome-dark">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-executive-accent mb-2">500+</div>
              <div className="text-executive-chrome-dark">Events Played</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-executive-teal-light mb-2">50K+</div>
              <div className="text-executive-chrome-dark">Happy Dancers</div>
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
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-executive-teal"
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
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-executive-medium hover:shadow-executive-strong transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-executive-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-executive-teal"
            variants={itemVariants}
          >
            Recent Shows
          </motion.h2>
          <motion.div className="space-y-6" variants={containerVariants}>
            {profile.gigs.slice(0, 6).map((gig, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-executive border border-executive-chrome/30 rounded-lg p-6 shadow-executive-medium hover:shadow-executive-strong transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-executive-charcoal mb-2">{gig}</h3>
                    <div className="flex flex-wrap gap-4 text-executive-slate">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-executive-teal" />
                        <span>2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-executive-teal" />
                        <span>Live Performance</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-executive-teal to-executive-teal-dark text-white font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-executive-medium hover:shadow-executive-glow">
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
                <p className="text-executive-slate mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="text-executive-teal font-semibold">- {testimonial.name}</div>
                <div className="text-executive-chrome-dark text-sm">{testimonial.venue}</div>
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
            className="text-4xl lg:text-6xl font-bold mb-6 text-executive-teal"
            variants={itemVariants}
          >
            Ready to Party?
          </motion.h2>
          <motion.p
            className="text-xl text-executive-slate mb-8"
            variants={itemVariants}
          >
            Book DJ Felicitous for your next event and let&apos;s create an unforgettable Bollywood experience!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm interested in booking DJ Felicitous for a Bollywood event. Could you please provide more details?");
                window.open(`https://wa.me/919847352182?text=${message}`, '_blank');
              }}
              className="px-8 py-4 bg-gradient-to-r from-executive-teal to-executive-teal-dark text-white font-bold rounded-lg shadow-executive-medium hover:scale-105 transition-transform duration-300 hover:shadow-executive-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Book Now via WhatsApp</span>
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
            <Link
              href="/"
              className="px-8 py-4 border-2 border-executive-teal text-executive-teal font-bold rounded-lg hover:bg-executive-teal/10 transition-colors duration-300 inline-flex items-center justify-center gap-2 shadow-executive-subtle"
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
