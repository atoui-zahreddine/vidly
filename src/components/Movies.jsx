import React from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import MoviesGenres from "./MoviesGenres";
import MoviesTable from "./MoviesTable";

class Movies extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
    page: 1,
    pageSize: 4,
    sortColumn: { path: "", order: "" },
    currentGenre: "All",
  };
  async componentDidMount() {
    const { data: movies } = await getMovies();
    this.setState({ movies });
  }

  onDeleteMovie = async (id) => {
    const originalMovies = this.state.movies;
    const newMovies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies: newMovies });

    try {
      await deleteMovie(id);
    } catch (ex) {
      this.setState({ movies: originalMovies });
    }
  };

  onFavoriteClick = (id) => {
    const newMovies = [
      ...this.state.movies.map((m) => {
        if (m._id === id) m.isFavorite = !m.isFavorite;
        return m;
      }),
    ];

    this.setState({ movies: newMovies });
  };

  onPageChange = (newPage) => {
    this.setState({ page: newPage });
  };

  onPreviousPageChange = () => {
    this.setState((prevState) => {
      const newPage = prevState.page - 1;
      return {
        ...prevState,
        page: newPage < 1 ? 1 : newPage,
      };
    });
  };

  onNextPageChange = () => {
    this.setState((prevState) => {
      const newPage = prevState.page + 1;
      return {
        ...prevState,
        page: newPage > 3 ? 3 : newPage,
      };
    });
  };

  onGenreChange = (genre) => {
    if (this.state.currentGenre === genre) return;
    this.setState({ currentGenre: genre, page: 1, searchQuery: "" });
  };

  handleSort = (path) => {
    if (path !== this.state.sortColumn.path) {
      this.setState({ sortColumn: { path, order: "asc" } });
      return;
    }
    this.setState({
      sortColumn: {
        path,
        order: this.state.sortColumn.order === "asc" ? "desc" : "asc",
      },
    });
  };

  handleSearch = (searchQuery) => {
    this.setState({ searchQuery, currentGenre: "All", page: 1 });
  };

  render() {
    return (
      <React.Fragment>
        <MoviesGenres
          currentGenre={this.state.currentGenre}
          onGenreChange={this.onGenreChange}
        />
        <MoviesTable
          page={this.state.page}
          currentGenre={this.state.currentGenre}
          pageSize={this.state.pageSize}
          movies={this.state.movies}
          sortColumn={this.state.sortColumn}
          handleSort={this.handleSort}
          onDeleteMovie={this.onDeleteMovie}
          onFavoriteClick={this.onFavoriteClick}
          onPageChange={this.onPageChange}
          onNextPageChange={this.onNextPageChange}
          onPreviousPageChange={this.onPreviousPageChange}
          searchQuery={this.state.searchQuery}
          handleSearch={this.handleSearch}
          user={this.props.user}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
