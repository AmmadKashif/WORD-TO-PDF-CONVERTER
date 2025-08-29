import React, { useState } from 'react';

function WordToPDF() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus('');
  };

  const handleConvert = () => {
    if (!file) {
      setStatus('⚠️ Please upload a Word or text file.');
      return;
    }

    // Simulate conversion (you'd use a backend or library in real app)
    setStatus('✅ File converted to PDF (simulated).');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <input
        type="file"
        accept=".doc,.docx,.txt"
        onChange={handleFileChange}
        style={{ marginBottom: '20px' }}
      />
      <br />
      <button
        onClick={handleConvert}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Convert to PDF
      </button>
      {status && <p style={{ marginTop: '20px' }}>{status}</p>}
    </div>
  );
}

export default WordToPDF;
