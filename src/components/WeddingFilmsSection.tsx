import React, { useState, useEffect } from 'react';
import { Play, X, ExternalLink, Film, FolderOpen, Sparkles, Check, ChevronRight } from 'lucide-react';
import { WEDDING_FILMS, WeddingFilm, BRAND_DETAILS } from '../data/picturespot_assets.ts';
import { OptimizedImage } from './OptimizedImage.tsx';

interface WeddingFilmsSectionProps {
  onInquireFilm: (filmTitle: string) => void;
}

export const WeddingFilmsSection: React.FC<WeddingFilmsSectionProps> = ({ onInquireFilm }) => {
  const [selectedFilm, setSelectedFilm] = useState<WeddingFilm>(WEDDING_FILMS[0]);
  const [isEmbeddedPlaying, setIsEmbeddedPlaying] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'highlight' | 'teaser' | 'other'>('all');
  const [activeModalFilm, setActiveModalFilm] = useState<WeddingFilm | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalFilm(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredFilms = WEDDING_FILMS.filter((film) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'highlight') return film.category === 'highlight';
    if (activeCategory === 'teaser') return film.category === 'teaser';
    if (activeCategory === 'other') return film.category === 'haldi' || film.category === 'reel';
    return true;
  });

  const handleSelectAndPlay = (film: WeddingFilm) => {
    setSelectedFilm(film);
    setIsEmbeddedPlaying(true);
    // Smooth scroll into view of player if user is farther down
    const playerEl = document.getElementById('cinema-player-container');
    if (playerEl) {
      playerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleOpenCinemaModal = (film: WeddingFilm) => {
    setActiveModalFilm(film);
  };

  return (
    <section id="films" className="py-24 sm:py-32 lg:py-40 bg-[#09090a] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-[#ded9ce]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
                Cinematic Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5]">
              WEDDING FILMS
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#ded9cf]">
              “Your wedding, brought back to life.”
            </p>
          </div>

          <div className="space-y-3 max-w-md">
            <p className="text-xs sm:text-sm text-[#9f9a90] font-light leading-relaxed">
              Filmed on cinema-grade optics with multi-track ambient audio capture and custom orchestral scoring. Every film is individually colored to preserve the timeless warmth of your vows.
            </p>
            <a
              href={BRAND_DETAILS.googleDriveVideosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#d6d0c4] hover:text-white transition-colors border-b border-white/20 pb-0.5"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              Browse Official Google Drive Video Folder
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Cinematic Widescreen Video Player Container */}
        <div
          id="cinema-player-container"
          className="relative w-full aspect-[16/9] sm:aspect-[2.2/1] overflow-hidden bg-black border border-white/10 shadow-2xl transition-all"
        >
          {isEmbeddedPlaying ? (
            /* Direct Embedded Google Drive Video Player */
            <div className="w-full h-full relative bg-black">
              <iframe
                src={selectedFilm.embedUrl}
                title={selectedFilm.title}
                className="w-full h-full border-0 absolute inset-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
              {/* Floating Return Button */}
              <button
                onClick={() => setIsEmbeddedPlaying(false)}
                className="absolute top-4 right-4 z-20 px-3.5 py-1.5 bg-black/80 hover:bg-black text-white text-xs font-light tracking-wider border border-white/20 backdrop-blur-md flex items-center gap-1.5 transition-all cursor-pointer"
                title="Switch back to poster mode"
              >
                <X className="w-3.5 h-3.5" />
                Show Poster
              </button>
            </div>
          ) : (
            /* High Quality PictureSpot Motion Frame with Play Overlay */
            <>
              <div className="absolute inset-0">
                <OptimizedImage
                  src={selectedFilm.thumbnailSrc}
                  fallbackSrc={selectedFilm.remoteThumbnailSrc}
                  alt={selectedFilm.title}
                  objectPosition="center 30%"
                  className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-105"
                />
                {/* Anamorphic letterbox vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
              </div>

              {/* Center Play Button Overlay */}
              <button
                onClick={() => setIsEmbeddedPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group/btn focus:outline-none"
                aria-label={`Play ${selectedFilm.title}`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 bg-black/50 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-white group-hover/btn:text-black shadow-2xl">
                  <Play className="w-7 h-7 ml-1 fill-current stroke-[1.5]" />
                </div>
                <span className="mt-3 text-xs tracking-[0.25em] uppercase text-white/80 group-hover/btn:text-white transition-colors bg-black/40 px-3 py-1 backdrop-blur-sm border border-white/10">
                  Click To Play Film
                </span>
              </button>

              {/* Top Film Info Stamp */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs tracking-widest text-white/80 pointer-events-none">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm sm:text-base text-white tracking-widest uppercase">
                    PICTURESPOT CINEMA
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#d6d0c4]">
                    4K MASTER · {selectedFilm.location}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-[#d6d0c4]">
                    READY TO STREAM
                  </span>
                </div>
              </div>

              {/* Bottom Player Controls & Metadata Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black via-black/90 to-transparent space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-white/10 text-[10px] uppercase tracking-wider text-[#ded9ce]">
                        {selectedFilm.category}
                      </span>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#a8a39a]">
                        {selectedFilm.coupleNames} · {selectedFilm.duration}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-light">
                      {selectedFilm.title}
                    </h3>
                  </div>

                  {/* Player Tool Actions */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <button
                      onClick={() => setIsEmbeddedPlaying(true)}
                      className="px-4 py-2 bg-white text-[#0c0c0d] hover:bg-[#ded9ce] text-xs font-medium tracking-[0.15em] uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Play Video
                    </button>

                    <button
                      onClick={() => handleOpenCinemaModal(selectedFilm)}
                      className="px-3.5 py-2 border border-white/20 hover:border-white text-white/80 hover:text-white text-xs tracking-wider uppercase transition-colors cursor-pointer bg-black/40"
                    >
                      Cinema Mode
                    </button>

                    <a
                      href={selectedFilm.directWatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-white/20 hover:border-white text-white/80 hover:text-white transition-colors bg-black/40"
                      title="Open in Google Drive"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => onInquireFilm(selectedFilm.title)}
                      className="px-4 py-2 border border-[#d6d0c4]/40 text-[#ded9ce] hover:text-white hover:border-white text-xs font-medium tracking-[0.15em] uppercase transition-colors cursor-pointer"
                    >
                      Inquire Film
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#88837a] mr-2">
              Browse Films:
            </span>
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-black font-medium'
                  : 'text-[#9f9a90] hover:text-white bg-white/[0.02] border border-white/10'
              }`}
            >
              All Films ({WEDDING_FILMS.length})
            </button>
            <button
              onClick={() => setActiveCategory('highlight')}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === 'highlight'
                  ? 'bg-white text-black font-medium'
                  : 'text-[#9f9a90] hover:text-white bg-white/[0.02] border border-white/10'
              }`}
            >
              Highlights ({WEDDING_FILMS.filter((f) => f.category === 'highlight').length})
            </button>
            <button
              onClick={() => setActiveCategory('teaser')}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === 'teaser'
                  ? 'bg-white text-black font-medium'
                  : 'text-[#9f9a90] hover:text-white bg-white/[0.02] border border-white/10'
              }`}
            >
              Teasers ({WEDDING_FILMS.filter((f) => f.category === 'teaser').length})
            </button>
            <button
              onClick={() => setActiveCategory('other')}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === 'other'
                  ? 'bg-white text-black font-medium'
                  : 'text-[#9f9a90] hover:text-white bg-white/[0.02] border border-white/10'
              }`}
            >
              Haldi & Reels ({WEDDING_FILMS.filter((f) => f.category === 'haldi' || f.category === 'reel').length})
            </button>
          </div>

          <a
            href={BRAND_DETAILS.googleDriveVideosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#a8a39a] hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Open Google Drive Folder</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Film Thumbnail Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilms.map((film) => {
            const isCurrentlySelected = film.id === selectedFilm.id;
            return (
              <div
                key={film.id}
                className={`group cursor-pointer space-y-3 border p-4 transition-all duration-300 ${
                  isCurrentlySelected
                    ? 'border-white/60 bg-white/[0.05] ring-1 ring-white/20'
                    : 'border-white/10 hover:border-white/40 bg-white/[0.02] hover:bg-white/[0.04]'
                }`}
                onClick={() => handleSelectAndPlay(film)}
              >
                {/* Thumbnail Container */}
                <div className="aspect-[16/9] overflow-hidden bg-neutral-900 relative">
                  <OptimizedImage
                    src={film.thumbnailSrc}
                    fallbackSrc={film.remoteThumbnailSrc}
                    alt={film.title}
                    objectPosition="center 28%"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Play Button Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-black/60 border border-white/40 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-wider text-[#ded9ce]">
                    {film.category}
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-[10px] text-white/90 font-mono tracking-wider">
                    {film.duration}
                  </div>
                </div>

                {/* Film Metadata */}
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-serif text-[#faf9f5] group-hover:text-white line-clamp-1 font-light">
                      {film.title}
                    </h4>
                    <span className="text-[10px] text-[#88837a] uppercase tracking-wider shrink-0 mt-0.5">
                      {film.location}
                    </span>
                  </div>

                  <p className="text-xs text-[#9f9a90] line-clamp-2 font-light leading-relaxed">
                    {film.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs border-t border-white/5">
                    <span className="text-[11px] text-[#d6d0c4] group-hover:text-white flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      Watch Film
                    </span>
                    <a
                      href={film.directWatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[10px] text-[#88837a] hover:text-white uppercase tracking-wider flex items-center gap-1"
                      title="View in Google Drive"
                    >
                      Drive
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Cinema Viewer Modal */}
        {activeModalFilm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl">
            <div className="relative w-full max-w-5xl bg-[#0c0c0d] border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="space-y-0.5">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#a8a39a] block">
                    PictureSpot Cinema · {activeModalFilm.duration}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif text-[#faf9f5]">
                    {activeModalFilm.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeModalFilm.directWatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-white text-xs text-[#ded9ce] hover:text-white transition-colors"
                  >
                    <span>Open in Drive</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => setActiveModalFilm(null)}
                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    aria-label="Close cinema modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Iframe Video Container */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={activeModalFilm.embedUrl}
                  title={activeModalFilm.title}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer Notes & Inquire */}
              <div className="p-4 sm:p-6 bg-[#0e0e10] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-[#ded9ce] leading-relaxed">
                    {activeModalFilm.description}
                  </p>
                  <p className="text-[11px] text-[#88837a] italic">
                    {activeModalFilm.directorNotes}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      const title = activeModalFilm.title;
                      setActiveModalFilm(null);
                      onInquireFilm(title);
                    }}
                    className="px-5 py-2.5 bg-white text-black text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#ded9ce] transition-colors cursor-pointer"
                  >
                    Inquire For This Film
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
