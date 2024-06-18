import React from 'react';
import TextHighlighter from './TextHighlighter';
import AutoFocusInput from './AutoFocusInput';
import './styles.css'; // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <TextHighlighter />
      <AutoFocusInput />
    </div>
  );
};

export default App;
