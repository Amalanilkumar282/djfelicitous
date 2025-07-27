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
    bio: 'United by rhythm and passion, DJ Felicitous and DJ Geetz form a powerful couple duo that blends love and music into one unforgettable experience. From high-energy Bollywood bangers to South Indian chart-toppers, and late-night journeys into underground Techno, this dynamic pair brings versatility, chemistry, and crowd-moving magic to every set. With years of individual experience and a shared musical vision, their performances are more than just DJ sets-they\'re a celebration of connection, culture, and groove. Whether it\'s a big fat Indian wedding, a club night, or a private party, DJ Felicitous & DJ Geetz know how to read the crowd and deliver music that moves hearts and feet alike.',
    gigs: [
      'Big Pitcher Bangalore', 
      'Pebbles Bangalore', 
      'Ashva Bangalore', 
      'XU Fashion Bar Kitchen Bangalore', 
      'BLR Brew Bangalore', 
      'Up and Peace Himachal Pradesh', 
      'Pyramid Elante Chandigarh'
    ],
    gallery: [
      '/images/couple-1.JPG',
      '/images/couple-2.jpg',
      '/images/couple-3.jpg',
      '/images/couple-4.jpg',
      '/images/couple-duo.jpg',
      '/images/couple-duo-hero.jpg'
    ],
    testimonials: [
      {
        name: 'Rajesh Kumar',
        text: 'They made our anniversary party absolutely unforgettable! Everyone was dancing till 3 AM.',
        venue: 'Private Anniversary Celebration'
      },
      {
        name: 'Priya Menon',
        text: 'Best DJ duo we\'ve ever hired! They perfectly balanced our multicultural guest list with amazing music selection.',
        venue: 'Private Birthday Party'
      }
    ],
    social: {
      instagram: 'djfelicitous',
      soundcloud: 'https://on.soundcloud.com/QRZFMrkVEkwIJtFKGt',
      spotify: 'DJ Felicitous & DJ Geetz',
      youtube: 'https://youtube.com/@djfelicitous?si=NEjupxgPH7IZo0lD'
    }
  },
  {
    id: 'bollywood',
    name: 'DJ Felicitous',
    subtitle: 'Bollywood & Commercial Specialist',
    description: 'Bringing the vibrant colors and infectious rhythms of Bollywood to the world.',
    genre: 'Bollywood / Commercial',
    image: '/images/felicitous.jpg',
    color: 'neon-amber',
    route: '/bollywood',
    bio: 'DJ Felicitous is a genre-fluid powerhouse who refuses to be boxed in. With an ear for global rhythms and a heart rooted in desi beats, Felicitous seamlessly blends Bollywood, South Indian hits, Techno, Commercial, and House into a high-energy sonic journey that keeps dancefloors buzzing. Whether it\'s a packed club, a destination wedding, or a private celebration, DJ Felicitous brings unmatched versatility, crowd-reading skills, and a deep connection to the vibe of every event. Each set is a dynamic story -crafted live, beat by beat, across genres and cultures.',
    gigs: [
      'Bolly-Tech - Ashva Resto Hangouts',
      'Sonic Saturday - Ashva Resto Hangouts',
      'Housefull Sunday - BigPitcher Sarjapur',
      'Big Bollywood Night - BigPitcher Sarjapur',
      'Wonder Woman - Big Pitcher Sarjapur',
      'Clubbers Friday - BigPitcher Sarjapur'
    ],
    gallery: [
      '/images/bollywood1.jpg',
      '/images/bollywood2.jpg',
      '/images/bollywood3.jpg',
      '/images/bollywood4.jpg',
      '/images/bollywood5.jpg',
      '/images/bollywood6.jpg'
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
        name: 'Ankit Sharma',
        text: 'DJ Felicitous made our family function absolutely spectacular! Perfect mix of Bollywood classics and modern hits.',
        venue: 'Private Housewarming Party'
      },
      {
        name: 'Sneha Reddy',
        text: 'Incredible energy and music selection! Our guests are still talking about how amazing the party was.',
        venue: 'Private Engagement Celebration'
      }
    ],
    social: {
      instagram: 'djfelicitous',
      soundcloud: 'https://on.soundcloud.com/QRZFMrkVEkwIJtFKGt',
      spotify: 'DJ Felicitous',
      youtube: 'https://youtube.com/@djfelicitous?si=NEjupxgPH7IZo0lD'
    }
  },
  {
    id: 'psytrance',
    name: 'TinitroCosmic',
    subtitle: 'Psychedelic Journey Guide',
    description: 'Transcend reality through hypnotic beats and otherworldly soundscapes.',
    genre: 'Psy Trance / Progressive',
    image: '/images/psytrance.jpg',
    color: 'neon-purple',
    route: '/psytrance',
    bio: 'Trinitrocosmic is an immersive psytrance experience-born from chaos, crafted for consciousness expansion. Rooted in deep frequencies and mind-bending textures, this project takes listeners on a journey through the full spectrum of Psytrance sub-genres, from hypnotic Progressive to the shadowy realms of Dark Psy, Forest, frenetic Hi-Tech, and the raw power of Psycore. Each set is a ritual-designed to break boundaries, bend time, and ignite primal energy on the dancefloor. Whether under the stars or deep in a soundproof bunker, Trinitrocosmic delivers a psychedelic odyssey that fuses ancient mysticism with futuristic sound design.',
    gigs: [
      'XU Fashion Bar Kitchen',
      'Pebbles Bangalore', 
      'Up and Peace Himachal Pradesh', 
      'BLR Brew Bangalore'
    ],
    gallery: [
      '/images/psy1.jpg',
      '/images/psy2.jpg',
      '/images/psy3.jpg',
      '/images/psy4.jpg',
      '/images/psy5.JPG',
      '/images/psy6.jpg'
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
    testimonials: [
      {
        name: 'Rahul Agarwal',
        text: 'TinitroCosmic took us on an incredible psychedelic journey! Perfect for our meditation retreat after-party.',
        venue: 'Private Retreat Celebration'
      },
      {
        name: 'Ishita Joshi',
        text: 'Mind-blowing experience! The cosmic vibes were exactly what we needed for our spiritual gathering.',
        venue: 'Private Spiritual Event'
      }
    ],
    social: {
      instagram: 'djfelicitous',
      soundcloud: 'https://on.soundcloud.com/QRZFMrkVEkwIJtFKGt',
      spotify: 'Tinitro Cosmic',
      youtube: 'https://youtube.com/@djfelicitous?si=NEjupxgPH7IZo0lD'
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
    bio: 'TNT is a cutting-edge techno project ignited by emotion and precision. With a core focus on Melodic Techno, TNT crafts immersive journeys through pulsating basslines, hypnotic melodies, and evolving soundscapes that resonate deep within. Exploring the full spectrum of Techno sub-genres from Peak-Time energy to Deep, Minimal, and Industrial textures-TNT\'s sets are designed to elevate dancefloors and captivate minds. It\'s not just music; it\'s a sonic narrative that connects body, soul, and space.',
    gigs: [
      'Pebbles, Bangalore',
      'XU Fashion Bar Kitchen, Leela Palace Bangalore'
    ],
    gallery: [
      '/images/techno1.jpg',
      '/images/techno2.jpg',
      '/images/techno3.jpg',
      '/images/techno4.jpg',
      '/images/techno5.jpg',
      '/images/techno6.jpg'
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
    testimonials: [
      {
        name: 'Karan Bansal',
        text: 'TNT brought raw underground energy to our corporate after-party! The techno beats had everyone moving.',
        venue: 'Private Corporate Event'
      },
      {
        name: 'Riya Iyer',
        text: 'Absolutely incredible! The industrial techno vibe was perfect for our late-night private celebration.',
        venue: 'Private House Party'
      }
    ],
    social: {
      instagram: 'djfelicitous',
      soundcloud: 'https://on.soundcloud.com/QRZFMrkVEkwIJtFKGt',
      spotify: 'TNT',
      youtube: 'https://youtube.com/@djfelicitous?si=NEjupxgPH7IZo0lD'
    }
  }
];

export const getFeaturedProfile = () => djProfiles.find(profile => profile.featured);
export const getProfileByRoute = (route: string) => djProfiles.find(profile => profile.route === route);
export const getProfileById = (id: string) => djProfiles.find(profile => profile.id === id);
