
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import GoalTrackerDemo from './components/GoalTrackerDemo';
import AIQuotes from './components/AIQuotes';
import PrivacyAccountability from './components/CommunityFeed';
import Footer from './components/Footer';
import Features from './components/Features';
import Benefits from './components/Benefits';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-orange-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        <section id="problem" className="py-24 bg-slate-900/50">
          <ProblemSection />
        </section>

        <section id="features" className="py-24 bg-slate-950">
          <Features />
        </section>
        
        <section id="demo" className="py-32 px-4 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-black text-orange-400 uppercase tracking-[0.3em] mb-4">
                La Killer Feature
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-orange-600 mb-6">
                Prova il ricalcolo adattivo.
              </h3>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Simula un imprevisto. Guarda come l'AI ricalcola la tua rotta senza farti sentire in colpa.
              </p>
            </div>
            <GoalTrackerDemo />
          </div>
        </section>

        <section id="benefits" className="bg-slate-950">
          <Benefits />
        </section>

        <section id="motivation" className="py-32 px-4 bg-slate-900/50">
          <AIQuotes />
        </section>

        <section id="community" className="py-20 px-4">
          <PrivacyAccountability />
        </section>

        <section className="py-32 px-4 text-center bg-slate-950">
          <div className="max-w-3xl mx-auto bg-orange-600 text-white rounded-[3rem] p-16 shadow-2xl">
            <h3 className="text-4xl font-black mb-6">Costruisci il tuo futuro oggi.</h3>
            <p className="text-orange-100 text-lg italic mb-0">
              "L'unico modo per fallire è avere un piano che non accetta la realtà."
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
