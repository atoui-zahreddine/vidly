import React from "react";

const MoviesPagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          className={`page-item ${props.page === 1 ? "disabled" : ""}`}
          onClick={props.onPreviousPageChange}
        >
          <span className="page-link">previous</span>
        </li>
        <li
          className={`page-item ${props.page === 1 ? "active" : ""}`}
          onClick={() => props.onPageChange(1)}
        >
          <span className="page-link"> 1</span>
        </li>
        <li
          className={`page-item ${props.page === 2 ? "active" : ""}`}
          onClick={() => props.onPageChange(2)}
        >
          <span className="page-link"> 2</span>
        </li>
        <li
          className={`page-item ${props.page === 3 ? "active" : ""}`}
          onClick={() => props.onPageChange(3)}
        >
          <span className="page-link"> 3</span>
        </li>
        <li
          className={`page-item ${props.page === 3 ? "disabled" : ""}`}
          onClick={props.onNextPageChange}
        >
          <span className="page-link"> next </span>
        </li>
      </ul>
    </nav>
  );
};

export default MoviesPagination;
