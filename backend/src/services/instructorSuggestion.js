import { GoogleGenerativeAI } from '@google/generative-ai';
import instructors from '../models/Instructor.js';
// Then use InstructorModel in your code

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Finds best instructors based on student preferences using AI
 * @param {Object} studentData - Student's learning preferences
 * @returns {Promise<Object>} - Returns AI response with recommendations
 */
export const findBestInstructors = async (studentData) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
  // Construct the prompt
  const prompt = `
  You are an advanced mentor matching AI for an online learning platform. 
  Analyze this student's request and recommend the best instructors:

  Student Profile:
  - Skill to Learn: ${studentData.skill}
  - Experience: ${studentData.experience}
  - Time Commitment: ${studentData.timeCommitment}
  - Mentor Type: ${studentData.mentorType}
  - Time Preference: ${studentData.timePreference}

  Available Instructors:
  ${instructors.map(inst => 
    `Name: ${inst.name}, Title: ${inst.title}, Skills: ${inst.skills.join(', ')}, 
    Rating: ${inst.rating}, Reviews: ${inst.reviews}, Available: ${inst.availability}`
  ).join('\n')}

  Provide:
  1. ANALYSIS: Brief analysis of student's needs
  2. RECOMMENDATIONS: 3-5 best matches (names only)
  3. REASONS: Why each is a good match
  4. TIPS: Learning suggestions for the student

  Format response clearly with these section headings.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    return parseAIResponse(response);
  } catch (error) {
    console.error('Gemini AI Error:', error);
    throw error;
  }
};

/**
 * Parses raw AI response into structured data
 * @param {string} response - Raw text from Gemini
 * @returns {Object} - Structured response
 */
const parseAIResponse = (response) => {
  const sections = {
    analysis: extractSection(response, 'ANALYSIS'),
    recommendations: extractSection(response, 'RECOMMENDATIONS'),
    reasons: extractSection(response, 'REASONS'),
    tips: extractSection(response, 'TIPS')
  };

  return {
    ...sections,
    rawResponse: response
  };
};

/**
 * Extracts a section from the AI response
 */
const extractSection = (text, sectionName) => {
  const regex = new RegExp(`${sectionName}:[\\s\\S]*?(?=\\n[A-Z]+:|$)`, 'i');
  const match = text.match(regex);
  return match ? match[0].replace(`${sectionName}:`, '').trim() : '';
};

/**
 * Local fallback matching without AI
 */
export const localInstructorMatch = (studentData) => {
  const { skill, mentorType, timePreference } = studentData;
  const skillLower = skill.toLowerCase();
  
  return instructors.filter(inst => {
    const hasSkill = inst.skills.some(s => s.toLowerCase().includes(skillLower));
    const matchesType = !mentorType || 
      inst.title.toLowerCase().includes(mentorType.toLowerCase());
    const matchesTime = !timePreference || 
      inst.availability.toLowerCase() === timePreference.toLowerCase();
      
    return hasSkill && matchesType && matchesTime;
  }).sort((a, b) => b.rating - a.rating);
};