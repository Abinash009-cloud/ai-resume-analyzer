import React from 'react';


const ResumeHistory = ({ history, onClear }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="resume-history">
      <div className="resume-history-header">
        <h3>📂 Resume Upload History</h3>
        <button className="clear-btn" onClick={onClear}>🗑 Clear All</button>
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
  );
};

export default ResumeHistory;
