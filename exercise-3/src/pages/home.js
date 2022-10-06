import React, { useEffect, useMemo } from 'react';
import axios from 'axios';
import { WEATHER_APP_API_KEY } from '../API_KEYS';
import WeatherCard from '../components/WeatherCard';
import Header from '../components/Header';
import { useSearchParams } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [city, setCity] = React.useState('Shanghai');
  const [weatherData, setWeatherData] = React.useState({});
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const cityToQuery = searchParams.get('city') || city;
    setCity(cityToQuery);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`,
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.warn(err);
        setWeatherData({});
      });
  }, []);

  const {
    humidity,
    currentTemp,
    cloudiness,
    highTemp,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    const weatherMain = weatherData.main || {};
    return {
      currentTemp: weatherMain.temp,
      humidity: weatherMain.humidity,
      cloudiness: weatherData.clouds && weatherData.clouds.all,
      highTemp: weatherMain.temp_max,
      lowTemp: weatherMain.temp_min,
      weatherType: weatherData.weather && weatherData.weather[0].main,
      windSpeed: weatherData.wind && weatherData.wind.speed,
      city: city,
    };
  }, [weatherData, city]);

  console.log(weatherData);

  return (
    <main>
      <Header />
      <WeatherCard
        city={city}
        humidity={humidity}
        currentTemp={currentTemp}
        lowTemp={lowTemp}
        highTemp={highTemp}
        cloudiness={cloudiness}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </main>
  );
};

export default Home;
