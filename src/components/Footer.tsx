import React from 'react';
import { BRAND_DETAILS } from '../data/picturespot_assets.ts';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer className="bg-[#080809] border-t border-white/10 pt-20 pb-12 text-[#9a958c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Top Tier: Brand Statement & Primary Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Brand Identity Lockup */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif tracking-[0.22em] text-xl font-light text-[#faf9f5] uppercase block">
              {BRAND_DETAILS.name}
            </span>
            <p className="text-xs tracking-[0.2em] uppercase text-[#ded9ce]">
              {BRAND_DETAILS.business}
            </p>
            <p className="font-serif italic text-base text-[#bfb9ad]">
              “{BRAND_DETAILS.tagline}”
            </p>
            <p className="text-xs text-[#7d7870] font-light leading-relaxed max-w-sm pt-2">
              Based in {BRAND_DETAILS.location}. Established {BRAND_DETAILS.established}. Documenting emotional wedding memories across India and worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#faf9f5] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <button
                  onClick={() => onNavigateSection('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('stories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('weddings')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Weddings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#faf9f5] block">
              Connect With Us
            </span>
            <div className="space-y-2.5 text-xs tracking-wider">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#666] block">Phone / WhatsApp</span>
                <a
                  href={`tel:${BRAND_DETAILS.phoneClean}`}
                  className="text-white hover:text-[#d6d0c4] transition-colors"
                >
                  {BRAND_DETAILS.phone}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#666] block">Primary Wedding Instagram</span>
                <a
                  href={BRAND_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#faf9f5] hover:text-[#d6d0c4] transition-colors"
                >
                  {BRAND_DETAILS.instagramHandle}
                </a>
              </div>

              {/* Secondary Instagram — As requested, only as a secondary social link in the footer, NOT as a wedding service */}
              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-[#666] block">Studio Media / Secondary</span>
                <a
                  href={BRAND_DETAILS.secondaryInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#99948c] hover:text-white transition-colors"
                >
                  {BRAND_DETAILS.secondaryInstagramHandle}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#666] block">Studio Location</span>
                <span className="text-[#a8a39a]">{BRAND_DETAILS.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Quiet Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-wider text-[#736e66]">
          <p>
            © 2026 {BRAND_DETAILS.name}. All Rights Reserved.
          </p>
          <p>
            Delhi NCR, India · Available Worldwide
          </p>
        </div>

      </div>
    </footer>
  );
};
