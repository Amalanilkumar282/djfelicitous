'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink, Play, Headphones, Clock, Music, Users, Award, Calendar } from 'lucide-react';
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      },
    },
  };

  const mockPlaylists = [
    {
      name: "Golden Era Classics",
      description: "Timeless tracks that defined generations",
      trackCount: 42,
      duration: "3h 15m",
      platform: "Spotify",
      url: "#",
      plays: "2.5M"
    },
    {
      name: "Electronic Evolution",
      description: "The journey from analog to digital",
      trackCount: 38,
      duration: "2h 47m",
      platform: "SoundCloud",
      url: "#",
      plays: "1.8M"
    },
    {
      name: "Rare Gems Collection",
      description: "Hidden treasures from music history",
      trackCount: 29,
      duration: "2h 12m",
      platform: "Spotify",
      url: "#",
      plays: "950K"
    },
    {
      name: "Vinyl Restoration Project",
      description: "Digitally remastered vintage recordings",
      trackCount: 55,
      duration: "4h 28m",
      platform: "YouTube",
      url: "#",
      plays: "3.2M"
    }
  ];

  const stats = [
    { label: "Curated Tracks", value: "5,000+", icon: Music },
    { label: "Years Experience", value: "25+", icon: Award },
    { label: "Monthly Listeners", value: "120K", icon: Users },
    { label: "Playlists Created", value: "180+", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-executive-platinum">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-executive-teal/5 via-executive-chrome/5 to-executive-accent/5" />
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.div className="mb-6">
                <span className="px-4 py-2 bg-executive-teal/10 border border-executive-teal/30 rounded-full text-executive-teal text-sm font-medium tracking-wider uppercase shadow-executive-subtle">
                  {profile.genre}
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-6xl lg:text-7xl font-bold mb-6 text-executive-charcoal"
                variants={itemVariants}
              >
                OLD GEEKS
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl mb-8 text-secondary font-light"
                variants={itemVariants}
              >
                {profile.subtitle}
              </motion.p>
              
              <motion.p 
                className="text-lg mb-12 text-muted max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Preserving musical heritage through carefully curated collections spanning decades of sonic evolution.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <button className="btn-primary">
                  <Play className="w-5 h-5" />
                  Explore Collection
                </button>
                <button className="btn-secondary">
                  <Music className="w-5 h-5" />
                  View Playlists
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-3xl transform rotate-3" />
                <div className="card-elevated relative z-10 overflow-hidden">
                  <Image
                    src={placeholderImages['old-geeks']}
                    alt="Old Geeks Collection"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white font-semibold text-lg">Classic Collection</div>
                    <div className="text-white/80 text-sm">Premium Curation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section bg-secondary">
        <div className="section-container">
          <motion.div 
            className="grid-responsive grid-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card-professional text-center p-8"
                variants={itemVariants}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-subtle rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-accent-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Curating Musical History
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              {profile.bio}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Playlists Section */}
      <section className="section bg-secondary">
        <div className="section-container">
          <motion.div 
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Featured Playlists
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Discover carefully crafted collections that tell the story of music
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid-responsive grid-2 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mockPlaylists.map((playlist, index) => (
              <motion.div
                key={index}
                className="card-elevated p-8 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Music className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent-primary transition-colors">
                      {playlist.name}
                    </h3>
                    <p className="text-muted mb-4 line-clamp-2">
                      {playlist.description}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted mb-6">
                      <div className="flex items-center gap-2">
                        <Music className="w-4 h-4" />
                        <span>{playlist.trackCount} tracks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{playlist.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Headphones className="w-4 h-4" />
                        <span>{playlist.plays}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="btn-primary">
                        <Play className="w-4 h-4" />
                        Listen
                      </button>
                      <button className="btn-ghost">
                        <ExternalLink className="w-4 h-4" />
                        {playlist.platform}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Collection Gallery
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              A visual journey through decades of musical heritage
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid-responsive grid-4 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {profile.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="card-professional aspect-square overflow-hidden group cursor-pointer relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={placeholderImages['old-geeks']}
                  alt={`Collection ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-accent-primary/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-accent-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-secondary">
        <div className="section-container">
          <motion.div 
            className="section-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              What People Say
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Testimonials from music lovers and industry professionals
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid-responsive grid-3 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {profile.testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card-elevated p-8"
                variants={itemVariants}
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-primary fill-current" />
                  ))}
                </div>
                <p className="text-secondary mb-6 italic text-lg leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="pt-4 border-t border-border-primary">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-muted text-sm">{testimonial.venue}</div>
                </div>
              </motion.div>
            )) || (
              <>
                <motion.div className="card-elevated p-8" variants={itemVariants}>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-secondary mb-6 italic text-lg leading-relaxed">
                    &quot;The perfect blend of nostalgia and musical expertise. These collections are pure gold for any music lover.&quot;
                  </p>
                  <div className="pt-4 border-t border-border-primary">
                    <div className="font-semibold text-primary">Sarah Johnson</div>
                    <div className="text-muted text-sm">Music Enthusiast</div>
                  </div>
                </motion.div>
                
                <motion.div className="card-elevated p-8" variants={itemVariants}>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-secondary mb-6 italic text-lg leading-relaxed">
                    &quot;Finally, someone who understands the art of curation. Every playlist tells a compelling story.&quot;
                  </p>
                  <div className="pt-4 border-t border-border-primary">
                    <div className="font-semibold text-primary">Mike Chen</div>
                    <div className="text-muted text-sm">Radio Host</div>
                  </div>
                </motion.div>
                
                <motion.div className="card-elevated p-8" variants={itemVariants}>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-secondary mb-6 italic text-lg leading-relaxed">
                    &quot;Old Geeks brings back the soul of music. Quality over quantity, always delivering excellence.&quot;
                  </p>
                  <div className="pt-4 border-t border-border-primary">
                    <div className="font-semibold text-primary">Emma Thompson</div>
                    <div className="text-muted text-sm">Record Collector</div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="section-container">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-5xl font-bold mb-6 text-primary" variants={itemVariants}>
              Start Your Journey
            </motion.h2>
            <motion.p className="text-xl text-muted mb-12 max-w-2xl mx-auto" variants={itemVariants}>
              Discover decades of musical excellence through our carefully curated collections. 
              From classic rock to electronic evolution, every track has been chosen for its impact and artistry.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <button className="btn-primary text-lg px-8 py-4">
                <Play className="w-5 h-5" />
                Explore Collection
              </button>
              <Link href="/" className="btn-secondary text-lg px-8 py-4">
                <ExternalLink className="w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OldGeeksPage;
