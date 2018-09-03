import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService"; 
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup"
import MoviesTable from "./moviesTable";
import _ from 'lodash';

class MovieComponent extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn:{
      path:"title",
      order:"asc"
    }
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()]
    this.setState({
      movies: getMovies(),
      genres
    });
  }

  handleDelete = movie => {
    // deleteMovie(movie);
    // this.setState({
    //   movies: getMovies()
    // });
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies: movies
    });
  };

  handleLike = movie => {
    // console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies: movies
    }); 
  }

  handlePageChange = page => {
    this.setState({currentPage: page});
  }

  handleFilter = filter => {
    this.setState({
      selectedFilter: filter,
      currentPage: 1
    });
  }

  handleSort = sortColumn => {
    this.setState({sortColumn});
  }

  getPageData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedFilter,
      sortColumn
    } = this.state;
    const filteredMovies = (selectedFilter && selectedFilter._id) ? allMovies.filter(m => m.genre._id === selectedFilter._id): allMovies;
    const sorted =_.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
    const pageMovies = paginate(sorted, currentPage, pageSize);
    return ({totalCount: filteredMovies.length, data: pageMovies});
  }
  renderTable = () => {
    const {length: count} = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn
    } = this.state;
    
    const {totalCount, data:pageMovies} = this.getPageData();

    if (count !== 0) {
      return (
        <React.Fragment>
          <h3 style={{ textAlign: "left" }} className="p-3">
            {
              (totalCount=== 0) 
              ? "There are no movies in the Database"
              : `Showing ${totalCount} movies in the database`
            }
          </h3>
          <MoviesTable 
            movies={pageMovies}
            sortColumn={sortColumn}
            onLike={this.handleLike} 
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <div className = "row">
            <Pagination 
              itemsCount={totalCount} 
              pageSize={pageSize} 
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    const {selectedFilter, genres} = this.state;

    return (
      <div className="row p-3">
        <div className="col-3 p-3">
          <ListGroup 
            filters={genres}
            selectedFilter={selectedFilter}
            onFilterSelect={this.handleFilter}
          />
        </div>
        <div className="col">
          {this.renderTable()}
        </div>
      </div>
    );
  }

}

export default MovieComponent;
