
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <div id="problem" className="max-w-6xl mx-auto py-24 px-4">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-orange-600 mb-6">Perché il 90% molla dopo due settimane?</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Il problema non è la tua volontà. È il sistema che usi. Le app tradizionali ti puniscono per gli imprevisti. Noi li gestiamo.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="relative">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm relative z-10">
            <div className="text-white/5 text-6xl font-black absolute top-4 right-6">01</div>
            <h4 className="text-xl font-bold mb-4 text-orange-600">L'illusione iniziale</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pianifichi 5 sessioni di palestra. Sei carico. L'app segna tutto in arancione. Ti senti un supereroe.
            </p>
          </div>
          <div className="hidden md:block absolute top-1/2 -right-6 translate-x-full z-0">
             <i className="fas fa-chevron-right text-slate-800 text-2xl"></i>
          </div>
        </div>

        <div className="relative">
          <div className="bg-slate-800 p-8 rounded-3xl border-2 border-orange-600/30 shadow-lg relative z-10 scale-105">
            <div className="text-orange-600/10 text-6xl font-black absolute top-4 right-6">02</div>
            <h4 className="text-xl font-bold mb-4 text-orange-600">L'imprevisto</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Riunione fino a tardi. Salti martedì. L'app ti manda una notifica ambra. Sale l'ansia da "streak interrotta".
            </p>
          </div>
          <div className="hidden md:block absolute top-1/2 -right-6 translate-x-full z-0">
             <i className="fas fa-chevron-right text-slate-800 text-2xl"></i>
          </div>
        </div>

        <div className="relative">
          <div className="bg-orange-600 p-8 rounded-3xl shadow-xl relative z-10">
            <div className="text-white/10 text-6xl font-black absolute top-4 right-6">03</div>
            <h4 className="text-xl font-bold mb-4 text-white">Il Burnout</h4>
            <p className="text-orange-100 text-sm leading-relaxed">
              Cerchi di recuperare mercoledì facendo il doppio. Ti sfinisci. Ti senti un fallimento. Molli tutto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
