//api set up here
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini error:', error.message);
    return 'Something went wrong with the AI.';
  }
}

export async function askGeminiChat(conversation) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = [
      {
        role: 'user',
        parts: [
          {
            text:
              'Act as a smart book assistant. First, ask a few simple questions to understand the user’s interests, like subject preference, type of books (fiction, academic, etc.), and budget. Then based on answers, recommend 3 helpful books. Keep your tone friendly and helpful.',
          },
        ],
      },
      ...conversation.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    ];

    const result = await model.generateContent({ contents: prompt });
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini chat error:', error.message);
    return 'Something went wrong during the chat.';
  }
}
