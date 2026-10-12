import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { PictureSpotImage } from '../data/picturespot_assets.ts';
import { OptimizedImage } from './OptimizedImage.tsx';

interface ImageLightboxProps {
  image: PictureSpotImage | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  image,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#080809]/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-xs tracking-widest text-[#a8a39a] z-10">
        <div className="flex items-center gap-3">
          <span className="font-serif text-sm tracking-[0.2em] text-[#faf9f5] uppercase font-light">
            PICTURESPOT STUDIO
          </span>
          <span className="text-white/20">·</span>
          <span className="text-[11px] uppercase tracking-wider text-[#999] hidden sm:inline">
            ARCHIVE STILL
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Center Image View */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 my-2">
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
          </button>
        )}

        <div className="relative max-h-[75vh] max-w-[90vw] overflow-hidden shadow-2xl border border-white/10">
          <img
            src={image.localSrc}
            alt={image.title}
            onError={(e) => {
              if (image.remoteSrc && e.currentTarget.src !== image.remoteSrc) {
                e.currentTarget.src = image.remoteSrc;
              }
            }}
            className="max-h-[75vh] max-w-[90vw] object-contain"
          />
        </div>

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 stroke-[1.5]" />
          </button>
        )}
      </div>

      {/* Bottom Caption & Metadata */}
      <div className="max-w-3xl mx-auto text-center space-y-1.5 z-10 pb-2">
        <h4 className="font-serif text-lg sm:text-xl text-[#faf9f5] font-light">
          {image.title}
        </h4>
        <div className="flex items-center justify-center gap-2 text-xs text-[#88837a] tracking-wider uppercase">
          <MapPin className="w-3 h-3" />
          <span>{image.location}</span>
          <span className="text-white/20">·</span>
          <span>{image.category}</span>
        </div>
        {image.caption && (
          <p className="text-xs text-[#b8b2a6] font-light italic mt-1">
            “{image.caption}”
          </p>
        )}
      </div>
    </div>
  );
};
