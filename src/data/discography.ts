export interface Track {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  releaseDate: string;
  albumArt: string;
  audioUrl?: string;
  streamingLinks: {
    spotify?: string;
    soundcloud?: string;
    youtube?: string;
    appleMusic?: string;
  };
  description: string;
  featured?: boolean;
  type: 'original' | 'remix' | 'live-set' | 'collaboration';
  tags: string[];
  plays?: number;
  likes?: number;
  soundcloudTrackId?: string;
  embedUrl?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  genre: string;
  releaseDate: string;
  albumArt: string;
  description: string;
  tracks: Track[];
  streamingLinks: {
    spotify?: string;
    soundcloud?: string;
    youtube?: string;
    appleMusic?: string;
  };
  type: 'album' | 'ep' | 'single' | 'compilation';
}

export const discography: Track[] = [
  // LIVE SETS
  {
    id: 'commercial-sing-along-non-stop-mix',
    title: 'Commercial Sing Along Non Stop Mix',
    artist: 'DJ FELICITOUS',
    genre: 'Commercial/Bollywood',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/commercial-sing-along.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/SuYvLlB2dHntNH7yrD',
    },
    description: 'A high-energy non-stop commercial sing-along mix by DJ Felicitous, perfect for parties and celebrations.',
    featured: false,
    type: 'live-set',
    tags: ['Commercial', 'Bollywood', 'Party', 'Non Stop', 'Live Set']
  },
  {
    id: 'melodic-afro-bolly-house-mix',
    title: 'Melodic Afro Bolly House Mix',
    artist: 'DJ FELICITOUS',
    genre: 'Bollywood/Afro House',
    duration: '55:23',
    releaseDate: '2024-12-10',
    albumArt: '/images/tracks/afro-bolly-house.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/o6s2U8iF2UQrfcyx8s',
    },
    description: 'A mesmerizing fusion of Bollywood classics with deep Afro House rhythms and melodic progressions.',
    featured: true,
    type: 'live-set',
    tags: ['Bollywood', 'Afro House', 'Melodic', 'Cultural Fusion', 'Live Set']
  },
  {
    id: 'melodic-techno-1-hour-non-stop-mix',
    title: 'Melodic Techno 1 Hour Non Stop Mix',
    artist: 'DJ FELICITOUS',
    genre: 'Melodic Techno',
    duration: '60:00',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/melodic-techno-1hr.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/fGjYhXMPy5RLc6nKnC',
    },
    description: 'A seamless 1-hour melodic techno journey by DJ Felicitous, blending deep grooves and uplifting melodies.',
    featured: false,
    type: 'live-set',
    tags: ['Melodic Techno', 'Non Stop', 'Mix', 'Live Set']
  },
  {
    id: 'heart-beat-universe-hitech-mix',
    title: 'Heart Beat of the Universe | 190BPM Hi-tech Mini Mix 2024',
    artist: 'Trinitrocosmic',
    genre: 'Hi-Tech/Psytrance',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/heart-beat-universe.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/tYfk2fCoBKw4GlnLoL',
    },
    description: 'A high-energy 190BPM hi-tech psytrance mini mix exploring the cosmic rhythms of the universe.',
    featured: false,
    type: 'live-set',
    tags: ['Hi-Tech', 'Psytrance', '190BPM', 'Cosmic', 'Live Set']
  },
  {
    id: 'ohm-hreem-namaha-live-set',
    title: 'Ohm Hreem Namaha Live DJ Set',
    artist: 'Trinitrocosmic',
    genre: 'Spiritual/Electronic',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/ohm-hreem-namaha.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/MsMcnPKeUcz7fmwlEM',
    },
    description: 'A spiritual electronic journey combining ancient mantras with modern electronic beats.',
    featured: false,
    type: 'live-set',
    tags: ['Spiritual', 'Electronic', 'Mantra', 'Live Set']
  },
  {
    id: 'old-is-gold-trinitrocosmic',
    title: 'Old Is Gold - Trinitrocosmic | Endless Gratitude to Dark Whisper',
    artist: 'DJ FELICITOUS',
    genre: 'Classic/Electronic',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/old-is-gold.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/RW3t2vVavRd2eLgJuK',
    },
    description: 'A nostalgic journey through classic tracks with a modern electronic twist.',
    featured: false,
    type: 'live-set',
    tags: ['Classic', 'Electronic', 'Nostalgic', 'Live Set']
  },
  {
    id: 'technoverse-volume-i-2024',
    title: 'Technoverse Volume I 2024 - Melodic Techno Non Stop Set',
    artist: 'Felicitous',
    genre: 'Melodic Techno',
    duration: '62:45',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/technoverse-2024.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/3FGADAXc11V2gxVsCF',
    },
    description: 'An immersive journey through melodic techno soundscapes with hypnotic basslines and atmospheric pads.',
    featured: true,
    type: 'live-set',
    tags: ['Melodic Techno', 'Progressive', 'Atmospheric', 'Live Set']
  },
  {
    id: 'cosmic-celestial-2021',
    title: 'Cosmic Celestial 2021',
    artist: 'Trinitrocosmic',
    genre: 'Cosmic/Electronic',
    duration: 'N/A',
    releaseDate: '2021-01-01',
    albumArt: '/images/tracks/cosmic-celestial.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/7SVb0JPEuEc1Xd2pOi',
    },
    description: 'A celestial journey through cosmic soundscapes and ethereal electronic compositions.',
    featured: false,
    type: 'live-set',
    tags: ['Cosmic', 'Electronic', 'Celestial', 'Live Set']
  },

  // OWN PRODUCTIONS
  {
    id: 'trinetra-awakening',
    title: 'Trinetra Awakening - Trinitrocosmic | 180 BPM',
    artist: 'Trinitrocosmic',
    genre: 'Psytrance/Original',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/trinetra-awakening.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/6tXZ9HpnYmFKtMkLoe',
    },
    description: 'An original 180 BPM psytrance production exploring the awakening of the third eye consciousness.',
    featured: false,
    type: 'original',
    tags: ['Psytrance', 'Original', '180BPM', 'Spiritual', 'Awakening']
  },

  // REMIXES
  {
    id: 'gitanjali-melodic-remix',
    title: 'Gitanjali - Book Of Poems | Melodic Remix 2023',
    artist: 'DJ FELICITOUS',
    genre: 'Melodic/Remix',
    duration: 'N/A',
    releaseDate: '2023-01-01',
    albumArt: '/images/tracks/gitanjali-remix.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/cbgctKP17xAkJik6Mr',
    },
    description: 'A melodic remix of classical poetry transformed into electronic soundscapes.',
    featured: false,
    type: 'remix',
    tags: ['Melodic', 'Remix', 'Poetry', 'Classical']
  },
  {
    id: 'neeye-melodic-remix-2025',
    title: 'Neeye | Melodic Remix 2025',
    artist: 'DJ FELICITOUS',
    genre: 'Melodic/Remix',
    duration: 'N/A',
    releaseDate: '2025-01-01',
    albumArt: '/images/tracks/neeye-remix.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/ku5Q3lhJ4PUtjO3ndA',
    },
    description: 'A modern melodic remix bringing contemporary electronic elements to traditional melodies.',
    featured: false,
    type: 'remix',
    tags: ['Melodic', 'Remix', 'Contemporary', 'Traditional']
  },
  {
    id: 'cosmic-tatvamasi',
    title: 'Cosmic Tatvamasi',
    artist: 'Trinitrocosmic',
    genre: 'Cosmic/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/cosmic-tatvamasi.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/ZeEPMiC4RiFoPfWbIL',
    },
    description: 'A cosmic interpretation of ancient philosophical concepts through electronic music.',
    featured: false,
    type: 'remix',
    tags: ['Cosmic', 'Remix', 'Philosophy', 'Spiritual']
  },
  {
    id: 'cosmic-violin-2023',
    title: 'Cosmic Violin 2023',
    artist: 'Trinitrocosmic',
    genre: 'Cosmic/Remix',
    duration: 'N/A',
    releaseDate: '2023-01-01',
    albumArt: '/images/tracks/cosmic-violin.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/kaGUkLIinrUuGW9AHN',
    },
    description: 'A cosmic remix featuring ethereal violin melodies blended with electronic textures.',
    featured: false,
    type: 'remix',
    tags: ['Cosmic', 'Remix', 'Violin', 'Ethereal']
  },
  {
    id: 'soul-seeker-210bpm',
    title: 'The Soul Seeker [210 BPM]',
    artist: 'Trinitrocosmic',
    genre: 'Hi-Tech/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/soul-seeker.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/CVcr6FSRFkGF9SIPx5',
    },
    description: 'A high-energy 210 BPM remix exploring the depths of consciousness and soul searching.',
    featured: false,
    type: 'remix',
    tags: ['Hi-Tech', 'Remix', '210BPM', 'Soul', 'Consciousness']
  },
  {
    id: 'cosmic-thillana-2023',
    title: 'Cosmic Thillana 2023 [Hi-Tech HBD Special Mix]',
    artist: 'Trinitrocosmic',
    genre: 'Hi-Tech/Remix',
    duration: 'N/A',
    releaseDate: '2023-01-01',
    albumArt: '/images/tracks/cosmic-thillana.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/jOTZaAdCb8EmGcQx8b',
    },
    description: 'A special hi-tech remix of classical Thillana compositions with cosmic electronic elements.',
    featured: false,
    type: 'remix',
    tags: ['Hi-Tech', 'Remix', 'Classical', 'Thillana', 'Special Mix']
  },
  {
    id: 'silence-and-solitude',
    title: 'Silence And Solitude',
    artist: 'Trinitrocosmic',
    genre: 'Ambient/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/silence-solitude.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/DZMlSChzCxgvRMNSPV',
    },
    description: 'An ambient remix exploring themes of introspection, silence, and peaceful solitude.',
    featured: false,
    type: 'remix',
    tags: ['Ambient', 'Remix', 'Introspective', 'Peaceful']
  },
  {
    id: 'depth-of-love-190bpm',
    title: 'The Depth of Love - Trinitrocosmic [190BPM]',
    artist: 'DJ FELICITOUS',
    genre: 'Emotional/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/depth-of-love.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/5aKGhuvj7nUK8TGjTM',
    },
    description: 'A deeply emotional 190 BPM remix exploring the profound depths of love and connection.',
    featured: false,
    type: 'remix',
    tags: ['Emotional', 'Remix', '190BPM', 'Love', 'Deep']
  },
  {
    id: 'adharam-madhuram-melodic-remix',
    title: 'Adharam Madhuram | Melodic Remix',
    artist: 'DJ FELICITOUS',
    genre: 'Classical/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/adharam-madhuram.jpg',
    streamingLinks: {
      soundcloud: 'https://on.soundcloud.com/4UtyE3IlMg5HnvB3EH',
    },
    description: 'A melodic remix of the classical devotional piece Adharam Madhuram with modern electronic elements.',
    featured: false,
    type: 'remix',
    tags: ['Classical', 'Remix', 'Devotional', 'Melodic']
  }
];

export const albums: Album[] = [];

export const getFeaturedTracks = () => discography.filter(track => track.featured);
export const getTracksByArtist = (artist: string) => discography.filter(track => track.artist.includes(artist));
export const getTracksByGenre = (genre: string) => discography.filter(track => track.genre.includes(genre));
export const getTracksByType = (type: Track['type']) => discography.filter(track => track.type === type);
export const getTrackById = (id: string) => discography.find(track => track.id === id);
