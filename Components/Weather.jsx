import React from "react";
import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherRostov, setWeatherRostov] = useState(null);
  const [weatherAzov, setWeatherAzov] = useState(null);

  const getWeather = async () => {
    const API_KEY = 'ed5c2c5ad0514524890175244250907'; // получите на openweathermap.org
    const [responseRostov,responseAzov] = await Promise.all([
        fetch(`http://api.weatherapi.com/v1/current.json?key=ed5c2c5ad0514524890175244250907&q=Ростов-на-Дону&aqi=no`),
        fetch (`http://api.weatherapi.com/v1/current.json?key=ed5c2c5ad0514524890175244250907&q=Азов&aqi=no`)
    ])
     
    const dataAzov = await responseAzov.json();
    const dataRostov = await responseRostov.json();

    setWeatherRostov(dataRostov);
    setWeatherAzov(dataAzov);
  };

  

  return (
    <>
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город"
      />
      <button onClick={getWeather}>Узнать погоду</button>
      
      {weatherRostov && ( // тоже самое weatherRostov ? условие, если weatherRostov null,underfined, false - то реакт проигнорирует этот блок
        <div style={{ marginTop: '20px' }}>
          <h3>Погода города {weatherRostov.location.name}</h3>
          <p>Температура: {weatherRostov.current.temp_c}°C</p> 
          
          {/* <p>{weather.weather[0].description}</p> */}
        </div>
      )}
    </div>

      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город"
      />
      <button onClick={setWeatherAzov}>Узнать погоду</button> */}
      
      {weatherAzov && (
        <div style={{ marginTop: '20px' }}>
          <h3>Погода города {weatherAzov.location.name}</h3>
          <p>Температура: {weatherAzov.current.temp_c}°C</p> 
          {/* Math.round(weather.main.temp_c) */}
          {/* <p>{weather.weather[0].description}</p> */}
        </div>
      )}
    </div>
    </>
  );
}