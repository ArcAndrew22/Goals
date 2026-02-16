
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-32 px-4 overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 leading-tight mb-6 tracking-tight">
            Raggiungi i tuoi obiettivi. <br />
            <span className="text-orange-400">Anche quando la vita si mette in mezzo.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Nessuna ansia. Nessun giudizio. Un sistema AI che adatta il tuo piano automaticamente quando non hai tempo o salti un giorno.
          </p>
          
          <div className="flex items-center space-x-4 justify-center lg:justify-start">
            <span className="bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-orange-600/20">
              In arrivo sugli store
            </span>
            <span className="text-orange-300/60 font-medium text-sm">Versione 1.0 Alpha</span>
          </div>
        </div>

        <div className="relative">
          <div className="glass p-6 rounded-[2.5rem] shadow-2xl border border-white/5">
            <div className="bg-slate-900 rounded-[1.5rem] p-6 min-h-[300px] flex flex-col justify-center border border-slate-800">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-orange-400/60 uppercase">Status Obiettivo</span>
                  <span className="text-xs font-bold bg-amber-900/40 text-amber-400 px-2 py-1 rounded border border-amber-800">Imprevisto Rilevato</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/20">
                    <i className="fas fa-sync-alt text-white animate-spin-slow"></i>
                  </div>
                  <div>
                    <p className="text-sm font-black text-white leading-none">Ricalcolo in corso...</p>
                    <p className="text-[10px] text-orange-400 font-bold uppercase tracking-tight mt-1">Smart Recovery Algorithm v2.4</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 opacity-30">
                <div className="h-10 bg-slate-800 rounded-xl border border-slate-700 flex items-center px-4">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-600 mr-3"></div>
                  <div className="h-2 w-32 bg-slate-700 rounded"></div>
                </div>
                <div className="h-10 bg-slate-800 rounded-xl border border-slate-700 flex items-center px-4">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-600 mr-3"></div>
                  <div className="h-2 w-24 bg-slate-700 rounded"></div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-xs text-orange-200/80 font-medium">
                  "Non preoccuparti. Ho spalmato i task di oggi sui prossimi 3 giorni per mantenere il carico sostenibile."
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-800 flex items-center space-x-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-tighter">AI Partner Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
