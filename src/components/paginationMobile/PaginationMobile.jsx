import React, { useEffect, useState } from "react";

function PaginationMobile({ pages = 10, currentPage, setCurrentPage }) {
  console.log(currentPage, pages);

  useEffect(() => {
    if (currentPage > pages) {
      setCurrentPage(pages);
    }
  }, [currentPage, pages]);
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage((prev) => (prev <= 1 ? prev : prev - 1));
            }}
          >
            Prev
          </a>
        </li>

        <li key={currentPage} className={`page-item active`}>
          <a href="#" className="page-link">
            {currentPage}
          </a>
        </li>

        <li className={`page-item ${currentPage === pages ? "disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage((prev) => (prev >= pages ? prev : prev + 1));
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationMobile;
