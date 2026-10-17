import React, { useState, useEffect } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage.tsx';

interface HeroProps {
  onViewStories: () => void;
  onInquireNow: () => void;
}

const HERO_SLIDES = [
  {
    localSrc: '/photos/hero_dsc6050.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1veUpQeAR3zg0FquTnKBRETj00nUL2x5M=w2000',
    title: 'The Sacred Vows Under Crimson Florals',
    location: 'Delhi NCR',
    objectPosition: 'center 32%'
  },
  {
    localSrc: '/photos/hero_1g9a1529.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1Ifc-xoBuCnBeODxWc9LvydVjaFglJx4m=w2000',
    title: 'Imperial Vows & Golden Radiance',
    location: 'Delhi NCR Palatial Resort',
    objectPosition: 'center 28%'
  },
  {
    localSrc: '/photos/story_dsc6469.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1UV0_Iqnr2ARySr9oZgemmTpIlXKUqHiR=w2000',
    title: 'The Jaimala Reverie & Rose Petal Shower',
    location: 'Delhi NCR',
    objectPosition: 'center 35%'
  },
  {
    localSrc: '/photos/story_dsc6625.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/10ilaTlpqZ4bzLZzJT-FI58U3pjIvpIhG=w2000',
    title: 'Royal Mandap Silhouette & Twilight Pheras',
    location: 'Delhi NCR',
    objectPosition: 'center 38%'
  }
];

export const Hero: React.FC<HeroProps> = ({ onViewStories, onInquireNow }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-end pb-16 sm:pb-20 lg:pb-24">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.localSrc}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform', transitionDuration: '1400ms' }}
          >
            <OptimizedImage
              src={slide.localSrc}
              fallbackSrc={slide.remoteSrc}
              alt={slide.title}
              priority={idx === 0}
              objectPosition={slide.objectPosition}
              className="w-full h-full object-cover brightness-[0.82] contrast-[1.05]"
            />
          </div>
        ))}

        {/* Cinematic Scrim & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-[#0c0c0d]/40 to-[#0c0c0d]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0d]/50 via-transparent to-[#0c0c0d]/50 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Editorial Category Kicker */}
          <div className="space-y-2">
            <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#d6d0c4] font-medium block">
              Wedding Photography &amp; Cinematography
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-[#faf9f5] tracking-tight leading-[1.02]">
              PICTURESPOT STUDIO
            </h1>
          </div>

          {/* Brand Tagline & Editorial Trust Statement */}
          <div className="space-y-3 pt-1 border-t border-white/15 max-w-xl">
            <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#eae6de] font-normal tracking-wide">
              “WE ARE MORE CREATIVE FOR YOU”
            </p>
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#beb8ac] font-light">
              Since 2015 <span className="text-white/40">·</span> 1,000+ Weddings <span className="text-white/40">·</span> Delhi NCR
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3">
            <button
              onClick={onViewStories}
              className="px-7 py-3.5 sm:px-8 sm:py-4 bg-[#f4f2ee] text-[#0c0c0d] text-xs font-medium tracking-[0.22em] uppercase hover:bg-white transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center gap-2 group"
            >
              <span>VIEW OUR STORIES</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onInquireNow}
              className="px-7 py-3.5 sm:px-8 sm:py-4 bg-transparent border border-[#f4f2ee]/40 text-[#f4f2ee] text-xs font-medium tracking-[0.22em] uppercase hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
            >
              INQUIRE NOW
            </button>
          </div>
        </div>

        {/* Hero Bottom Bar: Slide Navigation & Scroll Indicator */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex items-center justify-between text-xs tracking-widest text-[#a8a39a]">
          {/* Subtle Slide Indicators */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`View slide ${i + 1}`}
                className={`h-[2px] transition-all duration-500 cursor-pointer ${
                  activeSlide === i ? 'w-8 bg-white' : 'w-3 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8e887f] ml-2">
              0{activeSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Scroll Prompt */}
          <button
            onClick={() => {
              const el = document.getElementById('introduction');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#beb8ac] hover:text-white transition-colors cursor-pointer group"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
