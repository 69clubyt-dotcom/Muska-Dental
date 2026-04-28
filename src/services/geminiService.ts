
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getDentalAdvice(question: string, language: string) {
  const prompt = `
    You are a friendly and professional dental assistant for "Muskaan Dental Care", a top dental clinic in Anisabad, Patna.
    The clinic is led by Dr. Muskaan. 
    
    Instructions:
    1. Answer the user's question about dental health, hygiene, or treatments (RCT, Braces, Implants, etc.) accurately.
    2. Be concise and reassuring.
    3. If the user asks about costs or complex procedures, advise them to book a consultation at the clinic for an accurate diagnosis.
    4. Mention the clinic's location (Anisabad, Patna) if relevant.
    5. Respond in ${language === 'hi' ? 'Hindi' : 'English'}.
    
    User Question: ${question}
  `;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return result.text || "";
  } catch (error) {
    console.error("Gemini Error:", error);
    return language === 'hi' 
      ? "क्षमा करें, मैं अभी उत्तर नहीं दे पा रहा हूँ। कृपया हमें कॉल करें।" 
      : "I'm sorry, I couldn't process that right now. Please call our clinic directly.";
  }
}
