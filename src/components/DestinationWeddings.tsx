import React from 'react';
import { MapPin } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage.tsx';

interface DestinationWeddingsProps {
  onInquireDestination: (location: string) => void;
}

const DESTINATION_HUBS = [
  {
    name: 'DELHI NCR',
    descriptor: 'Farmhouses, Heritage Retrreats & Luxury Hotels',
    image: '/photos/hero_dsc6050.jpg',
    remoteImage: 'https://lh3.googleusercontent.com/d/1veUpQeAR3zg0FquTnKBRETj00nUL2x5M=w1400',
    weddingsCount: '600+ Weddings',
    objectPosition: 'center 30%'
  },
  {
    name: 'JAIPUR',
    descriptor: 'Royal Palaces, Courtyards & Havelis',
    image: '/photos/couple_9105.jpg',
    remoteImage: 'https://lh3.googleusercontent.com/d/1xpjeDamJdVq0yPxS149iX7OkYXjrTYFp=w1400',
    weddingsCount: '150+ Weddings',
    objectPosition: 'center 22%'
  },
  {
    name: 'UDAIPUR',
    descriptor: 'Lakeside Havelis & Historic Forts',
    image: '/photos/story_dsc6625.jpg',
    remoteImage: 'https://lh3.googleusercontent.com/d/10ilaTlpqZ4bzLZzJT-FI58U3pjIvpIhG=w1400',
    weddingsCount: '90+ Weddings',
    objectPosition: 'center 35%'
  },
  {
    name: 'JIM CORBETT & HILLS',
    descriptor: 'Forest Celebrations & Mountain Backdrops',
    image: '/photos/prewed_ns2.jpg',
    remoteImage: 'https://lh3.googleusercontent.com/d/19TYk952kYnqbGxxENiMhx7x-kpUsYdJC=w1400',
    weddingsCount: '80+ Weddings',
    objectPosition: 'center 28%'
  }
];

export const DestinationWeddings: React.FC<DestinationWeddingsProps> = ({ onInquireDestination }) => {
  return (
    <section id="destination" className="py-24 sm:py-32 lg:py-40 bg-[#0e0e10] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
            Across India &amp; Beyond
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5]">
            WHEREVER YOUR STORY <br />
            <span className="italic font-normal text-[#ded9cf]">TAKES YOU.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#aba59b] font-light leading-relaxed pt-2">
            “From intimate celebrations in Delhi to destination weddings across India, PictureSpot Studio brings a complete photography and cinematography experience wherever your story unfolds.”
          </p>
        </div>

        {/* Real Location Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DESTINATION_HUBS.map((hub) => (
            <div
              key={hub.name}
              onClick={() => onInquireDestination(hub.name)}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5 relative">
                <OptimizedImage
                  src={hub.image}
                  fallbackSrc={hub.remoteImage}
                  alt={hub.name}
                  objectPosition={hub.objectPosition}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#d6d0c4] flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#d6d0c4]" />
                    <span>{hub.weddingsCount}</span>
                  </span>
                  <h3 className="font-serif text-2xl text-white font-light">
                    {hub.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-[#8f8a80] tracking-wider leading-relaxed">
                  {hub.descriptor}
                </p>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#faf9f5]/70 group-hover:text-white transition-colors border-b border-white/20 pb-0.5 inline-block">
                  INQUIRE {hub.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
