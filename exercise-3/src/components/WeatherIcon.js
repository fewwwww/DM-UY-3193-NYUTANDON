import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faUmbrella, faSnowflake, faBolt } from '@fortawesome/free-solid-svg-icons';
import './WeatherIcon.css';

const WeatherIcon = ({weatherType}) => {
  switch (weatherType) {
    case 'Clouds':
      return <FontAwesomeIcon icon={faCloud} />;
    case 'Rain':
      return <FontAwesomeIcon icon={faUmbrella} />;
    case 'Snow':
      return <FontAwesomeIcon icon={faSnowflake} />;
    case 'Thunder':
      return <FontAwesomeIcon icon={faBolt} />;
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
};

export default WeatherIcon;
