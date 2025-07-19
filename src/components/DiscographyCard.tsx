'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play } from 'lucide-react';

interface DiscographyCardProps {
  className?: string;
}

export default function DiscographyCard({ className = '' }: DiscographyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative ${className}`}
    >
      <Link href="/discography">
        <motion.div
          whileHover={{ scale: 1.02, y: -8 }}
          whileTap={{ scale: 0.98 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer group shadow-2xl hover:shadow-cyan-400/20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08)_0%,transparent_50%)]"></div>
          </div>

          {/* Multiple Vinyl Records Animation */}
          <div className="absolute top-6 right-6 w-28 h-28 opacity-20 group-hover:opacity-50 transition-opacity duration-500">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-full h-full relative"
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-600/40 to-gray-900 border-2 border-cyan-500/30 relative">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-black"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"></div>
              </div>
            </motion.div>
          </div>

          {/* Secondary Vinyl Animation */}
          <div className="absolute top-4 right-16 w-16 h-16 opacity-15 group-hover:opacity-30 transition-opacity duration-700">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-gray-700 border border-cyan-400/20 relative">
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-gray-800 to-black"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/60"></div>
              </div>
            </motion.div>
          </div>

          <div className="relative p-16">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-semibold text-base tracking-wider uppercase">
                  Complete Musical Archive
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-white mb-8 group-hover:text-cyan-400 transition-colors duration-500 leading-tight"
              >
                Discography
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
              >
                Journey through the complete sonic universe - from chart-topping Bollywood reimaginings 
                to underground techno masterpieces and psychedelic odysseys. Every beat tells a story.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                {['Original Tracks', 'Remixes', 'Live Sets', 'Collaborations'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-6 py-3 bg-gray-800/80 text-gray-300 rounded-full text-base border border-gray-600 group-hover:border-cyan-400/50 group-hover:text-cyan-400 group-hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-4 text-cyan-400 group-hover:text-white transition-colors duration-300"
              >
                <span className="font-bold text-lg">Explore Full Collection</span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="p-2 rounded-full bg-cyan-400/20 group-hover:bg-cyan-400/30 transition-colors duration-300"
                >
                  <Play size={24} className="text-cyan-400" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
