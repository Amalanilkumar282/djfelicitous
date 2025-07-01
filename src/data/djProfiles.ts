export interface DJProfile {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  genre: string;
  image: string;
  color: string;
  route: string;
  featured?: boolean;
  bio: string;
  gigs: string[];
  gallery: string[];
  playlists?: {
    name: string;
    url: string;
    platform: string;
  }[];
  testimonials?: {
    name: string;
    text: string;
    venue: string;
  }[];
  social: {
    instagram?: string;
    soundcloud?: string;
    spotify?: string;
    youtube?: string;
  };
}

export const djProfiles: DJProfile[] = [
  {
    id: 'couple-duo',
    name: 'DJ Felicitous & DJ Geetz',
    subtitle: 'The Dynamic Duo',
    description: 'Two hearts, one beat. Experience the perfect harmony of love and music.',
    genre: 'Multi-Genre Duo',
    image: '/images/couple-duo.jpg',
    color: 'neon-pink',
    route: '/couple-duo',
    featured: true,
    bio: 'DJ Felicitous and DJ Geetz are not just partners in love, but also in music. Their unique chemistry creates an unparalleled energy on the dance floor, seamlessly blending genres and reading crowds like no other duo. With years of experience both individually and together, they bring a special magic to every event.',
    gigs: [
      'Tomorrowland Belgium 2023',
      'Ultra Music Festival Miami',
      'Electric Daisy Carnival Las Vegas',
      'Coachella Valley Music Festival',
      'Burning Man 2023',
      'Amnesia Ibiza',
      'Fabric London',
      'Berghain Berlin'
    ],
    gallery: [
      '/images/couple-1.jpg',
      '/images/couple-2.jpg',
      '/images/couple-3.jpg',
      '/images/couple-4.jpg',
      '/images/couple-5.jpg',
      '/images/couple-6.jpg'
    ],
    testimonials: [
      {
        name: 'Sarah & Mike',
        text: 'They made our wedding absolutely magical! The energy they brought was incredible.',
        venue: 'Private Wedding'
      },
      {
        name: 'Club Manager',
        text: 'Best duo act we\'ve ever booked. They know how to work a crowd!',
        venue: 'Ministry of Sound'
      }
    ],
    social: {
      instagram: '@djfelicitousgeetz',
      soundcloud: 'djfelicitousgeetz',
      spotify: 'DJ Felicitous & DJ Geetz'
    }
  },
  {
    id: 'bollywood',
    name: 'DJ Felicitous',
    subtitle: 'Bollywood & Commercial Specialist',
    description: 'Bringing the vibrant colors and infectious rhythms of Bollywood to the world.',
    genre: 'Bollywood / Commercial',
    image: '/images/bollywood.jpg',
    color: 'neon-amber',
    route: '/bollywood',
    bio: 'Specializing in Bollywood and commercial hits, DJ Felicitous brings the celebration of Indian culture to dance floors worldwide. With an extensive collection of the latest Bollywood bangers and classic hits, every set is a colorful journey through the best of Indian cinema music.',
    gigs: [
      'Bollywood Music Awards After Party',
      'Diwali Festival London',
      'Mumbai Underground',
      'Bhangra Nights NYC',
      'India Day Parade Official DJ',
      'Wedding Season Tours 2023',
      'Holi Festival Main Stage',
      'Zee Cine Awards After Party'
    ],
    gallery: [
      '/images/bollywood-1.jpg',
      '/images/bollywood-2.jpg',
      '/images/bollywood-3.jpg',
      '/images/bollywood-4.jpg'
    ],
    playlists: [
      {
        name: 'Bollywood Bangers 2024',
        url: 'https://spotify.com/playlist/bollywood-bangers',
        platform: 'Spotify'
      },
      {
        name: 'Classic Bollywood Hits',
        url: 'https://soundcloud.com/djfelicitous/bollywood-classics',
        platform: 'SoundCloud'
      }
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        text: 'Finally, a DJ who understands Bollywood music! Perfect for our sangeet.',
        venue: 'Private Event'
      }
    ],
    social: {
      instagram: '@djfelicitous_bollywood',
      soundcloud: 'djfelicitous',
      spotify: 'DJ Felicitous'
    }
  },
  {
    id: 'psytrance',
    name: 'Tinitro Cosmic',
    subtitle: 'Psychedelic Journey Guide',
    description: 'Transcend reality through hypnotic beats and otherworldly soundscapes.',
    genre: 'Psy Trance / Progressive',
    image: '/images/psytrance.jpg',
    color: 'neon-purple',
    route: '/psytrance',
    bio: 'As Tinitro Cosmic, the journey into the depths of consciousness begins. Specializing in psychedelic trance and progressive beats, every set is designed to take listeners on a transformative journey through space and time. The cosmic soundscapes and hypnotic rhythms create an otherworldly experience.',
    gigs: [
      'Boom Festival Portugal',
      'Ozora Festival Hungary',
      'Psy-Fi Festival Netherlands',
      'Rainbow Serpent Australia',
      'Universo Paralello Brazil',
      'Antaris Project Germany',
      'Hadra Trance Festival France',
      'Cosmic Convergence Guatemala'
    ],
    gallery: [
      '/images/psy-1.jpg',
      '/images/psy-2.jpg',
      '/images/psy-3.jpg',
      '/images/psy-4.jpg'
    ],
    playlists: [
      {
        name: 'Cosmic Voyager',
        url: 'https://soundcloud.com/tinitrocosmic/cosmic-voyager',
        platform: 'SoundCloud'
      },
      {
        name: 'Psychedelic Sunrise',
        url: 'https://spotify.com/playlist/psychedelic-sunrise',
        platform: 'Spotify'
      }
    ],
    social: {
      instagram: '@tinitrocosmic',
      soundcloud: 'tinitrocosmic',
      spotify: 'Tinitro Cosmic'
    }
  },
  {
    id: 'techno',
    name: 'TNT',
    subtitle: 'Underground Techno Architect',
    description: 'Raw, unfiltered techno that ignites the underground scene.',
    genre: 'Techno / Industrial',
    image: '/images/techno.jpg',
    color: 'neon-cyan',
    route: '/techno',
    bio: 'TNT represents the raw, uncompromising sound of underground techno. With a focus on industrial beats, driving basslines, and hypnotic rhythms, every set is an intense journey through the darker corners of electronic music. The sound is designed to shake foundations and move souls.',
    gigs: [
      'Berghain Berlin',
      'Awakenings Festival',
      'Time Warp Mannheim',
      'Dekmantel Festival',
      'Movement Detroit',
      'Sonar Barcelona',
      'Fabric London Room 1',
      'Tresor Berlin'
    ],
    gallery: [
      '/images/techno-1.jpg',
      '/images/techno-2.jpg',
      '/images/techno-3.jpg',
      '/images/techno-4.jpg'
    ],
    playlists: [
      {
        name: 'Underground Frequencies',
        url: 'https://soundcloud.com/tnt-techno/underground-frequencies',
        platform: 'SoundCloud'
      },
      {
        name: 'Industrial Mayhem',
        url: 'https://spotify.com/playlist/industrial-mayhem',
        platform: 'Spotify'
      }
    ],
    social: {
      instagram: '@tnt_techno',
      soundcloud: 'tnt-techno',
      spotify: 'TNT'
    }
  },
  {
    id: 'old-geeks',
    name: 'Old Geeks',
    subtitle: 'Classic Electronic & Curated Gems',
    description: 'A nostalgic journey through the golden age of electronic music.',
    genre: 'Classic Electronic / Curated',
    image: '/images/old-geeks.jpg',
    color: 'neon-lime',
    route: '/old-geeks',
    bio: 'Old Geeks is a tribute to the pioneers of electronic music. Featuring carefully curated selections of classic house, early techno, ambient, and experimental electronic music from the 80s, 90s, and early 2000s. This project celebrates the artists and tracks that laid the foundation for modern electronic music.',
    gigs: [
      'Vintage Electronic Nights',
      'Retro Future Festival',
      'Classic House Revival',
      'Electronic Music Museum',
      'Nostalgia Festival',
      'Acid House Reunion',
      'Early Rave Tribute',
      'Electronic Pioneers Showcase'
    ],
    gallery: [
      '/images/oldgeeks-1.jpg',
      '/images/oldgeeks-2.jpg',
      '/images/oldgeeks-3.jpg',
      '/images/oldgeeks-4.jpg'
    ],
    playlists: [
      {
        name: 'Golden Age of Electronic',
        url: 'https://spotify.com/playlist/golden-age-electronic',
        platform: 'Spotify'
      },
      {
        name: 'Acid House Classics',
        url: 'https://soundcloud.com/oldgeeks/acid-house-classics',
        platform: 'SoundCloud'
      },
      {
        name: 'Early Techno Pioneers',
        url: 'https://spotify.com/playlist/early-techno-pioneers',
        platform: 'Spotify'
      },
      {
        name: 'Ambient Journeys',
        url: 'https://soundcloud.com/oldgeeks/ambient-journeys',
        platform: 'SoundCloud'
      }
    ],
    social: {
      instagram: '@oldgeeks_music',
      soundcloud: 'oldgeeks',
      spotify: 'Old Geeks'
    }
  }
];

export const getFeaturedProfile = () => djProfiles.find(profile => profile.featured);
export const getProfileByRoute = (route: string) => djProfiles.find(profile => profile.route === route);
export const getProfileById = (id: string) => djProfiles.find(profile => profile.id === id);
