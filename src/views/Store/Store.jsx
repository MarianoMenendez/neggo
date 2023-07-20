import React, { useEffect, useState } from "react";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import useStoreMount from "./useStoreMount";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

export default function AdminPanel() {
  const [productPerPage, setProductPerPage] = useState(60);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;

  useStoreMount();
  const products = useSelector((state) => state.products);
  const totalProducts = products.length;
  return (
    <div>
      <h1>HOLI SOY EL ADMIN PANEL</h1>
      <Link to="/cart">Carrito</Link>
      <CardsContainer products={products} />
      <Pagination
        productPerPage={productPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </div>
  );
}

// Que se vea un listado de productos guardados en la api
// --> Un formulario para editar los datos de los productos
// --> Cargar las fotos a los productos
// --> Filtrar los artículos por activos/inactivos/Categoría/nombre
// --> Ordenar por categoría/precio/nombre
// Estilado de cards
// Filtro --> Nombre
// Filtro --> categoria
// Filtro --> rango de precio

// Ordenamiento --> Nombre
// Ordenamiento --> Precio
// Ordenamiento --> Categoría
// Navbar --> icono de shower // icono de carrito con estilo vacio y lleno
// FilterBar -> barra de filtros y ordenamiento
