import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Formats book recommendations into a clean, visually appealing text format
 * @param {string} text - Raw response from Gemini
 * @returns {string} Beautifully formatted recommendations
 */
function formatBookResponse(text) {
  // First remove all markdown formatting
  let formatted = text
    .replace(/\*\*/g, '')    // Remove bold
    .replace(/\*/g, '')      // Remove italics
    .replace(/`/g, '')       // Remove code blocks
    .replace(/#+\s*/g, '')   // Remove headings
    .replace(/-\s/g, '• ')   // Convert bullets to pretty bullets
    .replace(/\n{3,}/g, '\n\n'); // Limit consecutive newlines

  // Add emoji decorations and consistent spacing
  formatted = formatted
    .replace(/(\d+\.)\s+/g, '\n\n✨ Book $1\n')  // Book numbers
    .replace(/Title:/g, '\n📖 Title:')
    .replace(/Author:/g, '\n✍️ Author:')
    .replace(/Genre:/g, '\n🏷️ Genre:')
    .replace(/Price( Range)?:/g, '\n💰 Price:')
    .replace(/(Reason|Why)/g, '\n🌟 Why You\'ll Love It:')
    .replace(/Perfect for:/g, '\n🎯 Perfect for:');

  // Add section dividers between books
  formatted = formatted.replace(/(✨ Book \d)/g, '\n――――――――――\n$1');

  // Final touches
  return `📚✨ *Your Personalized Book Recommendations* ✨📚\n${formatted}\n\n💡 Pro Tip: Check local used bookstores or online marketplaces for best prices!\nHappy reading! 📖💕`;
}

/**
 * Gets book recommendations from Gemini
 * @param {string} prompt - User's book preferences
 * @returns {Promise<string>} Formatted recommendations
 */
export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent({
      contents: [{
        role: 'user',
        parts: [{
          text: `${prompt}\n\nPlease provide 5 book recommendations with:
          - Title
          - Author
          - Genre
          - Price range (especially for Indian readers)
          - 1-2 sentence reason for recommendation
          Format clearly without markdown symbols.`
        }]
      }]
    });
    const response = await result.response;
    return formatBookResponse(response.text());
  } catch (error) {
    console.error('Gemini error:', error.message);
    return '📚 Oh no! Our book-finding magic is temporarily unavailable. Please try again soon! ✨';
  }
}

/**
 * Handles conversational book recommendations
 * @param {Array} conversation - Conversation history
 * @returns {Promise<string>} Formatted recommendations
 */
export async function askGeminiChat(conversation) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = [
      {
        role: 'user',
        parts: [{
          text: `You're a friendly book recommendation wizard! Follow these rules:

1. First ask 2-3 fun questions to understand:
   • Favorite genres (e.g., "Do you love magical fantasy or gripping mysteries?")
   • Reading purpose (e.g., "Learning, entertainment, or both?")
   • Budget (e.g., "Looking for new treasures or affordable used gems?")

2. Recommend 3 books in THIS EXACT FORMAT:

[Book Title] by [Author]
Genre: [Main Genre] | Price: [Range in ₹]
Why Perfect: [1-2 fun sentences]
Best For: [Type of reader]

3. Style Guidelines:
   • Warm, enthusiastic tone
   • Use 2-3 emojis per book max
   • Highlight affordability for students
   • Include Indian price ranges when possible`
        }]
      },
      ...conversation.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    ];

    const result = await model.generateContent({ contents: prompt });
    const response = await result.response;
    return formatBookResponse(response.text());
  } catch (error) {
    console.error('Gemini chat error:', error.message);
    return '📖 Oh dear! Our book-finding spell fizzled. Please try your question again!';
  }
}