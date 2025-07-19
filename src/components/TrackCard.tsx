'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, ExternalLink, Calendar, Clock, Heart, Eye } from 'lucide-react';
import { Track } from '../data/discography';

interface TrackCardProps {
  track: Track;
  index: number;
  playingTrack: string | null;
  onTogglePlay: (trackId: string) => void;
}

export default function TrackCard({ track, index, playingTrack, onTogglePlay }: TrackCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <motion.div
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
            onClick={() => onTogglePlay(track.id)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center">
              {playingTrack === track.id ? (
                <Pause className="w-8 h-8 text-black" />
              ) : (
                <Play className="w-8 h-8 text-black ml-1" />
              )}
            </div>
          </motion.button>
        </div>

        {/* Track Info */}
        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {track.title}
              </h3>
              <p className="text-lg text-gray-400 mb-2">{track.artist}</p>
              <p className="text-cyan-400 font-medium">{track.genre}</p>
            </div>

            {track.featured && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-bold rounded-full self-start md:self-auto mt-2 md:mt-0"
              >
                FEATURED
              </motion.div>
            )}
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {track.description}
          </p>

          {/* Track Details */}
          <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-400">
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
          <div className="flex flex-wrap gap-2 mb-4">
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
          <div className="flex flex-wrap gap-3">
            {Object.entries(track.streamingLinks).map(([platform, url]) => (
              url && (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-cyan-400 hover:text-black text-gray-300 rounded-lg transition-all duration-300 text-sm font-medium"
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
  );
}
