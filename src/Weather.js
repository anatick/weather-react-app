import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css"
 
export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      
    });
  }

  function search(){
    const apiKey = "cc9de23a51611da2dc046ea1af020ca7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit (event){
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);

  }

  if (weatherData.ready){
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="searchForm">
          <div className="row">
            <div className="col-8">
              <input 
                type="search"
                placeholder="🔎 Search city ..."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              /> 
            </div>  
            <div className="col-4">
              <input 
                type="submit"
                value="Search"
                className="searchButton"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates}/>       
      </div>
    );
  } else {
    search();
    return "loading...."
    }

 

  
}