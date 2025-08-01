import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure your styles are in place
 // Custom styles for homepage

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">AI Resume Analyzer</h1>
          <p className="fade-in-up delay-1">
            Empower your career with AI-powered resume analysis, suggestions, and job matches.
          </p>
          <div className="home-buttons fade-in-up delay-2">
            <Link to="/dashboard" className="home-btn">🚀 Get Started</Link>
            <Link to="/login" className="home-btn-outline">🔐 Login / Register</Link>
          </div>
        </div>
        <div className="hero-img fade-in">
          <img src="./public/resume-hero.svg" alt="Resume AI" />
        </div>
      </section>

      <section className="features">
        <h2 className="fade-in-up">🌟 Key Features</h2>
        <div className="features-grid">
          <div className="feature-card fade-in-up delay-1">
            <h3>📄 Smart Resume Analysis</h3>
            <p>AI evaluates your resume for skills, gaps, and formatting issues.</p>
          </div>
          <div className="feature-card fade-in-up delay-2">
            <h3>🧠 Career Suggestions</h3>
            <p>Get job role suggestions based on your resume content and skills.</p>
          </div>
          <div className="feature-card fade-in-up delay-3">
            <h3>📊 Skill Visualizations</h3>
            <p>Visual charts show your skill strengths and recommendations.</p>
          </div>
          <div className="feature-card fade-in-up delay-4">
            <h3>💼 Job Matching</h3>
            <p>Find jobs that align with your current expertise and resume highlights.</p>
          </div>
        </div>
      </section>

      <section className="cta-section fade-in-up">
        <h2>✨ Ready to impress your recruiter?</h2>
        <p>Use our AI resume analyzer to boost your chances — it's free and instant!</p>
        <Link to="/dashboard" className="home-btn cta-btn">Try Now →</Link>
      </section>

      <footer className="footer fade-in">
        <p>&copy; 2025 AI Resume Analyzer. Built with 💻 and ☕ by Abinash.</p>
      </footer>
    </div>
  );
};

export default Home;
