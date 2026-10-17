import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PICTURESPOT_IMAGES, PictureSpotImage } from '../data/picturespot_assets.ts';
import { OptimizedImage } from './OptimizedImage.tsx';

interface PreWeddingSectionProps {
  onOpenLightbox: (image: PictureSpotImage) => void;
  onInquirePreWedding: () => void;
}

const PREWED_CATEGORIES = [
  'All',
  'Pre-Wedding Photography',
  'Pre-Wedding Films',
  'Couple Portraits',
  'Creative Locations'
];

export const PreWeddingSection: React.FC<PreWeddingSectionProps> = ({
  onOpenLightbox,
  onInquirePreWedding
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const preweddingImages = PICTURESPOT_IMAGES.filter((img) => img.category === 'prewedding');

  // Filter based on active category
  const filteredImages = preweddingImages.filter((img) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Pre-Wedding Photography') return true;
    if (activeCategory === 'Pre-Wedding Films') return img.title.toLowerCase().includes('film') || img.aspect === 'landscape';
    if (activeCategory === 'Couple Portraits') return img.aspect === 'portrait' || img.title.toLowerCase().includes('intimate');
    if (activeCategory === 'Creative Locations') return img.location.includes('Hills') || img.location.includes('Stepwell') || img.location.includes('Countryside');
    return true;
  });

  return (
    <section id="prewedding" className="py-24 sm:py-32 lg:py-40 bg-[#0c0c0d] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
              Pre-Wedding Chronicles
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5] leading-[1.08]">
              BEFORE THE WEDDING, <br />
              <span className="italic font-normal text-[#ded9cf]">THERE WAS YOUR STORY.</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-md">
            <p className="text-xs sm:text-sm text-[#9f9a90] font-light leading-relaxed">
              Quiet moments in open fields, warm shadows along historic stepwells, and unhurried laughter documented before the wedding week begins.
            </p>
            <button
              onClick={onInquirePreWedding}
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#faf9f5] hover:text-[#d4cebe] pb-1 border-b border-white/30 hover:border-white transition-colors cursor-pointer"
            >
              <span>EXPLORE PRE-WEDDINGS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Functional Category Filter Segmented Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PREWED_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs tracking-[0.18em] uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-black font-medium'
                  : 'bg-white/[0.04] text-[#a8a39a] hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Editorial Gallery Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => onOpenLightbox(img)}
              className="group cursor-pointer space-y-3"
            >
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5 relative">
                <OptimizedImage
                  src={img.localSrc}
                  fallbackSrc={img.remoteSrc}
                  alt={img.title}
                  objectPosition={img.aspect === 'portrait' ? 'center 22%' : 'center 35%'}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white px-3 py-1.5 border border-white/40 bg-black/50 backdrop-blur-sm">
                    VIEW FRAME
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-sm text-[#faf9f5] group-hover:text-white transition-colors truncate">
                  {img.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-[#88837a] tracking-wider uppercase">
                  <span>{img.location}</span>
                  <span>PictureSpot</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs tracking-wider text-[#9f9a90]">
            Planning a pre-wedding film or outdoor session in Delhi NCR or hills?
          </span>
          <button
            onClick={onInquirePreWedding}
            className="px-8 py-3.5 bg-[#f4f2ee] text-[#0c0c0d] text-xs tracking-[0.2em] uppercase font-medium hover:bg-white transition-all cursor-pointer"
          >
            BOOK A PRE-WEDDING SHOOT
          </button>
        </div>

      </div>
    </section>
  );
};
