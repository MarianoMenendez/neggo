import { useEffect, useState } from "react";
import CardElement from "../cardsElement/CardElement";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function CardsContainer({ products }) {

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden", overflowY: "auto" }}>
      <div className="d-flex flex-wrap">
        {products?.map((product) => (
          <CardElement
            key={product.id}
            product={product}
            className="flex-grow-1 mx-2 my-2"
          />
        ))}
      </div>
    </div>
  );
}
