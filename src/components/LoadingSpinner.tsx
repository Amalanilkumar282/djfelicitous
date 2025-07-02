'use client';

import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-bg">
      <div className="text-center space-y-8">
        {/* Professional spinner */}
        <motion.div
          className="relative w-16 h-16 mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-2 border-transparent border-t-electric-cyan rounded-full"></div>
          <div className="absolute inset-2 border-2 border-transparent border-t-techno-purple rounded-full"></div>
        </motion.div>
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          <h3 className="font-space-grotesk text-xl font-semibold text-white">
            Loading Experience
          </h3>
          <p className="text-text-muted text-sm">
            Preparing your audio journey...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
