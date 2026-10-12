import React from 'react';
import { OptimizedImage } from './OptimizedImage.tsx';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-[#0c0c0d] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24 sm:space-y-32">
        
        {/* Main About Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/10 group shadow-2xl">
              <OptimizedImage
                src="/photos/bride_081a8717.jpg"
                fallbackSrc="https://lh3.googleusercontent.com/d/1dGfBsg9VzNkuOQOdZL6Jrnbhqm4zLUsY=w1400"
                alt="PictureSpot Studio Bridal Portrait Craft"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#ded9ce] block">
                  Studio Craft &amp; Heritage
                </span>
                <span className="font-serif italic text-lg text-white">
                  Preserving Heirlooms Since 2015
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
                The Studio
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5]">
                ABOUT PICTURESPOT STUDIO
              </h2>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-[#b0aba0] font-light leading-relaxed">
              <p>
                “PictureSpot Studio is a Delhi NCR-based wedding photography and cinematography brand established in 2015.
              </p>
              <p>
                Over the years, we have documented more than 1,000 weddings, from intimate family celebrations to large-scale and destination weddings.
              </p>
              <p>
                Our work is driven by a simple philosophy — to create photographs and films that feel as real, emotional and memorable as the day itself.”
              </p>
            </div>

            {/* Stats Band */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-light text-[#faf9f5] tabular-nums block">
                  2015
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#88837a]">
                  ESTABLISHED
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-light text-[#faf9f5] tabular-nums block">
                  1000+
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#88837a]">
                  WEDDINGS COVERED
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-light text-[#faf9f5] block">
                  DELHI NCR
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#88837a]">
                  INDIA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* WHY PICTURESPOT — Minimal Editorial Columns */}
        <div className="pt-16 border-t border-white/10 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] block">
              Distinctive Standards
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-light text-[#faf9f5]">
              WHY PICTURESPOT
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            
            <div className="space-y-3 pt-6 border-t border-white/15">
              <span className="font-serif text-2xl text-[#88837a] block">01</span>
              <h4 className="text-base font-serif text-[#faf9f5] tracking-wider uppercase">
                EXPERIENCE
              </h4>
              <p className="text-xs sm:text-sm text-[#9f9a90] font-light leading-relaxed">
                Over a decade of wedding storytelling and hundreds of unique family cultures documented.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/15">
              <span className="font-serif text-2xl text-[#88837a] block">02</span>
              <h4 className="text-base font-serif text-[#faf9f5] tracking-wider uppercase">
                STORYTELLING
              </h4>
              <p className="text-xs sm:text-sm text-[#9f9a90] font-light leading-relaxed">
                Photography and films built around real emotions, natural expressions and honest glances.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/15">
              <span className="font-serif text-2xl text-[#88837a] block">03</span>
              <h4 className="text-base font-serif text-[#faf9f5] tracking-wider uppercase">
                CINEMATIC APPROACH
              </h4>
              <p className="text-xs sm:text-sm text-[#9f9a90] font-light leading-relaxed">
                A refined visual language for modern weddings with bespoke color grading and anamorphic framing.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/15">
              <span className="font-serif text-2xl text-[#88837a] block">04</span>
              <h4 className="text-base font-serif text-[#faf9f5] tracking-wider uppercase">
                PERSONAL ATTENTION
              </h4>
              <p className="text-xs sm:text-sm text-[#9f9a90] font-light leading-relaxed">
                Every wedding is treated as its own story with customized shot planning and senior director coverage.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
