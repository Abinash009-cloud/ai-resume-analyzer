// src/components/CareerSuggestions.jsx
import React from 'react';


const CareerSuggestions = ({ analysis }) => {
  if (!analysis) return null;

  const suggestions = [
    'Explore Frontend Developer roles at startups.',
    'Consider Full-stack Developer with backend skills.',
    'Look for roles requiring strong JavaScript and leadership.',
    'Upskill in Node.js for better job variety.',
  ];

  return (
    <div className="career-suggestions">
      <h3>🎯 Career Suggestions</h3>
      <ul>
        {suggestions.map((suggestion, i) => (
          <li key={i}>💡 {suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareerSuggestions;
