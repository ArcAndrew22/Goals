
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const MarketingStudio: React.FC = () => {
  const [images, setImages] = useState<{ url: string; title: string; prompt: string }[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const campaignPrompts = [
    { title: "Brand Identity", prompt: "Minimalist 3D render of a vibrant orange target icon on a soft white studio background, high quality, aesthetic, branding for an app called Goals." },
    { title: "Progress Visualization", prompt: "Close up of a sleek mobile UI showing a vibrant orange progress bar at 80% completion, floating glassmorphism style, clean typography, blurred background." },
    { title: "AI Motivation", prompt: "Abstract digital art representing AI intelligence, glowing orange neural pathways forming a supportive hand, minimalist, professional, high-end tech style." },
    { title: "Community Support", prompt: "Minimalist illustration of several human silhouettes connected by glowing orange lines, representing community and mutual support, aesthetic and clean." },
    { title: "Milestone Success", prompt: "A stylized 3D mountain path with orange flags marking key steps, soft sunset lighting, clean and symbolic of reaching milestones." },
    { title: "Privacy & Anonymity", prompt: "Creative concept for privacy: a sleek orange padlock integrated with a human profile silhouette in a translucent glass style, professional digital art." },
    { title: "Career Goals", prompt: "Modern home office desk setup with orange accents, a tablet on the desk showing a 'Promotion Achieved' notification, high-end photography style." },
    { title: "Health & Fitness", prompt: "Close up of a running shoe hitting a track, blurred motion background, orange light overlay, motivational high-quality sports photography." },
    { title: "Lifelong Learning", prompt: "Open books and a laptop on a wooden table, soft warm lighting, a vibrant orange coffee mug next to it, high-end lifestyle photography." },
    { title: "Final Call to Action", prompt: "High-impact bold 3D typography of the word 'GOALS', vibrant orange color, studio lighting, professional graphic for an app advertisement." }
  ];

  const generateCampaign = async () => {
    setIsGenerating(true);
    setImages([]);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    for (let i = 0; i < campaignPrompts.length; i++) {
      setProgress(i + 1);
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: campaignPrompts[i].prompt }] },
          config: { imageConfig: { aspectRatio: "1:1" } }
        });

        const imagePart = response.candidates[0].content.parts.find(p => p.inlineData);
        if (imagePart) {
          const url = `data:image/png;base64,${imagePart.inlineData.data}`;
          setImages(prev => [...prev, { url, title: campaignPrompts[i].title, prompt: campaignPrompts[i].prompt }]);
        }
      } catch (error) {
        console.error("Error generating image:", i, error);
      }
    }
    setIsGenerating(false);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-orange-100 text-center">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Instagram Campaign Kit</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Genera automaticamente 10 post professionali per il lancio di Goals. Ogni immagine è studiata per attirare l'attenzione e spiegare una funzionalità chiave.
          </p>
        </div>

        {!isGenerating && images.length === 0 && (
          <button 
            onClick={generateCampaign}
            className="bg-orange-600 text-white px-10 py-5 rounded-3xl font-bold text-xl shadow-xl shadow-orange-200 hover:scale-105 transition-all flex items-center space-x-3 mx-auto"
          >
            <i className="fas fa-magic"></i>
            <span>Genera 10 Post Instagram</span>
          </button>
        )}

        {isGenerating && (
          <div className="py-12">
            <div className="w-full h-4 bg-slate-100 rounded-full max-w-md mx-auto mb-6 overflow-hidden">
              <div 
                className="h-full bg-orange-500 transition-all duration-500"
                style={{ width: `${(progress / 10) * 100}%` }}
              ></div>
            </div>
            <p className="text-orange-600 font-bold animate-pulse">
              Creazione immagine {progress} di 10...
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {images.map((img, idx) => (
            <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-md">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-left">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">{img.title}</p>
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = img.url;
                    link.download = `goals_instagram_${idx + 1}.png`;
                    link.click();
                  }}
                  className="mt-2 bg-white text-orange-600 px-2 py-1 rounded-lg text-[10px] font-black text-center"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {images.length > 0 && !isGenerating && (
          <div className="mt-12 p-6 bg-orange-50 rounded-2xl">
            <h4 className="font-bold text-orange-900 mb-2">Suggerimento Strategico</h4>
            <p className="text-orange-800 text-sm">
              Pubblica un'immagine al giorno per i prossimi 10 giorni. Usa storie interattive con sondaggi sugli obiettivi degli utenti per massimizzare l'engagement!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketingStudio;
