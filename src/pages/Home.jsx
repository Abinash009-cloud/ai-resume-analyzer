import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to AI Resume Analyzer</h1>
        <p>Enhance your resume with smart AI insights 🚀</p>
      </div>

      <div className="home-actions">
        <Link to="/dashboard">
          <button className="home-btn">Go to Dashboard</button>
        </Link>
        <Link to="/login">
          <button className="home-btn">Login / Register</button>
        </Link>
        <Link to="/history" className="nav-btn">📂 Resume History</Link>

      </div>
    </div>
  );
};

export default Home;
