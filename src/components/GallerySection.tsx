import React, { useState } from 'react';
import { PICTURESPOT_IMAGES, PictureSpotImage } from '../data/picturespot_assets.ts';
import { OptimizedImage } from './OptimizedImage.tsx';

interface GallerySectionProps {
  onOpenLightbox: (image: PictureSpotImage) => void;
}

const GALLERY_TABS = [
  { id: 'all', label: 'All Works' },
  { id: 'bridal', label: 'Bridal Portraits' },
  { id: 'couple', label: 'Couple Portraits' },
  { id: 'ceremony', label: 'Wedding Ceremonies' },
  { id: 'candid', label: 'Candid Moments' },
  { id: 'prewedding', label: 'Pre-Wedding' },
  { id: 'story', label: 'Wedding Stories' }
];

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredImages = PICTURESPOT_IMAGES.filter((img) => {
    if (activeTab === 'all') return true;
    return img.category === activeTab;
  });

  return (
    <section id="gallery" className="py-24 sm:py-32 lg:py-40 bg-[#0c0c0d] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
              Curated Master Archive
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5]">
              THE ARCHIVE
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#ded9cf]">
              “Authentic storytelling through natural light, quiet observation, and cinematic framing.”
            </p>
          </div>

          <div className="text-xs text-[#88837a] tracking-widest uppercase">
            <span>SHOWING {filteredImages.length} CURATED FRAMES</span>
          </div>
        </div>

        {/* Category Tabs (Segmented controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-white/10">
          {GALLERY_TABS.map((tab) => {
            const count = tab.id === 'all'
              ? PICTURESPOT_IMAGES.length
              : PICTURESPOT_IMAGES.filter((img) => img.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs tracking-[0.18em] uppercase transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-white text-black font-medium'
                    : 'bg-white/[0.04] text-[#a8a39a] hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] opacity-60 tabular-nums">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Editorial Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredImages.map((img, idx) => {
            // Give subtle rhythmic height variety
            const isTall = img.aspect === 'portrait' || idx % 5 === 0;

            return (
              <div
                key={img.id}
                onClick={() => onOpenLightbox(img)}
                className="group cursor-pointer space-y-3"
              >
                <div
                  className={`relative overflow-hidden bg-neutral-900 border border-white/5 ${
                    isTall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                >
                  <OptimizedImage
                    src={img.localSrc}
                    fallbackSrc={img.remoteSrc}
                    alt={img.title}
                    objectPosition={img.aspect === 'portrait' ? 'center 18%' : 'center 32%'}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-95 group-hover:brightness-105"
                  />

                  {/* Editorial Hover Metadata Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#ded9ce] block">
                      {img.category} · {img.location}
                    </span>
                    <h4 className="font-serif text-lg text-white font-light">
                      {img.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#88837a] tracking-wider">
                  <span className="font-serif text-sm text-[#dad5cb] truncate pr-2">
                    {img.title}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#736e66] shrink-0">
                    {img.location}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
