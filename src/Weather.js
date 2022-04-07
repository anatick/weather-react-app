import React, {useState} from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast"
import "./Weather.css"
 
export default function Weather(){
  function handleResponse(response) {
    console.log(response.data);
  }
  

  const apiKey = "15b20f7cbd51930154860d6bf63663ce";
  let city = "Faro";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
  axios.get(apiUrl).then(handleResponse);

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
        <h3>Lisbon</h3>
        <ul className="currentDate">
          <li>Monday, 04 Mar 2022 12:45</li>
        </ul>
      </div>

      <div className="row mt-4">
        <div className="col-6">
          <div className="current">
            <img 
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="clean sky"
            />
            <span className="temperature">26</span>
            <span className="units">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span> 
              
          </div>
        </div>

        <div className="col-6">
          <ul className="features">
            <li>Humidity: 2%</li>
            <li>Wind: 12KM/h</li>
            <li>Clear Sky</li>
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
}