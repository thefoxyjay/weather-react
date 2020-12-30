import "./App.css";
import "./Weather.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header> How's the Weather?</header>
        <br />
        <Weather defaultCity="Nashville" />
        <footer>
          This was coded by{" "}
          <a
            href="https://github.com/thefoxyjay/weather-react.git"
            target="_blank"
            rel="noreferrer"
          >
            Jordan Tarquino
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
