import React from "react";

const MoviesHeader = (props) => {
  return (
    <thead>
      <tr>
        <th className="pointer" onClick={() => props.onSort("title")}>
          Title
          <i
            className={`fa fa-sort-${
              props.sortColumn.path === "title"
                ? props.sortColumn.order === "asc"
                  ? "asc"
                  : "desc"
                : ""
            }`}
          />
        </th>
        <th
          className="pointer"
          scope="col"
          onClick={() => props.onSort("genre.name")}
        >
          Genre
          <i
            className={`fa fa-sort-${
              props.sortColumn.path === "genre.name"
                ? props.sortColumn.order === "asc"
                  ? "asc"
                  : "desc"
                : ""
            }`}
          />
        </th>
        <th
          className="pointer"
          scope="col"
          onClick={() => props.onSort("numberInStock")}
        >
          Stock
          <i
            className={`fa fa-sort-${
              props.sortColumn.path === "numberInStock"
                ? props.sortColumn.order === "asc"
                  ? "asc"
                  : "desc"
                : ""
            }`}
          />
        </th>
        <th
          className="pointer"
          scope="col"
          onClick={() => props.onSort("dailyRentalRate")}
        >
          Rate
          <i
            className={`fa fa-sort-${
              props.sortColumn.path === "dailyRentalRate"
                ? props.sortColumn.order === "asc"
                  ? "asc"
                  : "desc"
                : ""
            }`}
          />
        </th>
        <th scope="col" />
        <th scope="col" />
      </tr>
    </thead>
  );
};
export default MoviesHeader;
