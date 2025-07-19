'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Play } from 'lucide-react';
import { djProfiles } from '../data/djProfiles';

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
  return (
    <div className="min-h-screen bg-executive mt-20">
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

      {/* Combined Call to Action Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
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
                { number: '100+', label: 'Events Performed' },
                { number: '50+', label: 'Venues' },
                { number: '5+', label: 'Years Experience' }
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
                className="btn-primary text-lg px-12 py-4"
              >
                BOOK YOUR EVENT NOW
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
