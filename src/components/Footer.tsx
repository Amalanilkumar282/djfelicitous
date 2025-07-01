'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Music, Mail, Phone, MapPin } from 'lucide-react';
import { FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com/djfelicitous', 
      label: 'Instagram',
      color: 'neon-pink' 
    },
    { 
      icon: FaSoundcloud, 
      href: 'https://soundcloud.com/djfelicitous', 
      label: 'SoundCloud',
      color: 'neon-amber' 
    },
    { 
      icon: FaSpotify, 
      href: 'https://spotify.com/artist/djfelicitous', 
      label: 'Spotify',
      color: 'neon-lime' 
    },
    { 
      icon: FaYoutube, 
      href: 'https://youtube.com/@djfelicitous', 
      label: 'YouTube',
      color: 'neon-cyan' 
    },
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/couple-duo', label: 'The Duo' },
    { href: '/bollywood', label: 'Bollywood' },
    { href: '/psytrance', label: 'Psy Trance' },
    { href: '/techno', label: 'Techno' },
    { href: '/old-geeks', label: 'Old Geeks' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'booking@djfelicitous.com', href: 'mailto:booking@djfelicitous.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'Los Angeles, CA', href: '#' },
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800">
      {/* Animated background */}
      <div className="absolute inset-0 techno-grid opacity-10 pointer-events-none" />
      
      {/* EQ Bars Animation */}
      <div className="absolute top-0 left-0 right-0 h-1 flex space-x-1 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-[var(--neon-cyan)] to-[var(--neon-magenta)]"
            animate={{
              height: ['2px', '8px', '2px'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.05,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-magenta)] rounded-full animate-pulse-glow" />
                <span className="font-orbitron font-bold text-2xl neon-cyan neon-text">
                  DJ FELICITOUS
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md">
                Bringing the energy of multiple genres to dance floors worldwide. 
                From underground techno to vibrant Bollywood beats, experience the evolution of electronic music.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 neon-magenta">
                  Stay Connected
                </h3>
                <div className="flex max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-l-lg focus:outline-none focus:border-[var(--neon-cyan)] text-white"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-[var(--neon-magenta)] to-[var(--neon-cyan)] text-black font-bold rounded-r-lg hover:animate-pulse-glow transition-all"
                  >
                    SUBSCRIBE
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 neon-lime">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <motion.span
                        whileHover={{ x: 5, color: 'var(--neon-cyan)' }}
                        className="text-gray-400 hover:text-[var(--neon-cyan)] transition-all cursor-pointer block"
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-4 neon-amber">
                Contact
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <li key={index}>
                      {contact.href === '#' ? (
                        <div className="flex items-center space-x-3 text-gray-400">
                          <Icon size={16} className="neon-glow" />
                          <span>{contact.text}</span>
                        </div>
                      ) : (
                        <Link href={contact.href}>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-3 text-gray-400 hover:text-[var(--neon-cyan)] transition-all cursor-pointer"
                          >
                            <Icon size={16} className="neon-glow" />
                            <span>{contact.text}</span>
                          </motion.div>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 rounded-full border-2 border-current flex items-center justify-center ${social.color} neon-border hover:animate-pulse-glow transition-all`}
                    >
                      <Icon size={20} />
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} DJ Felicitous. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Powered by beats & passion
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating Book Now Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                boxShadow: [
                  '0 0 20px var(--neon-magenta)',
                  '0 0 40px var(--neon-cyan)',
                  '0 0 20px var(--neon-magenta)',
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-14 h-14 bg-gradient-to-r from-[var(--neon-magenta)] to-[var(--neon-cyan)] rounded-full flex items-center justify-center text-black font-bold shadow-lg hover:shadow-2xl"
            >
              <Music size={24} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
