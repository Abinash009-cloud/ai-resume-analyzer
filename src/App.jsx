import React, { useState, useEffect } from 'react';
import UploadBox from './components/UploadBox';
import AIAnalysis from './components/AIAnalysis';
import JobMatch from './components/JobMatch';
import ResumeHistory from './components/ResumeHistory';
import Login from './components/Login'; // ⬅️ make sure you created Login.jsx
import './App.css';

const App = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // 🔑 Login toggle

  useEffect(() => {
    const saved = localStorage.getItem('resumeHistory');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const handleUpload = (file) => {
    setResumeFile(file);
    setAnalysisData(null);
    setLoading(true);

    setTimeout(() => {
      const analysis = {
        skills: { React: 90, JavaScript: 85, Leadership: 70 },
        suggestions: ['Add backend experience', 'Include GitHub'],
      };
      setAnalysisData(analysis);
      setLoading(false);

      const newEntry = { name: file.name, analysis };
      const updated = [newEntry, ...history];
      setHistory(updated);
      localStorage.setItem('resumeHistory', JSON.stringify(updated));
    }, 1500);
  };

  const clearAll = () => {
    setResumeFile(null);
    setAnalysisData(null);
  };

  const clearHistory = () => {
    localStorage.removeItem('resumeHistory');
    setHistory([]);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>AI Resume Analyzer</h1>
        <div>
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌞 Light' : '🌙 Dark'}
          </button>
          <button className="auth-btn" onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'Back' : 'Login'}
          </button>
          <button className="auth-btn" onClick={clearAll}>Clear</button>
        </div>
      </header>

      <main className="main">
        {showLogin ? (
          <Login />
        ) : (
          <>
            <UploadBox onUpload={handleUpload} />
            {loading && (
              <div className="loader-container">
                <div className="loader">⏳ Analyzing Resume...</div>
              </div>
            )}
            {!loading && analysisData && (
              <>
                <AIAnalysis file={resumeFile} analysis={analysisData} />
                <JobMatch file={resumeFile} />
              </>
            )}
            <ResumeHistory history={history} onClear={clearHistory} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
