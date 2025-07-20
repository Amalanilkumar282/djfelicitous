'use client';

import { motion } from 'framer-motion';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-primary-bg text-text-primary">
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 techno-grid opacity-10" />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Error icon */}
              <motion.div
                className="w-20 h-20 mx-auto bg-gradient-to-r from-electric-orange to-plasma-pink rounded-full flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(255, 140, 0, 0.3)',
                    '0 0 40px rgba(255, 0, 110, 0.3)',
                    '0 0 20px rgba(255, 140, 0, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertTriangle size={40} className="text-white" />
              </motion.div>
              
              {/* Error message */}
              <div className="space-y-4">
                <h1 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white">
                  System <span className="text-electric-orange">Malfunction</span>
                </h1>
                
                <p className="text-text-muted text-lg">
                  The audio system encountered an unexpected error. Don&apos;t worry, we&apos;re here to get the music back on track.
                </p>
                
                {error.digest && (
                  <p className="text-xs text-text-disabled font-mono bg-secondary-bg p-2 rounded border border-primary inline-block">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>

              {/* Professional divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-0.5 bg-electric-orange mx-auto"
              />

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={reset}
                  className="btn-primary flex items-center space-x-2"
                >
                  <RefreshCw size={20} />
                  <span>RESTART SYSTEM</span>
                </motion.button>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/">
                    <button className="btn-secondary flex items-center space-x-2">
                      <Home size={20} />
                      <span>RETURN HOME</span>
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Help text */}
              <div className="mt-8 pt-6 border-t border-secondary text-center">
                <p className="text-text-muted text-sm">
                  If the problem persists, please{' '}
                  <a 
                    href="mailto:felicitousdj@gmail.com" 
                    className="text-electric-cyan hover:text-electric-orange transition-colors underline"
                  >
                    contact support
                  </a>
                  {' '}with the error ID above.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
}
