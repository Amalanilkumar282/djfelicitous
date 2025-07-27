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
  'bollywood': '/images/felicitous.jpg',
  'psytrance': '/images/psytrance.jpg',
  'techno': '/images/techno.jpg',
  
  // Gallery images for each DJ profile
  gallery: {
    techno1: '/images/techno1.jpg',
    techno2: '/images/techno2.jpg',
    techno3: '/images/techno3.jpg',
    techno4: '/images/techno4.jpg',
    techno5: '/images/techno5.jpg',
    techno6: '/images/techno.jpg',

    psy1: '/images/psy1.jpg',
    psy2: '/images/psy2.jpg',
    psy3: '/images/psy3.jpg',
    psy4: '/images/psy4.jpg',
    psy5: '/images/psy5.JPG',

    bollywood1: '/images/bollywood1.jpg',
    bollywood2: '/images/bollywood2.jpg',
    bollywood3: '/images/bollywood3.jpg',
    bollywood4: '/images/bollywood4.jpg',
    bollywood5: '/images/bollywood5.jpg',

    couple1: '/images/couple-1.jpg',
    couple2: '/images/couple-2.jpg',
    couple3: '/images/couple-3.jpg',
    couple4: '/images/couple-4.jpg'
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
        placeholderImages.gallery.psy3,
        placeholderImages.gallery.psy4,
        placeholderImages.gallery.psy5
      ];
    case 'bollywood':
      return [
        placeholderImages.gallery.bollywood1,
        placeholderImages.gallery.bollywood2,
        placeholderImages.gallery.bollywood3,
        placeholderImages.gallery.bollywood4,
        placeholderImages.gallery.bollywood5
      ];
    case 'couple-duo':
      return [
        placeholderImages.gallery.couple1,
        placeholderImages.gallery.couple2,
        placeholderImages.gallery.couple3,
        placeholderImages.gallery.couple4
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
    'techno': placeholderImages['techno']
  };
  
  return profileImages[profileId as keyof typeof profileImages] || placeholderImages['techno'];
};
