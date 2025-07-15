'use client';

import { motion } from 'framer-motion';
import DJCard from './DJCard';
import { DJProfile } from '@/data/djProfiles';

interface DJCardGridProps {
  profiles: DJProfile[];
}

const DJCardGrid: React.FC<DJCardGridProps> = ({ profiles }) => {
  // Separate featured and regular profiles
  const featuredProfile = profiles.find(profile => profile.featured);
  const regularProfiles = profiles.filter(profile => !profile.featured);

  return (
    <div className="space-y-12">
      {/* Featured Card Row - Full width */}
      {featuredProfile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <DJCard profile={featuredProfile} featured />
        </motion.div>
      )}

      {/* Regular Cards Grid - Optimized for 3 cards */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {regularProfiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + (index * 0.15),
              }}
              className="w-full flex justify-center"
            >
              <div className="w-full max-w-sm">
                <DJCard profile={profile} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DJCardGrid;
