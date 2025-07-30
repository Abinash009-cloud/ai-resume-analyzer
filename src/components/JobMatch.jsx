import React from 'react';
import { motion } from 'framer-motion';


const mockJobs = [
  {
    title: 'Frontend Developer',
    company: 'TechNova Inc.',
    match: 89,
    location: 'Remote',
    type: 'Full-Time',
  },
  {
    title: 'Full Stack Engineer',
    company: 'DevSpark Labs',
    match: 81,
    location: 'Bangalore, IN',
    type: 'Hybrid',
  },
  {
    title: 'UI/UX Designer',
    company: 'CreativeByte',
    match: 74,
    location: 'Delhi, IN',
    type: 'Contract',
  },
];

const JobMatch = ({ file }) => {
  if (!file) return null;

  return (
    <div className="job-match">
      <h3>🔍 Job Matches</h3>
      <div className="job-card-list">
        {mockJobs.map((job, index) => (
          <motion.div
            className="job-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="job-header">
              <h4>{job.title}</h4>
              <span className="match">{job.match}% Match</span>
            </div>
            <p className="company">🏢 {job.company}</p>
            <p className="location">📍 {job.location} | {job.type}</p>
            <button className="apply-btn">Apply Now</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobMatch;
