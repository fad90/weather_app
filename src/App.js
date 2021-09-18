import React, { useState } from "react";
import "./App.css";

const api = {
  key: "2cdf06a36c452536f181154cb6374893",
  base: "https://api.openweathermap.org/data/2.5/",
};

let request = fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=2cdf06a36c452536f181154cb6374893')
console.log(request)

function App() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()],
        date = d.getDate(),
        month = months[d.getMonth()],
        year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  };
  return (
    <div className="app">
      <main className="main">
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search" />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15˚C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
