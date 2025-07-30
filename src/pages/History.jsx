// src/pages/History.jsx
import React, { useEffect, useState } from 'react';
import '../App.css';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('resumeHistory');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const handleClear = () => {
    localStorage.removeItem('resumeHistory');
    setHistory([]);
  };

  if (!history || history.length === 0) {
    return (
      <div className="resume-history">
        <h3>📂 No Resume History Found</h3>
      </div>
    );
  }

  return (
    <div className="resume-history">
      <div className="resume-history-header">
        <h3>📂 Resume Upload History</h3>
        <button className="clear-btn" onClick={handleClear}>🗑 Clear All</button>
      </div>

      <ul className="history-list">
        {history.map((item, index) => (
          <li key={index} className="history-item">
            <div className="file-name">📄 {item.name}</div>
            <div className="skill-list">
              Skills: <span>{Object.keys(item.analysis.skills).join(', ')}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
