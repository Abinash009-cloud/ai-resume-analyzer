import React, { useState, useEffect } from 'react';
import UploadBox from '../components/UploadBox';
import ResumePreview from '../components/ResumePreview';
import AIAnalysis from '../components/AIAnalysis';
import JobMatch from '../components/JobMatch';

import SkillsChart from '../components/SkillsChart';
import CareerSuggestions from '../components/CareerSuggestions';
import ExportPDFButton from '../components/ExportPDFButton';
import '../App.css';
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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

    setTimeout(() => {
      const analysis = {
        skills: { React: 90, JavaScript: 85, Leadership: 70 },
        suggestions: ['Add backend experience', 'Include GitHub'],
      };
      setAnalysisData(analysis);

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
   <div className="app-layout">
  <Sidebar />
  {/* <div className="main-content"></div> */}
    <div className="container">
      <header className="header">
        <h1>AI Resume Analyzer</h1>
        <div>
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌞 Light' : '🌙 Dark'}
          </button>
          
        </div>
      </header>

      <main className="main">
        <UploadBox onUpload={handleUpload} />
        {resumeFile && <ResumePreview file={resumeFile} />}
        {analysisData && (
          <>
            <AIAnalysis file={resumeFile} analysis={analysisData} />
            <SkillsChart skills={analysisData.skills} />
            <ExportPDFButton file={resumeFile} analysis={analysisData} />
            <CareerSuggestions skills={analysisData.skills} />
          </>
        )}
        {resumeFile && <ResumePreview file={resumeFile} />}

        {resumeFile && <JobMatch file={resumeFile} />}
        
      </main>
    </div>
      </div>
  );
};

export default Dashboard;
