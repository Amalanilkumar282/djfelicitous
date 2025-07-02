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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Featured Card - Takes full width on mobile, 2/3 on desktop */}
      {featuredProfile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-8"
        >
          <DJCard profile={featuredProfile} featured />
        </motion.div>
      )}

      {/* Regular Cards Grid */}
      <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {regularProfiles.map((profile, index) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + (index * 0.1),
            }}
          >
            <DJCard profile={profile} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DJCardGrid;
