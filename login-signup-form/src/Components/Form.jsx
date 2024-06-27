import React, { useState } from 'react';
import './Form.css';

const initialFormData = {
  email: '',
  password: '',
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState([]);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData(initialFormData);
  };

  const handleBlur = () => {
    if (formData.password.length > 6) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-ui">
        <form id="form" onSubmit={handleSubmit}>
          <div className="form-body">
            <div className="welcome-lines">
              <div className="welcome-line">Flipkart</div>
            </div>
            <div className="input-area">
              <div className="form-input">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  className={isPasswordValid ? 'valid' : 'invalid'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {!isPasswordValid && (
                  <p className="error-message">*Password must be 6 Character</p>
                )}
              </div>
            </div>
            <div className="submit-button-cvr">
              <button type="submit" className="submit-button">Login</button>
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot password?</a>
            </div>
            <div className="bar"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
