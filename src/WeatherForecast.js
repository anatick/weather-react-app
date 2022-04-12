import React, {useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse (response){
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  
  if(loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-card">
              <div className="WeatherForecast-day">Thu</div>
              <img 
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="broken"
              className="WeatherForecast-image"/>
              <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max"> 20° </span>
                <span className="WeatherForecast-temperature-min"> 10° </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  } else {
      let apiKey = "cc9de23a51611da2dc046ea1af020ca7";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);

      return null;
  }

  
}