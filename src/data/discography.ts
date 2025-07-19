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
  {
    id: 'bollywood-dreams-remix',
    title: 'Bollywood Dreams (Remix)',
    artist: 'DJ Felicitous',
    genre: 'Bollywood/Electronic',
    duration: '4:32',
    releaseDate: '2024-03-15',
    albumArt: '/images/tracks/bollywood-dreams.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example1',
      soundcloud: 'https://soundcloud.com/djfelicitous/bollywood-dreams-remix',
      youtube: 'https://youtube.com/watch?v=example1'
    },
    description: 'A high-energy remix blending classic Bollywood vocals with modern electronic production. This track brings together traditional Indian instruments with cutting-edge synths.',
    featured: true,
    type: 'remix',
    tags: ['Bollywood', 'Electronic', 'Dance', 'Remix'],
    plays: 125000,
    likes: 8500
  },
  {
    id: 'cosmic-journey',
    title: 'Cosmic Journey',
    artist: 'TinitroCosmic',
    genre: 'Psytrance',
    duration: '7:45',
    releaseDate: '2024-02-28',
    albumArt: '/images/tracks/cosmic-journey.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example2',
      soundcloud: 'https://soundcloud.com/tinitrocosmic/cosmic-journey',
      youtube: 'https://youtube.com/watch?v=example2'
    },
    description: 'An immersive psytrance journey through space and time. Built with hypnotic arpeggios, cosmic pads, and a driving bassline that takes listeners on a transcendental experience.',
    featured: true,
    type: 'original',
    tags: ['Psytrance', 'Progressive', 'Cosmic', 'Hypnotic'],
    plays: 89000,
    likes: 6200
  },
  {
    id: 'underground-pulse',
    title: 'Underground Pulse',
    artist: 'TNT',
    genre: 'Techno',
    duration: '6:15',
    releaseDate: '2024-01-20',
    albumArt: '/images/tracks/underground-pulse.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example3',
      soundcloud: 'https://soundcloud.com/tnt-techno/underground-pulse',
      youtube: 'https://youtube.com/watch?v=example3'
    },
    description: 'Raw, unfiltered techno that captures the essence of the underground scene. Dark, driving, and relentless - this track is built for peak-time dance floors.',
    featured: true,
    type: 'original',
    tags: ['Techno', 'Underground', 'Dark', 'Peak-Time'],
    plays: 156000,
    likes: 12800
  },
  {
    id: 'love-in-harmony',
    title: 'Love in Harmony',
    artist: 'DJ Felicitous & DJ Geetz',
    genre: 'Multi-Genre',
    duration: '5:28',
    releaseDate: '2024-04-10',
    albumArt: '/images/tracks/love-in-harmony.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example4',
      soundcloud: 'https://soundcloud.com/djfelicitousgeetz/love-in-harmony',
      youtube: 'https://youtube.com/watch?v=example4'
    },
    description: 'A beautiful collaboration that showcases the perfect musical chemistry between DJ Felicitous and DJ Geetz. Blending romantic melodies with energetic beats.',
    featured: true,
    type: 'collaboration',
    tags: ['Collaboration', 'Romantic', 'Multi-Genre', 'Duo'],
    plays: 201000,
    likes: 15600
  },
  {
    id: 'tamil-fusion',
    title: 'Tamil Fusion Mix',
    artist: 'DJ Felicitous',
    genre: 'South Indian/Electronic',
    duration: '6:42',
    releaseDate: '2023-12-05',
    albumArt: '/images/tracks/tamil-fusion.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example5',
      soundcloud: 'https://soundcloud.com/djfelicitous/tamil-fusion-mix',
      youtube: 'https://youtube.com/watch?v=example5'
    },
    description: 'A dynamic fusion of Tamil cinema hits with modern electronic production. Perfect for cultural celebrations and dance floors alike.',
    type: 'remix',
    tags: ['Tamil', 'South Indian', 'Fusion', 'Cultural'],
    plays: 78000,
    likes: 4900
  },
  {
    id: 'forest-whispers',
    title: 'Forest Whispers',
    artist: 'TinitroCosmic',
    genre: 'Forest Psytrance',
    duration: '8:12',
    releaseDate: '2023-11-18',
    albumArt: '/images/tracks/forest-whispers.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example6',
      soundcloud: 'https://soundcloud.com/tinitrocosmic/forest-whispers',
      youtube: 'https://youtube.com/watch?v=example6'
    },
    description: 'Deep forest psytrance with organic sounds and mystical atmospheres. A journey through ancient woodlands with modern psychedelic elements.',
    type: 'original',
    tags: ['Forest Psy', 'Organic', 'Mystical', 'Nature'],
    plays: 45000,
    likes: 3200
  },
  {
    id: 'industrial-maze',
    title: 'Industrial Maze',
    artist: 'TNT',
    genre: 'Industrial Techno',
    duration: '7:33',
    releaseDate: '2023-10-22',
    albumArt: '/images/tracks/industrial-maze.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example7',
      soundcloud: 'https://soundcloud.com/tnt-techno/industrial-maze',
      youtube: 'https://youtube.com/watch?v=example7'
    },
    description: 'A labyrinthine journey through industrial soundscapes. Heavy, metallic, and uncompromising - designed for the hardest dance floors.',
    type: 'original',
    tags: ['Industrial', 'Heavy', 'Metallic', 'Hard Techno'],
    plays: 92000,
    likes: 7100
  },
  {
    id: 'wedding-celebration-live',
    title: 'Wedding Celebration (Live Set)',
    artist: 'DJ Felicitous & DJ Geetz',
    genre: 'Live Performance',
    duration: '45:00',
    releaseDate: '2024-05-01',
    albumArt: '/images/tracks/wedding-celebration.jpg',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/djfelicitousgeetz/wedding-celebration-live',
      youtube: 'https://youtube.com/watch?v=example8'
    },
    description: 'A complete live wedding performance showcasing the duo\'s ability to read the crowd and create magical moments. From romantic first dance to high-energy celebrations.',
    type: 'live-set',
    tags: ['Live Set', 'Wedding', 'Multi-Genre', 'Celebration'],
    plays: 34000,
    likes: 2800
  },
  {
    id: 'midnight-dreams',
    title: 'Midnight Dreams',
    artist: 'DJ Felicitous',
    genre: 'Downtempo/Chill',
    duration: '4:15',
    releaseDate: '2024-06-15',
    albumArt: '/images/tracks/midnight-dreams.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example9',
      soundcloud: 'https://soundcloud.com/djfelicitous/midnight-dreams',
      youtube: 'https://youtube.com/watch?v=example9'
    },
    description: 'A soothing downtempo track perfect for late-night listening. Combines ambient textures with gentle beats and ethereal melodies.',
    type: 'original',
    tags: ['Downtempo', 'Chill', 'Ambient', 'Relaxing'],
    plays: 67000,
    likes: 5400
  },
  {
    id: 'quantum-leap',
    title: 'Quantum Leap',
    artist: 'TinitroCosmic',
    genre: 'Progressive Psytrance',
    duration: '9:18',
    releaseDate: '2024-07-03',
    albumArt: '/images/tracks/quantum-leap.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example10',
      soundcloud: 'https://soundcloud.com/tinitrocosmic/quantum-leap',
      youtube: 'https://youtube.com/watch?v=example10'
    },
    description: 'An epic progressive psytrance journey that explores the depths of consciousness and reality. Complex layering meets hypnotic rhythms.',
    featured: true,
    type: 'original',
    tags: ['Progressive Psy', 'Epic', 'Consciousness', 'Journey'],
    plays: 112000,
    likes: 9800
  },
  {
    id: 'retro-revival',
    title: 'Retro Revival (80s Remix)',
    artist: 'TNT',
    genre: 'Synthwave/Techno',
    duration: '5:47',
    releaseDate: '2024-08-20',
    albumArt: '/images/tracks/retro-revival.jpg',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example11',
      soundcloud: 'https://soundcloud.com/tnt-techno/retro-revival',
      youtube: 'https://youtube.com/watch?v=example11'
    },
    description: 'A nostalgic journey through 80s synthesizer sounds merged with modern techno production. Neon lights and cyberpunk vibes guaranteed.',
    type: 'remix',
    tags: ['Synthwave', '80s', 'Retro', 'Cyberpunk'],
    plays: 89000,
    likes: 6700
  },
  {
    id: 'summer-festival-2024',
    title: 'Summer Festival 2024 (Live)',
    artist: 'DJ Felicitous & DJ Geetz',
    genre: 'Festival Mix',
    duration: '60:00',
    releaseDate: '2024-08-05',
    albumArt: '/images/tracks/summer-festival.jpg',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/djfelicitousgeetz/summer-festival-2024',
      youtube: 'https://youtube.com/watch?v=example12'
    },
    description: 'Complete live recording from the summer festival main stage. High-energy set featuring the biggest hits across all genres and artist identities.',
    featured: true,
    type: 'live-set',
    tags: ['Festival', 'Live Set', 'Summer', 'High Energy'],
    plays: 156000,
    likes: 14200
  }
];

export const albums: Album[] = [
  {
    id: 'cultural-fusion-ep',
    title: 'Cultural Fusion EP',
    artist: 'DJ Felicitous',
    genre: 'World/Electronic',
    releaseDate: '2024-02-01',
    albumArt: '/images/albums/cultural-fusion.jpg',
    description: 'An exploration of Indian musical heritage through modern electronic production. This EP features reimagined classics from Bollywood and South Indian cinema.',
    tracks: [
      discography.find(track => track.id === 'bollywood-dreams-remix')!,
      discography.find(track => track.id === 'tamil-fusion')!
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/cultural-fusion',
      soundcloud: 'https://soundcloud.com/djfelicitous/sets/cultural-fusion-ep'
    },
    type: 'ep'
  },
  {
    id: 'cosmic-dimensions',
    title: 'Cosmic Dimensions',
    artist: 'TinitroCosmic',
    genre: 'Psytrance',
    releaseDate: '2023-12-15',
    albumArt: '/images/albums/cosmic-dimensions.jpg',
    description: 'A full-length journey through various dimensions of consciousness. Each track represents a different state of mind and cosmic experience.',
    tracks: [
      discography.find(track => track.id === 'cosmic-journey')!,
      discography.find(track => track.id === 'forest-whispers')!
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/cosmic-dimensions',
      soundcloud: 'https://soundcloud.com/tinitrocosmic/sets/cosmic-dimensions'
    },
    type: 'album'
  }
];

export const getFeaturedTracks = () => discography.filter(track => track.featured);
export const getTracksByArtist = (artist: string) => discography.filter(track => track.artist.includes(artist));
export const getTracksByGenre = (genre: string) => discography.filter(track => track.genre.includes(genre));
export const getTracksByType = (type: Track['type']) => discography.filter(track => track.type === type);
export const getTrackById = (id: string) => discography.find(track => track.id === id);
