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
              'Act as a smart book assistant. First, ask a few simple and friendly questions to understand the user’s interests: their preferred subject or topic, the type of books they like (e.g., fiction, non-fiction, academic, self-help), and their budget. Once the answers are given, recommend 3 books that match their preferences and are within budget. Structure your response clearly with headings like "Book 1", "Book 2", etc. For each book, include the title, author, type/genre, price (approximate), and a short reason why it’s a good fit. Use a friendly, helpful tone. Keep the formatting clean and easy to read using spacing, bullets, and simple symbols like ⭐ or 📘 to highlight sections.'

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
