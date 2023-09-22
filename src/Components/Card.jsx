import React from "react";

let date = String(new window.Date());
date = date.slice(3, 15);

function Card({ weatherData }) {
  return (
    <>
      <div id="cardData">
        <p>{date}</p>
        <p>
          {weatherData.name}, {weatherData.sys.country}
        </p>
        <p>{weatherData.weather[0].main}</p>
      </div>
      <div className="data-card">
        <p className="info">
          {weatherData.main.temp.toFixed()}
          <sup>°C</sup>
          <span>Temp</span>
        </p>
        <p className="info">
          {weatherData.main.humidity}%<span>Humidity</span>
        </p>
        <p className="info">
          {weatherData.wind.speed.toFixed()} MPH
          <span>Wind</span>
        </p>
      </div>
    </>
  );
}

function CardEmpty() {
  return (
    <div id="cardData">
      <p>Search weather of any City</p>
    </div>
  );
}

export { Card, CardEmpty };
