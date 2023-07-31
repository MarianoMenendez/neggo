import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import CategoryList from "../categoryList/categoryList";
import style from "./ViewCategories.module.css";
import "animate.css";
import filter from "../../uploads/filter.png"

export default function ViewCategories({ products }) {
  const [showCategories, setShowCategories] = useState(false);
  const categoriesContainerRef = useRef(null);

  const handleClick = () => {
    if (categoriesContainerRef.current) {
      if (showCategories) {
        // Ocultar las categorías con una animación hacia la derecha
        categoriesContainerRef.current.classList.remove("animate__fadeInLeft");
        categoriesContainerRef.current.classList.add("animate__fadeOutRight");
      } else {
        // Mostrar las categorías con una animación hacia la izquierda
        categoriesContainerRef.current.classList.remove("animate__fadeOutRight");
        categoriesContainerRef.current.classList.add("animate__fadeInLeft");
      }
    }

    // Cambiar el estado actual de showCategories al valor opuesto
    setShowCategories((prevShowCategories) => !prevShowCategories);
  };

  const handleAnimationEnd = () => {
    if (!showCategories && categoriesContainerRef.current) {
      // Ocultar el contenedor después de que termine la animación
      categoriesContainerRef.current.classList.remove("animate__fadeInLeft");
    }
  };

  useEffect(() => {
    if (categoriesContainerRef.current) {
      categoriesContainerRef.current.addEventListener(
        "animationend",
        handleAnimationEnd
      );
    }

    return () => {
      if (categoriesContainerRef.current) {
        categoriesContainerRef.current.removeEventListener(
          "animationend",
          handleAnimationEnd
        );
      }
    };
  }, [showCategories]);


  return (
    <div className="d-flex flex-nowrap">
      {showCategories && (
        <div
          ref={categoriesContainerRef}
          style={{left: "0px"}}
          className={`animate__animated ${
            showCategories ? "animate__fadeInLeft" : "animate__fadeOutRight"
          } d-flex flex-column flex-shrink-0 p-3 bg-white border position-absolute z-3`}
        >
          <CategoryList products={products} />
        </div>
      )}

      <div className={style.buttonContainer}>
          {showCategories ? <img src={filter} onClick={handleClick} style={{height: "30px"}}/> : <img src={filter} onClick={handleClick} style={{height: "30px"}}/>}
      </div>
    </div>
  );
}
