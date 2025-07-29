import React from 'react';
import SkillsChart from './SkillsChart';




const AIAnalysis = ({ file, analysis }) => {
  if (!file || !analysis) return null;

  return (
    <div className="ai-analysis">
      <h3>AI Analysis</h3>

      <p><strong>File:</strong> {file.name}</p>

      {analysis.skills && (
        <>
          <h4>Top Skills:</h4>
          <div className="skill-bars">
            {Object.entries(analysis.skills).map(([skill, percent], i) => (
              <div key={i} className="skill-bar">
                <span>{skill}</span>
                <div className="bar">
                  <div className="fill" style={{ width: `${percent}%` }}></div>
                  <span className="percent">{percent}%</span>
                </div>
              </div>
            ))}
          </div>
          <SkillsChart skills={analysis.skills} />
        </>
      )}

      {analysis.suggestions?.length > 0 && (
        <>
          <h4>Suggestions:</h4>
          <ul>
            {analysis.suggestions.map((s, i) => (
              <li key={i}>⚠️ {s}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AIAnalysis;
