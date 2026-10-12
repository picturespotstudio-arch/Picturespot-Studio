import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Calendar, MapPin, Sparkles, Film } from 'lucide-react';
import { WeddingStory, PictureSpotImage } from '../data/picturespot_assets.ts';
import { OptimizedImage } from './OptimizedImage.tsx';

interface WeddingStoryModalProps {
  story: WeddingStory | null;
  onClose: () => void;
  onSelectStory: (story: WeddingStory) => void;
  allStories: WeddingStory[];
  onOpenInquireWithStory: (storyName: string) => void;
  onOpenLightbox: (image: PictureSpotImage) => void;
}

export const WeddingStoryModal: React.FC<WeddingStoryModalProps> = ({
  story,
  onClose,
  onSelectStory,
  allStories,
  onOpenInquireWithStory,
  onOpenLightbox
}) => {
  useEffect(() => {
    if (story) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [story]);

  if (!story) return null;

  const currentIndex = allStories.findIndex((s) => s.id === story.id);
  const nextStory = allStories[(currentIndex + 1) % allStories.length];
  const prevStory = allStories[(currentIndex - 1 + allStories.length) % allStories.length];

  // Partition images for story pacing
  const coverImage = story.coverImage;
  const alternatingPair = story.images.slice(1, 3);
  const fullWidthHero2 = story.images[3] || story.images[1];
  const bridalCollection = story.images.filter(img => img.category === 'bridal' || img.category === 'story').slice(0, 3);
  const coupleSeries = story.images.filter(img => img.category === 'couple').slice(0, 4);
  const ceremonyMoments = story.images.filter(img => img.category === 'ceremony' || img.category === 'candid').slice(0, 4);
  const closingImage = story.images[story.images.length - 1] || coverImage;

  return (
    <div className="fixed inset-0 z-50 bg-[#0c0c0d] overflow-y-auto">
      {/* Floating Top Control Bar */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-[#0c0c0d]/90 backdrop-blur-md border-b border-white/10 px-6 sm:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif tracking-[0.2em] text-sm text-[#faf9f5] uppercase font-light">
            PICTURESPOT STUDIO
          </span>
          <span className="text-white/20">·</span>
          <span className="text-xs tracking-widest text-[#a8a39a] uppercase hidden sm:inline">
            {story.coupleNames}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenInquireWithStory(story.coupleNames)}
            className="px-4 py-2 text-[11px] tracking-[0.2em] uppercase bg-[#f4f2ee] text-[#0c0c0d] font-medium hover:bg-white transition-colors"
          >
            INQUIRE FOR THIS STYLE
          </button>

          <button
            onClick={onClose}
            className="p-2 text-[#d4cfc7] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Close story view"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* 1. Full-screen Opening Photograph */}
      <div className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden flex items-end pb-16 px-6 sm:px-12">
        <OptimizedImage
          src={coverImage.localSrc}
          fallbackSrc={coverImage.remoteSrc}
          alt={coverImage.title}
          priority
          className="absolute inset-0 w-full h-full object-cover brightness-[0.8] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-[#0c0c0d]/30 to-black/30" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#d6d0c4]">
            <MapPin className="w-3.5 h-3.5 text-[#d6d0c4]" />
            <span>{story.location}</span>
            <span className="text-white/30">·</span>
            <Calendar className="w-3.5 h-3.5 text-[#d6d0c4]" />
            <span>{story.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#faf9f5] leading-[1.05]">
            {story.coupleNames}
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-[#ded9cf] max-w-2xl">
            “{story.tagline}”
          </p>
        </div>
      </div>

      {/* 2. Short Story Introduction & Narrative */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-8 text-center sm:text-left">
        <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] block text-center">
          The Wedding Chronicle
        </span>

        <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#faf9f5] leading-relaxed text-center">
          {story.description}
        </p>

        <div className="pt-8 border-t border-white/10 text-base sm:text-lg text-[#b8b3a7] font-light leading-relaxed max-w-3xl mx-auto space-y-6">
          <p>{story.extendedStory}</p>
        </div>

        {story.ceremonyHighlights && story.ceremonyHighlights.length > 0 && (
          <div className="pt-10 border-t border-white/10">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#88837a] block mb-4 text-center">
              Ceremony Chapters
            </span>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {story.ceremonyHighlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="text-xs tracking-wider text-[#d0cbc2] py-1.5 px-3 border border-white/10 bg-white/[0.02]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. Large Alternating Photographs */}
      {alternatingPair.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {alternatingPair.map((img, i) => (
              <div
                key={img.id}
                onClick={() => onOpenLightbox(img)}
                className={`group cursor-pointer space-y-4 ${i === 1 ? 'md:translate-y-12' : ''}`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5">
                  <OptimizedImage
                    src={img.localSrc}
                    fallbackSrc={img.remoteSrc}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-[#8f897e] tracking-wider pt-1">
                  <span>{img.title}</span>
                  <span className="text-[10px] uppercase tracking-widest">{img.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Full-Width Statement Photograph */}
      {fullWidthHero2 && (
        <div className="w-full my-20 sm:my-32">
          <div
            onClick={() => onOpenLightbox(fullWidthHero2)}
            className="group cursor-pointer relative h-[65vh] sm:h-[80vh] w-full overflow-hidden"
          >
            <OptimizedImage
              src={fullWidthHero2.localSrc}
              fallbackSrc={fullWidthHero2.remoteSrc}
              alt={fullWidthHero2.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-6 sm:left-12 max-w-2xl">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#ded9ce] block mb-2">
                Cinematic Frame
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-white font-light">
                {fullWidthHero2.title}
              </p>
              {fullWidthHero2.caption && (
                <p className="text-xs text-[#beb8ad] tracking-wide mt-1">
                  {fullWidthHero2.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. Bridal & Solo Portraits Spotlight */}
      {bridalCollection.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="max-w-xl mb-12 space-y-2">
            <span className="text-xs tracking-[0.3em] uppercase text-[#88837a]">
              The Solitary Gaze
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-light text-[#faf9f5]">
              Bridal &amp; Editorial Portraits
            </h3>
            <p className="text-xs sm:text-sm text-[#a8a39a] font-light">
              Quiet moments of anticipation captured in pure ambient natural light.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bridalCollection.map((img) => (
              <div
                key={img.id}
                onClick={() => onOpenLightbox(img)}
                className="group cursor-pointer space-y-3"
              >
                <div className="aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5">
                  <OptimizedImage
                    src={img.localSrc}
                    fallbackSrc={img.remoteSrc}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs font-serif text-[#dcd7ce] group-hover:text-white transition-colors">
                  {img.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Couple Portraits & Ceremony Moments Spread */}
      {coupleSeries.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-white/5">
          <div className="max-w-xl mb-12 space-y-2">
            <span className="text-xs tracking-[0.3em] uppercase text-[#88837a]">
              Togetherness
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-light text-[#faf9f5]">
              Rituals, Vows &amp; Sacred Promises
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {coupleSeries.map((img, i) => (
              <div
                key={img.id}
                onClick={() => onOpenLightbox(img)}
                className="group cursor-pointer space-y-4"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/5">
                  <OptimizedImage
                    src={img.localSrc}
                    fallbackSrc={img.remoteSrc}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-[#8f897e]">
                  <span className="font-serif text-[#dcd7ce]">{img.title}</span>
                  <span className="text-[10px] tracking-widest uppercase">{img.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Closing Photograph */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <div
          onClick={() => onOpenLightbox(closingImage)}
          className="group cursor-pointer aspect-[16/9] overflow-hidden border border-white/10"
        >
          <OptimizedImage
            src={closingImage.localSrc}
            fallbackSrc={closingImage.remoteSrc}
            alt={closingImage.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
          />
        </div>
        <div className="text-center mt-6">
          <span className="text-xs tracking-[0.3em] uppercase text-[#8f8a80]">
            The Journey Begins
          </span>
          <p className="font-serif italic text-xl text-[#ded9cf] mt-1">
            {story.coupleNames} · {story.location}
          </p>
        </div>
      </div>

      {/* 8. Story Navigation Footer ("VIEW NEXT STORY") */}
      <div className="border-t border-white/10 bg-[#0e0e10] py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          
          <button
            onClick={() => onSelectStory(prevStory)}
            className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#a8a39a] hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>PREVIOUS STORY ({prevStory.coupleNames})</span>
          </button>

          <button
            onClick={() => onOpenInquireWithStory(story.coupleNames)}
            className="px-8 py-4 bg-[#f4f2ee] text-[#0c0c0d] text-xs tracking-[0.2em] font-medium uppercase hover:bg-white transition-all cursor-pointer"
          >
            INQUIRE ABOUT YOUR WEDDING
          </button>

          <button
            onClick={() => onSelectStory(nextStory)}
            className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#a8a39a] hover:text-white transition-colors cursor-pointer group"
          >
            <span>VIEW NEXT STORY ({nextStory.coupleNames})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
