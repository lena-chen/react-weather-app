import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="App"> 
    <head>
    <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Weather App</title>
  <script src="https://kit.fontawesome.com/dc84af7fab.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    </head>
     <container>
  <div className="container">
    <div className="weather-app">
    <div className="row">
      <div className="col-4">
        <h1 id="city">
          Zurich
        </h1>
          <h3 className="update">
            Saturday, 10:29
          </h3>
        <br />
           <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" id="icon" />
      </div>

      <div className="col-4">
        <div className="today">
          <row>
          <strong id="temperature">15</strong>
          <span>°C</span> 
          <br />
          <br />
          <br />
          <br />
          🌬 Wind:
          <span className="wind">
          3 
          </span>
          km/h
          <br />
          💦  Humidity:
          <span className="humidity">
          1
          </span>
          %
          </row>
        </div>
      </div>
      <div className="col-4" id="search-form">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Type city..." aria-label="Recipient's username"
            aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i
              className="fas fa-search"></i></button>
        </div> 
      </div>
    </div>
  <div id="forecast">
    <div className="row">
      <div className="col-3">
        <div className="forecast-day"> Thu
          <br />
         <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" width="42" />
         <div className="forecast-temp">
           <span className="forecast-max-temp"><strong>14°</strong></span>
           <span className="forecast-min-temp">5°</span>
         </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
  <footer>
    <a href="https://github.com/lena-chen/SheCodes-Project" target="_blank" rel="noreferrer"><strong>Open-source code</strong>  </a> by alena
  </footer>
  <script src="script.js"></script>
  </container>
    </div>
      </header>
    </div>
  );
}

export default App;
