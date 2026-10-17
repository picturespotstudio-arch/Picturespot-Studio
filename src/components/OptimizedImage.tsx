import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  imgClassName = '',
  objectPosition,
  priority = false,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#141416] ${className}`}>
      {/* Subtle loader shimmer while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-900/60 animate-pulse" />
      )}

      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${imgClassName} ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={objectPosition ? { objectPosition, ...props.style } : props.style}
          {...props}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#1c1b19] text-[#a8a39d]">
          <span className="font-serif italic text-lg text-[#d8d3cc] mb-1">PictureSpot Studio</span>
          <span className="text-xs uppercase tracking-widest text-[#8c857b]">{alt}</span>
        </div>
      )}
    </div>
  );
};
