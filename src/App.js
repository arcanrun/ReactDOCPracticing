import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import JobsPhoto from "./JobsPhoto/JobsPhoto";
import Clock from "./Clock";
import Like from "./Like/Like";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello now:</h1>
        <Clock title="Moscow: " />
      </div>
    );
  }
}

export default App;
