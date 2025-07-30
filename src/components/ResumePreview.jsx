// src/components/ResumePreview.jsx
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


const ResumePreview = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  if (!file) return null;

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const nextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div className="resume-preview">
      <h3>📄 Resume Preview</h3>

      <div className="pdf-controls">
        <button onClick={prevPage} disabled={pageNumber === 1}>⬅ Prev</button>
        <span>Page {pageNumber} of {numPages}</span>
        <button onClick={nextPage} disabled={pageNumber === numPages}>Next ➡</button>
      </div>

      <div className="pdf-container">
        <Document file={file} onLoadSuccess={onLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
};

export default ResumePreview;
