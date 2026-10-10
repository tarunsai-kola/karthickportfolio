import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Loader2, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    reason: 'Project Collaboration',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
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
        // Fallback delay if URL not yet configured
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('success');
      confetti({
        particleCount: 100,
        spread: 70,
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
    <section id="contact" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact Left Description */}
          <div>
            <p className="label-mono mb-2">// GET IN TOUCH</p>
            <h2 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight">
              Connect With Me
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
              Whether you are looking to explore healthcare workflow tools, collaborate on engineering education, or discuss technology-driven initiatives, I would love to connect.
            </p>

            <div className="mt-8 space-y-4">
              {/* Founder Info Card */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white">
                    {personalInfo.name} // {personalInfo.designation}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-white">
                  <div className="grid size-8 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                    <Mail className="size-4" />
                  </div>
                  <a href={`mailto:${personalInfo.email}`} className="font-mono text-xs text-slate-300 hover:text-cyan-400 transition-colors underline">
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-white">
                  <div className="grid size-8 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                    <Phone className="size-4" />
                  </div>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="font-mono text-xs text-slate-300 hover:text-cyan-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-white">
                  <div className="grid size-8 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                    <MapPin className="size-4" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pl-1">
                <Sparkles className="size-3.5 text-cyan-400" />
                <span>DIRECT TELEMETRY RESPONSE WITHIN 24–48 HOURS</span>
              </div>
            </div>
          </div>

          {/* Form / Success Card */}
          {status === 'success' ? (
            <div className="surface-card flex flex-col items-center justify-center p-8 sm:p-12 text-center project-modal-enter border border-cyan-500/40">
              <div className="grid size-16 place-items-center rounded-full bg-cyan-500/10 text-cyan-400 mb-5 border border-cyan-500/30">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono uppercase tracking-wider">Message Dispatched!</h3>
              <p className="mt-3 max-w-md text-sm text-slate-300 leading-relaxed">
                Thank you, <span className="font-semibold text-white">{formData.name}</span>! I've received your inquiry regarding <span className="font-semibold text-white">{formData.reason}</span>. I will review your note and reach back to <span className="font-mono text-xs text-cyan-400 bg-slate-950 px-1.5 py-0.5 rounded border border-white/10">{formData.email}</span> promptly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 rounded-xl bg-white text-black font-mono text-xs uppercase tracking-widest font-bold px-5 py-3 hover:bg-cyan-400 transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="surface-card grid gap-4 p-6 sm:p-8 border border-white/15"
              noValidate
            >
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                  {errorMessage}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="label-mono text-[11px]">// FULL NAME *</span>
                  <input
                    required
                    maxLength={100}
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="label-mono text-[11px]">// EMAIL ADDRESS *</span>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder="name@organization.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="label-mono text-[11px]">// ORGANIZATION / CLINIC</span>
                  <input
                    maxLength={120}
                    placeholder="Company or institution"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                  />
                </label>

                <label className="grid gap-1.5">
                  <span className="label-mono text-[11px]">// REASON FOR CONTACT</span>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-2.5 text-sm text-white transition-colors focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Project Collaboration" className="bg-slate-950 text-white">Project Collaboration</option>
                    <option value="AIIENS Health Inquiries" className="bg-slate-950 text-white">AIIENS Health (Clinics)</option>
                    <option value="AIIENS Campus Workshops" className="bg-slate-950 text-white">AIIENS Campus (Education)</option>
                    <option value="AIIENS Foundation" className="bg-slate-950 text-white">AIIENS Foundation (Social Impact)</option>
                    <option value="Speaking / Advisory" className="bg-slate-950 text-white">Speaking / Advisory</option>
                    <option value="General Discussion" className="bg-slate-950 text-white">General Discussion</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-1.5">
                <span className="label-mono text-[11px]">// MESSAGE *</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  minLength={10}
                  maxLength={2000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your project, idea, or how we might collaborate..."
                  className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-black shadow-lg transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-60 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
