'use client';

import { motion } from 'framer-motion';
import { Play, Music, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { DJProfile } from '@/data/djProfiles';

interface DJCardProps {
  profile: DJProfile;
  featured?: boolean;
}

const DJCard: React.FC<DJCardProps> = ({ profile, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`card-elite group cursor-pointer ${featured ? 'min-h-[500px]' : 'min-h-[400px]'}`}
    >
      <Link href={profile.route}>
        {/* Image Container */}
        <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'} rounded-t-[20px]`}>
          {profile.image && (
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-60" />

          {/* Play Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Play size={20} className="text-white ml-1" />
          </motion.div>

          {/* Genre Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-secondary-bg/80 backdrop-blur-sm text-electric-cyan text-xs font-semibold rounded-full border border-electric-cyan/30">
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
        <div className={`p-6 ${featured ? 'space-y-4' : 'space-y-3'}`}>
          {/* Header */}
          <div className="space-y-2">
            <h3 className={`font-space-grotesk font-bold text-white group-hover:text-electric-cyan transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
              {profile.name}
            </h3>
            <p className={`text-text-muted ${featured ? 'text-base' : 'text-sm'}`}>
              {profile.description}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-text-muted">
                <Music size={14} />
                <span className="text-xs">
                  {profile.gigs?.length || 5}+ Gigs
                </span>
              </div>

              <div className="flex items-center space-x-1 text-text-muted">
                <Users size={14} />
                <span className="text-xs">
                  {Object.keys(profile.social).length}+ Platforms
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-1 text-electric-cyan">
              <Calendar size={14} />
              <span className="text-xs font-medium">
                Available
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full btn-secondary ${featured ? 'py-3' : 'py-2'} text-sm`}
            >
              Explore {profile.name}
            </motion.button>
          </div>

          {/* Professional accent line */}
          <div className="w-full h-px bg-gradient-primary opacity-30" />
        </div>
      </Link>
    </motion.div>
  );
};

export default DJCard;
