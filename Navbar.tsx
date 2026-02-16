
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-orange-600/10 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-orange-600 p-2 rounded-lg">
            <i className="fas fa-location-arrow text-white text-xl"></i>
          </div>
          <span className="text-2xl font-black tracking-tighter text-orange-600 uppercase">Goals</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-400">
          <a href="#problem" className="hover:text-orange-600 transition-colors">Il Problema</a>
          <a href="#features" className="hover:text-orange-600 transition-colors">Funzionalità</a>
          <a href="#demo" className="hover:text-orange-600 transition-colors">Ricalcolo AI</a>
          <a href="#benefits" className="hover:text-orange-600 transition-colors">Benefici</a>
          <a href="#privacy" className="hover:text-orange-600 transition-colors">Privacy</a>
        </div>

        <div className="md:hidden">
          <i className="fas fa-bars text-orange-600 text-xl"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
