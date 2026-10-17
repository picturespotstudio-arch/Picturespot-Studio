import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage.tsx';
import { BRAND_DETAILS } from '../data/picturespot_assets.ts';

interface FinalCTAProps {
  onStartConversation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartConversation }) => {
  return (
    <section className="relative h-[85vh] sm:h-[95vh] w-full overflow-hidden flex items-center justify-center text-center px-6 sm:px-12">
      {/* Dramatic Full-Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/photos/story_dsc6469.jpg"
          fallbackSrc="https://lh3.googleusercontent.com/d/1UV0_Iqnr2ARySr9oZgemmTpIlXKUqHiR=w1800"
          alt="PictureSpot Studio Dramatic Jaimala Petal Shower"
          objectPosition="center 30%"
          className="w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-black/40 to-[#0c0c0d]/70 pointer-events-none" />
      </div>

      {/* Center Editorial Typography Content */}
      <div className="relative z-10 max-w-4xl space-y-8 sm:space-y-10">
        <div className="space-y-4">
          <span className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#ded9ce] font-medium block">
            Begin Your Wedding Chronicle
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#faf9f5] leading-[1.08] text-balance">
            YOUR STORY DESERVES <br />
            <span className="italic font-normal text-[#ded9ce]">TO BE REMEMBERED BEAUTIFULLY.</span>
          </h2>
        </div>

        <div className="space-y-2 pt-2 border-t border-white/20 max-w-xl mx-auto">
          <span className="font-serif tracking-[0.25em] text-lg sm:text-xl uppercase font-light text-white block">
            PICTURESPOT STUDIO
          </span>
          <span className="text-xs tracking-[0.25em] uppercase text-[#beb8ac] block">
            Wedding Photography &amp; Cinematography
          </span>
          <p className="font-serif italic text-base sm:text-lg text-[#ded9ce]">
            “{BRAND_DETAILS.tagline}”
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
          <button
            onClick={onStartConversation}
            className="px-8 py-4 bg-[#f4f2ee] text-[#0c0c0d] text-xs font-medium tracking-[0.25em] uppercase hover:bg-white transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>START A CONVERSATION</span>
          </button>

          <a
            href={BRAND_DETAILS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-white/40 text-white text-xs font-medium tracking-[0.25em] uppercase hover:bg-white/10 hover:border-white transition-all cursor-pointer flex items-center gap-2"
          >
            <span>INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
