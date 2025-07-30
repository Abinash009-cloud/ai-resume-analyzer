import React from 'react';
import { jsPDF } from 'jspdf';

const AIAnalysis = ({ file, analysis }) => {
  if (!file || !analysis) return null;

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('AI Resume Analysis Report', 20, 20);

    doc.setFontSize(12);
    doc.text(`Resume File: ${file.name}`, 20, 35);

    doc.setFont('helvetica', 'bold');
    doc.text('Top Skills:', 20, 50);
    doc.setFont('helvetica', 'normal');

    let y = 60;
    Object.entries(analysis.skills).forEach(([skill, percent]) => {
      doc.text(`- ${skill}: ${percent}%`, 25, y);
      y += 10;
    });

    doc.setFont('helvetica', 'bold');
    doc.text('Suggestions:', 20, y + 10);
    doc.setFont('helvetica', 'normal');
    y += 20;

    analysis.suggestions.forEach((suggestion, index) => {
      doc.text(`⚠️ ${suggestion}`, 25, y);
      y += 10;
    });

    doc.save(`${file.name}-AI-Report.pdf`);
  };

  return (
    <div className="ai-analysis">
      <h3>AI Analysis</h3>
      <p><strong>File:</strong> {file.name}</p>

      <h4>Top Skills:</h4>
      <ul>
        {Object.entries(analysis.skills).map(([skill, percent], i) => (
          <li key={i}>✅ {skill} – {percent}%</li>
        ))}
      </ul>

      <h4>Suggestions:</h4>
      <ul>
        {analysis.suggestions.map((s, i) => (
          <li key={i}>⚠️ {s}</li>
        ))}
      </ul>

      <button className="export-btn" onClick={handleExportPDF}>📥 Export PDF</button>
    </div>
  );
};

export default AIAnalysis;
