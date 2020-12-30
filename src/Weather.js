import React from "react";
import "./App.css";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Nashville</h1>
      <ul>
        <li>Wednesday 09:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          <span className="temperature">12</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humiduty: 45%</li>
            <li>Wind: 13mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
