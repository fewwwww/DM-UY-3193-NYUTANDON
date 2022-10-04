import React, { useEffect } from 'react';
import axios from 'axios';
import { WEATHER_APP_API_KEY } from '../API_KEYS';

const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=${WEATHER_APP_API_KEY}`;

const Home = () => {
  const [weatherData, setWeatherData] = React.useState({});
  useEffect(() => {
    axios
      .get(openWeatherURL)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.warn(err);
        setWeatherData({});
      });
  }, []);

  return (
    <main>
      <h1>Weather App</h1>
      <p>Humidity: {weatherData.name}</p>
    </main>
  );
};

export default Home;
