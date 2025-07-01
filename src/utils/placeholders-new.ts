// Utility to create placeholder image data URLs
export const createPlaceholderImage = (
  width: number = 800, 
  height: number = 600, 
  color: string = '#00ffff',
  text: string = 'DJ FELICITOUS'
): string => {
  // Check if we're running in the browser
  if (typeof window === 'undefined') {
    // Return a simple placeholder for server-side rendering
    const svgContent = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
            <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="url(#grad)"/>
        <text x="${width/2}" y="${height/2}" font-family="Arial" font-size="48" font-weight="bold" fill="${color}" text-anchor="middle" dominant-baseline="central">${text}</text>
      </svg>
    `;
    return `data:image/svg+xml;base64,${typeof Buffer !== 'undefined' ? Buffer.from(svgContent).toString('base64') : btoa(svgContent)}`;
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  canvas.width = width;
  canvas.height = height;
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, '#000000');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add grid pattern
  ctx.strokeStyle = color + '20';
  ctx.lineWidth = 1;
  for (let i = 0; i < width; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }
  for (let i = 0; i < height; i += 50) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
  }
  
  // Add text
  ctx.fillStyle = color;
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas.toDataURL();
};

// Simple placeholder images using SVG data URLs
export const placeholderImages = {
  'couple-duo': '/images/couple-duo.jpg',
  'bollywood': '/images/bollywood.jpg',
  'psytrance': '/images/psytrance.jpg',
  'techno': '/images/techno.jpg',
  'old-geeks': '/images/old-geeks.jpg',
  
  // Gallery images for each DJ profile
  gallery: {
    techno1: '/images/techno-1.jpg',
    techno2: '/images/techno-2.jpg',
    techno3: '/images/techno-3.jpg',
    techno4: '/images/techno-4.jpg',
    techno5: '/images/techno-5.jpg',
    techno6: '/images/techno-6.jpg',

    psy1: '/images/psy-1.jpg',
    psy2: '/images/psy-2.jpg',
    psy3: '/images/psy-3.jpg',

    bollywood1: '/images/bollywood-1.jpg',
    bollywood2: '/images/bollywood-2.jpg',
    bollywood3: '/images/bollywood-3.jpg',

    couple1: '/images/couple-1.jpg',
    couple2: '/images/couple-2.jpg',
    couple3: '/images/couple-3.jpg',

    geeks1: '/images/oldgeeks-1.jpg',
    geeks2: '/images/oldgeeks-2.jpg',
    geeks3: '/images/oldgeeks-3.jpg'
  }
};

// Helper function to get gallery images for a specific DJ profile
export const getGalleryImages = (profileId: string): string[] => {
  switch (profileId) {
    case 'techno':
      return [
        placeholderImages.gallery.techno1,
        placeholderImages.gallery.techno2,
        placeholderImages.gallery.techno3,
        placeholderImages.gallery.techno4,
        placeholderImages.gallery.techno5,
        placeholderImages.gallery.techno6
      ];
    case 'psytrance':
      return [
        placeholderImages.gallery.psy1,
        placeholderImages.gallery.psy2,
        placeholderImages.gallery.psy3
      ];
    case 'bollywood':
      return [
        placeholderImages.gallery.bollywood1,
        placeholderImages.gallery.bollywood2,
        placeholderImages.gallery.bollywood3
      ];
    case 'couple-duo':
      return [
        placeholderImages.gallery.couple1,
        placeholderImages.gallery.couple2,
        placeholderImages.gallery.couple3
      ];
    case 'old-geeks':
      return [
        placeholderImages.gallery.geeks1,
        placeholderImages.gallery.geeks2,
        placeholderImages.gallery.geeks3
      ];
    default:
      return [];
  }
};

// Helper function to get profile image
export const getProfileImage = (profileId: string): string => {
  const profileImages = {
    'couple-duo': placeholderImages['couple-duo'],
    'bollywood': placeholderImages['bollywood'],
    'psytrance': placeholderImages['psytrance'],
    'techno': placeholderImages['techno'],
    'old-geeks': placeholderImages['old-geeks']
  };
  
  return profileImages[profileId as keyof typeof profileImages] || placeholderImages['techno'];
};
