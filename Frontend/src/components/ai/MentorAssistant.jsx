import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InstructorContext } from '../../context/InstructorContext';

const MentorAssistant = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    skill: '',
    mentorType: '',
    timePreference: ''
  });
  const [recommendations, setRecommendations] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [chatbotReply, setChatbotReply] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  const { instructors } = useContext(InstructorContext);

  const steps = [
    {
      label: 'What do you want to learn?',
      field: 'skill',
      input: (
        <input
          type="text"
          value={formData.skill}
          onChange={e => setFormData({ ...formData, skill: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="e.g. Python, Web Development"
        />
      )
    },
    {
      label: 'What type of mentor are you looking for?',
      field: 'mentorType',
      input: (
        <select
          className="w-full p-2 border rounded"
          value={formData.mentorType}
          onChange={e => setFormData({ ...formData, mentorType: e.target.value })}
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
      label: 'Preferred time to connect',
      field: 'timePreference',
      input: (
        <select
          className="w-full p-2 border rounded"
          value={formData.timePreference}
          onChange={e =>
            setFormData({ ...formData, timePreference: e.target.value })
          }
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
      setIsSubmitted(true);
    }
  };

  const submitChat = () => {
    const userSkill = formData.skill.toLowerCase().trim();
  
    const matched = instructors.filter(inst => {
      const skillMatch = inst.skills.some(skill =>
        skill.toLowerCase().includes(userSkill) // smart partial match
      );
  
      const typeMatch = formData.mentorType
        ? inst.title.toLowerCase().includes(formData.mentorType.toLowerCase())
        : true;
  
      const timeMatch = formData.timePreference
        ? inst.availability.toLowerCase() === formData.timePreference.toLowerCase()
        : true;
  
      return skillMatch && typeMatch && timeMatch;
    });
  
    const response = `We found ${matched.length} instructors based on your preferences.`;
    setChatbotReply(response);
    setRecommendations(matched);
  };
  
  const handleSelect = mentor => {
    setSelectedMentor(mentor);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">
        🎓 Find Your Mentor
      </h2>

      {!isSubmitted ? (
        <>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {steps[formStep].label}
          </label>
          {steps[formStep].input}
          <button
            onClick={handleNext}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            {formStep < steps.length - 1 ? 'Next' : 'Submit'}
          </button>
        </>
      ) : (
        <>
          <p className="mb-4 text-green-700 font-medium">
            ✅ Recommendations based on your preferences:
          </p>

          {chatbotReply && (
            <p className="mb-4 text-gray-700 text-sm italic">{chatbotReply}</p>
          )}

          {recommendations.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                {recommendations.map((mentor, idx) => (
                  <div
                    key={idx}
                    className="border p-4 rounded shadow hover:shadow-md bg-white"
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                    />
                    <h4 className="font-bold text-md text-center">{mentor.name}</h4>
                    <p className="text-sm text-gray-600 text-center">{mentor.title}</p>
                    <p className="text-xs text-gray-500 text-center mb-2">
                      Skills: {mentor.skills?.join(', ')}
                    </p>
                    <button
                      onClick={() => handleSelect(mentor)}
                      className="bg-indigo-500 text-white px-3 py-1 rounded text-sm hover:bg-indigo-600 block mx-auto"
                    >
                      Select Mentor
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('/instructor', { state: { recommendedList: recommendations } })}
                className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 block mx-auto"
              >
                View Recommended Mentors
              </button>
            </>
          ) : (
            <p className="text-red-500 mt-4 text-center">No mentors found for your preferences. Try again!</p>
          )}
        </>
      )}

      {selectedMentor && (
        <div className="mt-4 text-green-700 text-sm text-center">
          ✅ You have selected <strong>{selectedMentor.name}</strong> as your mentor.
        </div>
      )}
    </div>
  );
};

export default MentorAssistant;
