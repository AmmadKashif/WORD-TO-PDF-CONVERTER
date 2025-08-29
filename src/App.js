import React from 'react';
import WordToPDF from './WordToPDF';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>📄 Word to PDF Converter</h1>
      <WordToPDF />
    </div>
  );
}

export default App;
