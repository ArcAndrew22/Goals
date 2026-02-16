
import React, { useState, useEffect } from 'react';
import { generateStrategicInsight } from '../services/geminiService';
import { GoalCategory } from '../types';

const AIQuotes: React.FC = () => {
  const [insight, setInsight] = useState<string>("Analisi dati in corso...");
  const [category, setCategory] = useState<GoalCategory>(GoalCategory.CAREER);
  const [loading, setLoading] = useState(false);

  const fetchInsight = async (cat: GoalCategory) => {
    setLoading(true);
    const newInsight = await generateStrategicInsight(cat, 45); // Progress hardcoded for demo
    setInsight(newInsight);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsight(category);
  }, []);

  return (
    <div id="recovery" className="max-w-4xl mx-auto text-center px-4">
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-600 text-white mb-6 shadow-xl shadow-orange-600/20">
          <i className="fas fa-brain text-2xl"></i>
        </div>
        <h3 className="text-3xl md:text-5xl font-black text-orange-600 mb-4">
          Insight, non Slogan.
        </h3>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          L'intelligenza artificiale analizza il tuo progresso e fornisce indicazioni pragmatiche per ottimizzare la tua traiettoria.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-10 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden group">
        <div className="relative z-10 text-left max-w-2xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {Object.values(GoalCategory).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  fetchInsight(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  category === cat 
                    ? 'bg-orange-600 text-white border-orange-500 shadow-lg' 
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-orange-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-start space-x-6">
            <div className="w-1 bg-orange-600 h-24 rounded-full opacity-40"></div>
            <div>
              <p className="text-xs font-black text-orange-400/60 uppercase tracking-widest mb-2">Analisi Strategica</p>
              <p className={`text-2xl md:text-3xl font-bold text-orange-500 transition-opacity duration-500 min-h-[80px] ${loading ? 'opacity-30' : 'opacity-100'}`}>
                {insight}
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => fetchInsight(category)}
            disabled={loading}
            className="mt-10 text-slate-500 font-bold hover:text-orange-500 transition-colors flex items-center space-x-2 text-sm"
          >
            <i className={`fas fa-sync-alt ${loading ? 'animate-spin' : ''}`}></i>
            <span>Aggiorna Analisi</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIQuotes;
