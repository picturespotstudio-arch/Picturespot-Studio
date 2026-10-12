import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquire: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquire, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: 'hero' },
    { label: 'STORIES', href: 'stories' },
    { label: 'WEDDINGS', href: 'weddings' },
    { label: 'ABOUT', href: 'about' },
    { label: 'CONTACT', href: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0e0e10]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/20'
            : 'bg-transparent py-6 lg:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="group text-left text-inherit cursor-pointer focus:outline-none"
            aria-label="PictureSpot Studio Home"
          >
            <span className="font-serif tracking-[0.22em] text-lg sm:text-xl font-medium text-[#faf8f5] uppercase transition-colors group-hover:text-[#d4cebe]">
              PICTURESPOT STUDIO
            </span>
          </button>

          {/* Zone 2: Desktop Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="relative text-xs tracking-[0.24em] font-medium text-[#d8d4cb] hover:text-[#ffffff] transition-colors py-1 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#f4f2ee] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenInquire}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-[0.2em] text-[#0c0c0d] bg-[#f4f2ee] hover:bg-[#ffffff] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#f4f2ee] hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0c0d]/98 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-28 animate-fadeIn">
          <div className="space-y-6">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#88837a] block mb-4">
              Navigation
            </span>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="block text-2xl font-serif tracking-[0.15em] text-[#f4f2ee] hover:text-[#d4cebe] transition-colors text-left py-2"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenInquire();
              }}
              className="w-full py-4 text-center text-xs tracking-[0.25em] font-medium uppercase text-[#0c0c0d] bg-[#f4f2ee]"
            >
              INQUIRE NOW
            </button>

            <div className="text-center text-xs tracking-wider text-[#8e8981]">
              <span>Delhi NCR, India · +91 97110 66988</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
