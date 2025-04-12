// routes/index.js
import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';
import { createBook, getBooks } from '../controllers/bookController.js';
import { askGemini, askGeminiChat } from '../services/geminiService.js';
import { getInstructors} from '../controllers/getInstructors.js';
import chatHandler from '../services/chatHandler.js';


const router = express.Router();
//instructor
router.get('/instructors', getInstructors);


// User Routes
router.post('/users', createUser);
router.get('/users', getUsers);

// Book Routes
router.post('/books', createBook);
router.get('/books', getBooks);

// Gemini AI Routes
router.post('/ai/mentor', async (req, res) => {
  const { skill, level, availability } = req.body;
  const prompt = `I want to learn ${skill}. I am at ${level} level. I am available ${availability}. Suggest the best student mentors from a student pool who match my needs.`;

  try {
    const result = await askGemini(prompt);
    res.json({ response: result });
  } catch (err) {
    res.status(500).json({ error: 'AI request failed' });
  }
});

router.post('/ai/book', async (req, res) => {
  const { subject, budget, preference } = req.body;
  const prompt = `Recommend 3 books related to ${subject} based on the following preferences:\n- Budget: ₹${budget}\n- Preference: ${preference}\nThese books should be helpful for college students.`;

  try {
    const result = await askGemini(prompt);
    res.json({ response: result });
  } catch (err) {
    res.status(500).json({ error: 'AI request failed' });
  }
});

router.post('/ai/book-chat', async (req, res) => {
  const { conversation } = req.body;
  try {
    const result = await askGeminiChat(conversation);
    res.json({ response: result });
  } catch (err) {
    res.status(500).json({ error: 'AI chat request failed' });
  }
});

// Groq Chatbot Route
//chatbot basic question
router.post('/chatbot', chatHandler);

export default router;
