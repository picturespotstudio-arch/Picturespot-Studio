import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, Check } from 'lucide-react';
import { WEDDING_FILMS, WeddingFilm } from '../data/picturespot_assets.ts';
import { OptimizedImage } from './OptimizedImage.tsx';

interface WeddingFilmsSectionProps {
  onInquireFilm: (filmTitle: string) => void;
}

export const WeddingFilmsSection: React.FC<WeddingFilmsSectionProps> = ({ onInquireFilm }) => {
  const [selectedFilm, setSelectedFilm] = useState<WeddingFilm>(WEDDING_FILMS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [currentProgress, setCurrentProgress] = useState<number>(35);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleFullscreen = () => {
    const el = document.getElementById('cinema-player-container');
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <section id="films" className="py-24 sm:py-32 lg:py-40 bg-[#09090a] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
              Cinematic Motion
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5]">
              WEDDING FILMS
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#ded9cf]">
              “Your wedding, brought back to life.”
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#9f9a90] max-w-md font-light leading-relaxed">
            Filmed on full-frame cinema optics with live acoustic audio capture and custom orchestral scoring. Every film is individually colored to preserve the timeless warmth of your vows.
          </p>
        </div>

        {/* Cinematic Widescreen Video Player Container */}
        <div
          id="cinema-player-container"
          className="relative w-full aspect-[16/9] sm:aspect-[2.35/1] overflow-hidden bg-black border border-white/10 group shadow-2xl"
        >
          {/* Visual Presentation — High Quality PictureSpot Motion Frame */}
          <div className="absolute inset-0">
            <OptimizedImage
              src={selectedFilm.thumbnail.localSrc}
              fallbackSrc={selectedFilm.thumbnail.remoteSrc}
              alt={selectedFilm.title}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                isPlaying ? 'scale-105 brightness-95' : 'scale-100 brightness-75'
              }`}
            />
            {/* Anamorphic letterbox glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
          </div>

          {/* Center Play/Pause Overlay Indicator */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn focus:outline-none"
            aria-label={isPlaying ? 'Pause cinematic preview' : 'Play cinematic preview'}
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-white group-hover/btn:text-black ${
                isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Play className="w-6 h-6 ml-1 stroke-[1.5]" />
              )}
            </div>
          </button>

          {/* Top Film Info Stamp */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs tracking-widest text-white/80 pointer-events-none">
            <div className="flex items-center gap-3">
              <span className="font-serif text-sm sm:text-base text-white tracking-widest uppercase">
                PICTURESPOT CINEMA
              </span>
              <span className="text-white/40">·</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#d6d0c4]">
                4K HDR · {selectedFilm.location}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#d6d0c4]">
                PREVIEW STREAM
              </span>
            </div>
          </div>

          {/* Bottom Player Controls & Metadata Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black via-black/80 to-transparent space-y-4">
            
            {/* Scrubber Progress Bar */}
            <div className="w-full bg-white/20 h-[3px] rounded-full overflow-hidden cursor-pointer">
              <div
                className="bg-[#f4f2ee] h-full transition-all duration-300"
                style={{ width: `${currentProgress}%` }}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#a8a39a]">
                  {selectedFilm.coupleNames} · {selectedFilm.duration}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-light">
                  {selectedFilm.title}
                </h3>
              </div>

              {/* Player Tool Actions */}
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full border border-white/20 hover:border-white text-white/80 hover:text-white transition-colors cursor-pointer bg-black/40"
                  aria-label={isMuted ? 'Unmute preview' : 'Mute preview'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={toggleFullscreen}
                  className="p-2.5 rounded-full border border-white/20 hover:border-white text-white/80 hover:text-white transition-colors cursor-pointer bg-black/40"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onInquireFilm(selectedFilm.title)}
                  className="px-5 py-2.5 bg-[#f4f2ee] text-[#0c0c0d] text-xs font-medium tracking-[0.2em] uppercase hover:bg-white transition-colors"
                >
                  INQUIRE FILM
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Film Thumbnail Carousel / Selectors */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#88837a] block mb-4">
            Select Film Reel
          </span>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {WEDDING_FILMS.map((film) => {
              const isSelected = film.id === selectedFilm.id;
              return (
                <div
                  key={film.id}
                  onClick={() => {
                    setSelectedFilm(film);
                    setCurrentProgress(0);
                    setIsPlaying(true);
                  }}
                  className={`group cursor-pointer space-y-2 border p-3 transition-all ${
                    isSelected
                      ? 'border-white/60 bg-white/[0.04]'
                      : 'border-white/10 hover:border-white/30 bg-transparent'
                  }`}
                >
                  <div className="aspect-[16/9] overflow-hidden bg-neutral-900 relative">
                    <OptimizedImage
                      src={film.thumbnail.localSrc}
                      fallbackSrc={film.thumbnail.remoteSrc}
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-[10px] text-white/80 tabular-nums">
                      {film.duration}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-xs font-serif text-[#faf9f5] block group-hover:text-white truncate">
                      {film.title}
                    </span>
                    <span className="text-[10px] tracking-wider uppercase text-[#88837a] block truncate">
                      {film.coupleNames} · {film.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
