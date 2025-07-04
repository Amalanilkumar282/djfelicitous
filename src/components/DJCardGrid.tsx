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
    <div className="space-y-8">
      {/* Featured Card Row - Full width */}
      {featuredProfile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <DJCard profile={featuredProfile} featured />
        </motion.div>
      )}

      {/* Regular Cards Grid - 2 rows of 2 cards each on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {regularProfiles.map((profile, index) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + (index * 0.1),
            }}
            className="w-full"
          >
            <DJCard profile={profile} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DJCardGrid;
