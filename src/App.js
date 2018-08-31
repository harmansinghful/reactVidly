import React, { Component } from "react";
import "./App.css";
import MovieComponent from "./components/movies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container">
          <MovieComponent />
        </main>
      </div>
    );
  }
}

export default App;
