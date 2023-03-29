import { useState } from "react";
import Search from "./components/Search";
import './App.css';
import DisplayWeather from "./components/DisplayWeather";


function App() {
  const [state, setState] = useState({
    searchText: '',
    cityData: {},
    weatherData: {}
  })
  function handleSearchTextChange(e) {
    setState((prevState) => {
      return { ...prevState, searchText: e.target.value }
    })
  }
  function handleSearchSubmit(e) {
    e.preventDefault();
    let lat = 0;
    let lon = 0;
    console.log(state.searchText)
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${state.searchText}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        lat = data[0].lat;
        lon = data[0].lon;
        setState((prevState) => { return { ...prevState, cityData: data[0] } })
      })
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setState((prevState) => { return { ...prevState, weatherData: data } })
      })
    setState((prevState) => { return { ...prevState, searchText: '' } })
  }
  return <>
    <header>
      <div className="container">
        <h1>WEATHER</h1>
      </div>
    </header>
    <section className="main">
      <div className="container">
        <div className="d-flex">
          <div>
            <Search
              searchText={state.searchText}
              handleSearchTextChange={handleSearchTextChange}
              handleSearchSubmit={handleSearchSubmit}
            />
            <DisplayWeather
              city={state.cityData.name}
              state={state.cityData.state}
              country={state.cityData.country}
              feelsLike={state.weatherData.main?.feels_like}
              humidity={state.weatherData.main?.humidity}
              temp={state.weatherData.main?.temp}
              tempMin={state.weatherData.main?.temp_max}
              tempMax={state.weatherData.main?.temp_min}
              windSpeed={state.weatherData.wind?.speed}
              sunrise={state.weatherData.sys?.sunrise}
              sunset={state.weatherData.sys?.sunset}
            />
          </div>
        </div>
      </div>
    </section>
  </>
}
export default App;

