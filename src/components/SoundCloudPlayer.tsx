'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize2, Minimize2, X, Music } from 'lucide-react';

interface SoundCloudPlayerProps {
  track: {
    id: string;
    title: string;
    artist: string;
    albumArt: string;
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
  const [dynamicArtwork, setDynamicArtwork] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
      setDynamicArtwork(null);
    }
  }, [isOpen, track.id]);

  // Extract artwork from SoundCloud embed using multiple methods
  useEffect(() => {
    if (!isOpen || !track.embedUrl) return;

    const extractArtworkFromEmbed = async () => {
      try {
        // Method 1: Try SoundCloud oEmbed API
        if (track.soundcloudTrackId) {
          const trackUrl = `https://soundcloud.com/tracks/${track.soundcloudTrackId}`;
          const oembedUrl = `https://soundcloud.com/oembed?url=${encodeURIComponent(trackUrl)}&format=json`;
          
          try {
            const response = await fetch(oembedUrl);
            if (response.ok) {
              const data = await response.json();
              if (data.thumbnail_url) {
                // Get high quality version
                const artworkUrl = data.thumbnail_url.replace('-large.jpg', '-t500x500.jpg');
                setDynamicArtwork(artworkUrl);
                return;
              }
            }
          } catch {
            console.log('oEmbed failed, trying alternative method');
          }
        }

        // Method 2: Extract from iframe content using postMessage
        const iframe = iframeRef.current;
        if (iframe) {
          // Listen for messages from the iframe
          const handleMessage = (event: MessageEvent) => {
            if (event.origin !== 'https://w.soundcloud.com') return;
            
            try {
              const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
              if (data && data.method === 'ready') {
                // Request artwork info from SoundCloud widget
                iframe.contentWindow?.postMessage(JSON.stringify({
                  method: 'getCurrentSound'
                }), 'https://w.soundcloud.com');
              }
              
              if (data && data.artwork_url) {
                const artworkUrl = data.artwork_url.replace('-large.jpg', '-t500x500.jpg');
                setDynamicArtwork(artworkUrl);
              }
            } catch {
              // Ignore parsing errors
            }
          };

          window.addEventListener('message', handleMessage);
          
          // Cleanup
          return () => window.removeEventListener('message', handleMessage);
        }

        // Method 3: Parse from embed URL parameters
        if (track.embedUrl && track.embedUrl.includes('soundcloud.com')) {
          const urlMatch = track.embedUrl.match(/tracks\/(\d+)/);
          if (urlMatch) {
            const trackId = urlMatch[1];
            // Try to construct artwork URL based on track ID
            const possibleArtworkUrl = `https://i1.sndcdn.com/artworks-000${trackId.slice(-6)}-t500x500.jpg`;
            setDynamicArtwork(possibleArtworkUrl);
          }
        }
      } catch {
        console.log('Could not fetch dynamic artwork, using fallback');
      }
    };

    extractArtworkFromEmbed();
  }, [isOpen, track.embedUrl, track.soundcloudTrackId]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
    
    // Try to extract artwork after iframe loads
    setTimeout(() => {
      if (!dynamicArtwork && iframeRef.current) {
        // Try to get artwork from the loaded iframe
        tryExtractArtworkFromIframe();
      }
    }, 2000); // Wait 2 seconds for SoundCloud player to fully load
  };

  const tryExtractArtworkFromIframe = () => {
    if (!iframeRef.current || !track.soundcloudTrackId) return;

    try {
      // Try to communicate with SoundCloud Widget API
      const iframe = iframeRef.current;
      
      // Send a message to get current sound info
      iframe.contentWindow?.postMessage(JSON.stringify({
        method: 'getCurrentSound'
      }), 'https://w.soundcloud.com');

      // Also try alternative artwork URL construction
      const trackId = track.soundcloudTrackId;
      const alternativeArtworkUrls = [
        `https://i1.sndcdn.com/artworks-${trackId}-t500x500.jpg`,
        `https://i1.sndcdn.com/artworks-000${trackId.padStart(9, '0')}-t500x500.jpg`,
        `https://i1.sndcdn.com/artworks-${trackId.padStart(12, '0')}-t500x500.jpg`
      ];

      // Test each URL to see if it exists
      alternativeArtworkUrls.forEach((url, index) => {
        const img = new Image();
        img.onload = () => {
          if (!dynamicArtwork) {
            setDynamicArtwork(url);
          }
        };
        img.onerror = () => {
          // URL doesn't work, try next one
        };
        // Add delay to avoid overwhelming the server
        setTimeout(() => {
          img.src = url;
        }, index * 500);
      });
    } catch {
      console.log('Could not extract artwork from iframe');
    }
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  // Listen for SoundCloud widget messages
  useEffect(() => {
    if (!isOpen) return;

    const handleSoundCloudMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://w.soundcloud.com') return;
      
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        
        // Handle widget ready event
        if (data && data.method === 'ready') {
          // Widget is ready, request current sound info
          const iframe = iframeRef.current;
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(JSON.stringify({
              method: 'getCurrentSound'
            }), 'https://w.soundcloud.com');
          }
        }
        
        // Handle current sound response
        if (data && data.artwork_url && !dynamicArtwork) {
          let artworkUrl = data.artwork_url;
          // Upgrade to higher resolution
          artworkUrl = artworkUrl.replace('-large.jpg', '-t500x500.jpg');
          artworkUrl = artworkUrl.replace('-t67x67.jpg', '-t500x500.jpg');
          artworkUrl = artworkUrl.replace('-badge.jpg', '-t500x500.jpg');
          setDynamicArtwork(artworkUrl);
        }
      } catch {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleSoundCloudMessage);
    return () => window.removeEventListener('message', handleSoundCloudMessage);
  }, [isOpen, dynamicArtwork]);

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
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          className={`relative rounded-2xl border border-gray-700 shadow-2xl overflow-hidden ${
            isFullscreen ? 'w-full h-full max-w-none' : 'w-full max-w-4xl max-h-[90vh]'
          } ${className}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${dynamicArtwork || track.albumArt})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{track.title}</h3>
                <p className="text-gray-400 text-sm">{track.artist}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* External Link */}
              {track.streamingLinks.soundcloud && (
                <motion.a
                  href={track.streamingLinks.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Open in SoundCloud"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
              
              {/* Fullscreen Toggle */}
              <motion.button
                onClick={toggleFullscreen}
                className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </motion.button>
              
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Close Player"
              >
                <X className="w-4 h-4" />
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
                    className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <p className="text-white font-semibold">Loading SoundCloud Player...</p>
                  {!dynamicArtwork && track.soundcloudTrackId && (
                    <p className="text-gray-400 text-sm">Fetching cover art...</p>
                  )}
                </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SoundCloud Embed */}
            {track.embedUrl && !hasError && (
              <div className={`${isFullscreen ? 'h-[calc(100vh-120px)]' : 'h-[400px]'}`}>
                <iframe
                  ref={iframeRef}
                  width="100%"
                  height="100%"
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay"
                  src={track.embedUrl}
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  className="w-full h-full"
                  title={`${track.title} - ${track.artist}`}
                />
              </div>
            )}

            {/* Error State */}
            {(hasError || !track.embedUrl) && (
              <div className="p-12 text-center">
                <div className="text-4xl text-red-500 mb-4">⚠️</div>
                <h4 className="text-lg font-semibold text-white mb-2">Playback Issue</h4>
                <p className="text-gray-400 mb-6">
                  Unable to load the embedded player. Please listen directly on SoundCloud.
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
          <div className="p-3 border-t border-gray-700 bg-gray-900">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Live Stream
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden md:block">Press <kbd className="bg-gray-700 px-1 rounded text-xs">F</kbd> for fullscreen</span>
                <span className="text-orange-400 font-semibold">SoundCloud</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
