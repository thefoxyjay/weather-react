import "./App.css";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> How's the Weather?</h1>
        <br />
        <Search />
        <br />
        <Weather city="Tokyo" />
      </header>
      <p>
        This was coded by{" "}
        <a href="https://github.com/thefoxyjay/weather-react.git">
          Jordan Tarquino
        </a>
      </p>
      ;
    </div>
  );
}

export default App;
