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
        backgroundColor: 'rgba(108, 99, 255, 0.6)',
        borderColor: '#6c63ff',
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: 'rgba(108, 99, 255, 0.8)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ccc' },
        grid: { color: '#333' },
      },
      x: {
        ticks: { color: '#ccc' },
        grid: { color: '#333' },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#eee',
          font: { size: 14 },
        },
      },
      tooltip: {
        backgroundColor: '#1f1f2f',
        titleColor: '#fff',
        bodyColor: '#eee',
      },
    },
  };

  return (
    <div className="skills-chart-container">
      <h3>📊 Skill Match Overview</h3>
      <div style={{ height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillsChart;
