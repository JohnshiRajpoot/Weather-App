import React from "react";

const WeatherInfo = ({ weather }) => {
  const weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-info">
      <h2>{weather.name}</h2>
      <img src={weatherIcon} alt="Weather icon" />            
      <p><h3>{weather.weather[0].description}</h3></p>
      <div className="content">
      <p>🌡️ Temperature: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
