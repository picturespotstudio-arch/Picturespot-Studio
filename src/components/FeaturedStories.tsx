import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { WeddingStory } from '../data/picturespot_assets.ts';
import { OptimizedImage } from './OptimizedImage.tsx';

interface FeaturedStoriesProps {
  stories: WeddingStory[];
  onSelectStory: (story: WeddingStory) => void;
}

export const FeaturedStories: React.FC<FeaturedStoriesProps> = ({ stories, onSelectStory }) => {
  return (
    <section id="stories" className="py-24 sm:py-32 lg:py-40 bg-[#0c0c0d] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
            Curated Visual Chronicles
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5]">
            FEATURED STORIES
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#ded9cf] font-light">
            “Every wedding has its own rhythm, its own people and its own story.”
          </p>
        </div>

        {/* Editorial Story Layout — Asymmetrical & Large Format */}
        <div className="space-y-24 sm:space-y-36">
          {stories.map((story, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={story.id}
                onClick={() => onSelectStory(story)}
                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Large Featured Image */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/5">
                    <OptimizedImage
                      src={story.coverImage.localSrc}
                      fallbackSrc={story.coverImage.remoteSrc}
                      alt={story.coverImage.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.92] group-hover:brightness-100"
                    />

                    {/* Subtle Overlay Badge on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="px-5 py-2.5 bg-white/90 backdrop-blur-sm text-black text-xs tracking-[0.25em] uppercase font-medium">
                        EXPLORE WEDDING STORY
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Story Details */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1 lg:pr-6' : 'lg:order-2 lg:pl-6'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#88837a]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{story.location}</span>
                    <span className="text-white/20">·</span>
                    <span>{story.year}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#faf9f5] group-hover:text-[#ded9ce] transition-colors leading-[1.1]">
                    {story.coupleNames}
                  </h3>

                  <p className="font-serif italic text-base sm:text-lg text-[#ccc6b8]">
                    “{story.tagline}”
                  </p>

                  <p className="text-xs sm:text-sm text-[#9f9a90] font-light leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {story.description}
                  </p>

                  {/* Clean unboxed link button */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#faf9f5] group-hover:text-[#d4cebe] transition-colors pb-1 border-b border-white/30 group-hover:border-white">
                      <span>READ FULL STORY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
