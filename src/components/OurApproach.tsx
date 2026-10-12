import React from 'react';
import { OptimizedImage } from './OptimizedImage.tsx';

export const OurApproach: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#0c0c0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#ded9ce] tracking-wide uppercase">
                WE DON’T JUST PHOTOGRAPH WEDDINGS.
              </h2>
            </div>

            <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-[#faf9f5] leading-[1.15]">
              “WE DOCUMENT THE FEELING.”
            </p>

            <div className="space-y-6 text-sm sm:text-base text-[#b0aba0] font-light leading-relaxed max-w-xl">
              <p>
                Our approach is built around real emotions, honest interactions and the little moments that often become the most important memories.
              </p>
              <p>
                We blend candid observation with artistic composition and cinematic storytelling to create photographs and films that feel authentic, personal and timeless.
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-[#88837a]">
                Discreet Presence · Ambient Lighting · Heirloom Colour Grading
              </p>
            </div>
          </div>

          {/* Powerful Real Wedding Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/10 group shadow-2xl">
              <OptimizedImage
                src="/photos/couple_2f7a.jpg"
                fallbackSrc="https://lh3.googleusercontent.com/d/1kCvtrebANTqAmlGMohmSwj417sY_jSch=w1800"
                alt="PictureSpot Studio — Editorial Wedding Couple in Regal Attire"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#ded9ce] tracking-widest uppercase">
                <span className="font-serif text-sm">Editorial Couple Portrait</span>
                <span>Delhi NCR</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
