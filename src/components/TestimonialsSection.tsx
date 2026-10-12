import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/picturespot_assets.ts';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#0e0e10] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5]">
            WORDS FROM OUR COUPLES
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#ded9cf] font-light">
            “The most meaningful reward is hearing how our work made them feel.”
          </p>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="space-y-6 p-8 sm:p-10 bg-[#0c0c0d] border border-white/10 relative"
            >
              <Quote className="w-8 h-8 text-[#88837a]/30 stroke-[1]" />
              
              <p className="font-serif italic text-lg sm:text-xl text-[#faf9f5] leading-relaxed">
                “{t.quote}”
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-white tracking-wide">
                    {t.coupleNames}
                  </h4>
                  <span className="text-xs text-[#88837a] tracking-wider uppercase block">
                    {t.weddingLocation} · {t.weddingYear}
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#a8a39a] px-2.5 py-1 border border-white/15">
                  VERIFIED COUPLE
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
