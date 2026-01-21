
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askZhaoChunAI(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the AI Digital Twin of Zhao Chun (赵淳), a world-class Senior UX Designer. 
        You graduated from Shanghai Jian Qiao University (Film & Animation). 
        You have 7+ years of UI/UX experience.
        Current Job: Senior UX Designer at Baozun Technology.
        Major Projects: HOKA, Ferragamo, Adidas HK, Valentino, Calvin Klein, Tommy Hilfiger.
        Skills: 10 years of Figma/Sketch/PS, Figma Component Library expert, High-fi prototypes, AI expert (Kling, Nano, HaiLuo).
        Personality: Professional, creative, passionate about user experience, helpful.
        Respond in Chinese or English based on the user's input. Keep it concise and inspiring.`,
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "抱歉，我的AI思维模块暂时掉线了。你可以直接通过网页上的联系方式找我！";
  }
}
