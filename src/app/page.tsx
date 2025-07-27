'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Play } from 'lucide-react';
import Link from 'next/link';
import { djProfiles } from '../data/djProfiles';
import DiscographyCard from '../components/DiscographyCard';
import ContactOptionsModal from '../components/ContactOptionsModal';
import BookingModal from '../components/BookingModal';
import FloatingContactWidget from '../components/FloatingContactWidget';

// Dynamically import components to avoid SSR issues
const HeroSection = dynamic(() => import('../components/HeroSection').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-executive">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div className="text-steel">Loading Executive Experience...</div>
      </div>
    </div>
  )
});

const DJCardGrid = dynamic(() => import('../components/DJCardGrid').then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => (
    <div className="grid gap-8">
      <div className="bg-steel rounded-xl h-64 animate-pulse"></div>
    </div>
  )
});

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <div className="min-h-screen bg-executive mt-20">
      {/* Contact Options Modal */}
      <ContactOptionsModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)}
      />
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)}
        djName="DJ Felicitous"
        djGenre="Multi-Genre Professional"
      />

      {/* Floating Contact Widget */}
      <FloatingContactWidget />
      {/* Hero Section */}
      <HeroSection />

      {/* Executive DJ Projects Section */}
      <section className="section bg-platinum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Musical <span className="text-accent">Identities</span>
            </h2>
            <p className="section-subtitle">
              Explore diverse sonic landscapes across multiple genres and professional projects
            </p>

            {/* Professional divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-0.5 bg-cyan-400 mx-auto mt-8"
            />
          </motion.div>

          {/* DJ Cards Grid */}
          <DJCardGrid profiles={djProfiles} />
        </div>
      </section>

      {/* Enhanced Discography Section */}
      <section className="section bg-gradient-to-b from-executive via-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title text-3xl md:text-5xl">
                Musical <span className="text-accent bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">Archive</span>
              </h2>
              <p className="section-subtitle text-xl mt-6 mb-8">
                Discover the complete collection of original productions, reimagined classics, and exclusive collaborations
              </p>
              
              {/* Decorative divider */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '200px' }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-8"
              />
            </motion.div>
          </div>

          <DiscographyCard />
        </div>
      </section>

      {/* Combined Call to Action Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main CTA Heading */}
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Experience <span className="text-cyan-400">Premium Audio</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Book now for an unforgettable musical journey that will elevate your event to the next level.
            </p>

            {/* Professional Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
            >
              {[
                { number: '500+', label: 'Events Performed' },
                { number: '50+', label: 'Venues' },
                { number: '10+', label: 'Years Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-electric-cyan mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactModal(true)}
                className="btn-primary text-lg px-12 py-4 relative overflow-hidden group"
              >
                <span className="relative z-10">BOOK YOUR EVENT NOW</span>
                {/* Enhanced button animation */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 3,
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
                  className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <Play size={20} />
                  <span>LISTEN NOW</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
