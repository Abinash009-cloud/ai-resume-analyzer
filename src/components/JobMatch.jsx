import React from 'react';

const JobMatch = ({ file }) => {
  if (!file) return null;

   const jobs = [
    { title: 'Frontend Developer', match: 88, desc: 'React, JS, and UI/UX required' },
    { title: 'React Engineer', match: 75, desc: 'SPA, hooks, and performance tuning' },
    { title: 'Junior Fullstack Dev', match: 65, desc: 'React + Node.js + MongoDB' },
  ];

  return (
    <div className="job-matching">
      <h3>Job Matches</h3>
      {jobs.map((job, i) => (
        <div key={i} className="job-card">
          <h4>{job.title} — <span>{job.match}% match</span></h4>
          <p>{job.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default JobMatch;
