'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music, Headphones, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: Zap },
    { href: '/couple-duo', label: 'The Duo', icon: Headphones },
    { href: '/bollywood', label: 'Bollywood', icon: Music },
    { href: '/psytrance', label: 'Psy Trance', icon: Zap },
    { href: '/techno', label: 'Techno', icon: Zap },
    { href: '/old-geeks', label: 'Old Geeks', icon: Music },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-magenta)] rounded-full animate-pulse-glow" />
              <span className="font-orbitron font-bold text-xl neon-cyan neon-text">
                DJ FELICITOUS
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                
                return (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all group ${
                        isActive 
                          ? 'neon-cyan neon-text' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-1">
                        <Icon size={16} className="neon-glow" />
                        <span>{link.label}</span>
                      </div>
                      
                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-magenta)]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Book Now Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[var(--neon-magenta)] to-[var(--neon-cyan)] text-black font-bold px-6 py-2 rounded-full hover:animate-pulse-glow transition-all">
                BOOK NOW
              </button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6 neon-cyan" />
              ) : (
                <Menu className="block h-6 w-6 neon-cyan" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                
                return (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      whileHover={{ x: 10 }}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
                        isActive 
                          ? 'neon-cyan neon-text' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon size={16} className="neon-glow" />
                        <span>{link.label}</span>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
              
              {/* Mobile Book Now */}
              <motion.div
                whileHover={{ x: 10 }}
                className="px-3 py-2"
              >
                <Link href="/contact">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-gradient-to-r from-[var(--neon-magenta)] to-[var(--neon-cyan)] text-black font-bold px-6 py-3 rounded-full hover:animate-pulse-glow transition-all"
                  >
                    BOOK NOW
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
