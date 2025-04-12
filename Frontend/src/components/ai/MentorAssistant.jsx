import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InstructorContext } from '../../context/InstructorContext';
import axios from 'axios';
import { Loader2, ArrowLeft, ArrowRight, Search, RotateCw } from 'lucide-react';

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
      label: 'What skill would you like to learn?',
      field: 'skill',
      input: (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={formData.skill}
            onChange={(e) => setFormData({...formData, skill: e.target.value})}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            placeholder="e.g. Python, Web Design, Data Science"
            required
          />
        </div>
      )
    },
    {
      label: 'What is your current experience level?',
      field: 'experience',
      input: (
        <select
          value={formData.experience}
          onChange={(e) => setFormData({...formData, experience: e.target.value})}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          required
        >
          <option value="">Select your experience level</option>
          <option value="beginner">Beginner (just starting out)</option>
          <option value="intermediate">Intermediate (some knowledge)</option>
          <option value="advanced">Advanced (looking to master)</option>
        </select>
      )
    },
    {
      label: 'How much time can you dedicate weekly?',
      field: 'timeCommitment',
      input: (
        <div className="space-y-2">
          <select
            value={formData.timeCommitment}
            onChange={(e) => setFormData({...formData, timeCommitment: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            required
          >
            <option value="">Select your availability</option>
            <option value="1-3 hours">1-3 hours (casual learning)</option>
            <option value="3-5 hours">3-5 hours (serious learning)</option>
            <option value="5+ hours">5+ hours (intensive learning)</option>
          </select>
          <p className="text-sm text-gray-500">We'll match you with mentors who suit your pace</p>
        </div>
      )
    },
    {
      label: 'What type of mentor are you looking for?',
      field: 'mentorType',
      input: (
        <div className="grid grid-cols-2 gap-3">
          {['developer', 'designer', 'data', 'cloud', 'security'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({...formData, mentorType: type})}
              className={`p-3 rounded-lg border-2 transition-all ${formData.mentorType === type ? 
                'border-indigo-500 bg-indigo-50 text-indigo-700' : 
                'border-gray-200 hover:border-gray-300'}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      )
    },
    {
      label: 'When are you typically available for sessions?',
      field: 'timePreference',
      input: (
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'mornings', label: '🌅 Mornings' },
            { value: 'evenings', label: '🌇 Evenings' },
            { value: 'weekends', label: '🎉 Weekends' },
            { value: 'anytime', label: '🕒 Anytime' }
          ].map((time) => (
            <button
              key={time.value}
              type="button"
              onClick={() => setFormData({...formData, timePreference: time.value})}
              className={`p-3 rounded-lg border-2 transition-all ${formData.timePreference === time.value ? 
                'border-indigo-500 bg-indigo-50 text-indigo-700' : 
                'border-gray-200 hover:border-gray-300'}`}
            >
              {time.label}
            </button>
          ))}
        </div>
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
      setError('Failed to connect to mentor service. Showing local matches...');
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Mentor</h1>
          <p className="text-gray-600">
            Answer a few questions and we'll match you with the ideal instructor for your learning journey
          </p>
        </div>

        {!recommendations.length ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {steps[formStep].label}
                  </h2>
                  <span className="text-sm text-gray-500">
                    Step {formStep + 1} of {steps.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${((formStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                {steps[formStep].input}
              </div>

              <div className="flex justify-between">
                {formStep > 0 ? (
                  <button
                    onClick={() => setFormStep(f => f - 1)}
                    className="flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-indigo-600 transition"
                  >
                    <ArrowLeft size={18} />
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  onClick={formStep < steps.length - 1 ? 
                    () => setFormStep(f => f + 1) : 
                    handleSubmit
                  }
                  disabled={isLoading || 
                    (formStep === 0 && !formData.skill) ||
                    (formStep === 1 && !formData.experience) ||
                    (formStep === 2 && !formData.timeCommitment) ||
                    (formStep === 3 && !formData.mentorType) ||
                    (formStep === 4 && !formData.timePreference)
                  }
                  className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 transition"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Processing...
                    </>
                  ) : formStep < steps.length - 1 ? (
                    <>
                      Next
                      <ArrowRight size={18} />
                    </>
                  ) : (
                    'Find My Mentor'
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              {aiResponse.analysis && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Personalized Learning Analysis</h3>
                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                    <p className="text-gray-700 whitespace-pre-line">{aiResponse.analysis}</p>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Mentors For You</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {recommendations.map(mentor => (
                    <div key={mentor._id} className="border rounded-xl overflow-hidden hover:shadow-md transition">
                      <div className="p-5">
                        <div className="flex items-start gap-4">
                          <img 
                            src={mentor.image} 
                            alt={mentor.name} 
                            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                          />
                          <div>
                            <h4 className="font-bold text-lg text-gray-800">{mentor.name}</h4>
                            <p className="text-indigo-600 font-medium">{mentor.title}</p>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.round(mentor.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <span className="text-sm text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {mentor.skills.slice(0, 4).map((skill, i) => (
                              <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => navigate(`/instructors/${mentor._id}`)}
                            className="w-full mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                          >
                            View Profile & Schedule
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {aiResponse.tips && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Learning Tips From Our AI</h4>
                  <p className="text-blue-700 whitespace-pre-line">{aiResponse.tips}</p>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setRecommendations([]);
                    setFormStep(0);
                    setFormData({
                      skill: '',
                      experience: '',
                      timeCommitment: '',
                      mentorType: '',
                      timePreference: ''
                    });
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 text-indigo-600 hover:text-indigo-800 transition"
                >
                  <RotateCw size={16} />
                  Start New Search
                </button>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorAssistant;