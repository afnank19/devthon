import React, { useState } from 'react';
import UserHeader from '../components/UserHeader';

export default function AIVocal() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState('');

  // Handle file upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle AI analysis (mock function for demonstration)
  const analyzeVocalSample = () => {
    if (!file) {
      setError('Please upload a vocal sample first.');
      return;
    }

    setError('');
    setLoading(true);
    
    // Simulating an AI analysis for demo purposes
    setTimeout(() => {
      const aiResult = {
        pitchScore: Math.random() * 10, // Random score between 0-10
        clarityScore: Math.random() * 10,
        toneScore: Math.random() * 10,
        recommendations: [
          'Try to improve your pitch control.',
          'Work on your breath control for better clarity.',
          'Practice vocal exercises to enhance your tone.'
        ]
      };

      setRecommendations(aiResult);
      setLoading(false);
    }, 2000); // Simulate network delay
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700">
      <UserHeader />
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto py-10 text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">Vocal Improvement Analysis</h2>

        <div className="bg-slate-800 p-8 rounded-xl shadow-2xl mb-8">
          <p className="mb-4">Upload your vocal recording to get personalized improvement tips based on AI analysis.</p>
          
          <input
            type="file"
            onChange={handleFileChange}
            accept="audio/*"
            className="bg-gray-700 text-white p-3 rounded-md"
          />
          
          <div className="mt-4">
            <button
              onClick={analyzeVocalSample}
              className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400 focus:outline-none transition"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze Vocal Sample'}
            </button>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* AI Recommendations Section */}
        {recommendations && (
          <div className="bg-slate-800 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">AI Analysis Results</h3>

            <div className="space-y-4">
              <p><strong>Pitch Score:</strong> {recommendations.pitchScore.toFixed(2)}</p>
              <p><strong>Clarity Score:</strong> {recommendations.clarityScore.toFixed(2)}</p>
              <p><strong>Tone Score:</strong> {recommendations.toneScore.toFixed(2)}</p>

              <h4 className="text-xl font-semibold mt-6">Personalized Recommendations</h4>
              <ul className="list-disc list-inside">
                {recommendations.recommendations.map((rec, index) => (
                  <li key={index} className="text-yellow-300">{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
