import React, { Component } from 'react';
import './App.css';
import Weather from "./Modules/Weather.js";
import Time from "./Modules/Time.js";
import News from "./Modules/News.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
        <Time />
        <News />
      </div>
    );
  }
}

export default App;
