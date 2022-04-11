import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css"
 
export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
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
    const apiKey = "15b20f7cbd51930154860d6bf63663ce";
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
            <div className="col-6">
              <input 
                type="search"
                placeholder="🔎 Search city ..."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        

       
      </div>
    );
  } else {
    search();
    return "loading...."
    }

 

  
}