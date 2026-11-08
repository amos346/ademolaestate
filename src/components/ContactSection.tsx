import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Lagos',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-600 block mb-2">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                Connect With Our Private Advisors
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
                Whether you are looking to acquire an iconic penthouse in Ikoyi, a smart villa in Eko Atlantic, or a diplomatic residence in Abuja, our private advisors are at your service.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-base">Lagos Headquarters</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">Ademola Towers, 14 Admiralty Way, Lekki Phase 1, Lagos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-base">Abuja Branch Office</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">Diplomatic Zone, 22 Shehu Shagari Way, Maitama, Abuja</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-base">Direct Concierge</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">+234 803 123 4567 / +234 908 987 6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-base">Email Inquiries</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">concierge@ademolarealestate.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900 text-white p-8 sm:p-12 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Message Received Successfully!</h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto font-light">
                  Thank you for contacting Ademola Real Estate. One of our senior private advisors will reach out to you within 30 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-amber-500 text-neutral-950 font-bold rounded-xl text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Schedule a Consultation or Inquiry</h3>
                <p className="text-xs text-neutral-400 font-light mb-6">
                  Fill out the form below and our luxury concierge will get in touch instantly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Chief Ademola Adeleke"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ademola@example.com"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 803 000 0000"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Preferred Location Focus</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                      <option value="Lagos">Lagos (Ikoyi, Lekki, Eko Atlantic)</option>
                      <option value="Abuja">Abuja (Maitama, Asokoro)</option>
                      <option value="Port Harcourt">Port Harcourt (GRA)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Your Message / Requirements</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="I am looking for a 5-bedroom luxury penthouse in Ikoyi with a private pool..."
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
