'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Clock, Calendar, X, Zap } from 'lucide-react';
import { useState } from 'react';

interface ContactOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingFormOpen: () => void;
}

export default function ContactOptionsModal({ isOpen, onClose, onBookingFormOpen }: ContactOptionsModalProps) {
  const contactNumber = "+919847352182";
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const contactOptions = [
    {
      id: 'call',
      title: 'Call Now',
      subtitle: 'Instant Response',
      description: 'Speak directly with our team for immediate assistance',
      icon: Phone,
      action: () => window.open(`tel:${contactNumber}`),
      gradient: 'from-green-400 to-emerald-500',
      hoverGradient: 'from-green-300 to-emerald-400',
      bgPattern: 'bg-green-500/10',
      delay: 0.1
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Quick & Easy',
      description: 'Chat with us instantly on WhatsApp for fast replies',
      icon: MessageCircle,
      action: () => {
        const message = encodeURIComponent("Hi! I'm interested in booking DJ Felicitous for an event. Could you please provide more details?");
        window.open(`https://wa.me/${contactNumber.replace('+', '')}?text=${message}`, '_blank');
      },
      gradient: 'from-emerald-400 to-teal-500',
      hoverGradient: 'from-emerald-300 to-teal-400',
      bgPattern: 'bg-emerald-500/10',
      delay: 0.2
    },
    {
      id: 'form',
      title: 'Booking Form',
      subtitle: 'Detailed Request',
      description: 'Complete booking form for comprehensive event planning',
      icon: Calendar,
      action: () => {
        onClose();
        onBookingFormOpen();
      },
      gradient: 'from-cyan-400 to-blue-500',
      hoverGradient: 'from-cyan-300 to-blue-400',
      bgPattern: 'bg-cyan-500/10',
      delay: 0.3
    }
  ];

  const quickInfo = [
    { icon: Clock, text: 'Response within 1 hour' },
    { icon: Zap, text: 'Available 24/7' },
    { icon: Phone, text: contactNumber }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-2xl w-full shadow-2xl max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-emerald-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 hover:bg-gray-800 rounded-full transition-colors z-20 cursor-pointer bg-gray-900/50 border border-gray-700 hover:border-gray-500"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 hover:text-white" />
            </button>

            <div className="relative z-10">
              {/* Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-6 sm:mb-8"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Let&apos;s Connect!
                </h2>
                <p className="text-gray-300 text-base sm:text-lg px-2">
                  Choose your preferred way to get in touch
                </p>
              </motion.div>

              {/* Contact Options */}
              <div className="grid gap-3 sm:gap-4 mb-6 sm:mb-8">
                {contactOptions.map((option) => {
                  const Icon = option.icon;
                  const isHovered = hoveredOption === option.id;
                  
                  return (
                    <motion.div
                      key={option.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: option.delay }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onHoverStart={() => setHoveredOption(option.id)}
                      onHoverEnd={() => setHoveredOption(null)}
                      onClick={option.action}
                      className={`relative cursor-pointer rounded-xl sm:rounded-2xl border border-gray-700 p-3 sm:p-4 lg:p-6 transition-all duration-300 overflow-hidden group ${
                        isHovered ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' : 'hover:border-gray-600'
                      }`}
                    >
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 ${option.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      {/* Hover Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${option.hoverGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                      <div className="relative z-10 flex items-start sm:items-center space-x-3 sm:space-x-4">
                        <motion.div
                          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                          className={`p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${option.gradient} shadow-lg flex-shrink-0`}
                        >
                          <Icon size={20} className="text-white sm:w-6 sm:h-6" />
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-1">
                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {option.title}
                            </h3>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${option.gradient} text-white inline-block w-fit mt-1 sm:mt-0`}>
                              {option.subtitle}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors leading-tight">
                            {option.description}
                          </p>
                        </div>

                        <motion.div
                          animate={isHovered ? { x: 5 } : { x: 0 }}
                          className="text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0 hidden sm:block"
                        >
                          →
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-700"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {quickInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                        <div className="p-1.5 sm:p-2 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-lg flex-shrink-0">
                          <Icon size={14} className="text-cyan-400 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium truncate">{info.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Bottom Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6 px-2"
              >
                We&apos;re here to make your event unforgettable! 🎵
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
