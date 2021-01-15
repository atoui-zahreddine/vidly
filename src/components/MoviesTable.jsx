import React from "react";
import _ from "lodash";
import MoviesHeader from "./MoviesHeader";
import { Movie } from "./Movie";
import MoviesPagination from "./MoviesPagination";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

const MoviesTable = (props) => {
  const start = props.page * props.pageSize - props.pageSize;
  const end = props.page * props.pageSize;

  let filteredMovies = props.movies.filter((movie) => {
    if (props.currentGenre === "All") return true;
    return movie.genre.name === props.currentGenre;
  });
  filteredMovies = filteredMovies.filter((movie) =>
    movie.title.toLowerCase().startsWith(props.searchQuery)
  );
  filteredMovies = _.orderBy(
    filteredMovies,
    props.sortColumn.path,
    props.sortColumn.order
  );

  const movies = filteredMovies.slice(start, end);

  return (
    <div className="row col-9 ">
      <div className="col">
        {props.user ? (
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
        ) : null}
        <p>Showing {filteredMovies.length} movies in the database </p>
        <SearchBox value={props.searchQuery} onChange={props.handleSearch} />
        <table className="table">
          <MoviesHeader
            onSort={props.handleSort}
            sortColumn={props.sortColumn}
          />
          <tbody>
            {movies.map((movie) => (
              <Movie
                key={movie._id}
                {...movie}
                onDeleteMovie={props.onDeleteMovie}
                onFavoriteClick={props.onFavoriteClick}
                updateMovie={props.onMovieUpdate}
                isAdmin={props.user?.isAdmin}
              />
            ))}
          </tbody>
        </table>

        {filteredMovies.length >= 4 ? (
          <MoviesPagination
            page={props.page}
            onPageChange={props.onPageChange}
            onNextPageChange={props.onNextPageChange}
            onPreviousPageChange={props.onPreviousPageChange}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MoviesTable;
