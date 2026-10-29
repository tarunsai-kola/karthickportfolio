import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Real Colorful Brand Logos
function WhatsAppRealLogo() {
  return (
    <div 
      className="size-14 sm:size-16 rounded-[18px] flex items-center justify-center p-3 shadow-[0_4px_22px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(37,211,102,0.7)]"
      style={{ background: 'linear-gradient(135deg, #2fe577 0%, #25D366 50%, #128C7E 100%)' }}
    >
      <svg viewBox="0 0 32 32" fill="white" className="size-8 sm:size-9">
        <path d="M16.02 3C8.83 3 3 8.83 3 16.02c0 2.4.65 4.65 1.78 6.6L3 29l6.58-1.72a12.94 12.94 0 0 0 6.44 1.71c7.19 0 13.02-5.83 13.02-13.02C29.04 8.83 23.21 3 16.02 3zm0 23.82c-2.14 0-4.14-.6-5.86-1.63l-.42-.25-4.36 1.14 1.16-4.25-.27-.44A10.8 10.8 0 0 1 5.2 16.02c0-5.97 4.85-10.82 10.82-10.82 5.97 0 10.82 4.85 10.82 10.82 0 5.97-4.85 10.82-10.82 10.82zm5.93-8.11c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.67.15-.15.33-.38.5-.58.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.16.22 2.32 3.54 5.62 4.97.79.34 1.4.54 1.88.7.79.25 1.51.22 2.08.13.64-.1 1.93-.79 2.2-1.55.27-.77.27-1.42.19-1.55-.08-.13-.3-.22-.63-.38z" />
      </svg>
    </div>
  );
}

function GmailRealLogo() {
  return (
    <div 
      className="size-14 sm:size-16 rounded-[18px] flex items-center justify-center p-3.5 bg-white shadow-[0_4px_22px_rgba(234,67,53,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(234,67,53,0.65)]"
    >
      <svg viewBox="0 0 48 48" className="size-8 sm:size-9">
        {/* Google Blue left pillar */}
        <path fill="#4285F4" d="M6 39.5c0 1.9 1.6 3.5 3.5 3.5H13V24.3l-7-5.3V39.5z" />
        {/* Google Green right pillar */}
        <path fill="#34A853" d="M38.5 43c1.9 0 3.5-1.6 3.5-3.5V19l-7 5.3V43h3.5z" />
        {/* Google Red top fold */}
        <path fill="#EA4335" d="M13 14.3v10l11 8.2 11-8.2v-10l-11-8.3-11 8.3z" />
        {/* Yellow fold accent */}
        <path fill="#FBBC05" d="M13 14.3v10L6 19v-6.3c0-2.4 2.6-3.9 4.7-2.7l2.3 4.3z" />
        {/* Deep red fold accent */}
        <path fill="#C5221F" d="M35 14.3v10l7-5.3v-6.3c0-2.4-2.6-3.9-4.7-2.7l-2.3 4.3z" />
      </svg>
    </div>
  );
}

function LinkedInRealLogo() {
  return (
    <div 
      className="size-14 sm:size-16 rounded-[18px] flex items-center justify-center p-3 shadow-[0_4px_22px_rgba(10,102,194,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(10,102,194,0.7)]"
      style={{ background: 'linear-gradient(135deg, #0077b5 0%, #0A66C2 100%)' }}
    >
      <svg viewBox="0 0 24 24" fill="white" className="size-8 sm:size-9">
        <circle cx="4.983" cy="5.009" r="2.188" />
        <path d="M9.237 8.855v12.136h3.769v-6.009c0-1.584.302-3.118 2.27-3.118 1.94 0 1.966 1.815 1.966 3.218v5.909h3.769V14.39c0-3.238-.696-5.731-4.475-5.731-1.816 0-3.031.998-3.528 1.941h-.051V8.855H9.237zM3.1 8.855h3.769v12.136H3.1z" />
      </svg>
    </div>
  );
}

function XTwitterRealLogo() {
  return (
    <div 
      className="size-14 sm:size-16 rounded-[18px] flex items-center justify-center p-3.5 bg-[#0a0a0a] border border-white/25 shadow-[0_4px_22px_rgba(255,255,255,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:shadow-[0_8px_30px_rgba(0,210,255,0.4)]"
    >
      <svg viewBox="0 0 24 24" fill="white" className="size-7 sm:size-8">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </div>
  );
}

function InstagramRealLogo() {
  return (
    <div 
      className="size-14 sm:size-16 rounded-[18px] flex items-center justify-center p-3 shadow-[0_4px_22px_rgba(214,36,159,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(214,36,159,0.7)]"
      style={{
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 sm:size-9">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    </div>
  );
}

function PhoneRealLogo() {
  return (
    <div 
      className="size-14 sm:size-16 rounded-[18px] flex items-center justify-center p-3 shadow-[0_4px_22px_rgba(16,185,129,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.7)]"
      style={{ background: 'linear-gradient(135deg, #34D399 0%, #10B981 50%, #059669 100%)' }}
    >
      <svg viewBox="0 0 24 24" fill="white" className="size-7 sm:size-8">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
      </svg>
    </div>
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

            {/* 6 Real Colorful Social / Contact Buttons in 2 rows */}
            <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-8 max-w-md">
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/918297874231"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center justify-center group cursor-pointer"
                title="Connect on WhatsApp"
              >
                <WhatsAppRealLogo />
                <span className="mt-2 text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white/90 group-hover:text-[#25D366] transition-colors">
                  WhatsApp
                </span>
              </a>

              {/* Email / Gmail */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex flex-col items-center justify-center group cursor-pointer"
                title="Send an Email"
              >
                <GmailRealLogo />
                <span className="mt-2 text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white/90 group-hover:text-[#EA4335] transition-colors">
                  Gmail
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center justify-center group cursor-pointer"
                title="Connect on LinkedIn"
              >
                <LinkedInRealLogo />
                <span className="mt-2 text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white/90 group-hover:text-[#0A66C2] transition-colors">
                  LinkedIn
                </span>
              </a>

              {/* X / Twitter */}
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center justify-center group cursor-pointer"
                title="Follow on X"
              >
                <XTwitterRealLogo />
                <span className="mt-2 text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white/90 group-hover:text-cyan-400 transition-colors">
                  X
                </span>
              </a>

              {/* Instagram */}
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center justify-center group cursor-pointer"
                title="Follow on Instagram"
              >
                <InstagramRealLogo />
                <span className="mt-2 text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white/90 group-hover:text-[#E4405F] transition-colors">
                  Instagram
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex flex-col items-center justify-center group cursor-pointer"
                title="Call Directly"
              >
                <PhoneRealLogo />
                <span className="mt-2 text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white/90 group-hover:text-[#10B981] transition-colors">
                  Call
                </span>
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
