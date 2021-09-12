import React, { useState } from "react";
import './App.css';

const api = {
  key: "2cdf06a36c452536f181154cb6374893",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
    let day = "3";
    console.log(day)
  }
  return (
    <div className="app">
       <div className="container">Hello</div>
    </div>
  );
}

export default App;
