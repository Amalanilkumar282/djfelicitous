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
  // ORIGINAL PRODUCTION
  {
    id: 'trinetra-awakening',
    title: 'Trinetra Awakening - Trinitrocosmic | 180 BPM',
    artist: 'Trinitrocosmic',
    genre: 'Psytrance/Original',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/trinetra-awakening.jpg',
    soundcloudTrackId: '2151283356',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2151283356&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/trinitrocosmic/trinetra-awakening-trinitrocosmic180-bpm',
    },
    description: 'An original 180 BPM psytrance production exploring the awakening of the third eye consciousness.',
    featured: true,
    type: 'original',
    tags: ['Psytrance', 'Original', '180BPM', 'Spiritual', 'Awakening'],
    plays: 2850,
    likes: 245
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
    soundcloudTrackId: '1426042222',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1426042222&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/djfelicitous/gitanjali_book_of_poems',
    },
    description: 'A melodic remix of classical poetry transformed into electronic soundscapes.',
    featured: false,
    type: 'remix',
    tags: ['Melodic', 'Remix', 'Poetry', 'Classical'],
    plays: 1650,
    likes: 128
  },
  {
    id: 'neeye-melodic-remix-2025',
    title: 'Neeye | Melodic Remix 2025',
    artist: 'DJ FELICITOUS',
    genre: 'Melodic/Remix',
    duration: 'N/A',
    releaseDate: '2025-01-01',
    albumArt: '/images/tracks/neeye-remix.jpg',
    soundcloudTrackId: '2154192126',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2154192126&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/dj-felicitous/neeye-melodic-remix-2025dj-felicitous',
    },
    description: 'A modern melodic remix bringing contemporary electronic elements to traditional melodies.',
    featured: true,
    type: 'remix',
    tags: ['Melodic', 'Remix', 'Contemporary', 'Traditional'],
    plays: 3420,
    likes: 289
  },
  {
    id: 'cosmic-tatvamasi',
    title: 'Cosmic Tatvamasi',
    artist: 'Trinitrocosmic',
    genre: 'Cosmic/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/cosmic-tatvamasi.jpg',
    soundcloudTrackId: '2154165795',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2154165795&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/trinitrocosmic/cosmic-tatvamasitrinitrocosmic',
    },
    description: 'A cosmic interpretation of ancient philosophical concepts through electronic music.',
    featured: false,
    type: 'remix',
    tags: ['Cosmic', 'Remix', 'Philosophy', 'Spiritual'],
    plays: 2180,
    likes: 156
  },
  {
    id: 'cosmic-violin-2023',
    title: 'Cosmic Violin 2023',
    artist: 'Trinitrocosmic',
    genre: 'Cosmic/Remix',
    duration: 'N/A',
    releaseDate: '2023-01-01',
    albumArt: '/images/tracks/cosmic-violin.jpg',
    soundcloudTrackId: '1450480204',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1450480204&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/trinitrocosmic/cosmic-violin',
    },
    description: 'A cosmic remix featuring ethereal violin melodies blended with electronic textures.',
    featured: false,
    type: 'remix',
    tags: ['Cosmic', 'Remix', 'Violin', 'Ethereal'],
    plays: 1890,
    likes: 142
  },
  {
    id: 'soul-seeker-210bpm',
    title: 'The Soul Seeker [210 BPM]',
    artist: 'Trinitrocosmic',
    genre: 'Hi-Tech/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/soul-seeker.jpg',
    soundcloudTrackId: '1509920038',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1509920038&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/trinitrocosmic/the-soul-seeker210-bpm-trinitrocosmic',
    },
    description: 'A high-energy 210 BPM remix exploring the depths of consciousness and soul searching.',
    featured: false,
    type: 'remix',
    tags: ['Hi-Tech', 'Remix', '210BPM', 'Soul', 'Consciousness'],
    plays: 2650,
    likes: 198
  },
  {
    id: 'cosmic-thillana-2023',
    title: 'Cosmic Thillana 2023 [Hi-Tech HBD Special Mix]',
    artist: 'Trinitrocosmic/DJ Felicitous',
    genre: 'Hi-Tech/Remix',
    duration: 'N/A',
    releaseDate: '2023-01-01',
    albumArt: '/images/tracks/cosmic-thillana.jpg',
    soundcloudTrackId: '1419555301',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1419555301&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/trinitrocosmic/cosmic-thillana-day-to-remember-trinitrocosmicdjfelicitous',
    },
    description: 'A special hi-tech remix of classical Thillana compositions with cosmic electronic elements.',
    featured: false,
    type: 'remix',
    tags: ['Hi-Tech', 'Remix', 'Classical', 'Thillana', 'Special Mix'],
    plays: 1750,
    likes: 134
  },
  {
    id: 'silence-and-solitude',
    title: 'Silence And Solitude',
    artist: 'Trinitrocosmic',
    genre: 'Ambient/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/silence-solitude.jpg',
    soundcloudTrackId: '1147510918',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1147510918&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/trinitrocosmic/silence-and-solitude',
    },
    description: 'An ambient remix exploring themes of introspection, silence, and peaceful solitude.',
    featured: false,
    type: 'remix',
    tags: ['Ambient', 'Remix', 'Introspective', 'Peaceful'],
    plays: 1420,
    likes: 98
  },
  {
    id: 'depth-of-love-190bpm',
    title: 'The Depth of Love - Trinitrocosmic [190BPM]',
    artist: 'DJ FELICITOUS',
    genre: 'Emotional/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/depth-of-love.jpg',
    soundcloudTrackId: '1501717363',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1501717363&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/djfelicitous/01-beautiful-squirting',
    },
    description: 'A deeply emotional 190 BPM remix exploring the profound depths of love and connection.',
    featured: false,
    type: 'remix',
    tags: ['Emotional', 'Remix', '190BPM', 'Love', 'Deep'],
    plays: 2340,
    likes: 187
  },
  {
    id: 'adharam-madhuram-melodic-remix',
    title: 'Adharam Madhuram | Melodic Remix',
    artist: 'DJ FELICITOUS',
    genre: 'Classical/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/adharam-madhuram.jpg',
    soundcloudTrackId: '2158575681',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158575681&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/dj-felicitous/adharam-madhuram-melodic-remix-dj-felicitous',
    },
    description: 'A melodic remix of the classical devotional piece Adharam Madhuram with modern electronic elements.',
    featured: false,
    type: 'remix',
    tags: ['Classical', 'Remix', 'Devotional', 'Melodic'],
    plays: 1980,
    likes: 165
  },
  {
    id: 'onappattin-thalam-thullum-remix',
    title: 'Onappattin Thalam Thullum | Remix',
    artist: 'DJ FELICITOUS',
    genre: 'Traditional/Remix',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/onappattin-thalam.jpg',
    soundcloudTrackId: '2165306940',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2165306940&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/dj-felicitous/onappattin-thalam-thullum-remix-dj-felicitous',
    },
    description: 'A vibrant remix of the traditional Kerala festival song with modern electronic beats.',
    featured: false,
    type: 'remix',
    tags: ['Traditional', 'Remix', 'Kerala', 'Festival', 'Electronic'],
    plays: 1560,
    likes: 112
  },

  // LIVE SETS
  {
    id: 'commercial-sing-along-non-stop-mix',
    title: 'Commercial Sing Along Non Stop Mix',
    artist: 'DJ FELICITOUS',
    genre: 'Commercial/Bollywood',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/commercial-sing-along.jpg',
    soundcloudTrackId: '2148256914',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2148256914&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/dj-felicitous/commercial-sing-along-non-stop-mix-dj-felicitous',
    },
    description: 'A high-energy non-stop commercial sing-along mix by DJ Felicitous, perfect for parties and celebrations.',
    featured: true,
    type: 'live-set',
    tags: ['Commercial', 'Bollywood', 'Party', 'Non Stop', 'Live Set'],
    plays: 4850,
    likes: 412
  },
  {
    id: 'melodic-afro-bolly-house-mix',
    title: 'Melodic Afro Bolly House Mix',
    artist: 'DJ FELICITOUS',
    genre: 'Bollywood/Afro House',
    duration: '55:23',
    releaseDate: '2024-12-10',
    albumArt: '/images/tracks/afro-bolly-house.jpg',
    soundcloudTrackId: '2072437752',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2072437752&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/dj_felicitous/melodic-afro-bolly-house-mix-dj-felicitous',
    },
    description: 'A mesmerizing fusion of Bollywood classics with deep Afro House rhythms and melodic progressions.',
    featured: true,
    type: 'live-set',
    tags: ['Bollywood', 'Afro House', 'Melodic', 'Cultural Fusion', 'Live Set'],
    plays: 3950,
    likes: 325
  },
  {
    id: 'melodic-techno-1-hour-non-stop-mix',
    title: 'Melodic Techno | 1-Hour Non Stop Mix',
    artist: 'DJ FELICITOUS',
    genre: 'Melodic Techno',
    duration: '60:00',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/melodic-techno-1hr.jpg',
    soundcloudTrackId: '2149946499',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2149946499&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/dj-felicitous-211226193/melodic-techno-1-hour-non-stop-mix-dj-felicitous',
    },
    description: 'A seamless 1-hour melodic techno journey by DJ Felicitous, blending deep grooves and uplifting melodies.',
    featured: false,
    type: 'live-set',
    tags: ['Melodic Techno', 'Non Stop', 'Mix', 'Live Set'],
    plays: 2780,
    likes: 234
  },
  {
    id: 'technoverse-volume-i-2024',
    title: 'Technoverse Volume I 2024 - Melodic Techno Non Stop Set',
    artist: 'Felicitous',
    genre: 'Melodic Techno',
    duration: '62:45',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/technoverse-2024.jpg',
    soundcloudTrackId: '1601264592',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1601264592&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/dj_felicitous/technoverse-volume-i',
    },
    description: 'An immersive journey through melodic techno soundscapes with hypnotic basslines and atmospheric pads.',
    featured: false,
    type: 'live-set',
    tags: ['Melodic Techno', 'Progressive', 'Atmospheric', 'Live Set'],
    plays: 3120,
    likes: 267
  },
  {
    id: 'heart-beat-universe-hitech-mix',
    title: 'Heart Beat of the Universe | 190BPM Hi-tech Mini Mix 2024',
    artist: 'Trinitrocosmic',
    genre: 'Hi-Tech/Psytrance',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/heart-beat-universe.jpg',
    soundcloudTrackId: '1767501783',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1767501783&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/trinitrocosmic/01-rec-2024-03-07',
    },
    description: 'A high-energy 190BPM hi-tech psytrance mini mix exploring the cosmic rhythms of the universe.',
    featured: false,
    type: 'live-set',
    tags: ['Hi-Tech', 'Psytrance', '190BPM', 'Cosmic', 'Live Set'],
    plays: 2460,
    likes: 198
  },
  {
    id: 'ohm-hreem-namaha-live-set',
    title: 'Ohm Hreem Namaha Live DJ Set',
    artist: 'Trinitrocosmic',
    genre: 'Spiritual/Electronic',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/ohm-hreem-namaha.jpg',
    soundcloudTrackId: '1502186674',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1502186674&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/trinitrocosmic/ohm-hreem-namaha-live-dj-set-trinitrocosmic',
    },
    description: 'A spiritual electronic journey combining ancient mantras with modern electronic beats.',
    featured: false,
    type: 'live-set',
    tags: ['Spiritual', 'Electronic', 'Mantra', 'Live Set'],
    plays: 1890,
    likes: 145
  },
  {
    id: 'old-is-gold-trinitrocosmic',
    title: 'Old Is Gold - Trinitrocosmic | Endless Gratitude to Dark Whisper',
    artist: 'DJ FELICITOUS',
    genre: 'Classic/Electronic',
    duration: 'N/A',
    releaseDate: '2024-01-01',
    albumArt: '/images/tracks/old-is-gold.jpg',
    soundcloudTrackId: '1399736419',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1399736419&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/djfelicitous/old-is-gold-trinitrocosmic',
    },
    description: 'A nostalgic journey through classic tracks with a modern electronic twist.',
    featured: false,
    type: 'live-set',
    tags: ['Classic', 'Electronic', 'Nostalgic', 'Live Set'],
    plays: 1650,
    likes: 124
  },
  {
    id: 'cosmic-celestial-2021',
    title: 'Cosmic Celestial 2021',
    artist: 'Trinitrocosmic',
    genre: 'Cosmic/Electronic',
    duration: 'N/A',
    releaseDate: '2021-01-01',
    albumArt: '/images/tracks/cosmic-celestial.jpg',
    soundcloudTrackId: '1127143360',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1127143360&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/trinitrocosmic/cosmic-celestial-2021',
    },
    description: 'A celestial journey through cosmic soundscapes and ethereal electronic compositions.',
    featured: false,
    type: 'live-set',
    tags: ['Cosmic', 'Electronic', 'Celestial', 'Live Set'],
    plays: 2340,
    likes: 176
  }
];

export const albums: Album[] = [];

export const getFeaturedTracks = () => discography.filter(track => track.featured);
export const getTracksByArtist = (artist: string) => discography.filter(track => track.artist.includes(artist));
export const getTracksByGenre = (genre: string) => discography.filter(track => track.genre.includes(genre));
export const getTracksByType = (type: Track['type']) => discography.filter(track => track.type === type);
export const getTrackById = (id: string) => discography.find(track => track.id === id);
