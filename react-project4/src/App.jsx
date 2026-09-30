import { useState, useEffect } from 'react';
import './App.css';

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // OpenWeatherMap API Key

function App() {
  const [city, setCity] = useState('Kolkata');
  const [searchInput, setSearchInput] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (queryCity) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found. Please try again.');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setCity(searchInput);
      fetchWeather(searchInput);
      setSearchInput('');
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather Dashboard</h1>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter city name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div className="loader">Loading weather data...</div>}

      {error && <div className="error-message">{error}</div>}

      {weather && !loading && (
        <div className="weather-card">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <div className="temp-section">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <div className="temp">{Math.round(weather.main.temp)}°C</div>
          </div>
          <p className="description">{weather.weather[0].description}</p>

          <div className="weather-details">
            <div className="detail-item">
              <span>Humidity:</span>
              <strong>{weather.main.humidity}%</strong>
            </div>
            <div className="detail-item">
              <span>Wind Speed:</span>
              <strong>{weather.wind.speed} m/s</strong>
            </div>
            <div className="detail-item">
              <span>Pressure:</span>
              <strong>{weather.main.pressure} hPa</strong>
            </div>
            <div className="detail-item">
              <span>Feels Like:</span>
              <strong>{Math.round(weather.main.feels_like)}°C</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;