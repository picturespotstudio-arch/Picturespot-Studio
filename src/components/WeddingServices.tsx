import React from 'react';
import { Camera, Film, Compass, Heart, Sparkles, Flame } from 'lucide-react';

interface WeddingServicesProps {
  onSelectService: (serviceName: string) => void;
}

const SERVICES = [
  {
    number: '01',
    title: 'WEDDING PHOTOGRAPHY',
    subtitle: 'Candid & Documentary Photography',
    description: 'Quiet observation of honest glances, unscripted tears, and genuine laughter. We document the natural pulse of your day without invasive staging.',
    icon: Camera
  },
  {
    number: '02',
    title: 'WEDDING CINEMATOGRAPHY',
    subtitle: 'Cinematic Wedding Films',
    description: 'Crafted with anamorphic optics, live sound design, and custom orchestral scoring. Moving pictures that bring back the heartbeat of your promises.',
    icon: Film
  },
  {
    number: '03',
    title: 'PRE-WEDDING',
    subtitle: 'Creative Couple Portraits & Films',
    description: 'An unhurried creative session in evocative landscapes. Intimate, relaxed, and deeply collaborative documentation before the wedding fanfare.',
    icon: Heart
  },
  {
    number: '04',
    title: 'DESTINATION WEDDINGS',
    subtitle: 'Wedding Coverage Across India & Destinations',
    description: 'From Rajasthan’s historic havelis to coastal Goa and Himalayan foothills. Full multi-day team coverage wherever your vows take place.',
    icon: Compass
  },
  {
    number: '05',
    title: 'BRIDAL & GROOM PORTRAITS',
    subtitle: 'Editorial Portrait Photography',
    description: 'Fashion-forward yet timeless portraits emphasizing fine hand-embroidery, regal heirlooms, and quiet personal anticipation.',
    icon: Sparkles
  },
  {
    number: '06',
    title: 'TRADITIONAL CEREMONIES',
    subtitle: 'Complete Wedding Day Coverage',
    description: 'Deep reverence for Vedic rituals, Anand Karaj, Haldi ceremonies, and high-energy Baraat arrivals. Every sacred blessing preserved.',
    icon: Flame
  }
];

export const WeddingServices: React.FC<WeddingServicesProps> = ({ onSelectService }) => {
  return (
    <section id="weddings" className="py-24 sm:py-32 lg:py-40 bg-[#0e0e10] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
            Capabilities &amp; Craft
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5]">
            WEDDING STORIES, <br />
            <span className="italic font-normal text-[#ded9cf]">BEAUTIFULLY TOLD.</span>
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#9f9a90] font-light">
            Comprehensive multi-day wedding coverage tailored to your celebrations
          </p>
        </div>

        {/* Minimal Editorial Services Grid (Hairline dividers, no cards within cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-white/10 pt-12">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                onClick={() => onSelectService(service.title)}
                className="group cursor-pointer space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif tracking-[0.25em] text-[#88837a] block">
                    {service.number}
                  </span>
                  <Icon className="w-4 h-4 text-[#88837a] group-hover:text-white transition-colors stroke-[1.25]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#faf9f5] group-hover:text-[#ded9ce] transition-colors tracking-wide">
                    {service.title}
                  </h3>
                  <span className="text-xs tracking-[0.18em] uppercase text-[#beb8ac] font-light block">
                    {service.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#908b81] font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-[#faf9f5]/70 group-hover:text-white transition-colors border-b border-white/20 group-hover:border-white pb-0.5">
                    INQUIRE SERVICE
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
