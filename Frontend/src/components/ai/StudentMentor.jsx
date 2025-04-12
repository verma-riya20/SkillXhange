import React, { useState } from 'react';
import axios from 'axios';

const StudentMentorChat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/chatbot', {

        messages: [...messages.map(m => m.text), userMessage]
      });

      const botMessage = res.data.response;
      setMessages(prev => [...prev, { sender: 'bot', text: botMessage }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { sender: 'bot', text: '⚠️ Something went wrong. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold text-blue-700">🎓 Student Mentor Assistant</h1>
        <div className="h-96 overflow-y-auto border rounded p-4 bg-gray-50 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-md whitespace-pre-line ${
                msg.sender === 'user'
                  ? 'bg-blue-100 text-blue-800 self-end text-right'
                  : 'bg-gray-200 text-gray-800 self-start text-left'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <p className="text-gray-500 italic">Thinking...</p>}
        </div>
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-3 border rounded"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentMentorChat;
