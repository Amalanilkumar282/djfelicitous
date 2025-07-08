# DJ Felicitous - Multi-Genre DJ Portfolio Website

A visually stunning, immersive, techno-themed DJ portfolio website showcasing multiple stage identities with bold, energetic design featuring dark themes, vibrant neon accents, animated gradients, and smooth Framer Motion animations.

## 🎵 Live Demo

Visit the website at: **http://localhost:3001** (during development)

## ✨ Features

### 🎭 Multiple DJ Identities

- **Couple Duo**: DJ Felicitous & DJ Geetz - Dynamic duo performances
- **Bollywood**: DJ Felicitous - Vibrant Bollywood and commercial hits
- **Psy Trance**: TinitroCosmic - Psychedelic journey through cosmic soundscapes
- **Techno**: TNT - Underground techno experiences

### 🎨 Design Features

- **Dark Theme**: Immersive black backgrounds with neon accents
- **Neon Color Palette**: Cyan (#00ffff), Magenta (#ff00ff), Lime (#00ff00), Amber (#ff9900)
- **Custom Animations**: Glitch effects, neon glow, floating particles, gradient flows
- **Typography**: Orbitron for headings, Inter for body text
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization

### 🚀 Technical Features

- **Next.js 15**: Modern React framework with App Router
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS v4**: Rapid styling with custom utilities
- **Framer Motion**: Smooth animations and micro-interactions
- **Dynamic Routing**: Individual pages for each DJ identity
- **SEO Optimized**: Meta tags, Open Graph, and proper semantic HTML
- **Performance**: Optimized images, code splitting, and fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Fonts**: Google Fonts (Orbitron, Inter)
- **Development**: Turbopack for fast development builds

## 📁 Project Structure

```
djfelicitous/
├── public/
│   ├── images/          # Image assets (placeholder structure)
│   └── favicon.ico      # Site favicon
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles and animations
│   │   ├── layout.tsx   # Root layout with navbar/footer
│   │   ├── page.tsx     # Homepage
│   │   ├── couple-duo/  # Couple duo project page
│   │   ├── bollywood/   # Bollywood project page
│   │   ├── psytrance/   # Psy trance project page
│   │   └── techno/      # Techno project page
│   ├── components/
│   │   ├── DJCard.tsx       # Interactive DJ project cards
│   │   ├── DJCardGrid.tsx   # Grid layout for cards
│   │   ├── Footer.tsx       # Site footer with social links
│   │   ├── HeroSection.tsx  # Homepage hero section
│   │   └── Navbar.tsx       # Navigation header
│   ├── data/
│   │   └── djProfiles.ts    # DJ profile data and types
│   └── utils/
│       └── placeholders.ts  # Placeholder image utilities
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Color Palette

```css
--neon-cyan: #00ffff     /* Primary accent */
--neon-magenta: #ff00ff  /* Secondary accent */
--neon-lime: #00ff00     /* Success/energy */
--neon-amber: #ff9900    /* Warning/warm */
--neon-purple: #8b5cf6   /* Mystical */
--neon-pink: #ec4899     /* Love/passion */
--neon-blue: #3b82f6     /* Cool/tech */
```

### Custom Animations

- **pulse-glow**: Neon glow effect
- **float**: Gentle floating motion
- **glitch**: Glitch text effect
- **neon-flicker**: Neon sign flickering
- **gradient-flow**: Animated gradients
- **eq-bounce**: Audio equalizer effect

### Typography

- **Headers**: Orbitron (futuristic, techno)
- **Body**: Inter (clean, readable)
- **Accents**: Monospace for technical elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd djfelicitous
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Features per Device

- **Mobile**: Stacked cards, simplified animations, touch-friendly navigation
- **Tablet**: 2-column grid, enhanced animations
- **Desktop**: Full grid layout, all animations, hover effects

## 🎵 DJ Identity Pages

Each DJ identity has a dedicated page with:

### Common Features

- **Hero Section**: Large title, subtitle, description, CTA buttons
- **Bio Section**: Detailed background and statistics
- **Gallery**: Visual showcase with hover effects
- **Performance History**: List of venues and events
- **Testimonials**: Client/fan feedback
- **Call-to-Action**: Booking and contact information

### Unique Themes

- **Couple Duo**: Pink/magenta theme, romantic vibes
- **Bollywood**: Orange/amber theme, vibrant energy
- **Psy Trance**: Purple/violet theme, cosmic elements
- **Techno**: Cyan/blue theme, industrial aesthetics

## 🔧 Customization

### Adding New DJ Identity

1. **Update data file** (`src/data/djProfiles.ts`)

```typescript
{
  id: 'new-identity',
  name: 'New Identity',
  subtitle: 'Genre Specialist',
  description: 'Description...',
  genre: 'Genre',
  image: '/images/new-identity.jpg',
  color: 'neon-color',
  route: '/new-identity',
  // ... other properties
}
```

2. **Create page directory**

```bash
mkdir src/app/new-identity
```

3. **Create page component** (`src/app/new-identity/page.tsx`)
   Follow existing page structure with appropriate theming.

### Custom Animations

Add new animations to `src/app/globals.css`:

```css
@keyframes custom-animation {
  0% {
    /* start state */
  }
  100% {
    /* end state */
  }
}

.animate-custom {
  animation: custom-animation 2s ease-in-out infinite;
}
```

## 🎯 SEO & Performance

### SEO Features

- Meta titles and descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Image alt tags
- Proper heading hierarchy

### Performance Optimizations

- Next.js Image component for optimized loading
- Code splitting with dynamic imports
- CSS-in-JS with Tailwind for minimal bundle size
- Lazy loading for off-screen content

## 📸 Assets

### Images

Currently using SVG placeholders. Replace with actual images:

- Place DJ photos in `public/images/`
- Update `src/data/djProfiles.ts` with correct paths
- Ensure images are optimized (WebP recommended)

### Recommended Image Sizes

- **Hero images**: 1200x800px
- **Gallery images**: 800x600px
- **Profile images**: 400x400px

## 🌟 Future Enhancements

### Phase 1 - Content

- [ ] Replace placeholder images with professional photos
- [ ] Add real testimonials and reviews
- [ ] Include actual music samples/players
- [ ] Add booking form with backend integration

### Phase 2 - Features

- [ ] Music player with SoundCloud/Spotify integration
- [ ] Image lightbox for gallery viewing
- [ ] Event calendar integration
- [ ] Contact form with email service

### Phase 3 - Advanced

- [ ] CMS integration for easy content updates
- [ ] Analytics tracking
- [ ] Performance monitoring
- [ ] PWA features (offline support)
- [ ] Multi-language support

## 🐛 Troubleshooting

### Common Issues

**Build Errors**

- Ensure all imports are correctly typed
- Check for unused imports (ESLint will catch these)
- Verify all dynamic routes have proper page components

**Style Issues**

- Clear `.next` directory and rebuild
- Check Tailwind CSS configuration
- Ensure custom CSS classes are properly defined

**Image Loading**

- Verify image paths are correct
- Check Next.js Image component usage
- Ensure images exist in `public/images/`

## 📄 License

This project is created for DJ Felicitous. All rights reserved.

## 🤝 Contributing

This is a private portfolio project. For suggestions or improvements, please contact the development team.

---

**Built with ❤️ and 🎵 for DJ Felicitous**

_Creating immersive digital experiences that match the energy of the music_
