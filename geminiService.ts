
import { GoogleGenAI } from "@google/genai";
import { GoalCategory } from "../types";

export const generateStrategicInsight = async (category: GoalCategory, progress: number): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Sei un analista di performance e partner strategico. 
      L'utente sta lavorando a un obiettivo di ${category} ed è al ${progress}% di completamento.
      Fornisci un "Insight Strategico" breve (max 15 parole) basato sui dati. 
      Evita frasi fatte come "credi in te stesso". Sii pragmatico, analitico e focalizzato sul prossimo passo logico.
      Lingua: Italiano.`,
    });

    return response.text?.trim() || "Dati insufficienti per un'analisi. Procedi con il prossimo task programmato.";
  } catch (error) {
    console.error("Error generating insight:", error);
    return "Il piano attuale è sostenibile. Mantieni la costanza senza sovrapprezzo energetico.";
  }
};
