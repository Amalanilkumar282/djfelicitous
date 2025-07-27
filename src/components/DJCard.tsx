'use client';

import { motion } from 'framer-motion';
import { Play, Music, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { DJProfile } from '@/data/djProfiles';
import { placeholderImages } from '@/utils/placeholders';

interface DJCardProps {
  profile: DJProfile;
  featured?: boolean;
}

const DJCard: React.FC<DJCardProps> = ({ profile, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`card-executive group cursor-pointer w-full ${
        featured ? 'min-h-[600px] max-w-4xl mx-auto' : 'min-h-[450px]'
      }`}
    >
      <Link href={profile.route}>
        {/* Image Container */}
        <div className={`relative overflow-hidden ${
          featured ? 'h-80' : 'h-56'
        } rounded-t-xl`}>
          <Image
            src={(placeholderImages[profile.id as keyof typeof placeholderImages] as string) || profile.image || '/placeholder.jpg'}
            alt={profile.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
            priority={featured}
          />

          {/* Enhanced Multi-Layer Overlay System */}
          {/* Enhanced Base Dark Overlay for Better Content Visibility */}
          <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/75" />
          
          {/* Strong Content Readability Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          
          {/* Executive Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-executive via-bg-executive/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
          
          {/* Platinum Accent Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-platinum-blue/10 via-transparent to-electric-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Professional Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[length:40px_40px] bg-[image:linear-gradient(var(--chrome-cyan)_1px,transparent_1px),linear-gradient(90deg,var(--chrome-cyan)_1px,transparent_1px)]" />

          {/* Executive Play Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 w-12 h-12 bg-gradient-platinum backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-accent"
          >
            <Play className="w-5 h-5 text-white ml-0.5" />
          </motion.div>

          {/* Professional Genre Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-surface/80 backdrop-blur-sm text-accent-primary text-xs font-semibold rounded-full border border-accent-primary/30 shadow-executive">
              {profile.genre}
            </span>
          </div>

          {/* Enhanced Featured Badge */}
          {featured && (
            <div className="absolute bottom-4 left-4">
              <motion.span 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-4 py-2 bg-gradient-primary text-white text-sm font-bold rounded-full shadow-glow border border-chrome-cyan/50"
              >
                ✦ FEATURED ✦
              </motion.span>
            </div>
          )}

          {/* Professional Hover Info Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className="glass-effect rounded-lg p-3">
              <h4 className="text-white font-semibold text-sm mb-1">{profile.name}</h4>
              <p className="text-silver text-xs line-clamp-2">{profile.subtitle}</p>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'space-y-6' : 'space-y-4'} bg-gradient-to-b from-bg-steel to-bg-carbon`}>
          {/* Header */}
          <div className="space-y-3">
            <h3 className={`font-space-grotesk font-bold text-primary group-hover:text-accent-primary transition-colors ${
              featured ? 'text-3xl' : 'text-xl'
            }`}>
              {profile.name}
            </h3>
            <p className={`text-accent-primary font-medium ${
              featured ? 'text-lg' : 'text-sm'
            }`}>
              {profile.subtitle}
            </p>
            <p className={`text-secondary leading-relaxed ${
              featured ? 'text-lg' : 'text-sm'
            } line-clamp-3`}>
              {profile.description}
            </p>
          </div>

          {/* Enhanced Stats */}
          <div className="flex items-center justify-between pt-3 text-muted text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Music className="w-4 h-4 text-accent-primary" />
                <span>100+ Events</span>
              </div>
              <div className="flex items-center space-x-1">
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-accent-primary rounded-full shadow-accent"
                />
                <span>Available</span>
              </div>
            </div>
            {featured && (
              <div className="text-xs text-accent-primary">
                ⭐ Premium Artist
              </div>
            )}
          </div>

          {/* Professional Call to Action */}
          <div className="pt-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`btn-executive w-full justify-center ${
                featured ? 'py-4 text-lg' : 'py-3'
              } relative overflow-hidden`}
            >
              <span className="relative z-10">Discover Project</span>
              <ExternalLink className="w-4 h-4 relative z-10" />
              
              {/* Button shine effect */}
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DJCard;
