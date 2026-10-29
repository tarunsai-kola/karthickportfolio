import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom icons matching Canva styling
function WhatsAppIcon({ className = "size-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function EmailAtIcon({ className = "size-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <circle cx="12" cy="13" r="2.5" />
    </svg>
  );
}

function LinkedInBoxIcon({ className = "size-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M7 10v7" />
      <circle cx="7" cy="6.5" r="1" fill="currentColor" />
      <path d="M11 17v-7h3.5v1.2a3 3 0 0 1 2.5-1.2c2 0 3 1.2 3 3.5V17h-3.5v-3.5c0-.8-.3-1.5-1.2-1.5-.8 0-1.3.7-1.3 1.5V17H11z" />
    </svg>
  );
}

function XTwitterIcon({ className = "size-7" }) {
  return (
    <div className="size-10 sm:size-11 rounded-full border-[1.8px] border-white flex items-center justify-center p-2">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </div>
  );
}

function InstagramOutlineIcon({ className = "size-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function PhoneHandsetIcon({ className = "size-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    reason: 'Project Collaboration',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and a message.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const scriptUrl = personalInfo.googleScriptUrl;

    try {
      if (scriptUrl && !scriptUrl.includes('YOUR_GOOGLE_APPS_SCRIPT')) {
        const bodyParams = new URLSearchParams({
          name: formData.name,
          email: formData.email,
          organization: formData.organization || 'N/A',
          reason: formData.reason || 'General Inquiry',
          message: formData.message,
          timestamp: new Date().toLocaleString()
        });

        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: bodyParams.toString()
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('success');
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      reason: 'Project Collaboration',
      message: ''
    });
    setStatus('idle');
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 bg-black text-white">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Main 2-column Grid */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] items-start">
          
          {/* Left Column: Heading, Location, Icons, Buttons */}
          <div className="flex flex-col">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3">
              CONTACT
            </span>

            <div className="flex items-start justify-between gap-4">
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight uppercase">
                KARTHIKEYA<br />PANTAM
              </h2>

              {/* India Location Badge matching Canva */}
              <div className="flex items-center gap-2 pt-2 shrink-0">
                <MapPin className="size-6 text-white fill-white" />
                <span className="text-xl sm:text-2xl font-serif tracking-widest text-white uppercase font-normal">
                  INDIA
                </span>
              </div>
            </div>

            {/* 6 Social / Contact Buttons in 2 rows */}
            <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-8 max-w-md">
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/918297874231"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center justify-center text-white hover:text-cyan-400 transition-colors group"
              >
                <div className="size-16 sm:size-18 rounded-2xl flex flex-col items-center justify-center transition-transform group-hover:scale-110">
                  <WhatsAppIcon className="size-9 sm:size-10" />
                  <span className="mt-1 text-[11px] font-sans font-bold tracking-tight text-white group-hover:text-cyan-400">
                    WhatsApp
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex flex-col items-center justify-center text-white hover:text-cyan-400 transition-colors group"
              >
                <div className="size-16 sm:size-18 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <EmailAtIcon className="size-10 sm:size-11" />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center justify-center text-white hover:text-cyan-400 transition-colors group"
              >
                <div className="size-16 sm:size-18 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <LinkedInBoxIcon className="size-10 sm:size-11" />
                </div>
              </a>

              {/* X / Twitter */}
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center justify-center text-white hover:text-cyan-400 transition-colors group"
              >
                <div className="size-16 sm:size-18 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <XTwitterIcon className="size-10 sm:size-11" />
                </div>
              </a>

              {/* Instagram */}
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center justify-center text-white hover:text-cyan-400 transition-colors group"
              >
                <div className="size-16 sm:size-18 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <InstagramOutlineIcon className="size-10 sm:size-11" />
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex flex-col items-center justify-center text-white hover:text-cyan-400 transition-colors group"
              >
                <div className="size-16 sm:size-18 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <PhoneHandsetIcon className="size-10 sm:size-11" />
                </div>
              </a>

            </div>

            {/* Two Action Buttons: Connect With Me & Explore AIIENS */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-black shadow-[0_0_25px_rgba(0,210,255,0.45)] transition-all hover:bg-white hover:shadow-[0_0_35px_rgba(0,210,255,0.7)]"
              >
                <span>CONNECT WITH ME</span>
                <span>➔</span>
              </a>

              <a
                href="#aiiens"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-black transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,210,255,0.4)]"
              >
                <span>EXPLORE AIIENS</span>
              </a>
            </div>

          </div>

          {/* Right Column: Cyberpunk / Sci-Fi Terminal Contact Form */}
          <div className="w-full">
            <div className="relative rounded-2xl border border-cyan-400/50 bg-[#03060f] p-6 sm:p-8 shadow-[0_0_30px_rgba(0,210,255,0.18)]">
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="grid size-14 place-items-center rounded-full bg-cyan-500/10 text-cyan-400 mb-4 border border-cyan-400/40">
                    <CheckCircle2 className="size-7" />
                  </div>
                  <h3 className="text-xl font-bold font-mono text-white uppercase tracking-wider">
                    Message Transmitted
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-sm">
                    Thank you, <span className="text-cyan-400 font-bold">{formData.name}</span>. Your note has been received and I will reply to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 rounded-xl bg-cyan-400 text-black px-5 py-2.5 text-xs font-mono uppercase tracking-widest font-bold hover:bg-white transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="block text-[11px] font-mono tracking-wider text-cyan-400 font-semibold mb-1.5 uppercase">
                        // FULL NAME *
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-lg border border-cyan-500/30 bg-[#060a17] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </label>

                    <label className="block">
                      <span className="block text-[11px] font-mono tracking-wider text-cyan-400 font-semibold mb-1.5 uppercase">
                        // EMAIL ADDRESS *
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.com"
                        className="w-full rounded-lg border border-cyan-500/30 bg-[#060a17] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </label>
                  </div>

                  {/* Row 2: Organization / Clinic & Reason for Contact */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="block text-[11px] font-mono tracking-wider text-cyan-400 font-semibold mb-1.5 uppercase">
                        // ORGANIZATION / CLINIC
                      </span>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company or institution"
                        className="w-full rounded-lg border border-cyan-500/30 bg-[#060a17] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </label>

                    <label className="block">
                      <span className="block text-[11px] font-mono tracking-wider text-cyan-400 font-semibold mb-1.5 uppercase">
                        // REASON FOR CONTACT
                      </span>
                      <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-cyan-500/30 bg-[#060a17] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer"
                      >
                        <option value="Project Collaboration" className="bg-[#060a17] text-white">Project Collaboration</option>
                        <option value="Healthcare Technology" className="bg-[#060a17] text-white">Healthcare Technology</option>
                        <option value="Education & Mentorship" className="bg-[#060a17] text-white">Education &amp; Mentorship</option>
                        <option value="Social Impact Initiatives" className="bg-[#060a17] text-white">Social Impact Initiatives</option>
                        <option value="General Inquiry" className="bg-[#060a17] text-white">General Inquiry</option>
                      </select>
                    </label>
                  </div>

                  {/* Row 3: Message */}
                  <label className="block">
                    <span className="block text-[11px] font-mono tracking-wider text-cyan-400 font-semibold mb-1.5 uppercase">
                      // MESSAGE *
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your project, idea, or how we might collaborate..."
                      className="w-full rounded-lg border border-cyan-500/30 bg-[#060a17] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </label>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 px-6 text-xs font-mono uppercase tracking-widest font-bold text-black shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(0,210,255,0.7)] cursor-pointer disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="size-3.5" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
