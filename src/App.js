import React, { useState } from "react";
import "./App.css";

const api = {
  key: "2cdf06a36c452536f181154cb6374893",
  base: "https://api.openweathermap.org/data/2.5/",
};

// let request = fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=London&appid=2cdf06a36c452536f181154cb6374893"
// )
//   .then((data) => {
//     console.log(data);
//     return data.text();
//   })
//   .then((data) => {
//     console.log(data);
//   });

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
        .then((data) => {
          return data.json();
        })
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

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

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        (typeof weather.main != "undefined")
          ? ((weather.main.temp < 16)
            ? "cold"
            : "app")
          : "app"
      }
    >
      <main className="main">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}˚C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
