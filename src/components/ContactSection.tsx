import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Instagram, MapPin } from 'lucide-react';
import { BRAND_DETAILS } from '../data/picturespot_assets.ts';

interface ContactSectionProps {
  prefilledNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledNotes = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    partnerName: '',
    weddingDate: '',
    weddingLocation: '',
    phone: '',
    email: '',
    message: prefilledNotes
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const sendDirectToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello PictureSpot Studio,\n\nI would love to inquire about Wedding Photography & Cinematography!\n\nName: ${formData.name || 'Inquirer'}\nPartner's Name: ${formData.partnerName || 'N/A'}\nWedding Date: ${formData.weddingDate || 'TBD'}\nLocation: ${formData.weddingLocation || 'Delhi NCR'}\nPhone: ${formData.phone || 'N/A'}\nEmail: ${formData.email || 'N/A'}\n\nDetails:\n${formData.message || 'Looking for wedding coverage details.'}`
    );
    window.open(`https://wa.me/919711066988?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-[#0e0e10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <span className="text-xs tracking-[0.3em] uppercase text-[#88837a] font-medium block">
            Initiate Conversation
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf9f5]">
            LET’S TALK ABOUT YOUR WEDDING.
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#ded9ce] font-light">
            “We limit our commissions each season to ensure undivided focus on every love story.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.25em] uppercase text-[#88837a] block">
                Studio Headquarters
              </span>
              <p className="font-serif text-2xl text-[#faf9f5]">
                {BRAND_DETAILS.location}
              </p>
              <p className="text-xs sm:text-sm text-[#9f9a90] font-light leading-relaxed">
                Available for weddings across Delhi NCR, Rajasthan, Goa, Himalayas, and destination locations worldwide.
              </p>
            </div>

            {/* Direct Instant Contact Buttons */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <span className="text-xs tracking-[0.25em] uppercase text-[#88837a] block">
                Direct Inquiries
              </span>

              {/* WhatsApp Button */}
              <a
                href={BRAND_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 bg-white/[0.03] border border-white/10 hover:border-white/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <div className="text-left">
                    <span className="text-[10px] tracking-wider uppercase text-[#88837a] block">WhatsApp Chat</span>
                    <span className="text-sm font-medium text-white">{BRAND_DETAILS.phone}</span>
                  </div>
                </div>
                <span className="text-xs text-[#a8a39a] group-hover:text-white transition-colors">Chat Now →</span>
              </a>

              {/* Phone Button */}
              <a
                href={`tel:${BRAND_DETAILS.phoneClean}`}
                className="w-full p-4 bg-white/[0.03] border border-white/10 hover:border-white/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#ded9ce]" />
                  <div className="text-left">
                    <span className="text-[10px] tracking-wider uppercase text-[#88837a] block">Call The Studio</span>
                    <span className="text-sm font-medium text-white">{BRAND_DETAILS.phone}</span>
                  </div>
                </div>
                <span className="text-xs text-[#a8a39a] group-hover:text-white transition-colors">Call Now →</span>
              </a>

              {/* Instagram */}
              <a
                href={BRAND_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 bg-white/[0.03] border border-white/10 hover:border-white/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-[#ded9ce]" />
                  <div className="text-left">
                    <span className="text-[10px] tracking-wider uppercase text-[#88837a] block">Primary Wedding Portfolio</span>
                    <span className="text-sm font-medium text-white">{BRAND_DETAILS.instagramHandle}</span>
                  </div>
                </div>
                <span className="text-xs text-[#a8a39a] group-hover:text-white transition-colors">Follow →</span>
              </a>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#88837a] block">
                Office Hours
              </span>
              <p className="text-xs text-[#beb8ad]">
                Monday – Sunday: 10:00 AM – 8:00 PM IST
              </p>
              <p className="text-[11px] text-[#88837a]">
                Responses typically delivered within 4 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0c0c0d] p-8 sm:p-12 border border-white/10 relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-[#88837a] block">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Meher Sharma"
                      className="w-full bg-[#141416] border border-white/10 px-4 py-3.5 text-sm text-[#faf9f5] focus:outline-none focus:border-white transition-colors placeholder:text-[#555]"
                    />
                  </div>

                  {/* Partner's Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-[#88837a] block">
                      Partner’s Name
                    </label>
                    <input
                      type="text"
                      name="partnerName"
                      value={formData.partnerName}
                      onChange={handleChange}
                      placeholder="e.g. Arjun Kapoor"
                      className="w-full bg-[#141416] border border-white/10 px-4 py-3.5 text-sm text-[#faf9f5] focus:outline-none focus:border-white transition-colors placeholder:text-[#555]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Wedding Date */}
                  <div className="space-y-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-[#88837a] block">
                      Wedding Date / Month <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="weddingDate"
                      required
                      value={formData.weddingDate}
                      onChange={handleChange}
                      placeholder="e.g. November 2026 or DD/MM/YYYY"
                      className="w-full bg-[#141416] border border-white/10 px-4 py-3.5 text-sm text-[#faf9f5] focus:outline-none focus:border-white transition-colors placeholder:text-[#555]"
                    />
                  </div>

                  {/* Wedding Location */}
                  <div className="space-y-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-[#88837a] block">
                      Wedding Location <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="weddingLocation"
                      required
                      value={formData.weddingLocation}
                      onChange={handleChange}
                      placeholder="e.g. Delhi NCR / Jaipur"
                      className="w-full bg-[#141416] border border-white/10 px-4 py-3.5 text-sm text-[#faf9f5] focus:outline-none focus:border-white transition-colors placeholder:text-[#555]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-[#88837a] block">
                      Phone / WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#141416] border border-white/10 px-4 py-3.5 text-sm text-[#faf9f5] focus:outline-none focus:border-white transition-colors placeholder:text-[#555]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[11px] tracking-[0.2em] uppercase text-[#88837a] block">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.name@example.com"
                      className="w-full bg-[#141416] border border-white/10 px-4 py-3.5 text-sm text-[#faf9f5] focus:outline-none focus:border-white transition-colors placeholder:text-[#555]"
                    />
                  </div>
                </div>

                {/* Tell us about your wedding */}
                <div className="space-y-2">
                  <label className="text-[11px] tracking-[0.2em] uppercase text-[#88837a] block">
                    Tell us about your wedding
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the ceremonies (Haldi, Mehendi, Sangeet, Pheras), venues, expected guests, or specific film ideas..."
                    className="w-full bg-[#141416] border border-white/10 px-4 py-3.5 text-sm text-[#faf9f5] focus:outline-none focus:border-white transition-colors placeholder:text-[#555] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 bg-[#f4f2ee] text-[#0c0c0d] text-xs tracking-[0.25em] uppercase font-medium hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND ENQUIRY</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={sendDirectToWhatsApp}
                    className="w-full sm:w-auto px-6 py-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs tracking-[0.2em] uppercase hover:bg-emerald-900/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>OR SEND VIA WHATSAPP</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-white">
                    Thank You, {formData.name}.
                  </h3>
                  <p className="text-sm text-[#beb8ac] max-w-md mx-auto leading-relaxed">
                    Your wedding enquiry has been received by our senior team. We will review our availability for {formData.weddingDate || 'your dates'} in {formData.weddingLocation || 'Delhi NCR'} and connect shortly.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={sendDirectToWhatsApp}
                    className="px-6 py-3.5 bg-emerald-600 text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>CONNECT INSTANTLY ON WHATSAPP</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3.5 border border-white/20 text-white/80 text-xs tracking-[0.2em] uppercase hover:text-white hover:border-white transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
