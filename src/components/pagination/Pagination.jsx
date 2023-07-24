import React, { useEffect, useState } from "react";

function Pagination({ pages = 10, currentPage, setCurrentPage }) {
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentPage === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentPage > 4 && currentPage < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentPage - 2, currentPage);
      const sliced2 = numberOfPages.slice(currentPage, currentPage + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ];
    } else if (currentPage > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      setCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      setCurrentPage(arrOfCurrButtons[3] + 2);
    } else if (currentPage === dotsLeft) {
      setCurrentPage(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
  }, [currentPage]);

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

        {arrOfCurrButtons.map((item, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === item ? "active" : ""}`}
          >
            <a
              href="#"
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(item);
              }}
            >
              {item}
            </a>
          </li>
        ))}

        <li className={`page-item ${currentPage === numberOfPages.length ? "disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={(e) => {
              e.preventDefault(); 
              setCurrentPage((prev) => (prev >= numberOfPages.length ? prev : prev + 1));
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
