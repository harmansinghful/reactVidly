import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";

class MovieComponent extends Component {
  state = {
    totalMovies: getMovies().length,
    listMovies: getMovies()
  };

  handleDelete = movie => {
    // deleteMovie(movie);
    // this.setState({
    //   totalMovies: getMovies().length,
    //   listMovies: getMovies()
    // });
    const movies = this.state.listMovies.filter(m => m._id !== movie);
    this.setState({
      totalMovies: movies.length,
      listMovies: movies
    });
  };

  renderTable = () => {
    if (this.state.totalMovies !== 0) {
      return (
        <table style={{ textAlign: "left" }} className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.listMovies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "left" }} className="p-3">
          {this.getStatusTitle()}
        </h3>
        {this.renderTable()}
      </div>
    );
  }

  getStatusTitle() {
    return this.state.totalMovies === 0
      ? "There are no movies in the Database"
      : `Showing ${this.state.totalMovies} movies in the database`;
  }
}

export default MovieComponent;
