import Instructors from '../models/Instructor.js';

// Adjust the path as necessary


export const getInstructors = async (req, res) => {
  try {
    const instructors = await Instructors.find({ role: 'instructor' }); // filter by role if needed
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch instructors' });
  }
};
