// Chatbot.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    skill: '',
    mentorType: '',
    timePreference: ''
  });
  const [recommendations, setRecommendations] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [chatbotReply, setChatbotReply] = useState('');
  const navigate = useNavigate();

  const steps = [
    {
      label: "What do you want to learn?",
      field: "skill",
      input: <input
        type="text"
        value={formData.skill}
        onChange={e => setFormData({ ...formData, skill: e.target.value })}
        className="w-full p-2 border rounded"
        placeholder="e.g. Python, Web Development"
      />
    },
    {
      label: "What type of mentor are you looking for?",
      field: "mentorType",
      input: (
        <select
          className="w-full p-2 border rounded"
          value={formData.mentorType}
          onChange={e => setFormData({ ...formData, mentorType: e.target.value })}
        >
          <option value="">Select mentor type</option>
          <option value="beginner-friendly">Beginner-friendly</option>
          <option value="project-helper">Project guidance</option>
          <option value="data-science">Data Science expert</option>
          <option value="web-dev">Web Development expert</option>
        </select>
      )
    },
    {
      label: "Preferred time to connect",
      field: "timePreference",
      input: (
        <select
          className="w-full p-2 border rounded"
          value={formData.timePreference}
          onChange={e => setFormData({ ...formData, timePreference: e.target.value })}
        >
          <option value="">Select a time</option>
          <option value="mornings">Mornings</option>
          <option value="evenings">Evenings</option>
          <option value="weekends">Weekends</option>
          <option value="anytime">Anytime</option>
        </select>
      )
    }
  ];

  const handleNext = () => {
    if (formStep < steps.length - 1) {
      setFormStep(prev => prev + 1);
    } else {
      submitChat();
    }
  };

  const submitChat = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      const allInstructors = res.data;
      const skillKeywords = formData.skill.toLowerCase().split(' ');
      const matched = allInstructors.filter(inst =>
        inst.skills.some(skill =>
          skillKeywords.some(keyword => skill.toLowerCase().includes(keyword))
        )
      );
      const response = `We found ${matched.length} instructors matching your skill preference.`;
      setChatbotReply(response);
      setRecommendations(matched);

      if (matched.length > 0) {
        navigate('/instructor', { state: { recommendedList: matched } });
      }
    } catch (err) {
      console.error('Chat error', err);
    }
  };

  const handleSelect = (mentor) => {
    setSelectedMentor(mentor);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">🎓 Find Your Mentor</h2>

      {formStep < steps.length ? (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{steps[formStep].label}</label>
          {steps[formStep].input}
          <button
            onClick={handleNext}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            {formStep < steps.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      ) : (
        <>
          <p className="mb-4 text-green-700 font-medium">✅ Recommendations based on your preferences:</p>
          {chatbotReply && <p className="mb-4 text-gray-700 text-sm italic">{chatbotReply}</p>}
          <div className="grid sm:grid-cols-2 gap-4">
            {recommendations.map((mentor, idx) => (
              <div
                key={idx}
                className="border p-4 rounded shadow hover:shadow-md bg-white"
              >
                <h4 className="font-bold text-md">{mentor.name}</h4>
                <p className="text-sm text-gray-600">{mentor.title}</p>
                <p className="text-xs text-gray-500 mb-2">Skills: {mentor.skills.join(', ')}</p>
                <button
                  onClick={() => handleSelect(mentor)}
                  className="bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600"
                >
                  Select Mentor
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedMentor && (
        <div className="mt-4 text-green-700 text-sm">
          ✅ You have selected <strong>{selectedMentor.name}</strong> as your mentor.
        </div>
      )}
    </div>
  );
};

export default Chatbot;
