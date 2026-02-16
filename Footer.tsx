
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-600 p-2 rounded-lg">
                <i className="fas fa-location-arrow text-white text-lg"></i>
              </div>
              <span className="text-2xl font-black text-orange-600 uppercase tracking-tighter">Goals</span>
            </div>
            <p className="text-slate-400 max-w-xs leading-relaxed">
              Il sistema intelligente per trasformare le tue aspirazioni in successi misurabili.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h5 className="font-bold text-orange-600 mb-6">Piattaforma</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Visione</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">IA Coaching</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Esplora</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-orange-600 mb-6">Supporto</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Centro Aiuto</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Documentazione</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Stato</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contatti</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-orange-600 mb-6">Azienda</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Carriere</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Brand Assets</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-orange-600 mb-6">Social</h5>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-white transition-all border border-slate-800"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-white transition-all border border-slate-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-orange-500 hover:bg-orange-600 hover:text-white transition-all border border-slate-800"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2024 Goals Platform. Tutti i diritti riservati.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Termini di Servizio</a>
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <i className="fas fa-heart text-orange-600"></i>
              <span>for dreamers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
