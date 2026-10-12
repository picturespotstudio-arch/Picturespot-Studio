import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-24 sm:py-32 lg:py-40 bg-[#0e0e10] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Section Kicker & Headline */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs tracking-[0.3em] uppercase text-[#8f8a80] font-medium block">
              Editorial Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5] leading-[1.12] text-balance">
              WE CAPTURE THE MOMENTS <br />
              <span className="italic font-normal text-[#d6d0c4]">YOU’LL WANT TO REMEMBER.</span>
            </h2>
          </div>

          {/* Prose & Stats */}
          <div className="lg:col-span-6 space-y-12 lg:pl-6">
            <p className="text-base sm:text-lg text-[#ccc6ba] font-light leading-relaxed">
              “Since 2015, PictureSpot Studio has been documenting weddings through photographs and films that preserve the emotions, people and moments behind every celebration.
            </p>
            <p className="text-sm sm:text-base text-[#a8a398] font-light leading-relaxed">
              From intimate ceremonies to grand destination weddings, our approach combines authentic storytelling, thoughtful composition and cinematic visual language to create wedding memories that remain timeless.”
            </p>

            {/* Editorial Stats Strip — Clean unboxed metadata with tabular numerals */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-1.5">
                <span className="font-serif text-3xl sm:text-4xl font-light text-[#faf9f5] tabular-nums block">
                  2015
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8f8a80]">
                  ESTABLISHED
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="font-serif text-3xl sm:text-4xl font-light text-[#faf9f5] tabular-nums block">
                  1000+
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8f8a80]">
                  WEDDINGS
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="font-serif text-3xl sm:text-4xl font-light text-[#faf9f5] block">
                  DELHI NCR
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8f8a80]">
                  BASED IN INDIA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
