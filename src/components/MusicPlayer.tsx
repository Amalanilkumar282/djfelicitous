'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Music,
  ExternalLink 
} from 'lucide-react';

interface Track {
  id: string;
  title: string;
  duration: string;
  previewUrl?: string; // For demo purposes, actual implementation would use real audio URLs
  spotifyUrl?: string;
  soundcloudUrl?: string;
}

interface MusicPlayerProps {
  tracks: Track[];
  title?: string;
  className?: string;
}

export default function MusicPlayer({ tracks, title, className = '' }: MusicPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleNext = useCallback(() => {
    setCurrentTrack(prev => prev === tracks.length - 1 ? 0 : prev + 1);
    setIsPlaying(false);
  }, [tracks.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleNext);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleNext);
    };
  }, [handleNext]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentTrack(prev => prev === 0 ? tracks.length - 1 : prev - 1);
    setIsPlaying(false);
  };

  const handleTrackSelect = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = parseFloat(e.target.value);
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentTrackData = tracks[currentTrack];

  return (
    <div className={`bg-gray-900 border border-cyan-500/30 rounded-2xl p-6 ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          {title}
        </h3>
      )}

      {/* Audio element for demo - in real implementation, you'd use actual audio URLs */}
      <audio
        ref={audioRef}
        src={currentTrackData?.previewUrl || ''}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Current Track Display */}
      <div className="bg-gray-800 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Music className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-white">{currentTrackData?.title}</h4>
            <p className="text-gray-400">Track {currentTrack + 1} of {tracks.length}</p>
          </div>
          <div className="flex gap-2">
            {currentTrackData?.spotifyUrl && (
              <motion.a
                href={currentTrackData.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            {currentTrackData?.soundcloudUrl && (
              <motion.a
                href={currentTrackData.soundcloudUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={handlePrevious}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SkipBack className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={handlePlayPause}
              className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SkipForward className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button onClick={toggleMute} className="p-1 hover:bg-gray-700 rounded transition-colors">
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      </div>

      {/* Track List */}
      <div className="space-y-2">
        <h5 className="text-lg font-semibold text-gray-300 mb-3">Playlist</h5>
        {tracks.map((track, index) => (
          <motion.div
            key={track.id}
            className={`p-3 rounded-lg cursor-pointer transition-all ${
              index === currentTrack
                ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
            onClick={() => handleTrackSelect(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400 w-6">{index + 1}</span>
                <div>
                  <p className="font-medium text-white">{track.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">{track.duration}</span>
                {index === currentTrack && isPlaying && (
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-cyan-400 animate-pulse rounded"></div>
                    <div className="w-1 h-4 bg-cyan-400 animate-pulse rounded" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-4 bg-cyan-400 animate-pulse rounded" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
