import { useEffect, useState } from "react";
import CardElement from "../cardsElement/CardElement";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CategoryList from "../categoryList/categoryList";
import style from "./CardsContainer.module.css";

export default function CardsContainer({ products }) {
  const location = useLocation();

  return (
    <div className={`d-flex justify-content-center align-items-center ${style.outerContainer}`}>
      <div className={`${style.cardsContainer} d-flex justify-content-start`}>
        {location.pathname === "/" ? (
          <div className={`row`}>
            {products?.map((product) => (
              <div className={`col-12 col-md-6 col-lg-4 ${style.cardElement}`} key={product.id}> {/* Agregar la clase cardElement */}
                <CardElement 
                  product={product}        
                />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {products?.map((product) => (
              <div className={style.cardElement} key={product.id}> {/* Agregar la clase cardElement */}
                <CardElement
                  product={product}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
