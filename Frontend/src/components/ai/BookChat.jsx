import React, { useState } from 'react';
import axios from 'axios';

const BookChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const conversation = [...messages, { role: 'user', text: input }];
    const res = await axios.post('http://localhost:5000/api/ai/book-chat', { conversation });
    setMessages([...conversation, { role: 'ai', text: res.data.response }]);
    setInput('');
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Book Chat Assistant</h2>
      <div className="h-60 overflow-y-scroll bg-gray-100 p-2 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-blue-700' : 'text-green-700'}`}>
            <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        placeholder="Ask something..."
        className="input w-full"
      />
      <button className="btn" onClick={sendMessage}>Send</button>
    </div>
  );
};

export default BookChat;
