import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini model with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const chatHandler = async (req, res) => {
  const {
    messages = [],
    system_prompt = `You are a smart, friendly AI mentor assistant. When a student doesn't have a human mentor available, you step in to guide them.

Ask a few helpful and friendly questions to understand their goals:
- What skill or topic would you like to learn?
- What's your current experience level (beginner, intermediate, advanced)?
- How much time can you dedicate daily or weekly?

Once they respond, provide a clear, structured, and motivating learning path. Your response should be easy to read and well-organized.

Use this format:
⭐ Skill Name
📍 Level: Beginner / Intermediate / Advanced
🗺️ Learning Path:
1. Step 1 - Short description
2. Step 2 - Short description
3. Step 3 - Short description
...
🎯 Goal: A brief sentence describing what they’ll achieve by the end

Keep the tone warm and supportive, like a helpful mentor. Use friendly emojis and clean formatting to make it engaging and scannable.`
  } = req.body;

  try {
    // Load the Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build the prompt sequence
    const prompt = [
      {
        role: 'user',
        parts: [{ text: system_prompt }]
      },
      ...messages.map(msg => ({ role: 'user', parts: [{ text: msg }] }))
    ];

    // Send the prompt to the model and get the response
    const result = await model.generateContent({ contents: prompt });
    const response = result.response.text();

    // Send response back to frontend
    res.json({ response });
  } catch (err) {
    console.error('Chatbot error:', err);
    res.status(500).json({ error: 'Something went wrong with the chatbot.' });
  }
};

export default chatHandler;
