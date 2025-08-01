import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../App.css';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('resumeHistory');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  if (history.length === 0) {
    return (
      <div className="app-layout">
        <Sidebar />
        <div className="history-container">
          <h2>📂 Resume History</h2>
          <p>No history found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="history-container">
        <div className="resume-history">
          <div className="resume-history-header">
            <h2>📂 Resume Upload History</h2>
            <button
              className="clear-btn"
              onClick={() => {
                localStorage.removeItem('resumeHistory');
                setHistory([]);
              }}
            >
              🗑 Clear All
            </button>
          </div>

          <ul className="history-list">
            {history.map((item, index) => (
              <li key={index} className="history-item">
                <div className="file-name">{item.name}</div>
                <div className="skill-list">
                  Skills: <span>{Object.keys(item.analysis.skills).join(', ')}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
