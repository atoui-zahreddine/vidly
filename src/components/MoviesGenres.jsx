import React from "react";

const MoviesGenres = (props) => {
  function isActive(genre) {
    return props.currentGenre === genre ? "active" : "";
  }

  return (
    <div className="m-5">
      <ul className="list-group pointer">
        <li
          className={`list-group-item  plr-5  ${isActive("All")}`}
          onClick={() => props.onGenreChange("All")}
        >
          All Genres
        </li>
        <li
          className={`list-group-item  pointer plr-5  ${isActive("Action")}`}
          onClick={() => props.onGenreChange("Action")}
        >
          Action
        </li>
        <li
          className={`list-group-item   pointer plr-5  ${isActive("Comedy")}`}
          onClick={() => props.onGenreChange("Comedy")}
        >
          Comedy
        </li>
        <li
          className={`list-group-item pointer plr-5  ${isActive("Thriller")}`}
          onClick={() => props.onGenreChange("Thriller")}
        >
          Thriller
        </li>
        <li
          className={`list-group-item pointer plr-5  ${isActive("Romance")}`}
          onClick={() => props.onGenreChange("Romance")}
        >
          Romance
        </li>
      </ul>
    </div>
  );
};

export default MoviesGenres;
