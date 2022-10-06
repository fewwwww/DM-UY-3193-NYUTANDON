import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({
  city,
  humidity,
  currentTemp,
  cloudiness,
  highTemp,
  lowTemp,
  weatherType,
  windSpeed,
}) => {
  return (
    <div className='weather-card'>
      <div className='weather-main'>
        <p className='city'>{city}</p>
        <p className='type'>{weatherType}</p>
        <p className='temp'>{currentTemp}</p>
      </div>
      <div className='weather-info'>
        <p>High: {highTemp}</p>
        <p>Low: {lowTemp}</p>
        <p>Humidity: {humidity}</p>
        <p>Cloudiness: {cloudiness}</p>
        <p>Wind Speed: {windSpeed}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
