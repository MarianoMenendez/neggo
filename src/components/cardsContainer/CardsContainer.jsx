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
        <div style={{marginTop: "100px"}}>
          {products?.map((product) => (
            <CardElement
              key={product.id}
              product={product}        
            />
          ))}
        </div>
      ) : (
        <div >
          {products?.map((product) => (
            <CardElement
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}
