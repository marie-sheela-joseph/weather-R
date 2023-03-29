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
    e.preventDefault();
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

