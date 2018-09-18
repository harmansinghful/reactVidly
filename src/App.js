import React, { Component } from "react";
import "./App.css";
import MovieComponent from "./components/movies";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import CustomerComponent from "./components/customers";
import RentalComponent from "./components/rentals";
import NotFound from "./components/not-found";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="App">
          <main className="container">
            <Switch>
              <Route path="/movies" component={MovieComponent} />
              <Route path="/customers" component={CustomerComponent} />
              <Route path="/rentals" component={RentalComponent} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/" exact component={MovieComponent} />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </div>
        {/* <div className="">
          <main className="container">
            <MovieComponent />
          </main>
        </div> */}
      </React.Fragment>
    );
  }
}

export default App;
