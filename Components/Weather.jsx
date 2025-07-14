import React from "react";
import { useState, useEffect } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherRostov, setWeatherRostov] = useState(null);
  const [weatherAzov, setWeatherAzov] = useState(null);
  const [isValid, setIsValid] = useState(false)
  const [example, setExample] = useState([weatherAzov,weatherRostov])

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

  // const exapmleTown = (value) => {
  //     setExample([...example].map((item) => item == value))
  //     console.log(example)
  // }




    // useEffect(() => {
    //     if (city) {
    //       getWeather();
    //     }
    //   }, [city]);

  const validateInput  = (value) => {
    const word = value[0].toUpperCase() + value.slice(1).toLowerCase();
    const arrayTown = ["Azov","Rostov","Азов","Ростов" ]
    
    return arrayTown.includes(word)
  }
 
  const handleChange = (e) => {
    const value = e.target.value;
    setWeatherRostov(null);
    setWeatherAzov(null);
    setCity(value)
    setIsValid(validateInput(value))
    setExample(value)
  }
  
  const handleSubmit = (event) => {
       event.preventDefault();

  }
  
  return (
    <form onSubmit={handleSubmit}>
    
      <input
        value={city}
        onChange={handleChange}
        placeholder="Введите город"
      />
      
      <button type="submit" onClick={getWeather}>Узнать погоду</button>
      
        {weatherRostov && isValid && ( // тоже самое weatherRostov ? условие, если weatherRostov null,underfined, false - то реакт проигнорирует этот блок
          <div style={{ marginTop: '20px' }}>
            <h3>Погода города {weatherRostov?.location.name}</h3>
            <p>Температура: {weatherRostov?.current.temp_c}°C</p> 
          </div>
        )}

        {weatherAzov && isValid && (
          <div style={{ marginTop: '20px' }}>
            <h3>Погода города {weatherAzov?.location.name}</h3>
            <p>Температура: {weatherAzov?.current.temp_c}°C</p> 
          </div>
        )}

    </form>
  );
}
 