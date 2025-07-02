'use client';

import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-bg relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 techno-grid opacity-20" />
      
      {/* Professional accent elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-electric-cyan rounded-full animate-subtle-pulse" />
      <div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-acid-green rounded-full animate-subtle-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center space-y-8">
        {/* Logo animation */}
        <motion.div
          className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Music size={40} className="text-white" />
        </motion.div>
        
        {/* Loading spinner */}
        <motion.div
          className="relative w-16 h-16 mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-3 border-transparent border-t-electric-cyan rounded-full"></div>
          <div className="absolute inset-2 border-2 border-transparent border-t-techno-purple rounded-full"></div>
        </motion.div>
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3"
        >
          <h3 className="font-space-grotesk text-2xl font-bold text-white">
            Loading <span className="text-electric-cyan">Experience</span>
          </h3>
          
          <motion.p 
            className="text-text-muted"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Preparing your audio journey...
          </motion.p>
        </motion.div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-electric-cyan rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
