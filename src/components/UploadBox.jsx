import React, { useState } from 'react';


const UploadBox = ({ onUpload }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
      onUpload(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div className="upload-box">
      <label className="upload-area">
        <i className="fa-solid fa-cloud-arrow-up upload-icon"></i>
        <p>Click or drag to upload your resume (PDF only)</p>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
      </label>
      {fileName && <p className="file-info">📄 {fileName}</p>}
    </div>
  );
};

export default UploadBox;
