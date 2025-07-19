'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Disc, Music, Users, Radio } from 'lucide-react';
import Link from 'next/link';

export default function QuickAccessWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    {
      href: '/bollywood',
      label: 'Bollywood',
      icon: Music,
      color: 'from-orange-500 to-red-500'
    },
    {
      href: '/psytrance',
      label: 'Psy Trance',
      icon: Radio,
      color: 'from-purple-500 to-pink-500'
    },
    {
      href: '/techno',
      label: 'Techno',
      icon: Disc,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      href: '/couple-duo',
      label: 'Couple Duo',
      icon: Users,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <motion.div
        className="relative"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-full shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Music size={24} />
          </motion.div>
        </motion.button>

        {/* Quick Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-16 top-0 flex flex-col space-y-3"
            >
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, x: 5 }}
                      className={`group flex items-center space-x-3 px-4 py-3 bg-gradient-to-r ${link.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon size={20} className="text-white" />
                      <span className="text-white font-medium text-sm whitespace-nowrap">
                        {link.label}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
              
              {/* Back to Home */}
              <Link href="/">
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: quickLinks.length * 0.1 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                  className="group flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-white font-medium text-sm whitespace-nowrap">
                    🏠 Home
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
