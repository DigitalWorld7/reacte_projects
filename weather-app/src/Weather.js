// src/Weather.js
import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'd9269e1937320488c7f72bfcd9fd3ef1';

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError('City not found');
      setWeatherData(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      setWeatherData(null);
    } else {
      fetchWeather();
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p><span style={{fontWeight:'bold',fontSize:'18px',color:'#7100a6'}}>Weather: </span><span style={{fontWeight:'bold',fontSize:'18px',color:'black'}}> {weatherData.weather[0].description} </span></p>
          <p> <span style={{fontWeight:'bold',fontSize:'18px',color:'#7100a6'}}>Temperature: </span> <span style={{fontWeight:'bold',fontSize:'18px',color:'black'}}> {weatherData.main.temp}°C</span></p>
          <p><span style={{fontWeight:'bold',fontSize:'18px',color:'#7100a6'}}>Humidity: </span> <span style={{fontWeight:'bold',fontSize:'18px',color:'black'}}>{weatherData.main.humidity}%</span></p>
        </div>
      )}
    </div>
  );
};

export default Weather;
