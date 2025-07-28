import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Resume Analyzer</h1>
        <div>
          <button className="auth-btn">Login</button>
          <button className="auth-btn">Register</button>
        </div>
      </header>

      <main className="main">
        <section className="upload-section">
          <h2>Upload your resume</h2>
          <div className="upload-box">
            <i className="upload-icon">📄</i>
            <p>PDF or text file, max 5MB</p>
            <button className="upload-btn">Upload Resume</button>
          </div>
        </section>

        <section className="analysis-section">
          <div className="ai-analysis">
            <h3>AI Analysis</h3>
            <ul>
              <li>Frontend Developer - <strong>87%</strong></li>
              <li>Software Engineer - <strong>82%</strong></li>
              <li>Project Manager - <strong>75%</strong></li>
            </ul>
          </div>

          <div className="skills-chart">
            <h3>Skills</h3>
            <div className="chart-placeholder">[Chart Here]</div>
            <ul className="suggestions">
              <li>Include more industry-specific keywords.</li>
              <li>Expand on your leadership experience.</li>
            </ul>
          </div>

          <div className="job-matching">
            <h3>Job Matching</h3>
            <div className="job-card">[Matching Job Cards Here]</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
