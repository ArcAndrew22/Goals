
import React from 'react';

const PrivacyAccountability: React.FC = () => {
  return (
    <div id="privacy" className="max-w-7xl mx-auto px-4 py-24 bg-orange-600 rounded-[4rem] text-white shadow-2xl shadow-orange-200">
      <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
        <div>
          <span className="text-xs font-black text-orange-200 uppercase tracking-[0.2em] mb-4 block">Privacy Prima di tutto</span>
          <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Accountability, <br />alle tue condizioni.
          </h3>
          <p className="text-lg text-orange-100 mb-10 leading-relaxed">
            Non siamo un social media pubblico. Condividi i tuoi progressi solo con il tuo partner, il tuo coach o un gruppo ristretto di amici. O tienili per te. La privacy è la chiave per la costanza senza pressione.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <i className="fas fa-user-shield text-2xl text-white mb-4"></i>
              <h4 className="font-bold text-white mb-2">100% Privato</h4>
              <p className="text-xs text-orange-100/70">I tuoi dati non vengono mai venduti o resi pubblici senza consenso esplicito.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <i className="fas fa-users-cog text-2xl text-white mb-4"></i>
              <h4 className="font-bold text-white mb-2">Circoli Ristretti</h4>
              <p className="text-xs text-orange-100/70">Crea stanze private per sfidare solo chi conta davvero per te.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl">
             <div className="flex items-center space-x-4 mb-8">
               <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                 <i className="fas fa-lock text-white/50"></i>
               </div>
               <div>
                 <p className="text-sm font-bold text-white">Feed Privato: Progetto Startup</p>
                 <p className="text-[10px] text-orange-100/50">3 membri attivi</p>
               </div>
             </div>
             
             <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="h-2 w-20 bg-white/20 rounded"></div>
                    </div>
                    <div className="h-2 w-12 bg-white/10 rounded"></div>
                  </div>
                ))}
             </div>
             
             <div className="mt-10 p-4 border-2 border-dashed border-white/20 rounded-2xl text-center">
               <p className="text-xs text-orange-100 font-bold uppercase tracking-widest">Solo tu e il tuo team</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAccountability;
