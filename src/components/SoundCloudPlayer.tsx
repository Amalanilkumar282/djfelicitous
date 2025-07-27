'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize2, Minimize2, X } from 'lucide-react';

interface SoundCloudPlayerProps {
  track: {
    id: string;
    title: string;
    artist: string;
    embedUrl?: string;
    soundcloudTrackId?: string;
    streamingLinks: {
      soundcloud?: string;
    };
  };
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function SoundCloudPlayer({ track, isOpen, onClose, className = '' }: SoundCloudPlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
      // Reset loading state after iframe loads or timeout
      const timer = setTimeout(() => {
        if (isLoading) {
          setIsLoading(false);
          setHasError(true);
        }
      }, 10000); // 10 second timeout
      return () => clearTimeout(timer);
    }
  }, [isOpen, track.id, isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'f' || event.key === 'F') {
        toggleFullscreen();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose, toggleFullscreen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-gray-700 shadow-2xl overflow-hidden ${
            isFullscreen ? 'w-full h-full max-w-none' : 'w-full max-w-4xl max-h-[90vh]'
          } ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{track.title}</h3>
              <p className="text-gray-400">{track.artist}</p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* External Link */}
              {track.streamingLinks.soundcloud && (
                <motion.a
                  href={track.streamingLinks.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Open in SoundCloud"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              
              {/* Fullscreen Toggle */}
              <motion.button
                onClick={toggleFullscreen}
                className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </motion.button>
              
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Close Player"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Player Content */}
          <div className="relative">
            {/* Loading Overlay */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10"
                >
                  <div className="text-center space-y-4">
                    <motion.div
                      className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-2"
                    >
                      <p className="text-white font-semibold">Loading SoundCloud Player</p>
                      <p className="text-gray-400 text-sm">Preparing your audio experience...</p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SoundCloud Embed */}
            {track.embedUrl && !hasError && (
              <div className={`${isFullscreen ? 'h-[calc(100vh-140px)]' : 'h-[500px]'}`}>
                <iframe
                  ref={iframeRef}
                  width="100%"
                  height="100%"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={track.embedUrl}
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  className="w-full h-full rounded-lg"
                  title={`${track.title} - ${track.artist}`}
                />
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="p-12 text-center">
                <div className="text-6xl text-red-500 mb-4">⚠️</div>
                <h4 className="text-xl font-semibold text-white mb-2">Playback Error</h4>
                <p className="text-gray-400 mb-6">
                  There was an issue loading the SoundCloud player. Please try refreshing or visit SoundCloud directly.
                </p>
                {track.streamingLinks.soundcloud && (
                  <motion.a
                    href={track.streamingLinks.soundcloud}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Listen on SoundCloud
                  </motion.a>
                )}
              </div>
            )}

            {/* Fallback if no embed URL */}
            {!track.embedUrl && !hasError && (
              <div className="p-12 text-center">
                <div className="text-6xl text-gray-600 mb-4">🎵</div>
                <h4 className="text-xl font-semibold text-white mb-2">Direct Streaming Only</h4>
                <p className="text-gray-400 mb-6">
                  This track is not available for embedded playback, but you can listen to it directly on SoundCloud.
                </p>
                {track.streamingLinks.soundcloud && (
                  <motion.a
                    href={track.streamingLinks.soundcloud}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Listen on SoundCloud
                  </motion.a>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700 bg-gray-900">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Live Stream
                </span>
                <span>Full Player Controls Available</span>
                {track.soundcloudTrackId && (
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                    Track ID: {track.soundcloudTrackId}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">
                  Press <kbd className="bg-gray-700 px-1 rounded">F</kbd> for fullscreen, <kbd className="bg-gray-700 px-1 rounded">ESC</kbd> to close
                </span>
                <div className="flex items-center gap-2">
                  <span>Powered by</span>
                  <span className="text-orange-400 font-semibold">SoundCloud</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
