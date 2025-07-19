'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FloatingContactWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contactNumber = "+919847352182";

  const contactOptions = [
    {
      id: 'call',
      title: 'Call',
      icon: Phone,
      action: () => window.open(`tel:${contactNumber}`),
      gradient: 'from-green-400 to-emerald-500',
      description: 'Call now for instant response'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: MessageCircle,
      action: () => {
        const message = encodeURIComponent("Hi! I'm interested in booking DJ Felicitous for an event. Could you please provide more details?");
        window.open(`https://wa.me/${contactNumber.replace('+', '')}?text=${message}`, '_blank');
      },
      gradient: 'from-emerald-400 to-teal-500',
      description: 'Chat instantly on WhatsApp'
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 space-y-3"
          >
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={option.action}
                  className={`flex items-center space-x-3 px-4 py-3 bg-gradient-to-r ${option.gradient} hover:scale-105 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl group`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} className="text-white" />
                  <span className="text-white font-medium pr-2">{option.title}</span>
                </motion.button>
              );
            })}

            {/* Contact Number Display */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-2xl px-4 py-3 text-center"
            >
              <p className="text-gray-300 text-sm font-medium">{contactNumber}</p>
              <p className="text-gray-400 text-xs mt-1">Available 24/7</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isExpanded ? 45 : 0,
        }}
      >
        <motion.div
          animate={{
            scale: isExpanded ? 0 : 1,
            rotate: isExpanded ? 180 : 0
          }}
          className="absolute"
        >
          <Phone size={24} className="text-white" />
        </motion.div>
        
        <motion.div
          animate={{
            scale: isExpanded ? 1 : 0,
            rotate: isExpanded ? 0 : -180
          }}
          className="absolute"
        >
          ✕
        </motion.div>

        {/* Pulsing Ring Animation */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 border-2 border-cyan-400 rounded-full"
        />
        
        {/* Secondary Ring */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 border-2 border-emerald-400 rounded-full"
        />

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Quick Contact
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </motion.button>
    </div>
  );
}
