'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink, Play, Headphones, Clock, Heart, Music } from 'lucide-react';
import { djProfiles } from '@/data/djProfiles';
import { placeholderImages } from '@/utils/placeholders';
import Link from 'next/link';
import Image from 'next/image';

const OldGeeksPage = () => {
  const profile = djProfiles.find(dj => dj.id === 'old-geeks')!;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const retroVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { 
      opacity: 1, 
      rotateY: 0,
      transition: { 
        duration: 1,
        type: "spring" as const,
        stiffness: 100
      }
    },
    glow: {
      textShadow: [
        "0 0 10px rgba(0,255,0,0.5)",
        "0 0 20px rgba(0,255,0,0.8)",
        "0 0 30px rgba(0,255,0,1)",
        "0 0 20px rgba(0,255,0,0.8)",
        "0 0 10px rgba(0,255,0,0.5)",
      ],
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  // Mock playlists data
  const mockPlaylists = [
    {
      name: "Classic Rock Essentials",
      description: "The greatest rock anthems from the golden era",
      trackCount: 45,
      duration: "3h 25m",
      platform: "Spotify",
      url: "#"
    },
    {
      name: "80s New Wave Hits",
      description: "Synthesizers, drum machines, and unforgettable melodies",
      trackCount: 38,
      duration: "2h 47m",
      platform: "SoundCloud",
      url: "#"
    },
    {
      name: "Retro Dance Floor",
      description: "Disco, funk, and early electronic dance music",
      trackCount: 52,
      duration: "4h 12m",
      platform: "Spotify",
      url: "#"
    },
    {
      name: "Progressive Rock Journey",
      description: "Epic compositions and musical storytelling",
      trackCount: 28,
      duration: "3h 58m",
      platform: "YouTube",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20" />
        
        {/* Retro grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,0,0.3)_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,0,0.3)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        
        {/* Scanlines effect */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(0,255,0,0.03)_50%)] bg-[size:100%_4px]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating vinyl records */}
        <motion.div
          className="absolute top-1/4 left-10 w-16 h-16 bg-green-400/20 rounded-full"
          animate={{
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="absolute inset-2 bg-black rounded-full" />
          <div className="absolute inset-6 bg-green-400/30 rounded-full" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-20 w-12 h-12 bg-green-300/20 rounded-full"
          animate={{
            rotate: -360,
            y: [0, 25, 0],
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="absolute inset-1 bg-black rounded-full" />
          <div className="absolute inset-4 bg-green-300/30 rounded-full" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.h1
              className="text-6xl lg:text-8xl font-bold mb-6 text-green-400"
              variants={retroVariants}
              animate="glow"
              style={{ fontFamily: 'monospace' }}
            >
              OLD GEEKS
            </motion.h1>
            <motion.p
              className="text-2xl lg:text-3xl mb-6 text-green-300 font-light"
              variants={itemVariants}
            >
              {profile.subtitle}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded text-green-300 font-medium backdrop-blur-sm font-mono">
                {profile.genre}
              </span>
            </motion.div>
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded neon-glow hover:scale-105 transition-transform duration-300 flex items-center gap-2 font-mono">
                <Play className="w-5 h-5" />
                PLAY CLASSICS
              </button>
              <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-bold rounded hover:bg-green-400/10 transition-colors duration-300 font-mono">
                VIEW PLAYLISTS
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-3xl opacity-30" />
              
              {/* Retro TV frame */}
              <div className="absolute inset-0 border-8 border-green-400/50 rounded-lg z-10" />
              <div className="absolute inset-2 border-4 border-green-400/30 rounded-lg z-10" />
              
              {/* Screen effect */}
              <div className="absolute inset-4 bg-green-400/5 rounded z-10" />
              
              <Image
                src={placeholderImages['old-geeks']}
                alt="Old Geeks"
                fill
                className="rounded-lg border-4 border-green-400/50 object-cover relative z-20 filter sepia contrast-125"
              />
              
              {/* Vintage overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-green-900/30 rounded-lg z-30" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-8 text-green-400 font-mono"
            variants={itemVariants}
          >
            CURATED COLLECTIONS
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-8 font-mono"
            variants={itemVariants}
          >
            {profile.bio}
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            <div className="text-center border-2 border-green-400/30 p-6 bg-black/50 rounded">
              <div className="text-3xl font-bold text-green-400 mb-2 font-mono">1000+</div>
              <div className="text-gray-400 font-mono">VINYL RECORDS</div>
            </div>
            <div className="text-center border-2 border-green-400/30 p-6 bg-black/50 rounded">
              <div className="text-3xl font-bold text-green-400 mb-2 font-mono">50+</div>
              <div className="text-gray-400 font-mono">CURATED PLAYLISTS</div>
            </div>
            <div className="text-center border-2 border-green-400/30 p-6 bg-black/50 rounded">
              <div className="text-3xl font-bold text-green-400 mb-2 font-mono">40</div>
              <div className="text-gray-400 font-mono">YEARS OF MUSIC</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Playlists Section */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-green-400 font-mono"
            variants={itemVariants}
          >
            FEATURED PLAYLISTS
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {mockPlaylists.map((playlist, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border-2 border-green-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-green-400/60 hover:bg-green-400/5 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Music className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-300 mb-2 font-mono group-hover:text-green-200 transition-colors">
                      {playlist.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 font-mono">
                      {playlist.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-mono mb-4">
                      <div className="flex items-center gap-1">
                        <Music className="w-3 h-3" />
                        <span>{playlist.trackCount} tracks</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{playlist.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Headphones className="w-3 h-3" />
                        <span>{playlist.platform}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-green-500 text-black font-bold text-sm rounded hover:bg-green-400 transition-colors font-mono flex items-center gap-2">
                        <Play className="w-3 h-3" />
                        PLAY
                      </button>
                      <button className="px-4 py-2 border border-green-400 text-green-400 font-bold text-sm rounded hover:bg-green-400/10 transition-colors font-mono flex items-center gap-2">
                        <Heart className="w-3 h-3" />
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-green-400 font-mono"
            variants={itemVariants}
          >
            VINTAGE COLLECTION
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {profile.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden group cursor-pointer border-2 border-green-400/20 rounded hover:border-green-400/60 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={placeholderImages['old-geeks']}
                  alt={`Vintage collection ${index + 1}`}
                  fill
                  className="object-cover sepia contrast-125 group-hover:sepia-0 group-hover:contrast-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-8 h-8 text-green-400" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-12 text-center text-green-400 font-mono"
            variants={itemVariants}
          >
            WHAT MUSIC LOVERS SAY
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {profile.testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border-2 border-green-400/30 rounded-lg p-6 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic font-mono">&quot;{testimonial.text}&quot;</p>
                <div className="text-green-300 font-semibold font-mono">- {testimonial.name}</div>
                <div className="text-gray-400 text-sm font-mono">{testimonial.venue}</div>
              </motion.div>
            )) || (
              // Fallback testimonials
              <>
                <motion.div
                  className="bg-black/50 border-2 border-green-400/30 rounded-lg p-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic font-mono">&quot;The perfect blend of nostalgia and musical expertise. These playlists are pure gold!&quot;</p>
                  <div className="text-green-300 font-semibold font-mono">- MUSIC ENTHUSIAST</div>
                  <div className="text-gray-400 text-sm font-mono">VINTAGE VINYL STORE</div>
                </motion.div>
                <motion.div
                  className="bg-black/50 border-2 border-green-400/30 rounded-lg p-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic font-mono">&quot;Finally, someone who understands the art of curation. Every playlist tells a story.&quot;</p>
                  <div className="text-green-300 font-semibold font-mono">- RADIO DJ</div>
                  <div className="text-gray-400 text-sm font-mono">CLASSIC ROCK STATION</div>
                </motion.div>
                <motion.div
                  className="bg-black/50 border-2 border-green-400/30 rounded-lg p-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic font-mono">&quot;Old Geeks brings back the soul of music. Quality over quantity, always.&quot;</p>
                  <div className="text-green-300 font-semibold font-mono">- MUSIC COLLECTOR</div>
                  <div className="text-gray-400 text-sm font-mono">RECORD CONVENTION</div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative z-10 py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6 text-green-400 font-mono"
            variants={itemVariants}
          >
            JOIN THE COLLECTION
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 font-mono"
            variants={itemVariants}
          >
            Discover carefully curated playlists spanning decades of musical excellence. From classic rock to new wave, every track has a story.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold font-mono rounded neon-glow hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              EXPLORE PLAYLISTS
            </button>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-green-400 text-green-400 font-bold font-mono rounded hover:bg-green-400/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
            >
              <span>BACK TO MAIN</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default OldGeeksPage;
