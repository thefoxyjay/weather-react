import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    return `The weather in ${response.data.name} is ${response.data.main.temp}°F`;
  }

  const apiKey = "c99487f69d19999bb56503b8673bc536";
  const units = "imperial";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={5000}
    />
  );
}
