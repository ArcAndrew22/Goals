
import React from 'react';

const Benefits: React.FC = () => {
  const benefitList = [
    {
      title: "Recupero Mentale",
      desc: "Elimina il senso di colpa quando salti un giorno. L'IA ricalcola tutto per te.",
      icon: "fa-spa"
    },
    {
      title: "Costanza Scientifica",
      desc: "Mantieni lo slancio anche con soli 5 minuti al giorno grazie a task adattivi.",
      icon: "fa-seedling"
    },
    {
      title: "Visione d'Insieme",
      desc: "Guarda dove sarai tra 6 mesi se mantieni il ritmo attuale. Previsioni realistiche.",
      icon: "fa-binoculars"
    },
    {
      title: "Stop Over-Working",
      desc: "Il sistema ti impedisce di caricarti troppo lavoro dopo un fallimento. Equilibrio vero.",
      icon: "fa-scale-balanced"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-4">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-orange-600 mb-8 leading-tight">
            Non è un'agenda. <br /> È il tuo coach personale.
          </h2>
          <div className="space-y-10">
            {benefitList.map((b, i) => (
              <div key={i} className="flex items-start space-x-6">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
                  <i className={`fas ${b.icon} text-orange-500 text-2xl`}></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-200 mb-2">{b.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-orange-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">Beneficio #1: <br/>La Streak che non muore mai.</h3>
              <p className="text-orange-50 text-lg mb-8">
                A differenza delle altre app, Goals non azzera i tuoi progressi se salti un giorno. Semplicemente, l'IA "congela" il tempo e adatta i passi successivi.
              </p>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <p className="text-sm italic font-medium">
                  "Prima mollavo dopo il primo imprevisto. Con Goals sono alla settimana 12 e mi sento in controllo totale, non schiavo delle notifiche."
                </p>
                <p className="text-xs font-bold mt-4 uppercase tracking-widest text-orange-200">— Marco, Beta Tester</p>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
