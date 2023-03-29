import { useState } from "react";
import Search from "./components/Search";
import './App.css';

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
    let lat = 0;
    let lon = 0;
    e.preventDefault();
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${state.searchText}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        lat = data[0].lat;
        lon = data[0].lon;
        setState((prevState) => { return { ...prevState, cityData: data[0] } })
      })
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
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
          <Search
            searchText={state.searchText}
            handleSearchTextChange={handleSearchTextChange}
            handleSearchSubmit={handleSearchSubmit}
          />
        </div>
      </div>
    </section>
  </>
}
export default App;

