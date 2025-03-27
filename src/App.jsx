import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import ErrorMessage from "./components/ErrorMessage";
import "./index.css"; // Importing the CSS file

const App = () => {
  const [city, setCity] = useState(""); // City name input
  const [weatherData, setWeatherData] = useState(null); // Stores weather data
  const [error, setError] = useState(""); // Stores error message

  const apiKey = "e64d1d4d0385b28e3a2af9e7688e4928"; // Replace with your OpenWeatherMap API key

  // Function to handle the search and fetch weather data
  const handleSearch = async () => {
    if (!city) return; // Don't search if city is empty
    
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data); // Store the data
      setError(""); // Clear any previous error message
    } catch (err) {
      setError("City not found!"); // Show error if something goes wrong
      setWeatherData(null); // Clear the previous weather data
    }
  };

  // Dynamically change the background based on weather condition
  const getBackgroundImage = (weather) => {
    if (!weather) return "url('https://www.example.com/default-bg.jpg')"; // Default background
    const condition = weather.weather[0].main.toLowerCase();

    if (condition === "clear") {
      return "url('https://www.example.com/clear-sky-bg.jpg')";
    } else if (condition === "clouds") {
      return "url('https://www.example.com/cloudy-bg.jpg')";
    } else if (condition === "rain") {
      return "url('https://www.example.com/rainy-bg.jpg')";
    } else if (condition === "snow") {
      return "url('https://www.example.com/snowy-bg.jpg')";
    }
    return "url('https://www.vecteezy.com/photo/35896337-ai-generated-beautiful-blurred-background-image-of-spring-nature-with-a-neatly-trimmed-lawn-surrounded-by-trees-against-a-blue-sky-with-clouds-on-a-bright-sunny-day')"; // Default background
  };

  // Set background image based on weather
  const backgroundStyle = {
    backgroundImage: getBackgroundImage(weatherData),
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="App" style={backgroundStyle}>
      <div className="weather-container">
        <h1>Weather App</h1>
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
        {error && <ErrorMessage message={error} />}
        {weatherData && <WeatherInfo weather={weatherData} />}
      </div>
    </div>
  );
};

export default App;



  