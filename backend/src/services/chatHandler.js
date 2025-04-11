import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const chatHandler = async (req, res) => {
  const {
    messages = [],
    system_prompt = `You are a helpful AI assistant that asks users:\n- What do you want to learn?\n- What type of mentor are you looking for?\n- What time do you want to connect?\nThen, suggest a mentor based on that information.`
  } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = [
      {
        role: 'user',
        parts: [{ text: system_prompt }]
      },
      ...messages.map(msg => ({ role: 'user', parts: [{ text: msg }] }))
    ];

    const result = await model.generateContent({ contents: prompt });
    const response = result.response.text();

    res.json({ response });
  } catch (err) {
    console.error('Chatbot error:', err);
    res.status(500).json({ error: 'Something went wrong with the chatbot.' });
  }
};

export default chatHandler;
