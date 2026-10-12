import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { BRAND_DETAILS } from '../data/picturespot_assets.ts';

interface StickyMobileBarProps {
  onOpenInquire: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenInquire }) => {
  return (
    <aside
      aria-label="Quick Inquiries"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e0e10]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center gap-3 shadow-2xl"
    >
      {/* Direct WhatsApp CTA */}
      <a
        href={BRAND_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 rounded-none text-[11px] font-medium tracking-[0.18em] uppercase flex items-center justify-center gap-2 active:bg-emerald-900/80 transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
        <span>WHATSAPP</span>
      </a>

      {/* Direct Inquire CTA */}
      <button
        onClick={onOpenInquire}
        className="flex-1 py-2.5 px-3 bg-[#f4f2ee] text-[#0c0c0d] text-[11px] font-medium tracking-[0.18em] uppercase flex items-center justify-center gap-2 active:bg-white transition-colors cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>INQUIRE NOW</span>
      </button>
    </aside>
  );
};
