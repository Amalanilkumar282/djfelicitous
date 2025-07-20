'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Music, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react';
import ContactOptionsModal from './ContactOptionsModal';
import BookingModal from './BookingModal';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2024);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = [
    {
      title: 'Music',
      links: [
        { name: 'The Duo', href: '/couple-duo' },
        { name: 'Bollywood', href: '/bollywood' },
        { name: 'Psy Trance', href: '/psytrance' },
        { name: 'Techno', href: '/techno' },
      ]
    },
    {
      title: 'Services',
      isSpecial: true, // Mark this section as special for different rendering
      promotionalText: "Loved what you saw? Let's make your next event unforgettable. Reach out now!",
      links: [
        { name: 'Wedding Events', href: '/services/weddings' },
        { name: 'Corporate Events', href: '/services/corporate' },
        { name: 'Private Parties', href: '/services/private' },
        { name: 'Festival Bookings', href: '/services/festivals' },
        { name: 'Production', href: '/services/production' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Booking Inquiry', href: '/contact' },
        { name: 'Collaborations', href: '/collaborate' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Rider', href: '/rider' },
        { name: 'About', href: '/about' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/djfelicitous', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/djfelicitous', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/djfelicitous', label: 'YouTube' },
    { icon: Mail, href: 'mailto:booking@djfelicitous.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-executive border-t border-steel">
      {/* Executive Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Executive Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Link href="/" className="group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-platinum rounded-lg flex items-center justify-center">
                    <Music size={24} className="text-white" />
                  </div>
                  <span className="font-space-grotesk font-bold text-xl text-platinum group-hover:text-accent transition-colors">
                    DJ FELICITOUS
                  </span>
                </div>
              </Link>

              <p className="text-text-muted text-sm leading-relaxed">
                Professional electronic music producer and DJ, delivering premium audio experiences across multiple genres.
              </p>

              <div className="flex items-center space-x-2 text-text-muted">
                <MapPin size={16} />
                <span className="text-sm">Based in Banglore, India</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-space-grotesk font-semibold text-white text-lg">
                {section.title}
              </h3>
              
              {/* Add promotional text for Services section */}
              {section.isSpecial && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-accent text-sm font-medium leading-relaxed bg-gradient-to-r from-accent/20 to-electric-cyan/20 p-3 rounded-lg border border-accent/30"
                >
                  {section.promotionalText}
                </motion.p>
              )}
              
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {section.isSpecial ? (
                      // For Services section, make clickable to open contact modal
                      <button
                        onClick={() => setShowContactModal(true)}
                        className="text-text-muted hover:text-electric-cyan transition-colors text-sm block py-1 text-left w-full hover:pl-2 hover:bg-electric-cyan/10 rounded transition-all duration-300"
                      >
                        {link.name}
                      </button>
                    ) : (
                      // For other sections, keep as normal links
                      <Link
                        href={link.href}
                        className="text-text-muted hover:text-electric-cyan transition-colors text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-secondary"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-text-muted text-sm font-medium">Follow:</span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-secondary-bg border border-secondary rounded-lg flex items-center justify-center text-text-muted hover:text-electric-cyan hover:border-electric-cyan transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                onClick={() => setShowContactModal(true)}
                className="btn-primary"
              >
                BOOK YOUR EVENT
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-muted text-sm">
              © {currentYear} DJ Felicitous. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-text-muted hover:text-electric-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-muted hover:text-electric-cyan transition-colors">
                Terms of Service
              </Link>
              <Link href="/rider" className="text-text-muted hover:text-electric-cyan transition-colors">
                Technical Rider
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Professional accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-50" />

      {/* Contact Modal */}
      <ContactOptionsModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)}
        onBookingFormOpen={() => {
          setShowContactModal(false);
          setShowBookingModal(true);
        }}
      />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)}
        djName="DJ Felicitous"
        djGenre="Multi-Genre"
      />
    </footer>
  );
};

export default Footer;
