import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User Fetching Application</h1>
        <button onClick={fetchRandomUser}>New User Detail</button>
        {loading && <div className="spinner"></div>}
        {error && <p className="error">Error: {error}</p>}
        {user && (
          <div className="user-info">
            <img src={user.picture.large} alt="User" />
            <p>Name: {`${user.name.first} ${user.name.last}`}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
