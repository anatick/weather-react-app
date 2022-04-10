import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="currentCity">
          <h3>{props.data.city}</h3>
          <ul className="currentDate">
            <li>
              <FormatDate date={props.data.date} />
            </li>
          </ul>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="current">
              <img 
              src={props.data.iconUrl}
              alt={props.data.description}
              />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>

          <div className="col-6">
            <ul className="features">
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind}KM/h</li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
    </div>
  );
}