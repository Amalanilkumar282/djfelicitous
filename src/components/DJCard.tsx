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
          />

          {/* Professional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-executive/90 via-transparent to-transparent opacity-60" />

          {/* Executive Play Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 w-12 h-12 bg-gradient-platinum backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Play className="w-5 h-5 text-white ml-0.5" />
          </motion.div>

          {/* Professional Genre Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-surface/80 backdrop-blur-sm text-accent-primary text-xs font-semibold rounded-full border border-accent-primary/30">
              {profile.genre}
            </span>
          </div>

          {featured && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-2 bg-gradient-primary text-white text-sm font-bold rounded-full">
                FEATURED
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'space-y-6' : 'space-y-4'}`}>
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

          {/* Stats */}
          <div className="flex items-center justify-between pt-3 text-muted text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Music className="w-4 h-4" />
                <span>{profile.gigs?.length || 5}+ Events</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span>Available</span>
              </div>
            </div>
          </div>

          {/* Professional Call to Action */}
          <div className="pt-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`btn-executive w-full justify-center ${
                featured ? 'py-4 text-lg' : 'py-3'
              }`}
            >
              <span>Discover Project</span>
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DJCard;
