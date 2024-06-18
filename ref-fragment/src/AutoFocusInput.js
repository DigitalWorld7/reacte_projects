import React, { useRef } from 'react';
import './styles.css'; 

const AutoFocusInput = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="auto-focus-input">
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <div className="btn">
        <button onClick={focusInput} className='fbtn'>Focus Input</button>
      </div>
    </div>
  );
};

export default AutoFocusInput;
