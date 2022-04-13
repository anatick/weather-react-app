import React from "react"; 


export default function WeatherForecastDay (props) {
  function maxTemperature(){
    let temperature = Math.round(props.data.temp.max)
    return `${temperature}°`;
  } 
  function minTemperature(){
    let temperature = Math.round(props.data.temp.min)
    return `${temperature}°`;
  } 

  function day(){
    let date= new Date(props.data.dt * 1000);
    let day = date.getDay();
    let forecastDay = date.getDate();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return `${days[day]} ${forecastDay}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">
        {day()}
      </div>
      <img className="WeatherForecast-image"
      src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
      alt={props.data.description} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemperature()} |</span>
        <span className="WeatherForecast-temperature-min">{minTemperature()} </span>
      </div>
    </div>
      
  );
}