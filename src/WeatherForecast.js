import React from "react";

import "./WeatherForecast.css"

export default function WeatherForecast(){
  return (
      <div className="col">
        <div className="card-days">
          <div className="card-body">
            <div className="weatherForecastDate"> Mon 4 </div>
            <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="clouds" />
          </div>
          <div className="weatherForecastTemperatures">
            <span className="weatherForecastTemperaturesMax"> 15° </span> 
            |
            <span className="weatherForecastTemperaturesMin"> 7° </span>
          </div>
        </div>
      </div>
  );
}