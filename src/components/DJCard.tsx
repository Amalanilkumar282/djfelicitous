'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Play, ExternalLink, Music, Zap } from 'lucide-react';
import { DJProfile } from '@/data/djProfiles';

interface DJCardProps {
  profile: DJProfile;
  featured?: boolean;
}

const DJCard = ({ profile, featured = false }: DJCardProps) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    
    // Add a small delay for the click animation
    setTimeout(() => {
      router.push(profile.route);
    }, 300);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
      'neon-cyan': {
        text: 'text-[var(--neon-cyan)]',
        border: 'border-[var(--neon-cyan)]',
        bg: 'bg-[var(--neon-cyan)]',
        glow: 'shadow-[0_0_30px_var(--neon-cyan)]'
      },
      'neon-magenta': {
        text: 'text-[var(--neon-magenta)]',
        border: 'border-[var(--neon-magenta)]',
        bg: 'bg-[var(--neon-magenta)]',
        glow: 'shadow-[0_0_30px_var(--neon-magenta)]'
      },
      'neon-lime': {
        text: 'text-[var(--neon-lime)]',
        border: 'border-[var(--neon-lime)]',
        bg: 'bg-[var(--neon-lime)]',
        glow: 'shadow-[0_0_30px_var(--neon-lime)]'
      },
      'neon-amber': {
        text: 'text-[var(--neon-amber)]',
        border: 'border-[var(--neon-amber)]',
        bg: 'bg-[var(--neon-amber)]',
        glow: 'shadow-[0_0_30px_var(--neon-amber)]'
      },
      'neon-purple': {
        text: 'text-[var(--neon-purple)]',
        border: 'border-[var(--neon-purple)]',
        bg: 'bg-[var(--neon-purple)]',
        glow: 'shadow-[0_0_30px_var(--neon-purple)]'
      },
      'neon-pink': {
        text: 'text-[var(--neon-pink)]',
        border: 'border-[var(--neon-pink)]',
        bg: 'bg-[var(--neon-pink)]',
        glow: 'shadow-[0_0_30px_var(--neon-pink)]'
      },
    };
    
    return colorMap[color] || colorMap['neon-cyan'];
  };

  const colors = getColorClasses(profile.color);
  const cardHeight = featured ? 'h-[500px]' : 'h-[300px]';

  return (
    <motion.div
      className={`relative ${cardHeight} rounded-xl overflow-hidden cursor-pointer group`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
      }}
      whileTap={{ 
        scale: 0.98,
      }}
      animate={isClicked ? { 
        scale: 1.05,
        boxShadow: colors.glow,
      } : {}}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      onClick={handleCardClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={featured}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        {/* Color-specific overlay on hover */}
        <motion.div
          className={`absolute inset-0 ${colors.bg} mix-blend-multiply`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Glitch Effect Border */}
      <motion.div
        className={`absolute inset-0 border-2 ${colors.border} rounded-xl`}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered ? colors.glow : 'none',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Top Section */}
        <div>
          {/* Genre Badge */}
          <motion.div
            className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${colors.border} ${colors.text} backdrop-blur-sm mb-4`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Music size={14} />
            <span className="text-xs font-semibold tracking-wider uppercase">
              {profile.genre}
            </span>
          </motion.div>

          {featured && (
            <motion.div
              className="inline-flex items-center space-x-1 px-2 py-1 rounded-full bg-gradient-to-r from-[var(--neon-magenta)] to-[var(--neon-cyan)] text-black text-xs font-bold mb-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Zap size={12} />
              <span>FEATURED</span>
            </motion.div>
          )}
        </div>

        {/* Bottom Section */}
        <div>
          {/* Title */}
          <motion.h3
            className={`${featured ? 'text-3xl' : 'text-xl'} font-orbitron font-bold mb-2 ${colors.text} neon-text`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {profile.name}
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            className={`${colors.text} font-semibold mb-2 ${featured ? 'text-lg' : 'text-sm'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {profile.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className={`text-gray-300 mb-4 ${featured ? 'text-base' : 'text-sm'} line-clamp-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {profile.description}
          </motion.p>

          {/* Action Button */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${colors.border} ${colors.text} hover:${colors.bg} hover:text-black transition-all font-semibold text-sm`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
            >
              <ExternalLink size={16} />
              <span>EXPLORE</span>
            </motion.button>

            {/* Animated Play Button */}
            <motion.div
              className={`w-12 h-12 rounded-full ${colors.border} border-2 flex items-center justify-center ${colors.text} backdrop-blur-sm`}
              whileHover={{ 
                scale: 1.1,
                boxShadow: colors.glow,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                // Could play a preview track here
              }}
            >
              <Play size={16} fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hover Effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={isHovered ? {
          background: `linear-gradient(45deg, transparent 48%, ${colors.text.replace('text-', 'rgba(')} 50%, transparent 52%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
        } : {}}
        transition={{ duration: 0.3 }}
      />

      {/* Click Ripple Effect */}
      {isClicked && (
        <motion.div
          className={`absolute inset-0 ${colors.bg} opacity-20 rounded-xl`}
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.div>
  );
};

export default DJCard;
