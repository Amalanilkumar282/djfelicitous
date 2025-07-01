'use client';

import { useEffect } from 'react';
import { generateFavicon } from '@/utils/iconGenerator';

export default function FaviconGenerator() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Generate and set favicon
    const favicon16 = generateFavicon(16);
    const favicon32 = generateFavicon(32);
    
    if (favicon16) {
      const link16 = document.createElement('link');
      link16.rel = 'icon';
      link16.type = 'image/png';
      link16.sizes = '16x16';
      link16.href = favicon16;
      document.head.appendChild(link16);
    }
    
    if (favicon32) {
      const link32 = document.createElement('link');
      link32.rel = 'icon';
      link32.type = 'image/png';
      link32.sizes = '32x32';
      link32.href = favicon32;
      document.head.appendChild(link32);
      
      // Also set as main favicon
      const mainFavicon = document.querySelector('link[rel="icon"][href="/favicon.ico"]');
      if (mainFavicon) {
        (mainFavicon as HTMLLinkElement).href = favicon32;
      }
    }
  }, []);

  return null;
}
