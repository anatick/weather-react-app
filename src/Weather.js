import React from "react";
import WeatherForecast from "./WeatherForecast"

import "./Weather.css"



export default function Weather(){
    return (
      <div className="Weather">
        <form className="searchForm">
          <div className="row">
            <div className="col-6">
              <input 
              className="search"
              type="search"
              placeholder="🔎 Search city ..."
              autocomplete="off"
              autofocus="on"
              /> 
            </div>
            <div className="col-3">
              <input 
                className="searchButton"
                type="submit"
                value="Search"
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
          <ul>
            <li>Monday, 04 Mar 2022 12:45</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="currentWeather">
              <img 
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="clean sky"
              className="main-logo"
              />
              <span className="temperature">
                <strong>26</strong>
              </span>
              <span className="units">
                <a href="/">°C</a> |<a href="/">°F</a>
              </span>  
            </div>
          </div>

          <div className="col-6">
            <ul>
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