import { useEffect, useState } from "react";
import CardElement from "../cardsElement/CardElement";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CategoryList from "../categoryList/categoryList";

export default function CardsContainer({ products }) {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? (
        <div className="d-flex flex-wrap justify-content-center">
          {products?.map((product) => (
            <CardElement
              key={product.id}
              product={product}
              className="flex-grow-1 mx-2 my-2"
            />
          ))}
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {products?.map((product) => (
            <CardElement
              key={product.id}
              product={product}
              className="flex-grow-1 mx-2 my-2"
            />
          ))}
        </div>
      )}
    </div>
  );
}
