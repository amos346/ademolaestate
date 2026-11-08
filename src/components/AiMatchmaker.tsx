import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, Loader2, Building2 } from 'lucide-react';

export const AiMatchmaker: React.FC = () => {
  const [query, setQuery] = useState('');
  const [budget, setBudget] = useState('₦500M - ₦1B');
  const [locationPref, setLocationPref] = useState('Lagos (Ikoyi / Lekki / Eko Atlantic)');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const presets = [
    'What is the highest ROI luxury property investment in Lagos right now?',
    'I want a 4-bedroom smart home in Lekki Phase 1 under ₦600M with Governor\'s Consent.',
    'Compare real estate investment in Ikoyi vs. Eko Atlantic City.',
    'Looking for an ultra-secure diplomatic villa in Maitama, Abuja.'
  ];

  const handleAsk = async (textToAsk?: string) => {
    const finalQuery = textToAsk || query;
    if (!finalQuery.trim()) return;

    setLoading(true);
    setRecommendation(null);

    try {
      const res = await fetch('/api/ai-recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: finalQuery,
          preferences: { budget, locationPref }
        })
      });

      const data = await res.json();
      if (data.recommendation) {
        setRecommendation(data.recommendation);
      } else {
        setRecommendation('Sorry, we could not generate a recommendation at this moment. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setRecommendation('An error occurred while connecting to Ademola AI Advisor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-matchmaker" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Ademola AI Property Matchmaker</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Get Instant Expert Real Estate Advisory
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Powered by advanced AI and decades of Nigerian real estate expertise. Ask for tailored investment insights, neighborhood comparisons, or custom property matches.
          </p>
        </div>

        {/* Preferences Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-neutral-800/80 border border-neutral-700 p-4 rounded-2xl">
            <label className="block text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">Your Investment Budget</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer"
            >
              <option value="₦300M - ₦500M" className="bg-neutral-900">₦300M - ₦500M</option>
              <option value="₦500M - ₦1B" className="bg-neutral-900">₦500M - ₦1B</option>
              <option value="₦1B - ₦2.5B+" className="bg-neutral-900">₦1B - ₦2.5B+</option>
            </select>
          </div>

          <div className="bg-neutral-800/80 border border-neutral-700 p-4 rounded-2xl">
            <label className="block text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">Preferred Location</label>
            <select
              value={locationPref}
              onChange={(e) => setLocationPref(e.target.value)}
              className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer"
            >
              <option value="Lagos (Ikoyi / Lekki / Eko Atlantic)" className="bg-neutral-900">Lagos (Ikoyi / Lekki / Eko Atlantic)</option>
              <option value="Abuja (Maitama / Asokoro)" className="bg-neutral-900">Abuja (Maitama / Asokoro)</option>
              <option value="Port Harcourt (GRA Phase 2)" className="bg-neutral-900">Port Harcourt (GRA Phase 2)</option>
            </select>
          </div>
        </div>

        {/* Input Box */}
        <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-4 shadow-2xl mb-6">
          <textarea
            rows={3}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe your ideal property or ask about Nigerian real estate market trends..."
            className="w-full bg-transparent text-white placeholder-neutral-400 text-sm focus:outline-none resize-none"
          ></textarea>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-neutral-700/60 gap-3">
            <span className="text-xs text-neutral-400 font-light">
              Tip: Click a preset below or type your custom inquiry.
            </span>
            <button
              onClick={() => handleAsk()}
              disabled={loading || !query.trim()}
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-neutral-950 font-bold rounded-xl transition-all shadow flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing Market...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Ask Ademola AI</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preset Suggestions */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="text-xs text-neutral-400 self-center mr-2">Popular Prompts:</span>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(preset);
                handleAsk(preset);
              }}
              className="text-xs px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-300 transition-colors"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* AI Response Display */}
        {recommendation && (
          <div className="bg-neutral-800/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-700">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-white">Ademola AI Advisory Report</h4>
                <p className="text-xs text-amber-400">Tailored to your budget ({budget}) and preferred location</p>
              </div>
            </div>
            <div className="prose prose-invert max-w-none text-sm text-neutral-300 font-light whitespace-pre-line leading-relaxed">
              {recommendation}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
