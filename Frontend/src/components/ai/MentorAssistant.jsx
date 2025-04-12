import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InstructorContext } from '../../context/InstructorContext';
import axios from 'axios';

const MentorAssistant = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    skill: '',
    experience: '',
    timeCommitment: '',
    mentorType: '',
    timePreference: ''
  });
  const [recommendations, setRecommendations] = useState([]);
  const [aiResponse, setAiResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { instructors } = useContext(InstructorContext);

  const steps = [
    {
      label: 'What skill do you want to learn?',
      field: 'skill',
      input: (
        <input
          type="text"
          value={formData.skill}
          onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Python, Web Design"
          required
        />
      )
    },
    {
      label: 'What is your current experience level?',
      field: 'experience',
      input: (
        <select
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      )
    },
    {
      label: 'How much time can you commit?',
      field: 'timeCommitment',
      input: (
        <select
          value={formData.timeCommitment}
          onChange={(e) => setFormData({ ...formData, timeCommitment: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select time commitment</option>
          <option value="1-3 hours">1-3 hours/week</option>
          <option value="3-5 hours">3-5 hours/week</option>
          <option value="5+ hours">5+ hours/week</option>
        </select>
      )
    },
    {
      label: 'What type of mentor are you looking for?',
      field: 'mentorType',
      input: (
        <select
          value={formData.mentorType}
          onChange={(e) => setFormData({ ...formData, mentorType: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select mentor type</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="data">Data Scientist</option>
          <option value="cloud">Cloud/DevOps</option>
          <option value="security">Security</option>
        </select>
      )
    },
    {
      label: 'When are you available for sessions?',
      field: 'timePreference',
      input: (
        <select
          value={formData.timePreference}
          onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select availability</option>
          <option value="mornings">Mornings</option>
          <option value="evenings">Evenings</option>
          <option value="weekends">Weekends</option>
          <option value="anytime">Anytime</option>
        </select>
      )
    }
  ];

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/instructors/match', formData);

      if (response.data.success) {
        setAiResponse({
          analysis: response.data.analysis,
          reasons: response.data.reasons,
          tips: response.data.tips
        });
        setRecommendations(response.data.recommendations);
      } else {
        setError(response.data.message || 'Failed to get recommendations');
        const localMatches = instructors.filter(inst =>
          inst.skills.some(skill =>
            skill.toLowerCase().includes(formData.skill.toLowerCase())
          )
        );
        setRecommendations(localMatches);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to connect to mentor service');
      const localMatches = instructors.filter(inst =>
        inst.skills.some(skill =>
          skill.toLowerCase().includes(formData.skill.toLowerCase())
        )
      );
      setRecommendations(localMatches);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-3xl font-bold text-center mb-6">🎯 Find Your Perfect Mentor</h2>

      {!recommendations.length ? (
        <div className="space-y-6">
          <label className="block text-lg font-medium text-gray-700">{steps[formStep].label}</label>
          {steps[formStep].input}

          <div className="flex justify-between mt-6">
            {formStep > 0 && (
              <button
                onClick={() => setFormStep((f) => f - 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
              >
                ⬅ Back
              </button>
            )}
            <button
              onClick={
                formStep < steps.length - 1
                  ? () => setFormStep((f) => f + 1)
                  : handleSubmit
              }
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
            >
              {isLoading
                ? 'Processing...'
                : formStep < steps.length - 1
                ? 'Next ➡'
                : 'Find My Mentor 🚀'}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {aiResponse.analysis && (
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">🧠 AI Analysis</h3>
              <p className="text-gray-800">{aiResponse.analysis}</p>
            </div>
          )}

          <h3 className="text-xl font-bold text-gray-800 mt-4">👩‍🏫 Recommended Mentors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendations.map((mentor) => (
              <div key={mentor._id || mentor.name} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h4 className="text-lg font-bold">{mentor.name}</h4>
                <p className="text-sm text-gray-600">{mentor.title}</p>
                <p className="text-sm mt-1 text-gray-700">{mentor.skills.join(', ')}</p>
                <button
                  onClick={() => navigate(`/instructors/${mentor._id}`)}
                  className="mt-3 bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>

          {aiResponse.tips && (
            <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">💡 Learning Tips</h3>
              <p className="text-gray-800">{aiResponse.tips}</p>
            </div>
          )}

          <button
            onClick={() => {
              setRecommendations([]);
              setFormStep(0);
            }}
            className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900"
          >
            🔄 Start New Search
          </button>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-600 font-medium bg-red-50 p-2 rounded">
          ⚠ {error}
        </div>
      )}
    </div>
  );
};

export default MentorAssistant;
