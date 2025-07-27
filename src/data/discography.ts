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
  {
    id: 'melodic-afro-bolly-house-mix',
    title: 'Melodic Afro Bolly House Mix',
    artist: 'DJ FELICITOUS',
    genre: 'Bollywood/Afro House',
    duration: '55:23',
    releaseDate: '2024-12-10',
    albumArt: '/images/tracks/afro-bolly-house.jpg',
    audioUrl: 'https://api.soundcloud.com/tracks/2072437752',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/dj_felicitous/melodic-afro-bolly-house-mix-dj-felicitous',
    },
    description: 'A mesmerizing fusion of Bollywood classics with deep Afro House rhythms and melodic progressions. This extended mix takes listeners on a cultural journey through infectious beats and soulful melodies, perfect for both intimate gatherings and dancefloor euphoria.',
    featured: true,
    type: 'remix',
    tags: ['Bollywood', 'Afro House', 'Melodic', 'Cultural Fusion'],
    plays: 185000,
    likes: 12800,
    soundcloudTrackId: '2072437752',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2072437752&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    id: 'technoverse-volume-i',
    title: 'Technoverse Volume I - Felicitous',
    artist: 'DJ FELICITOUS',
    genre: 'Techno/Progressive',
    duration: '62:45',
    releaseDate: '2023-08-15',
    albumArt: '/images/tracks/technoverse.jpg',
    audioUrl: 'https://api.soundcloud.com/tracks/1601264592',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/dj_felicitous/technoverse-volume-i',
    },
    description: 'An immersive journey through the vast expanse of techno soundscapes. Volume I showcases the deeper, more progressive side of DJ Felicitous, featuring hypnotic basslines, atmospheric pads, and carefully crafted transitions that build and release tension masterfully.',
    featured: true,
    type: 'original',
    tags: ['Techno', 'Progressive', 'Atmospheric', 'Hypnotic', 'Underground'],
    plays: 156000,
    likes: 15600,
    soundcloudTrackId: '1601264592',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1601264592&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  }
];

export const albums: Album[] = [];

export const getFeaturedTracks = () => discography.filter(track => track.featured);
export const getTracksByArtist = (artist: string) => discography.filter(track => track.artist.includes(artist));
export const getTracksByGenre = (genre: string) => discography.filter(track => track.genre.includes(genre));
export const getTracksByType = (type: Track['type']) => discography.filter(track => track.type === type);
export const getTrackById = (id: string) => discography.find(track => track.id === id);
