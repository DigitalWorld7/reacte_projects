import React, { useState } from 'react';
import './styles.css';

const TextHighlighter = () => {
  const [highlight, setHighlight] = useState();

  const highlightText = () => {
    setHighlight(true);
  };

  return (
    <div className="text-highlighter">
        <h1 style={{textAlign:'center',color:'purple'}} >HighlightText Task</h1>
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
