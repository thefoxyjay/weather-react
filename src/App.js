import "./App.css";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> How's the Weather?</h1>
          <br />
          <Search />
          <br />
          <Weather city="" />
        </header>
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
