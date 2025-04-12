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
          onChange={(e) => setFormData({...formData, skill: e.target.value})}
          className="form-input"
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
          onChange={(e) => setFormData({...formData, experience: e.target.value})}
          className="form-select"
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
          onChange={(e) => setFormData({...formData, timeCommitment: e.target.value})}
          className="form-select"
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
          onChange={(e) => setFormData({...formData, mentorType: e.target.value})}
          className="form-select"
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
          onChange={(e) => setFormData({...formData, timePreference: e.target.value})}
          className="form-select"
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
      const response = await axios.post('http://localhost:5000/api/match', formData);
      
      if (response.data.success) {
        setAiResponse({
          analysis: response.data.analysis,
          reasons: response.data.reasons,
          tips: response.data.tips
        });
        setRecommendations(response.data.recommendations);
      } else {
        setError(response.data.message || 'Failed to get recommendations');
        // Use local matching if API fails
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
      // Fallback to basic local matching
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
    <div className="mentor-assistant-container">
      <h2>Find Your Perfect Mentor</h2>
      
      {!recommendations.length ? (
        <div className="form-step">
          <label>{steps[formStep].label}</label>
          {steps[formStep].input}
          
          <div className="form-navigation">
            {formStep > 0 && (
              <button onClick={() => setFormStep(f => f - 1)}>
                Back
              </button>
            )}
            <button 
              onClick={formStep < steps.length - 1 ? 
                () => setFormStep(f => f + 1) : 
                handleSubmit
              }
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 
               formStep < steps.length - 1 ? 'Next' : 'Find My Mentor'}
            </button>
          </div>
        </div>
      ) : (
        <div className="results-container">
          {aiResponse.analysis && (
            <div className="ai-analysis">
              <h3>AI Analysis</h3>
              <p>{aiResponse.analysis}</p>
            </div>
          )}
          
          <h3>Recommended Mentors</h3>
          <div className="mentor-grid">
            {recommendations.map(mentor => (
              <div key={mentor._id} className="mentor-card">
                <img src={mentor.image} alt={mentor.name} />
                <h4>{mentor.name}</h4>
                <p>{mentor.title}</p>
                <div className="skills">
                  {mentor.skills.join(', ')}
                </div>
                <button 
                  onClick={() => navigate(`/instructors/${mentor._id}`)}
                  className="view-profile-btn"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
          
          {aiResponse.tips && (
            <div className="learning-tips">
              <h3>Learning Tips</h3>
              <p>{aiResponse.tips}</p>
            </div>
          )}
          
          <button 
            onClick={() => {
              setRecommendations([]);
              setFormStep(0);
            }}
            className="restart-btn"
          >
            Start New Search
          </button>
        </div>
      )}
      
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default MentorAssistant;