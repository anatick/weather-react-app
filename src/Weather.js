import React, {useState} from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast"
import "./Weather.css"
 
export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: "Monday, 04 Mar 2022 12:45",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
      
    });
  }

  if (weatherData.ready){
    return (
      <div className="Weather">
        <form className="searchForm">
          <div className="row">
            <div className="col-6">
              <input 
                type="search"
                placeholder="🔎 Search city ..."
                className="form-control"
                autocomplete="off"
                autoFocus="on"
              /> 
            </div>  
            <div className="col-3">
              <input 
                type="submit"
                value="Search"
                className="searchButton"
              />
            </div>
            <div className="col-3">
              <input className="locationButton"
              type="submit"
              value="Current Location" 
              />
            </div>
          </div>
        </form>

        <div className="currentCity">
          <h3>{weatherData.city}</h3>
          <ul className="currentDate">
            <li>{weatherData.date}</li>
          </ul>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="current">
              <img 
              src={weatherData.iconUrl}
              alt={weatherData.description}
              />
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="units">
                <a href="/">°C</a> |<a href="/">°F</a>
              </span>  
            </div>
          </div>

          <div className="col-6">
            <ul className="features">
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind}KM/h</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <WeatherForecast />
          <WeatherForecast />
          <WeatherForecast />
          <WeatherForecast />
          <WeatherForecast />
        </div>
      </div>
    );
  } else {
      const apiKey = "15b20f7cbd51930154860d6bf63663ce";
      let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`; 
      axios.get(apiUrl).then(handleResponse);

      return "loading...."
      }

 

  
}