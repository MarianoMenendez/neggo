import React, { useState, useEffect } from "react";

function Pagination({ pages = 10, setCurrentPage }) {
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton <= 3) {
      tempNumberOfPages = [...numberOfPages.slice(0, 5), dotsRight, numberOfPages.length];
    } else if (currentButton === 4) {
      tempNumberOfPages = [1, 2, 3, 4, 5, dotsRight, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced = numberOfPages.slice(currentButton - 2, currentButton + 1);
      tempNumberOfPages = [1, dotsLeft, ...sliced, dotsRight, numberOfPages.length];
    } else if (currentButton >= numberOfPages.length - 2) {
      tempNumberOfPages = [1, dotsLeft, ...numberOfPages.slice(numberOfPages.length - 4)];
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentButton === 1 ? "disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={() => setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))}
          >
            Prev
          </a>
        </li>

        {arrOfCurrButtons.map((item, index) => (
          <li
            key={index}
            className={`page-item ${currentButton === item ? "active" : ""}`}
          >
            <a
              href="#"
              className="page-link"
              onClick={() => setCurrentButton(item)}
            >
              {item}
            </a>
          </li>
        ))}

        <li className={`page-item ${currentButton === numberOfPages.length ? "disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={() =>
              setCurrentButton((prev) => (prev >= numberOfPages.length ? prev : prev + 1))
            }
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
