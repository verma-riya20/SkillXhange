import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';
import { createBook, getBooks } from '../controllers/bookController.js';
import { askGemini, askGeminiChat } from '../services/geminiService.js'; // ✅ must include .js


const router = express.Router();

// User Routes
router.post('/users', createUser);
router.get('/users', getUsers);

// Book Routes
router.post('/books', createBook);
router.get('/books', getBooks);

// AI Routes
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

export default router;
