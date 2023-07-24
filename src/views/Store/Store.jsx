import React, { useEffect, useState } from "react";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import useStoreMount from "./useStoreMount";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

export default function AdminPanel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useStoreMount();
  const products = useSelector((state) => state.products);
  const howManyPages = Math.ceil(products.length / postsPerPage);

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>HOLI SOY EL ADMIN PANEL</h1>
      <Link to="/cart">Carrito</Link>
      <CardsContainer products={products.slice(indexOfFirstPost, indexOfLastPost)} />
      <Pagination pages={howManyPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
