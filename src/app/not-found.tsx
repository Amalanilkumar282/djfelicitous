'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Music, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-bg relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 techno-grid opacity-20" />
      
      {/* Professional accent elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-electric-cyan rounded-full animate-subtle-pulse" />
      <div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-acid-green rounded-full animate-subtle-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 404 Display */}
          <div className="space-y-4">
            <motion.h1 
              className="font-space-grotesk text-8xl sm:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(0, 245, 255, 0.3)',
                  '0 0 40px rgba(139, 92, 246, 0.3)',
                  '0 0 20px rgba(0, 245, 255, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              404
            </motion.h1>
            
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-white mb-4">
              Track Not Found
            </h2>
            
            <p className="text-text-muted text-lg max-w-md mx-auto">
              The beat you&apos;re looking for seems to have dropped out of the mix.
            </p>
          </div>

          {/* Professional divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-electric-cyan mx-auto"
          />

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/">
                <button className="btn-primary flex items-center space-x-2">
                  <Home size={20} />
                  <span>BACK TO HOME</span>
                </button>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button 
                onClick={() => window.history.back()}
                className="btn-secondary flex items-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>GO BACK</span>
              </button>
            </motion.div>
          </div>

          {/* Professional Suggestions */}
          <div className="mt-12 pt-8 border-t border-secondary">
            <h3 className="font-space-grotesk text-lg font-semibold text-white mb-4">
              Discover Our <span className="text-electric-cyan">Musical Universe</span>
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Techno', href: '/techno' },
                { name: 'Bollywood', href: '/bollywood' },
                { name: 'Psy Trance', href: '/psytrance' },
                { name: 'The Duo', href: '/couple-duo' }
              ].map((genre) => (
                <Link key={genre.name} href={genre.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="p-3 bg-secondary-bg border border-primary rounded-lg text-center hover:border-electric-cyan transition-all group"
                  >
                    <Music size={16} className="mx-auto mb-2 text-text-muted group-hover:text-electric-cyan transition-colors" />
                    <span className="text-sm text-text-muted group-hover:text-white transition-colors">
                      {genre.name}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
