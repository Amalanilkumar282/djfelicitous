'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music } from 'lucide-react';

const Navbar: React.FC = () => {
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
    { href: '/', label: 'Home' },
    { href: '/couple-duo', label: 'The Duo' },
    { href: '/bollywood', label: 'Bollywood' },
    { href: '/psytrance', label: 'Psy Trance' },
    { href: '/techno', label: 'Techno' },
    { href: '/old-geeks', label: 'Old Geeks' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'glass-navbar' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Executive Logo */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-platinum rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="font-space-grotesk font-bold text-xl text-platinum">
                DJ FELICITOUS
              </span>
            </motion.div>
          </Link>

          {/* Professional Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive
                          ? 'text-accent-primary'
                          : 'text-secondary hover:text-primary'
                        }`}
                    >
                      <span>{link.label}</span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
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
              <button className="btn-primary">
                BOOK NOW
              </button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-t border-border-primary"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${isActive
                          ? 'text-accent-primary bg-accent-subtle'
                          : 'text-secondary hover:text-primary hover:bg-surface'
                        }`}
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                );
              })}

              {/* Mobile Book Now */}
              <div className="pt-4 border-t border-border-primary">
                <Link href="/contact">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="w-full btn-primary justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    BOOK NOW
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
