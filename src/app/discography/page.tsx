'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, ExternalLink, Calendar, Clock, Heart, Eye } from 'lucide-react';
import { discography, albums } from '../../data/discography';
import FloatingContactWidget from '../../components/FloatingContactWidget';
import SoundCloudPlayer from '../../components/SoundCloudPlayer';

export default function DiscographyPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'original' | 'remix' | 'live-set' | 'collaboration'>('all');
  const [activePlayer, setActivePlayer] = useState<string | null>(null);

  const filters = [
    { key: 'all' as const, label: 'All Tracks' },
    { key: 'original' as const, label: 'Originals' },
    { key: 'remix' as const, label: 'Remixes' },
    { key: 'live-set' as const, label: 'Live Sets' },
    { key: 'collaboration' as const, label: 'Collaborations' }
  ];

  const filteredTracks = selectedFilter === 'all' 
    ? discography 
    : discography.filter(track => track.type === selectedFilter);

  const openPlayer = (trackId: string) => {
    setActivePlayer(trackId);
  };

  const closePlayer = () => {
    setActivePlayer(null);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-executive pt-20 relative">
      {/* Floating Contact Widget */}
      <FloatingContactWidget />

      {/* Floating Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-4 bg-cyan-400 hover:bg-cyan-300 text-black rounded-full shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↑
        </motion.div>
      </motion.button>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Floating Music Notes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/20 text-4xl"
              animate={{
                y: [-20, -40, -20],
                x: [0, 10, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
            >
              ♪
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-4 mb-8"
              >
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-semibold text-lg tracking-widest uppercase">
                  Complete Musical Archive
                </span>
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-orbitron text-3xl md:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  Discography
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed mb-8"
              >
                Explore the complete sonic journey across genres and decades. From underground beats to mainstream hits,
                every track represents a unique moment in musical evolution spanning multiple artist identities.
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
          >
            {[
              { number: discography.length.toString(), label: 'Total Tracks', icon: '🎵' },
              { number: albums.length.toString(), label: 'Albums & EPs', icon: '💿' },
              { number: formatNumber(discography.reduce((sum, track) => sum + (track.plays || 0), 0)), label: 'Total Plays', icon: '📊' },
              { number: '4', label: 'Artist Identities', icon: '🎭' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Filter Navigation */}
      <section className="py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Filter by Category</h3>
            <p className="text-gray-400">Explore tracks by type and discover your favorite style</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                  selectedFilter === filter.key
                    ? 'bg-cyan-400 text-black border-cyan-400 shadow-lg shadow-cyan-400/25'
                    : 'bg-gray-800/80 text-gray-300 border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-gray-700/80'
                } backdrop-blur-sm`}
              >
                {filter.label}
                <span className="ml-2 text-sm opacity-75">
                  ({filter.key === 'all' ? discography.length : discography.filter(t => t.type === filter.key).length})
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 md:gap-8"
          >
            {filteredTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Album Art */}
                  <div className="relative md:w-48 h-48 md:h-auto">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-t-xl md:rounded-l-xl md:rounded-tr-none flex items-center justify-center">
                      <div className="text-6xl text-gray-400">♪</div>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openPlayer(track.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center">
                        {activePlayer === track.id ? (
                          <Pause className="w-8 h-8 text-black" />
                        ) : (
                          <Play className="w-8 h-8 text-black ml-1" />
                        )}
                      </div>
                    </motion.button>
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 p-6 text-center">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-4">
                      <div className="text-center md:text-left md:flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {track.title}
                        </h3>
                        <p className="text-lg text-gray-400 mb-2">{track.artist}</p>
                        <p className="text-cyan-400 font-medium">{track.genre}</p>
                      </div>

                      {track.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-bold rounded-full mx-auto md:mx-0 mt-2 md:mt-0"
                        >
                          FEATURED
                        </motion.div>
                      )}
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed text-center">
                      {track.description}
                    </p>

                    {/* Track Details */}
                    <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-400 justify-center md:justify-start">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{track.releaseDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{track.duration}</span>
                      </div>
                      {track.plays && (
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>{formatNumber(track.plays)} plays</span>
                        </div>
                      )}
                      {track.likes && (
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4" />
                          <span>{formatNumber(track.likes)} likes</span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                      {track.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Streaming Links */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      {/* Play Now Button for SoundCloud tracks */}
                      {track.embedUrl && (
                        <motion.button
                          onClick={() => openPlayer(track.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg transition-all duration-300 font-medium shadow-lg"
                        >
                          <Play className="w-5 h-5" />
                          <span>Play Now</span>
                        </motion.button>
                      )}
                      
                      {Object.entries(track.streamingLinks).map(([platform, url]) => (
                        url && (
                          <motion.a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                              platform === 'soundcloud' 
                                ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                                : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                            }`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="capitalize">{platform}</span>
                          </motion.a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 content-heading">
              Albums & <span className="text-cyan-400">EPs</span>
            </h2>
          </motion.div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center py-20"
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Background Effects */}
              <div className="absolute inset-0 opacity-20 overflow-hidden">
                <div className="absolute top-4 left-4 w-20 h-20 bg-cyan-400/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl mb-8"
                >
                  🎵
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Coming Soon...
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  Curated collections and exclusive albums are in the works. 
                  <br />
                  <span className="text-cyan-400 font-medium">Stay tuned for something extraordinary!</span>
                </motion.p>

                {/* Animated dots */}
                <motion.div
                  className="flex justify-center space-x-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-cyan-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* SoundCloud Player Modal */}
      {activePlayer && (
        <SoundCloudPlayer
          track={discography.find(track => track.id === activePlayer)!}
          isOpen={!!activePlayer}
          onClose={closePlayer}
        />
      )}
    </div>
  );
}
