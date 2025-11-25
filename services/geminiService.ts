"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'Solus AI', a compassionate and calming mental wellness assistant for the Solus website.
Your tone should be empathetic, professional, yet warm and approachable.
Keep your answers concise (under 150 words usually) unless asked for a detailed guide.
You can suggest general mindfulness tips, breathing exercises, or explain therapy concepts.
Disclaimer: Always clarify that you are an AI and not a substitute for professional medical advice or emergency services. If someone seems to be in crisis, gently suggest they contact emergency services or a crisis hotline.
`;

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string
) => {
  try {
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
