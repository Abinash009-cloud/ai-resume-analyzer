import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SkillsChart = ({ skills }) => {
  if (!skills) return null;

  const data = {
    labels: Object.keys(skills),
    datasets: [
      {
        label: 'Skill Match %',
        data: Object.values(skills),
        backgroundColor: '#6c63ff',
      },
    ],
  };

  return (
    <div className="skills-chart">
      <h3>Skills Chart</h3>
      <Bar data={data} />
    </div>
  );
};

export default SkillsChart;
