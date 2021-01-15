import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({
  title,
  genre,
  isFavorite,
  dailyRentalRate,
  numberInStock,
  onDeleteMovie,
  onFavoriteClick,
  _id,
  isAdmin,
}) => {
  console.log(isAdmin);
  return (
    <tr>
      <td>
        <Link to={`/movies/${_id}`}>{title}</Link>
      </td>
      <td>{genre.name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td>
        <i
          className={`fa fa-heart${isFavorite ? "" : "-o"} pointer `}
          aria-hidden="true"
          onClick={() => onFavoriteClick(_id)}
        />
      </td>
      {isAdmin ? (
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDeleteMovie(_id)}
          >
            delete
          </button>
        </td>
      ) : null}
    </tr>
  );
};
