export function generateFavicon(size: number = 32): string {
  if (typeof window === 'undefined') return '';
  
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#00ffff');
  gradient.addColorStop(0.5, '#ff00ff');
  gradient.addColorStop(1, '#ffff00');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // Add DJ symbol
  ctx.fillStyle = '#000000';
  ctx.font = `bold ${Math.floor(size * 0.6)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DJ', size / 2, size / 2);
  
  return canvas.toDataURL();
}

export function generateAppleIcon(size: number = 180): string {
  if (typeof window === 'undefined') return '';
  
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Rounded rectangle background
  const radius = size * 0.2;
  const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  gradient.addColorStop(0, '#00ffff');
  gradient.addColorStop(0.7, '#ff00ff');
  gradient.addColorStop(1, '#000000');
  
  ctx.fillStyle = gradient;
  roundRect(ctx, 0, 0, size, size, radius);
  ctx.fill();
  
  // DJ text
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${Math.floor(size * 0.25)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DJ', size / 2, size / 2 - size * 0.1);
  
  // Subtitle
  ctx.font = `${Math.floor(size * 0.12)}px Arial`;
  ctx.fillText('FELICITOUS', size / 2, size / 2 + size * 0.15);
  
  return canvas.toDataURL();
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}
