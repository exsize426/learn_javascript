import React, { useLayoutEffect } from "react";
import { useState, useEffect, useRef } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus()

    }, [ref])
   

 
   const getWeather = async (cityName) => {
    const API_KEY = 'ed5c2c5ad0514524890175244250907'; // получите на openweathermap.org
     const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
     )
     
    const data = await response.json();

    setWeatherData(data);

    
  };
 

  const validateInput  = (value) => {
    const word = value[0].toUpperCase() + value.slice(1).toLowerCase();
    const arrayTown = ["Azov","Rostov","Азов","Ростов", "Ростов-на-Дону" ]

    return arrayTown.includes(word)
  }
 
  const handleChange = (e) => {
    const value = e.target.value;
    setWeatherData(null) // сбрасываем данные при вводе
    setCity(value)      //  устанавливаем значение
    setIsValid(validateInput(value))  // установленное значение будет возвращенное значение ф-и validateInput
    
  }
  
  const handleSubmit = (event) => {
       event.preventDefault();

       if (!isValid) return;
    
    // Определяем какой город запрашивать
    const normalizedCity = city[0].toUpperCase() + city.slice(1).toLowerCase();
    const apiCityName = normalizedCity === "Ростов" ? "Ростов-на-Дону" : normalizedCity;
    
    getWeather(apiCityName);
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={ref}
        value={city}
        onChange={handleChange}
        placeholder="Введите город"
      />
      
      <button type="submit">
        Узнать погоду
      </button>
      
      {weatherData && isValid && (
        <div style={{ marginTop: '20px' }}>
          <h3>Погода города {weatherData?.location.name}</h3>
          <p>Температура: {weatherData?.current.temp_c}°C</p>
          <p>Состояние: {weatherData?.current.condition.text}</p>
        </div>
      )}
    </form>
  );
}
 