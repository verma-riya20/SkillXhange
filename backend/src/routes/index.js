import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';
import { createBook, getBooks } from '../controllers/bookController.js';
import { askGemini, askGeminiChat } from '../services/geminiService.js'; // ✅ must include .js
import Tutor from '../models/Tutor.js'; // ✅ must include .js


const router = express.Router();

// User Routes
router.post('/users', createUser);
router.get('/users', getUsers);

// Book Routes
router.post('/books', createBook);
router.get('/books', getBooks);

// Tutor routes
router.get('/tutors', async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.json(tutors);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});
// get individual tutor
router.get('/tutors/:id', async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.id);
    if (!tutor) return res.status(404).json({ error: 'Tutor not found' });
    res.json(tutor);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// 


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
