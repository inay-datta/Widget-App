import React, { useEffect, useState } from "react";
import axios from "axios";

import './WeatherComponent.css';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const apiKey = "b9af2027371685667673b2e36f7dfd7c";


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        alert("Failed to fetch weather data. Please try again.");
      }
    };

    fetchWeather();
  }, [apiKey, city]);

  function updateCity() {
    console.log(document.getElementById("city-input").value, " inner text");
    setCity(document.getElementById("city-input").value);
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = weatherData;
  const temperature = main.temp;
  const condition = weather[0].description;
  const iconCode = weather[0].icon;

  return (
    <div id="weather-widget">
      <h2>Weather in {name}</h2>
      <div id="weather-icon">
        <img
          src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt="Weather Icon"
        />
      </div>
      <p id="temperature">{temperature} °C</p>
      <p id="condition">{condition}</p>

      <input type="text" id="city-input" placeholder="Enter city name"/>
      <button type="submit" onClick={updateCity}>
        <span>Update</span> City
      </button>
    </div>
  );
};

export default WeatherComponent;
