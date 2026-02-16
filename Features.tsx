
import React from 'react';

const features = [
  {
    icon: 'fa-history',
    title: 'Smart Recovery',
    description: 'Hai saltato un task? L\'IA spalma automaticamente il carico sui giorni successivi in modo sostenibile.',
    color: 'bg-orange-600'
  },
  {
    icon: 'fa-chart-area',
    title: 'Evoluzione Reale',
    description: 'Monitora la tua crescita effettiva depurata dai picchi di ansia e dalle giornate no.',
    color: 'bg-orange-500'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Privacy Totale',
    description: 'Niente feed pubblici. I tuoi sogni sono protetti e condivisi solo con chi scegli tu.',
    color: 'bg-orange-700'
  },
  {
    icon: 'fa-microchip',
    title: 'IA Strategica',
    description: 'Consigli pragmatici basati sui tuoi dati reali, non slogan motivazionali generici.',
    color: 'bg-orange-400'
  },
  {
    icon: 'fa-layer-group',
    title: 'Task Dinamici',
    description: 'Hai poco tempo? L\'app ridimensiona l\'intensità dei task per mantenere l\'abitudine.',
    color: 'bg-orange-800'
  },
  {
    icon: 'fa-calendar-alt',
    title: 'Planning Fluido',
    description: 'Un calendario che non si rompe mai. Si adatta alla tua vita reale, ogni singolo giorno.',
    color: 'bg-orange-300'
  }
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-orange-400 uppercase tracking-widest mb-2">Perché Goals?</h2>
        <h3 className="text-4xl font-extrabold text-orange-600">Un alleato per la tua mente.</h3>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-orange-600/30 transition-all group hover:-translate-y-2">
            <div className={`${f.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-600/10`}>
              <i className={`fas ${f.icon} text-white text-2xl`}></i>
            </div>
            <h4 className="text-xl font-bold text-orange-500 mb-3 group-hover:text-orange-400">{f.title}</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
