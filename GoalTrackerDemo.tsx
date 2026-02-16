
import React, { useState } from 'react';
import { Goal, GoalCategory } from '../types';

const GoalTrackerDemo: React.FC = () => {
  const [isRecalculating, setIsRecalculating] = useState(false);
  const [goal, setGoal] = useState<Goal>({
    id: 'demo-1',
    title: 'Routine Benessere & Salute',
    category: GoalCategory.HEALTH,
    deadline: '2024-12-15',
    milestones: [
      { id: 'm1', title: 'Analisi abitudini attuali', completed: true },
      { id: 'm2', title: 'Prima settimana di allenamento', completed: true },
      { id: 'm3', title: 'Ottimizzazione piano alimentare', completed: false },
      { id: 'm4', title: 'Raggiungimento peso forma', completed: false }
    ]
  });

  const toggleMilestone = (id: string) => {
    if (isRecalculating) return;
    setGoal(prev => ({
      ...prev,
      milestones: prev.milestones.map(m => 
        m.id === id ? { ...m, completed: !m.completed } : m
      )
    }));
  };

  const handleNoTime = () => {
    setIsRecalculating(true);
    setTimeout(() => {
      setGoal(prev => ({
        ...prev,
        deadline: '2024-12-22',
      }));
      setIsRecalculating(false);
    }, 2000);
  };

  const progress = Math.round(
    (goal.milestones.filter(m => m.completed).length / goal.milestones.length) * 100
  );

  return (
    <div id="demo" className="max-w-2xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-800">
      <div className="flex justify-between items-start mb-8">
        <div>
          <span className="text-[10px] font-black text-orange-400 bg-orange-600/10 px-3 py-1 rounded-lg uppercase tracking-widest border border-orange-600/20">
            Simulatore di Ricalcolo
          </span>
          <h4 className="text-3xl font-black text-orange-500 mt-3">{goal.title}</h4>
          <p className="text-sm text-slate-400 mt-2 flex items-center">
            <i className="far fa-calendar-alt mr-2 text-orange-500/60"></i>
            Data Obiettivo: <span className={`ml-1 font-bold ${isRecalculating ? 'text-amber-400 animate-pulse' : 'text-orange-400'}`}>{new Date(goal.deadline).toLocaleDateString('it-IT')}</span>
          </p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-black text-orange-500 leading-none">{progress}%</div>
          <p className="text-[10px] uppercase font-bold text-orange-500/40 mt-1">Evoluzione</p>
        </div>
      </div>

      <div className="w-full h-3 bg-slate-800 rounded-full mb-10 overflow-hidden">
        <div 
          className="h-full bg-orange-600 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(234,88,12,0.5)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="space-y-3 mb-10">
        {goal.milestones.map((m) => (
          <div 
            key={m.id}
            onClick={() => toggleMilestone(m.id)}
            className={`flex items-center p-4 rounded-2xl cursor-pointer transition-all border ${
              m.completed ? 'bg-slate-800/50 border-slate-800 opacity-40' : 'bg-slate-800 border-slate-700 hover:border-orange-600/50'
            }`}
          >
            <div className={`w-5 h-5 rounded-lg flex items-center justify-center mr-4 transition-colors ${
              m.completed ? 'bg-orange-600' : 'bg-slate-700 border border-slate-600'
            }`}>
              {m.completed && <i className="fas fa-check text-white text-[10px]"></i>}
            </div>
            <span className={`text-sm font-bold ${m.completed ? 'text-orange-200 line-through' : 'text-slate-300'}`}>
              {m.title}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
        <h5 className="text-xs font-black text-orange-400/60 uppercase mb-4 tracking-tighter">Hai un imprevisto?</h5>
        <div className="flex gap-4">
          <button 
            onClick={handleNoTime}
            disabled={isRecalculating}
            className="flex-1 bg-slate-800 border border-slate-700 text-orange-500 py-3 rounded-xl font-bold text-sm hover:border-orange-600 hover:bg-slate-700 transition-all disabled:opacity-50"
          >
            {isRecalculating ? (
              <span className="flex items-center justify-center">
                <i className="fas fa-sync-alt animate-spin mr-2"></i> Ricalcolo AI...
              </span>
            ) : (
              "Oggi non ho tempo"
            )}
          </button>
          <button className="flex-1 bg-orange-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-orange-700 transition-all shadow-lg shadow-orange-900/40">
            Fatto!
          </button>
        </div>
        <p className="text-[10px] text-orange-500/40 mt-4 text-center italic font-medium">
          *Cliccando "Oggi non ho tempo", l'IA ricalcola i carichi per non farti mollare.
        </p>
      </div>
    </div>
  );
};

export default GoalTrackerDemo;
