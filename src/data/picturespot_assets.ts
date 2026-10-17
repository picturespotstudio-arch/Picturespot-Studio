/**
 * PICTURESPOT STUDIO — Official Wedding Photography & Cinematography Asset Library
 * Tagline: "WE ARE MORE CREATIVE FOR YOU"
 * Established 2015 · Delhi NCR, India · 1,000+ Weddings
 * All assets sourced directly from the official PictureSpot Studio Google Drive library.
 */

export interface PictureSpotImage {
  id: string;
  driveId: string;
  filename: string;
  localSrc: string;
  remoteSrc: string;
  title: string;
  category: 'story' | 'bridal' | 'couple' | 'ceremony' | 'prewedding' | 'candid';
  aspect: 'portrait' | 'landscape' | 'editorial';
  location: string;
  storyId?: string;
  caption?: string;
}

export interface WeddingStory {
  id: string;
  coupleNames: string;
  location: string;
  year: string;
  tagline: string;
  description: string;
  extendedStory: string;
  coverImage: PictureSpotImage;
  images: PictureSpotImage[];
  filmTitle?: string;
  filmDuration?: string;
  ceremonyHighlights: string[];
}

export interface WeddingFilm {
  id: string;
  driveId: string;
  title: string;
  coupleNames: string;
  location: string;
  duration: string;
  thumbnailSrc: string;
  remoteThumbnailSrc: string;
  embedUrl: string;
  directWatchUrl: string;
  description: string;
  directorNotes: string;
  category?: 'teaser' | 'highlight' | 'haldi' | 'reel';
}

export interface Testimonial {
  id: string;
  quote: string;
  coupleNames: string;
  weddingLocation: string;
  weddingYear: string;
  highlight: string;
}

// Curated Master Catalog
export const PICTURESPOT_IMAGES: PictureSpotImage[] = [
  // Heroes & Featured
  {
    id: 'img-hero-1',
    driveId: '1veUpQeAR3zg0FquTnKBRETj00nUL2x5M',
    filename: 'hero_dsc6050.jpg',
    localSrc: '/photos/hero_dsc6050.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1veUpQeAR3zg0FquTnKBRETj00nUL2x5M=w1800',
    title: 'The Sacred Vows Under Crimson Florals',
    category: 'story',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'A breathtaking moment of serenity during the dusk pheras.'
  },
  {
    id: 'img-story-6625',
    driveId: '10ilaTlpqZ4bzLZzJT-FI58U3pjIvpIhG',
    filename: 'story_dsc6625.jpg',
    localSrc: '/photos/story_dsc6625.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/10ilaTlpqZ4bzLZzJT-FI58U3pjIvpIhG=w1800',
    title: 'Royal Mandap Silhouette & Twilight Pheras',
    category: 'story',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'Framed through intricate floral arches as rituals commence.'
  },
  {
    id: 'img-couple-2f7a',
    driveId: '1kCvtrebANTqAmlGMohmSwj417sY_jSch',
    filename: 'couple_2f7a.jpg',
    localSrc: '/photos/couple_2f7a.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1kCvtrebANTqAmlGMohmSwj417sY_jSch=w1800',
    title: 'Editorial Couple Portrait in Regal Attire',
    category: 'couple',
    aspect: 'portrait',
    location: 'Delhi NCR Heritage Palace',
    storyId: 'story-kabir-rhea',
    caption: 'Classic symmetry and quiet poise before the evening reception.'
  },
  {
    id: 'img-story-6469',
    driveId: '1UV0_Iqnr2ARySr9oZgemmTpIlXKUqHiR',
    filename: 'story_dsc6469.jpg',
    localSrc: '/photos/story_dsc6469.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1UV0_Iqnr2ARySr9oZgemmTpIlXKUqHiR=w1800',
    title: 'The Jaimala Reverie & Rose Petal Shower',
    category: 'ceremony',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'Suspended in celebration as thousands of petals cascade over the couple.'
  },
  {
    id: 'img-story-6603',
    driveId: '16PP-eWzdqV1whZrvGkwvNUwnTIze8k9U',
    filename: 'story_dsc6603.jpg',
    localSrc: '/photos/story_dsc6603.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/16PP-eWzdqV1whZrvGkwvNUwnTIze8k9U=w1800',
    title: 'Sindoor Ceremony — An Intimate Sacred Union',
    category: 'ceremony',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'The pinnacle of the Vedic ceremony caught in tender focus.'
  },
  {
    id: 'img-story-6112',
    driveId: '1BnkOXzqK7qucoiBIrVu-9Wf6PeRi5lxH',
    filename: 'story_dsc6112.jpg',
    localSrc: '/photos/story_dsc6112.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1BnkOXzqK7qucoiBIrVu-9Wf6PeRi5lxH=w1800',
    title: 'Grand Baraat Procession & Golden Torches',
    category: 'candid',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'High energy and cinematic warmth as the groom arrives with family.'
  },
  {
    id: 'img-story-6183',
    driveId: '1BZYkoO6OnuXQlK_G9L3wUTgKWemgAHof',
    filename: 'story_dsc6183.jpg',
    localSrc: '/photos/story_dsc6183.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1BZYkoO6OnuXQlK_G9L3wUTgKWemgAHof=w1800',
    title: 'The Bridal Entry Under Phoolon Ki Chaadar',
    category: 'story',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'Emotional anticipation as brothers walk the bride down the aisle.'
  },
  {
    id: 'img-ceremony-6633',
    driveId: '16MWNlJ3XfyIz8_L1aS85SvLYNAEId9pA',
    filename: 'ceremony_dsc6633.jpg',
    localSrc: '/photos/ceremony_dsc6633.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/16MWNlJ3XfyIz8_L1aS85SvLYNAEId9pA=w1800',
    title: 'The Agni Sakshi & Seven Circumambulations',
    category: 'ceremony',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'Walking around the sacred fire with hands intertwined.'
  },
  {
    id: 'img-ceremony-6636',
    driveId: '1VK4HuNz-lerlPr6ZA7Zz7Z_Ou6FjiPI-',
    filename: 'ceremony_dsc6636.jpg',
    localSrc: '/photos/ceremony_dsc6636.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1VK4HuNz-lerlPr6ZA7Zz7Z_Ou6FjiPI-=w1800',
    title: 'Saptapadi Vows & Unspoken Promises',
    category: 'ceremony',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'Each step marked by age-old blessings and gentle smiles.'
  },
  {
    id: 'img-portrait-6649',
    driveId: '1KErTh4LcjYjY_ebYC4QGmP4IBO9Km94l',
    filename: 'portrait_dsc6649.jpg',
    localSrc: '/photos/portrait_dsc6649.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1KErTh4LcjYjY_ebYC4QGmP4IBO9Km94l=w1800',
    title: 'Bridal Gaze in Deep Crimson & Polki Gold',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'Timeless Indian bridal beauty captured with natural warmth.'
  },
  {
    id: 'img-candid-3292',
    driveId: '1BFFdyvR9lXDi-y-PMX1n-KWS-G7dpEDy',
    filename: 'candid_o0a3292.jpg',
    localSrc: '/photos/candid_o0a3292.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1BFFdyvR9lXDi-y-PMX1n-KWS-G7dpEDy=w1800',
    title: 'Quiet Laughter During the Haldi Rituals',
    category: 'candid',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-kabir-rhea',
    caption: 'An unscripted moment of pure joy shared with siblings.'
  },
  {
    id: 'img-couple-3319',
    driveId: '1PcUaj49_67UI7mR8e11EVft_pnCVCEB6',
    filename: 'couple_o0a3319.jpg',
    localSrc: '/photos/couple_o0a3319.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1PcUaj49_67UI7mR8e11EVft_pnCVCEB6=w1800',
    title: 'Golden Glow Over Heritage Courtyards',
    category: 'couple',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-kabir-rhea',
    caption: 'A gentle embrace as the afternoon light settles over the stone pavilion.'
  },
  {
    id: 'img-story-4020',
    driveId: '1QpQviPIkYTAILC8kdYV7f2WBoXHnHmZD',
    filename: 'story_o4a4020.jpg',
    localSrc: '/photos/story_o4a4020.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1QpQviPIkYTAILC8kdYV7f2WBoXHnHmZD=w1800',
    title: 'Sangeet Rhythm & Dynamic Celebration',
    category: 'candid',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-rohan-tanya',
    caption: 'Capturing the raw energy and choreographed joy on stage.'
  },
  {
    id: 'img-candid-4471',
    driveId: '1aJ83ldySrwuOCJ2AxP45HjlhLOhelKEK',
    filename: 'candid_o4a4471.jpg',
    localSrc: '/photos/candid_o4a4471.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1aJ83ldySrwuOCJ2AxP45HjlhLOhelKEK=w1800',
    title: 'Family Embrace — An Unrehearsed Tear',
    category: 'candid',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-rohan-tanya',
    caption: 'The emotional transition captured with documentary discretion.'
  },
  {
    id: 'img-candid-4535',
    driveId: '1Je1jbUjZqBzgYfxP8Aph4-zT17WjPbWi',
    filename: 'candid_o4a4535.jpg',
    localSrc: '/photos/candid_o4a4535.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1Je1jbUjZqBzgYfxP8Aph4-zT17WjPbWi=w1800',
    title: 'The Father’s Blessing at the Altar',
    category: 'candid',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-rohan-tanya',
    caption: 'A heartfelt hand clasp before giving away his daughter.'
  },

  // Bridal Solo & Portraits
  {
    id: 'img-bride-8717',
    driveId: '1dGfBsg9VzNkuOQOdZL6Jrnbhqm4zLUsY',
    filename: 'bride_081a8717.jpg',
    localSrc: '/photos/bride_081a8717.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1dGfBsg9VzNkuOQOdZL6Jrnbhqm4zLUsY=w1800',
    title: 'The Solitary Bride in Crimson Velvet',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-dev-simran',
    caption: 'Finely hand-embroidered zardozi lehenga captured in soft natural window light.'
  },
  {
    id: 'img-bride-8726',
    driveId: '1zuxCQpLiWYoJYTDEUZmvLf9JAu54Xiog',
    filename: 'bride_081a8726.jpg',
    localSrc: '/photos/bride_081a8726.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1zuxCQpLiWYoJYTDEUZmvLf9JAu54Xiog=w1800',
    title: 'The Veil & The Mathapatti',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-dev-simran',
    caption: 'Intricate emerald and uncut diamond jewellery framing delicate bridal expressions.'
  },
  {
    id: 'img-bride-8769',
    driveId: '1WeaTfnCvNMQXMlxRQMcgJukU1fMdTEyJ',
    filename: 'bride_081a8769.jpg',
    localSrc: '/photos/bride_081a8769.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1WeaTfnCvNMQXMlxRQMcgJukU1fMdTEyJ=w1800',
    title: 'Regal Poise — The Modern Indian Maharani',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-dev-simran',
    caption: 'An editorial tribute to timeless heritage and quiet strength.'
  },
  {
    id: 'img-bride-8805',
    driveId: '1sPBgMkX21Tvr-xiJ27wabfTzteHbk4ox',
    filename: 'bride_081a8805.jpg',
    localSrc: '/photos/bride_081a8805.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1sPBgMkX21Tvr-xiJ27wabfTzteHbk4ox=w1800',
    title: 'Intricate Henna Details & Raw Silk Flare',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-dev-simran',
    caption: 'Capturing artisanal craftsmanship on the wedding morning.'
  },
  {
    id: 'img-bride-8831',
    driveId: '1t75iCtyyjCh-iOozFoivr7ju_psYqw9y',
    filename: 'bride_081a8831.jpg',
    localSrc: '/photos/bride_081a8831.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1t75iCtyyjCh-iOozFoivr7ju_psYqw9y=w1800',
    title: 'Profile in Antiqued Gold & Sheer Dupatta',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-dev-simran',
    caption: 'Light gently catching the gold embroidery and bridal nath.'
  },
  {
    id: 'img-bride-8848',
    driveId: '1ooQauDOOfprThoqj3zWXBQPn1JMP2m3I',
    filename: 'bride_081a8848.jpg',
    localSrc: '/photos/bride_081a8848.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1ooQauDOOfprThoqj3zWXBQPn1JMP2m3I=w1800',
    title: 'The Final Mirror Glance',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-dev-simran',
    caption: 'Moments before the wedding procession begins.'
  },
  {
    id: 'img-bride-2495',
    driveId: '1oaT7wbJGPtBJWIoVho4XE9TEvU26SyKS',
    filename: 'bride_solo_2495.jpg',
    localSrc: '/photos/bride_solo_2495.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1oaT7wbJGPtBJWIoVho4XE9TEvU26SyKS=w1800',
    title: 'Pastel Elegance & The Ivory Floral Arch',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR Farmhouse',
    storyId: 'story-aditya-ananya',
    caption: 'Subtle daylight accentuating powder pink chikankari embroidery.'
  },
  {
    id: 'img-bride-2497',
    driveId: '1JeG2sIUcpSmrJx6oHX1v0b9B2sDjIXJ4',
    filename: 'bride_solo_2497.jpg',
    localSrc: '/photos/bride_solo_2497.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1JeG2sIUcpSmrJx6oHX1v0b9B2sDjIXJ4=w1800',
    title: 'Subtle Grace & Golden Hour Calm',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR Farmhouse',
    storyId: 'story-aditya-ananya',
    caption: 'An intimate portrait capturing nervous excitement turning to serenity.'
  },
  {
    id: 'img-bride-2557',
    driveId: '1z5hWs8NgTCWhQ9RGFilGDKxGXEPnmj_e',
    filename: 'bride_solo_2557.jpg',
    localSrc: '/photos/bride_solo_2557.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1z5hWs8NgTCWhQ9RGFilGDKxGXEPnmj_e=w1800',
    title: 'The Chooda & Kalire Blessing',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR Farmhouse',
    storyId: 'story-aditya-ananya',
    caption: 'Tinkling silver and gold tassels as aunts shower whispered prayers.'
  },
  {
    id: 'img-bride-2569',
    driveId: '1ToYqeb4U30g9HsPfy-1xpOwafuKYhLHV',
    filename: 'bride_solo_2569.jpg',
    localSrc: '/photos/bride_solo_2569.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1ToYqeb4U30g9HsPfy-1xpOwafuKYhLHV=w1800',
    title: 'Sunlight Through the Silk Canopy',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR Farmhouse',
    storyId: 'story-aditya-ananya',
    caption: 'Gentle warmth playing across hand-crafted zardozi borders.'
  },

  // Couple Wedding Series
  {
    id: 'img-couple-8700',
    driveId: '1wogLnyW7jTvHbr9Pp3w--Jl1lJoh7_hY',
    filename: 'couple_8700.jpg',
    localSrc: '/photos/couple_8700.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1wogLnyW7jTvHbr9Pp3w--Jl1lJoh7_hY=w1800',
    title: 'The First Walk as Husband and Wife',
    category: 'couple',
    aspect: 'landscape',
    location: 'Delhi NCR Heritage Pavilion',
    storyId: 'story-arjun-meher',
    caption: 'Steps into their new beginning under a canopy of stars.'
  },
  {
    id: 'img-couple-8865',
    driveId: '11bnFqitP6xCUT9A650k4J-Ru4Z6cy6M6',
    filename: 'couple_8865.jpg',
    localSrc: '/photos/couple_8865.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/11bnFqitP6xCUT9A650k4J-Ru4Z6cy6M6=w1800',
    title: 'Shared Whispers Beside the Haveli Pillars',
    category: 'couple',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'Stealing a quiet second away from the grand crowd.'
  },
  {
    id: 'img-couple-9105',
    driveId: '1xpjeDamJdVq0yPxS149iX7OkYXjrTYFp',
    filename: 'couple_9105.jpg',
    localSrc: '/photos/couple_9105.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1xpjeDamJdVq0yPxS149iX7OkYXjrTYFp=w1800',
    title: 'Grand Palace Staircase & Flowing Train',
    category: 'couple',
    aspect: 'portrait',
    location: 'Jaipur Destination Wedding',
    storyId: 'story-arjun-meher',
    caption: 'Architectural scale and dramatic bridal silhouettes.'
  },
  {
    id: 'img-couple-9311',
    driveId: '18jRU-9ixtvuxI_SNQLON2VfvZgNqYwmm',
    filename: 'couple_9311.jpg',
    localSrc: '/photos/couple_9311.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/18jRU-9ixtvuxI_SNQLON2VfvZgNqYwmm=w1800',
    title: 'A Warm Hand Clasp in the Courtyard',
    category: 'couple',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-kabir-rhea',
    caption: 'Reassurance and unspoken warmth amidst the celebratory rush.'
  },
  {
    id: 'img-couple-9538',
    driveId: '1QfbFyyPb9YpQzoKLFuHI0g-fr-_QUST0',
    filename: 'couple_9538.jpg',
    localSrc: '/photos/couple_9538.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1QfbFyyPb9YpQzoKLFuHI0g-fr-_QUST0=w1800',
    title: 'In Sync Under Modern Crystal Chandeliers',
    category: 'couple',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-kabir-rhea',
    caption: 'Contemporary grandeur blended with traditional elegance.'
  },
  {
    id: 'img-couple-9552',
    driveId: '1_CIC6nIW4O9tCCV434e6ol-GHZQ7zFMz',
    filename: 'couple_9552.jpg',
    localSrc: '/photos/couple_9552.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1_CIC6nIW4O9tCCV434e6ol-GHZQ7zFMz=w1800',
    title: 'Gentle Forehead Kiss at Dusk',
    category: 'couple',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-kabir-rhea',
    caption: 'An intimate tender moment as twilight falls.'
  },
  {
    id: 'img-couple-9555',
    driveId: '1GEuvzqm3o8Ur8GWXlb_siDJVkMqa3BQI',
    filename: 'couple_9555.jpg',
    localSrc: '/photos/couple_9555.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1GEuvzqm3o8Ur8GWXlb_siDJVkMqa3BQI=w1800',
    title: 'Looking Towards Forever',
    category: 'couple',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-kabir-rhea',
    caption: 'Authentic joy and contentment radiating across the frame.'
  },
  {
    id: 'img-couple-9565',
    driveId: '1f7EYIxD9EU3mBql7o3ueb3QnsCTTBp4w',
    filename: 'couple_9565.jpg',
    localSrc: '/photos/couple_9565.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1f7EYIxD9EU3mBql7o3ueb3QnsCTTBp4w=w1800',
    title: 'Under the Heritage Archways',
    category: 'couple',
    aspect: 'portrait',
    location: 'Delhi NCR Heritage Retreat',
    storyId: 'story-dev-simran',
    caption: 'Timeless portraiture emphasizing architectural lines and quiet intimacy.'
  },
  {
    id: 'img-couple-9606',
    driveId: '1se67YAqCcu_APEn1TMUs0yTExDO_ILo6',
    filename: 'couple_9606.jpg',
    localSrc: '/photos/couple_9606.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1se67YAqCcu_APEn1TMUs0yTExDO_ILo6=w1800',
    title: 'A Stolen Look Across the Mandap',
    category: 'couple',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-dev-simran',
    caption: 'Spontaneous smiles amidst Vedic chants.'
  },
  {
    id: 'img-couple-9678',
    driveId: '1FFA8CoOUVvxLf2ItNwb7uG2Owkdft8D6',
    filename: 'couple_9678.jpg',
    localSrc: '/photos/couple_9678.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1FFA8CoOUVvxLf2ItNwb7uG2Owkdft8D6=w1800',
    title: 'The Royal Royal Portrait in Ivory and Crimson',
    category: 'couple',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-dev-simran',
    caption: 'Majestic posture balanced with modern editorial restraint.'
  },
  {
    id: 'img-couple-9714',
    driveId: '1VloP-yw8EKRmV4_lcj5-EZfC4nqT5KgQ',
    filename: 'couple_9714.jpg',
    localSrc: '/photos/couple_9714.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1VloP-yw8EKRmV4_lcj5-EZfC4nqT5KgQ=w1800',
    title: 'Laughter Under Candlelit Chandelier',
    category: 'couple',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-dev-simran',
    caption: 'Completely unposed and radiant with happiness.'
  },
  {
    id: 'img-couple-9875',
    driveId: '1yF6_CV6CkKcAbU9kqk9wj1u_6KErwstg',
    filename: 'couple_9875.jpg',
    localSrc: '/photos/couple_9875.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1yF6_CV6CkKcAbU9kqk9wj1u_6KErwstg=w1800',
    title: 'The Evening Reception Finale',
    category: 'couple',
    aspect: 'landscape',
    location: 'Delhi NCR',
    storyId: 'story-aditya-ananya',
    caption: 'Standing together as celebrations conclude into the night.'
  },

  // Pre-Wedding Collection
  {
    id: 'img-prewed-ns2',
    driveId: '19TYk952kYnqbGxxENiMhx7x-kpUsYdJC',
    filename: 'prewed_ns2.jpg',
    localSrc: '/photos/prewed_ns2.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/19TYk952kYnqbGxxENiMhx7x-kpUsYdJC=w1800',
    title: 'Pre-Wedding Solitude in Minimalist Landscapes',
    category: 'prewedding',
    aspect: 'landscape',
    location: 'Aravalli Hills & Delhi Outskirts',
    storyId: 'story-rohan-tanya',
    caption: 'Clean horizons and honest togetherness before the wedding week.'
  },
  {
    id: 'img-prewed-ns3',
    driveId: '1rj2KWR-9M2DLbsuH3Efn93aH8x6qPOkH',
    filename: 'prewed_ns3.jpg',
    localSrc: '/photos/prewed_ns3.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1rj2KWR-9M2DLbsuH3Efn93aH8x6qPOkH=w1800',
    title: 'Golden Hour Shadows & Contemporary Styling',
    category: 'prewedding',
    aspect: 'landscape',
    location: 'Heritage Stepwell, Delhi NCR',
    storyId: 'story-rohan-tanya',
    caption: 'Artistic angles catching the warmth of late afternoon sun.'
  },
  {
    id: 'img-prewed-ns4',
    driveId: '1dQW9a1YNrzb0yla4aCduJwGSnd_t9y8F',
    filename: 'prewed_ns4.jpg',
    localSrc: '/photos/prewed_ns4.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1dQW9a1YNrzb0yla4aCduJwGSnd_t9y8F=w1800',
    title: 'Unscripted Laughter in Open Fields',
    category: 'prewedding',
    aspect: 'landscape',
    location: 'Rustic Countryside',
    storyId: 'story-rohan-tanya',
    caption: 'Effortless, natural interactions documented with quiet distance.'
  },
  {
    id: 'img-prewed-ns14',
    driveId: '1Lcae_8nylqMfQsg25j3k_GE5cmuq7CKq',
    filename: 'prewed_ns14.jpg',
    localSrc: '/photos/prewed_ns14.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1Lcae_8nylqMfQsg25j3k_GE5cmuq7CKq=w1800',
    title: 'Architectural Framing & Timeless Silhouettes',
    category: 'prewedding',
    aspect: 'landscape',
    location: 'Neemrana / Delhi NCR',
    storyId: 'story-rohan-tanya',
    caption: 'Combining historic geometry with emotional presence.'
  },
  {
    id: 'img-prewed-ns21',
    driveId: '1Te-z4SWmFHuyLSaw3B_-jhClXFUcUOFa',
    filename: 'prewed_ns21.jpg',
    localSrc: '/photos/prewed_ns21.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1Te-z4SWmFHuyLSaw3B_-jhClXFUcUOFa=w1800',
    title: 'Intimate Conversation — The Stillness Between',
    category: 'prewedding',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-rohan-tanya',
    caption: 'Portraits that celebrate how couples truly look at each other.'
  },
  {
    id: 'img-prewed-ns24',
    driveId: '1CzqtZUG7JMOSy0drXm3nHKCMs1TbdIZW',
    filename: 'prewed_ns24.jpg',
    localSrc: '/photos/prewed_ns24.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1CzqtZUG7JMOSy0drXm3nHKCMs1TbdIZW=w1800',
    title: 'Wind & Water — Cinematic Pre-Wedding Film Stills',
    category: 'prewedding',
    aspect: 'landscape',
    location: 'Lakefront, NCR',
    storyId: 'story-rohan-tanya',
    caption: 'Slow cinematic movement captured in natural evening breeze.'
  },
  {
    id: 'img-prewed-ns36',
    driveId: '14MpNEEoXjAXO4jCQmqzCbTruNVVjrHci',
    filename: 'prewed_ns36.jpg',
    localSrc: '/photos/prewed_ns36.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/14MpNEEoXjAXO4jCQmqzCbTruNVVjrHci=w1800',
    title: 'Editorial Minimalism in Black and Earth Tones',
    category: 'prewedding',
    aspect: 'landscape',
    location: 'Modern Studio & Outdoor NCR',
    storyId: 'story-rohan-tanya',
    caption: 'Sleek fashion-editorial styling grounded in authentic chemistry.'
  },
  {
    id: 'img-prewed-ns38',
    driveId: '1MGvq33IDYg7-jHtjZ5E0CsnBZd5Rcp28',
    filename: 'prewed_ns38.jpg',
    localSrc: '/photos/prewed_ns38.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1MGvq33IDYg7-jHtjZ5E0CsnBZd5Rcp28=w1800',
    title: 'Sunburst & The Promise of Forever',
    category: 'prewedding',
    aspect: 'portrait',
    location: 'Aravalli Hills',
    storyId: 'story-rohan-tanya',
    caption: 'Golden lens flare softening the final frame of the pre-wedding shoot.'
  },
  // Newly Added Photographs from Updated Google Drive Library
  {
    id: 'img-hero-1g9a',
    driveId: '1Ifc-xoBuCnBeODxWc9LvydVjaFglJx4m',
    filename: 'hero_1g9a1529.jpg',
    localSrc: '/photos/hero_1g9a1529.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1Ifc-xoBuCnBeODxWc9LvydVjaFglJx4m=w1800',
    title: 'Imperial Vows & Golden Radiance',
    category: 'story',
    aspect: 'landscape',
    location: 'Delhi NCR Palatial Resort',
    storyId: 'story-arjun-meher',
    caption: 'A magnificent landscape composition showcasing bride and groom in complete ceremonial splendor.'
  },
  {
    id: 'img-couple-8636',
    driveId: '1Y6MeGy2kvq4-KXPRVEBmDcgbClV4_lpr',
    filename: 'couple_0r3a8636.jpg',
    localSrc: '/photos/couple_0r3a8636.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1Y6MeGy2kvq4-KXPRVEBmDcgbClV4_lpr=w1800',
    title: 'The Sovereign Couple in Bespoke Regalia',
    category: 'couple',
    aspect: 'portrait',
    location: 'Delhi NCR Heritage Pavilion',
    storyId: 'story-dev-simran',
    caption: 'Impeccable balance of bespoke heritage couture and serene, natural poise.'
  },
  {
    id: 'img-ceremony-9801',
    driveId: '190K-2MtDEtE-Adjb84OhOLJ8vAVI9ZyG',
    filename: 'ceremony_0r3a9801.jpg',
    localSrc: '/photos/ceremony_0r3a9801.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/190K-2MtDEtE-Adjb84OhOLJ8vAVI9ZyG=w1800',
    title: 'The Sacred Havan & Ancient Vedic Chant',
    category: 'ceremony',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'Warm smoke and golden firelight blessing the couple during twilight rituals.'
  },
  {
    id: 'img-portrait-8612',
    driveId: '1dcQAkXgqBgYC2uJVDDqWv4qZ2_bbHHXl',
    filename: 'portrait_0r3a8612.jpg',
    localSrc: '/photos/portrait_0r3a8612.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1dcQAkXgqBgYC2uJVDDqWv4qZ2_bbHHXl=w1800',
    title: 'Aristocratic Poise & Antique Zardozi',
    category: 'bridal',
    aspect: 'portrait',
    location: 'Delhi NCR Heritage Estate',
    storyId: 'story-dev-simran',
    caption: 'Rich hand-embroidery, uncut polki jewels, and dignified grace in soft window light.'
  },
  {
    id: 'img-candid-3330',
    driveId: '1Xq368TMb8rxKaQos_k-4g5i0fyYsUF1e',
    filename: 'candid_o0a3330.jpg',
    localSrc: '/photos/candid_o0a3330.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1Xq368TMb8rxKaQos_k-4g5i0fyYsUF1e=w1800',
    title: 'Spontaneous Laughter & Family Merriment',
    category: 'candid',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-kabir-rhea',
    caption: 'Unscripted delight capturing the vibrant pulse and shared joy of celebration.'
  },
  {
    id: 'img-ceremony-2491',
    driveId: '1qNDgEuJ9xW0BHq5r5TI75IjeVGvetY-D',
    filename: 'ceremony_0r3a2491.jpg',
    localSrc: '/photos/ceremony_0r3a2491.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1qNDgEuJ9xW0BHq5r5TI75IjeVGvetY-D=w1800',
    title: 'The Sacred Knot & Eternal Union',
    category: 'ceremony',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-arjun-meher',
    caption: 'Tying the auspicious gathbandhan as families unite around the holy agni.'
  },
  {
    id: 'img-couple-3758-alt',
    driveId: '1vMRvL8U8IK-7NdIFNnblgG9_10s5tSYC',
    filename: 'couple_0r3a3758_alt.jpg',
    localSrc: '/photos/couple_0r3a3758_alt.jpg',
    remoteSrc: 'https://lh3.googleusercontent.com/d/1vMRvL8U8IK-7NdIFNnblgG9_10s5tSYC=w1800',
    title: 'Twilight Whispers Along the Palace Balcony',
    category: 'couple',
    aspect: 'portrait',
    location: 'Delhi NCR',
    storyId: 'story-kabir-rhea',
    caption: 'Intimate closeness as dusk gently settles over the palace courtyard.'
  }
];

// Featured Real PictureSpot Wedding Stories
export const WEDDING_STORIES: WeddingStory[] = [
  {
    id: 'story-arjun-meher',
    coupleNames: 'Arjun & Meher',
    location: 'Delhi NCR · The Grand Mandap Celebrations',
    year: '2025',
    tagline: 'A symphonic celebration of crimson velvets, twilight pheras, and timeless family bonds.',
    description: 'From an energetic night baraat illuminated by warm torches to the ethereal twilight vows under cascading crimson florals, Arjun and Meher’s wedding was a masterclass in classic Indian grandeur met with modern documentary sensitivity.',
    extendedStory: 'Set against the majestic backdrops of Delhi NCR, Meher wore a regal crimson zardozi lehenga paired with uncut polki jewels, while Arjun brought an aura of quiet charm and joyous spontaneity. As the sacred fire was lit at dusk, PictureSpot Studio documented the nuanced emotions—the proud glance of a father, the gentle hand clasp during the Saptapadi, and the joyous cascade of rose petals that filled the mandap courtyard.',
    coverImage: PICTURESPOT_IMAGES[0], // hero_dsc6050
    images: [
      PICTURESPOT_IMAGES[0],  // hero_dsc6050
      PICTURESPOT_IMAGES[1],  // story_dsc6625
      PICTURESPOT_IMAGES[3],  // story_dsc6469 (jaimala)
      PICTURESPOT_IMAGES[4],  // story_dsc6603 (sindoor)
      PICTURESPOT_IMAGES[5],  // story_dsc6112 (baraat)
      PICTURESPOT_IMAGES[6],  // story_dsc6183 (bridal entry)
      PICTURESPOT_IMAGES[7],  // ceremony_dsc6633 (agni)
      PICTURESPOT_IMAGES[8],  // ceremony_dsc6636 (vows)
      PICTURESPOT_IMAGES[9],  // portrait_dsc6649 (bridal gaze)
      PICTURESPOT_IMAGES[15], // couple_8700
      PICTURESPOT_IMAGES[16]  // couple_8865
    ],
    filmTitle: 'Meher & Arjun — The Sacred Crimson',
    filmDuration: '04:42',
    ceremonyHighlights: [
      'Baraat arrival with royal dholak & warm flare torches',
      'Phoolon Ki Chaadar walk accompanied by brothers',
      'Petal shower during Jaimala under architectural chandeliers',
      'Quiet twilight vows around the sacred Agni',
      'Emotional farewell into the midnight starlight'
    ]
  },
  {
    id: 'story-kabir-rhea',
    coupleNames: 'Kabir & Rhea',
    location: 'Delhi NCR Farmhouse & Heritage Pavilion',
    year: '2024',
    tagline: 'An intimate heritage wedding defined by golden-hour whispers and candlelit elegance.',
    description: 'Kabir and Rhea chose a serene heritage retreat on the outskirts of Delhi NCR to host their closest kin for a three-day celebration rooted in warmth, honest conversations, and effortless beauty.',
    extendedStory: 'Rather than rushing through conventional poses, Kabir and Rhea allowed the natural rhythm of the day to guide our cameras. The morning Haldi erupted with candid laughter and marigold showers, followed by an afternoon of relaxed courtyard portraits where golden light filtered through ancient stone jalis. As evening arrived, hundreds of floating brass diyas cast a cinematic glow across the couple as they promised forever.',
    coverImage: PICTURESPOT_IMAGES[2], // couple_2f7a
    images: [
      PICTURESPOT_IMAGES[2],  // couple_2f7a
      PICTURESPOT_IMAGES[10], // candid_o0a3292
      PICTURESPOT_IMAGES[11], // couple_o0a3319
      PICTURESPOT_IMAGES[17], // couple_9105
      PICTURESPOT_IMAGES[18], // couple_9311
      PICTURESPOT_IMAGES[19], // couple_9538
      PICTURESPOT_IMAGES[20], // couple_9552
      PICTURESPOT_IMAGES[21]  // couple_9555
    ],
    filmTitle: 'Rhea & Kabir — Echoes in Stone & Light',
    filmDuration: '05:18',
    ceremonyHighlights: [
      'Spontaneous morning Haldi with marigold blossoms',
      'Golden hour couple portraits in historic stone corridors',
      'Vows exchanged in a candlelit open-air courtyard',
      'Sitar & flute musical accompaniment through dusk',
      'Midnight celebration under ambient string lights'
    ]
  },
  {
    id: 'story-dev-simran',
    coupleNames: 'Dev & Simran',
    location: 'Delhi NCR & Destination Jaipur Palaces',
    year: '2024',
    tagline: 'High-contrast editorial portraiture and deep emotional resonance.',
    description: 'A striking confluence of royal Rajputana architecture and deeply personal Vedic rituals, captured with PictureSpot’s signature cinematic framing and intimate documentary eye.',
    extendedStory: 'Simran’s bridal portraits are a study in classical poise—hand-embroidered crimson velvets, uncut polki diamonds, and a gaze full of quiet strength. Dev, dressed in bespoke ivory and antique gold, brought a grounding warmth to every frame. Together, their chemistry elevated every corner of the palace courtyards, creating a collection of photographs that feel as enduring as an heirloom painting.',
    coverImage: PICTURESPOT_IMAGES[12], // bride_8717
    images: [
      PICTURESPOT_IMAGES[12], // bride_8717
      PICTURESPOT_IMAGES[13], // bride_8726
      PICTURESPOT_IMAGES[14], // bride_8769
      PICTURESPOT_IMAGES[22], // couple_9565
      PICTURESPOT_IMAGES[23], // couple_9606
      PICTURESPOT_IMAGES[24], // couple_9678
      PICTURESPOT_IMAGES[25]  // couple_9714
    ],
    filmTitle: 'Simran & Dev — Written in Royal Red',
    filmDuration: '06:12',
    ceremonyHighlights: [
      'Editorial bridal preparation in ancestral suites',
      'Royal courtyard portraits with symmetric arches',
      'Vedic pheras under a dome of jasmine & tuberoses',
      'Deep family blessings captured in candid closeness'
    ]
  },
  {
    id: 'story-rohan-tanya',
    coupleNames: 'Rohan & Tanya',
    location: 'Aravalli Hills & Delhi Outskirts',
    year: '2024',
    tagline: 'Before the wedding, there was their story — documented in open landscapes and genuine stillness.',
    description: 'An expansive pre-wedding and wedding documentation tracing Rohan & Tanya’s transition from quiet, unhurried hill afternoons to an exuberant celebratory union.',
    extendedStory: 'Before the wedding fanfare began, we escaped with Rohan and Tanya into the rugged contours of the Aravalli hills. With zero artificial poses or scripted gestures, we documented their natural rhythm—their shared jokes, silent glances, and comfortable silence. When the wedding day arrived, that foundation of trust translated into effortless, emotive photographs.',
    coverImage: PICTURESPOT_IMAGES[27], // prewed_ns2
    images: [
      PICTURESPOT_IMAGES[27], // prewed_ns2
      PICTURESPOT_IMAGES[28], // prewed_ns3
      PICTURESPOT_IMAGES[29], // prewed_ns4
      PICTURESPOT_IMAGES[30], // prewed_ns14
      PICTURESPOT_IMAGES[31], // prewed_ns21
      PICTURESPOT_IMAGES[32], // prewed_ns24
      PICTURESPOT_IMAGES[33], // prewed_ns36
      PICTURESPOT_IMAGES[34]  // prewed_ns38
    ],
    filmTitle: 'Tanya & Rohan — The Mountain & The Sea',
    filmDuration: '04:15',
    ceremonyHighlights: [
      'Landscape pre-wedding film across dusk horizons',
      'Intimate acoustic vows exchanged at sunrise',
      'Dynamic Sangeet performance documented on 50mm primes',
      'Warm family send-off surrounded by sparklers'
    ]
  },
  {
    id: 'story-aditya-ananya',
    coupleNames: 'Aditya & Ananya',
    location: 'Delhi NCR Luxury Estate',
    year: '2025',
    tagline: 'Pastel poetry, chikankari silks, and a celebration drenched in morning light.',
    description: 'Breaking away from nocturnal ceremonies, Aditya and Ananya embraced a morning Anand Karaj bathed in soft sunbeams and pale blush hues.',
    extendedStory: 'Ananya wore an ethereal powder pink and ivory ensemble, framed by fragrant tuberose canopies and soft muslin draping. Aditya stood by her side with quiet pride. Every photograph in this collection reflects the freshness of dawn—delicate floral textures, quiet morning mantras, and eyes shining with grateful tears.',
    coverImage: PICTURESPOT_IMAGES[18], // bride_solo_2495
    images: [
      PICTURESPOT_IMAGES[18], // bride_solo_2495
      PICTURESPOT_IMAGES[19], // bride_solo_2497
      PICTURESPOT_IMAGES[20], // bride_solo_2557
      PICTURESPOT_IMAGES[21], // bride_solo_2569
      PICTURESPOT_IMAGES[26]  // couple_9875
    ],
    filmTitle: 'Ananya & Aditya — Morning In Ivory',
    filmDuration: '05:04',
    ceremonyHighlights: [
      'Morning Anand Karaj ceremony filled with peace',
      'Pastel decor blending soft ivory and eucalyptus',
      'Family blessings under sheer chiffon canopies',
      'Acoustic wedding breakfast with jazz & classical violin'
    ]
  }
];

// Curated Real Wedding Films by PictureSpot Studio from Drive folder
export const WEDDING_FILMS: WeddingFilm[] = [
  {
    id: 'film-final-highlight',
    driveId: '1YLFG8ApNSornY_JC25ChFtteFiUi_3Ck',
    title: 'PictureSpot Studio — Grand Wedding Highlights Film',
    coupleNames: 'PictureSpot Signature Cinema',
    location: 'Delhi NCR & Destination Weddings',
    duration: '05:40',
    thumbnailSrc: '/videos/final_highlight.jpg',
    remoteThumbnailSrc: 'https://lh3.googleusercontent.com/d/1YLFG8ApNSornY_JC25ChFtteFiUi_3Ck=w1200',
    embedUrl: 'https://drive.google.com/file/d/1YLFG8ApNSornY_JC25ChFtteFiUi_3Ck/preview',
    directWatchUrl: 'https://drive.google.com/file/d/1YLFG8ApNSornY_JC25ChFtteFiUi_3Ck/view?usp=sharing',
    description: 'A comprehensive visual tapestry uniting royal courtyard vows, sacred pheras, heartfelt tears, and eternal celebrations.',
    directorNotes: 'The defining showcase of PictureSpot Studio’s cinematic wedding cinematography ethos.',
    category: 'highlight'
  },
  {
    id: 'film-bhaskar-kinjal',
    driveId: '1ZkRiDgS5SNdbc83-_Gc8p3aBVd__tdGd',
    title: 'Bhaskar & Kinjal — Official Wedding Teaser',
    coupleNames: 'Bhaskar & Kinjal',
    location: 'Delhi NCR Heritage Pavilion',
    duration: '02:45',
    thumbnailSrc: '/videos/bhaskar_kinjal.jpg',
    remoteThumbnailSrc: 'https://lh3.googleusercontent.com/d/1ZkRiDgS5SNdbc83-_Gc8p3aBVd__tdGd=w1200',
    embedUrl: 'https://drive.google.com/file/d/1ZkRiDgS5SNdbc83-_Gc8p3aBVd__tdGd/preview',
    directWatchUrl: 'https://drive.google.com/file/d/1ZkRiDgS5SNdbc83-_Gc8p3aBVd__tdGd/view?usp=sharing',
    description: 'High-energy celebration, emotional vows, and unforgettable moments between two souls uniting.',
    directorNotes: 'Captured with slow-motion b-roll, natural ambient acoustics, and high-energy music synchronization.',
    category: 'teaser'
  },
  {
    id: 'film-deepam',
    driveId: '1WvVYuG9ZpfAi8-vv3zywwMYSTsblRRJm',
    title: 'Deepam Ladhani — Royal Wedding Celebration',
    coupleNames: 'Deepam & Partner',
    location: 'Delhi NCR Palatial Resort',
    duration: '04:22',
    thumbnailSrc: '/videos/deepam_ladhani.jpg',
    remoteThumbnailSrc: 'https://lh3.googleusercontent.com/d/1WvVYuG9ZpfAi8-vv3zywwMYSTsblRRJm=w1200',
    embedUrl: 'https://drive.google.com/file/d/1WvVYuG9ZpfAi8-vv3zywwMYSTsblRRJm/preview',
    directWatchUrl: 'https://drive.google.com/file/d/1WvVYuG9ZpfAi8-vv3zywwMYSTsblRRJm/view?usp=sharing',
    description: 'An expansive cinematic wedding film documenting regal courtyard vows, sacred havan, and joyous family celebrations.',
    directorNotes: 'Mastered on full-frame cinema optics with bespoke color grading honoring rich crimson and antique gold tones.',
    category: 'highlight'
  },
  {
    id: 'film-rohit',
    driveId: '1A2-ZS0Houuv-3oAcRuMWP1B3CZuYB48Q',
    title: 'Rohit & Partner — The Celebration Teaser',
    coupleNames: 'Rohit & Partner',
    location: 'Delhi NCR Heritage Retreat',
    duration: '03:05',
    thumbnailSrc: '/videos/rohit_teaser.jpg',
    remoteThumbnailSrc: 'https://lh3.googleusercontent.com/d/1A2-ZS0Houuv-3oAcRuMWP1B3CZuYB48Q=w1200',
    embedUrl: 'https://drive.google.com/file/d/1A2-ZS0Houuv-3oAcRuMWP1B3CZuYB48Q/preview',
    directWatchUrl: 'https://drive.google.com/file/d/1A2-ZS0Houuv-3oAcRuMWP1B3CZuYB48Q/view?usp=sharing',
    description: 'Electric baraat energy, sparkling chandeliers, and the solemn stillness of sacred pheras.',
    directorNotes: 'Dynamic camera movement paired with crisp prime lens bokeh.',
    category: 'teaser'
  },
  {
    id: 'film-aayushi',
    driveId: '1KMNzWXDggj6CAwElu3HBFy4mZ0zJvpqQ',
    title: 'Aayushi & Partner — Royal Wedding Teaser',
    coupleNames: 'Aayushi & Partner',
    location: 'Delhi NCR Palatial Grounds',
    duration: '03:15',
    thumbnailSrc: '/videos/aayushi_teaser.jpg',
    remoteThumbnailSrc: 'https://lh3.googleusercontent.com/d/1KMNzWXDggj6CAwElu3HBFy4mZ0zJvpqQ=w1200',
    embedUrl: 'https://drive.google.com/file/d/1KMNzWXDggj6CAwElu3HBFy4mZ0zJvpqQ/preview',
    directWatchUrl: 'https://drive.google.com/file/d/1KMNzWXDggj6CAwElu3HBFy4mZ0zJvpqQ/view?usp=sharing',
    description: 'The regal weight of bridal entrance under phoolon ki chaadar, Vedic rituals, and joyful dancing.',
    directorNotes: 'Fine art portraiture lighting blended with documentary agility.',
    category: 'teaser'
  },
  {
    id: 'film-sujay',
    driveId: '1lBsk1sVM9G3vdzLDjNdT9AAJWsBlov-Q',
    title: 'Sujay & Partner — Cinematic Wedding Teaser',
    coupleNames: 'Sujay & Partner',
    location: 'Delhi NCR & Rajasthan Destination',
    duration: '02:58',
    thumbnailSrc: '/videos/sujay_teaser.jpg',
    remoteThumbnailSrc: 'https://lh3.googleusercontent.com/d/1lBsk1sVM9G3vdzLDjNdT9AAJWsBlov-Q=w1200',
    embedUrl: 'https://drive.google.com/file/d/1lBsk1sVM9G3vdzLDjNdT9AAJWsBlov-Q/preview',
    directWatchUrl: 'https://drive.google.com/file/d/1lBsk1sVM9G3vdzLDjNdT9AAJWsBlov-Q/view?usp=sharing',
    description: 'A poetic celebration of heritage architecture, gentle evening breezes, and profound family blessings.',
    directorNotes: 'Scored with live acoustic instrumentation and warm cinematic film stock emulation.',
    category: 'teaser'
  },
  {
    id: 'film-teaser-01',
    driveId: '1XC95EMoA8BFfIitQb-J1ZQUUGyQw5zwn',
    title: 'PictureSpot Studio — Signature Film Teaser 01',
    coupleNames: 'PictureSpot Cinema',
    location: 'Delhi NCR & Rajasthan',
    duration: '02:30',
    thumbnailSrc: '/videos/teaser_01.jpg',
    remoteThumbnailSrc: 'https://lh3.googleusercontent.com/d/1XC95EMoA8BFfIitQb-J1ZQUUGyQw5zwn=w1200',
    embedUrl: 'https://drive.google.com/file/d/1XC95EMoA8BFfIitQb-J1ZQUUGyQw5zwn/preview',
    directWatchUrl: 'https://drive.google.com/file/d/1XC95EMoA8BFfIitQb-J1ZQUUGyQw5zwn/view?usp=sharing',
    description: 'Atmospheric teaser capturing the prelude, nervous excitement, and majestic union of the wedding day.',
    directorNotes: 'Subtle sound design layering whispering mantras over orchestral strings.',
    category: 'teaser'
  },
  {
    id: 'film-haldi',
    driveId: '1wlFbs8tOwWOVY4bm-BqyokPpFt6F2ypY',
    title: 'Haldi Celebrations & Pure Joy — Cinematic Short',
    coupleNames: 'Haldi Celebrations',
    location: 'Delhi NCR Countryside',
    duration: '01:50',
    thumbnailSrc: '/videos/haldi_teaser.jpg',
    remoteThumbnailSrc: 'https://lh3.googleusercontent.com/d/1wlFbs8tOwWOVY4bm-BqyokPpFt6F2ypY=w1200',
    embedUrl: 'https://drive.google.com/file/d/1wlFbs8tOwWOVY4bm-BqyokPpFt6F2ypY/preview',
    directWatchUrl: 'https://drive.google.com/file/d/1wlFbs8tOwWOVY4bm-BqyokPpFt6F2ypY/view?usp=sharing',
    description: 'Yellow turmeric splashes, marigold showers, and uncontrollable family laughter caught in vivid detail.',
    directorNotes: 'High frame-rate capture celebrating dynamic color and spontaneous playfulness.',
    category: 'haldi'
  },
  {
    id: 'film-nikhil-reel',
    driveId: '1wG4ov21QusKFMTJvuP-HoAfEp4y-JAIw',
    title: 'Nikhil & Partner — Vertical Wedding Cinema Reel',
    coupleNames: 'Nikhil & Partner',
    location: 'Delhi NCR',
    duration: '01:15',
    thumbnailSrc: '/videos/nikhil_reel.jpg',
    remoteThumbnailSrc: 'https://lh3.googleusercontent.com/d/1wG4ov21QusKFMTJvuP-HoAfEp4y-JAIw=w1200',
    embedUrl: 'https://drive.google.com/file/d/1wG4ov21QusKFMTJvuP-HoAfEp4y-JAIw/preview',
    directWatchUrl: 'https://drive.google.com/file/d/1wG4ov21QusKFMTJvuP-HoAfEp4y-JAIw/view?usp=sharing',
    description: 'A vertical cinematic reel optimized for modern digital screens and luxury storytelling.',
    directorNotes: 'Crafted specifically in portrait format for mobile viewing with sharp editorial cuts.',
    category: 'reel'
  }
];

// Authentic Client Words & Feedback
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    coupleNames: 'Meher & Arjun',
    weddingLocation: 'Delhi NCR',
    weddingYear: '2025',
    quote: 'PictureSpot Studio didn’t just photograph our wedding — they preserved how it actually felt. Looking through our gallery brings back every heartbeat, the smell of the havan, and the tears in my father’s eyes. Their presence was calm, discreet, and utterly creative.',
    highlight: 'Preserved how the day actually felt.'
  },
  {
    id: 'test-2',
    coupleNames: 'Rhea & Kabir',
    weddingLocation: 'Heritage Estate, Delhi NCR',
    weddingYear: '2024',
    quote: 'We were terrified of stiff, awkward wedding poses. The PictureSpot team made us feel like we were just hanging out while they created museum-worthy art around us. The film made our entire family cry all over again.',
    highlight: 'Museum-worthy art without stiff poses.'
  },
  {
    id: 'test-3',
    coupleNames: 'Simran & Dev',
    weddingLocation: 'Jaipur & Delhi NCR',
    weddingYear: '2024',
    quote: 'Every single frame looks like a still from a luxury editorial magazine, yet every expression is 100% real and authentic. In a sea of cookie-cutter wedding photographers, PictureSpot Studio stands in a class of their own.',
    highlight: 'In a sea of cookie-cutter photographers, in a class of their own.'
  },
  {
    id: 'test-4',
    coupleNames: 'Tanya & Rohan',
    weddingLocation: 'Delhi Outskirts',
    weddingYear: '2024',
    quote: 'From our pre-wedding shoot in the hills to our final bidaai, the dedication of the PictureSpot team was extraordinary. Over 1,000 weddings of experience truly shows in their timing and instinct for fleeting moments.',
    highlight: 'Over a decade of instinct for fleeting moments.'
  }
];

export const BRAND_DETAILS = {
  name: 'PICTURESPOT STUDIO',
  tagline: 'WE ARE MORE CREATIVE FOR YOU',
  business: 'Premium Wedding Photography & Cinematography',
  established: 2015,
  weddingsCovered: '1000+',
  location: 'Delhi NCR, India',
  fullAddress: '5th floor, B-99, Panchsheel Vihar, Sheikh Sarai Phase 1, Malviya Nagar, New Delhi, Delhi 110017',
  shortAddress: 'Malviya Nagar, New Delhi, Delhi 110017',
  googleMapsUrl: 'https://share.google/hhY6wnNDc1LehMWiw',
  availability: 'Available across Delhi NCR, India & Global Destination Weddings',
  phone: '+91 97110 66988',
  phoneClean: '+919711066988',
  whatsappUrl: 'https://wa.me/919711066988',
  instagramHandle: '@picturespot.studio',
  instagramUrl: 'https://instagram.com/picturespot.studio',
  secondaryInstagramHandle: '@picturespotpodcast.studio',
  secondaryInstagramUrl: 'https://instagram.com/picturespotpodcast.studio',
  googleDrivePhotosUrl: 'https://drive.google.com/drive/folders/1K7p8cOF03yNbdZmxNwsazeuSZ2Re9Q9C?usp=drive_link',
  googleDriveVideosUrl: 'https://drive.google.com/drive/folders/13o-boj78Vw374J7JblsgK7SAl8cnUXzU?usp=drive_link'
};
