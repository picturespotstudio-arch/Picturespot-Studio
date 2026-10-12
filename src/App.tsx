/**
 * PICTURESPOT STUDIO
 * Premium Wedding Photography & Cinematography
 * "WE ARE MORE CREATIVE FOR YOU"
 * Delhi NCR, India · Established 2015 · 1000+ Weddings
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Introduction } from './components/Introduction.tsx';
import { FeaturedStories } from './components/FeaturedStories.tsx';
import { WeddingStoryModal } from './components/WeddingStoryModal.tsx';
import { WeddingServices } from './components/WeddingServices.tsx';
import { OurApproach } from './components/OurApproach.tsx';
import { WeddingFilmsSection } from './components/WeddingFilmsSection.tsx';
import { PreWeddingSection } from './components/PreWeddingSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { DestinationWeddings } from './components/DestinationWeddings.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ImageLightbox } from './components/ImageLightbox.tsx';
import { StickyMobileBar } from './components/StickyMobileBar.tsx';
import {
  WEDDING_STORIES,
  PICTURESPOT_IMAGES,
  WeddingStory,
  PictureSpotImage
} from './data/picturespot_assets.ts';

export default function App() {
  const [selectedStory, setSelectedStory] = useState<WeddingStory | null>(null);
  const [lightboxImage, setLightboxImage] = useState<PictureSpotImage | null>(null);
  const [contactPrefill, setContactPrefill] = useState<string>('');

  const handleNavigateSection = (sectionId: string) => {
    setSelectedStory(null);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquire = (context?: string) => {
    if (context) {
      setContactPrefill(`Inquiry regarding: ${context}`);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (image: PictureSpotImage) => {
    setLightboxImage(image);
  };

  // Lightbox Next / Previous navigation
  const currentLightboxIndex = lightboxImage
    ? PICTURESPOT_IMAGES.findIndex((img) => img.id === lightboxImage.id)
    : -1;

  const handleLightboxPrev = () => {
    if (currentLightboxIndex > 0) {
      setLightboxImage(PICTURESPOT_IMAGES[currentLightboxIndex - 1]);
    } else {
      setLightboxImage(PICTURESPOT_IMAGES[PICTURESPOT_IMAGES.length - 1]);
    }
  };

  const handleLightboxNext = () => {
    if (currentLightboxIndex !== -1 && currentLightboxIndex < PICTURESPOT_IMAGES.length - 1) {
      setLightboxImage(PICTURESPOT_IMAGES[currentLightboxIndex + 1]);
    } else {
      setLightboxImage(PICTURESPOT_IMAGES[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0d] text-[#f4f2ee] flex flex-col font-sans selection:bg-[#38342e] selection:text-[#faf8f5]">
      {/* Floating Minimal Header */}
      <Navbar
        onOpenInquire={() => handleOpenInquire()}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Experience Flow */}
      <main className="flex-1">
        {/* Full-Screen Immersive Hero */}
        <Hero
          onViewStories={() => handleNavigateSection('stories')}
          onInquireNow={() => handleOpenInquire()}
        />

        {/* Editorial Introduction Section */}
        <Introduction />

        {/* Featured Wedding Stories */}
        <FeaturedStories
          stories={WEDDING_STORIES}
          onSelectStory={(story) => setSelectedStory(story)}
        />

        {/* Minimal Editorial Wedding Services */}
        <WeddingServices
          onSelectService={(service) => handleOpenInquire(service)}
        />

        {/* Our Approach Section */}
        <OurApproach />

        {/* Large Cinematic Wedding Films Section */}
        <WeddingFilmsSection
          onInquireFilm={(filmTitle) => handleOpenInquire(filmTitle)}
        />

        {/* Pre-Wedding Horizontal Gallery */}
        <PreWeddingSection
          onOpenLightbox={handleOpenLightbox}
          onInquirePreWedding={() => handleOpenInquire('Pre-Wedding Photography & Cinematography')}
        />

        {/* The Master Archive Grid */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* Destination Weddings Across India */}
        <DestinationWeddings
          onInquireDestination={(loc) => handleOpenInquire(`Destination Wedding in ${loc}`)}
        />

        {/* About PictureSpot Studio & Why PictureSpot */}
        <AboutSection />

        {/* Words From Our Couples */}
        <TestimonialsSection />

        {/* Dramatic Final Full-Screen Call to Action */}
        <FinalCTA
          onStartConversation={() => handleOpenInquire()}
        />

        {/* Contact Form & Direct Studio Information */}
        <ContactSection prefilledNotes={contactPrefill} />
      </main>

      {/* Luxury Minimal Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Mobile Sticky Action Bar */}
      <StickyMobileBar onOpenInquire={() => handleOpenInquire()} />

      {/* Dedicated Full-Screen Wedding Story Experience */}
      {selectedStory && (
        <WeddingStoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
          onSelectStory={(story) => setSelectedStory(story)}
          allStories={WEDDING_STORIES}
          onOpenInquireWithStory={(storyName) => {
            setSelectedStory(null);
            handleOpenInquire(`Wedding Story Style: ${storyName}`);
          }}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {/* High-Resolution Image Lightbox Modal */}
      {lightboxImage && (
        <ImageLightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
        />
      )}
    </div>
  );
}
