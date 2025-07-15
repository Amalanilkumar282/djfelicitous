import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Executive Color Palette
        'executive-platinum': '#F8F9FA',
        'executive-silver': '#E9ECEF',
        'executive-charcoal': '#212529',
        'executive-slate': '#495057',
        'executive-teal': '#20C997',
        'executive-teal-dark': '#1AA085',
        'executive-teal-light': '#40E0D0',
        'executive-chrome': '#B8BCC8',
        'executive-chrome-dark': '#6C757D',
        'executive-accent': '#FFC107',
        'executive-accent-dark': '#F57C00',
        'executive-success': '#28A745',
        'executive-warning': '#FFC107',
        'executive-error': '#DC3545',
        'executive-info': '#17A2B8',
        
        // DJ Felicitous Theme Colors
        'platinum-blue': '#0d7377',
        'electric-teal': '#14a085',
        'chrome-cyan': '#2dd4bf',
        'silver-blue': '#67e8f9',
        'pearl-white': '#f0fdfa',
        'bg-executive': '#000000',
        'bg-platinum': '#0a0a0a',
        'bg-carbon': '#111111',
        'bg-steel': '#1a1a1a',
        'bg-chrome': '#242424',
        'text-platinum': '#ffffff',
        'text-silver': '#e5e7eb',
        'text-steel': '#9ca3af',
        'accent-primary': '#2dd4bf',
        'primary': '#ffffff',
        'secondary': '#9ca3af',
        'muted': '#6b7280',
        'surface': '#1a1a1a',
      },
      backgroundImage: {
        'gradient-platinum': 'linear-gradient(135deg, #0d7377 0%, #14a085 50%, #2dd4bf 100%)',
        'gradient-chrome': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        'gradient-steel': 'linear-gradient(135deg, #111111 0%, #1f1f1f 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(13, 115, 119, 0.1) 0%, rgba(20, 160, 133, 0.05) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #0d7377 0%, #14a085 50%, #2dd4bf 100%)',
      },
      animation: {
        'executive-fade-in': 'executiveFadeIn 0.6s ease-out',
        'executive-slide-up': 'executiveSlideUp 0.8s ease-out',
        'executive-scale': 'executiveScale 0.4s ease-out',
        'executive-glow': 'executiveGlow 2s ease-in-out infinite',
        'executive-pulse': 'executivePulse 2s ease-in-out infinite',
        'executive-float': 'executiveFloat 6s ease-in-out infinite',
        'executive-shimmer': 'executiveShimmer 3s ease-in-out infinite',
      },
      keyframes: {
        executiveFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        executiveSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        executiveScale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        executiveGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(32, 201, 151, 0.3)',
            borderColor: 'rgba(32, 201, 151, 0.5)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(32, 201, 151, 0.6)',
            borderColor: 'rgba(32, 201, 151, 0.8)'
          },
        },
        executivePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        executiveFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        executiveShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'executive-subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'executive-medium': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'executive-strong': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'executive-glow': '0 0 20px rgba(32, 201, 151, 0.3)',
        'executive-inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        
        // DJ Felicitous Theme Shadows
        'executive': '0 4px 12px rgba(0, 0, 0, 0.6)',
        'platinum': '0 8px 24px rgba(0, 0, 0, 0.8)',
        'chrome': '0 12px 36px rgba(0, 0, 0, 0.9)',
        'accent': '0 0 24px rgba(13, 115, 119, 0.3)',
        'glow': '0 0 48px rgba(20, 160, 133, 0.2)',
      },
      backdropBlur: {
        'executive': '20px',
      },
    },
  },
  plugins: [],
};

export default config;
