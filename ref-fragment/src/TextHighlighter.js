import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

const TextHighlighter = () => {
  const [highlight, setHighlight] = useState(false);

  const highlightText = () => {
    setHighlight(true);
  };

  return (
    <div className="text-highlighter">
      <p>
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
        <span style={{ backgroundColor: highlight ? 'yellow' : 'transparent' }}>
          - James Cameron
        </span>
      </p>
      <div className="btn">
        <button onClick={highlightText}>Highlight Text</button>
      </div>
    </div>
  );
};

export default TextHighlighter;
