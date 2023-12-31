import React, { useState } from "react";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import CategoryList from "../../components/categoryList/categoryList";
import useStoreMount from "../../services/useStoreMount";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import { useCategoryFilter } from "../../services/useCategoryFilter";
import style from "./Store.module.css";
import PaginationMobile from "../../components/paginationMobile/PaginationMobile";
import ViewCategories from "../../components/viewCategories/ViewCategories";
import { Container, Navbar } from "react-bootstrap";
import cart from "../../uploads/cart.png";
import shower from "../../uploads/shower.png";
import SerchBar from "../../components/searchBar/SearchBar";
export default function AdminPanel() {
  //Lista de productos filtrados
  useStoreMount();
  const products = useSelector((state) => state.products);
  const [productList, setProductList] = useState([]);
  useCategoryFilter(products, setProductList);

  //Lista de paginas del paginado --> Hay que hacerlo en una función aparte y dentro de un useEffect para que actualice el paginado

  const [postsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const howManyPages = Math.ceil(productList.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  if (productList.length === 0) {
    // esto funciona??? porque el array siempre existe
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar
        className="bg-body-tertiary"
        style={{ position: "fixed", zIndex: "3", top: "0px", width: "100%" }}
      >
        <Container>
          <Link to="/">
            <img src={shower} alt="" style={{ height: "30px" }} />
          </Link>
        </Container>
        <Container style={{ justifyContent: "flex-end" }}>
          <Link to="/cart">
            <img src={cart} alt="" style={{ height: "30px" }} />
          </Link>
        </Container>
      </Navbar>
      <div>
        <SerchBar
          products={products}
          style={{ position: "fixed", zIndex: "2", top: "50px" }}
        ></SerchBar>

          <div className={style.centeredContainer}>
            <CardsContainer
              products={productList.slice(indexOfFirstPost, indexOfLastPost)}
            />
          </div>

        <div className={style.pagination}>
          <Pagination
            pages={howManyPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className={style.paginationMobile}>
          <PaginationMobile
            pages={howManyPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
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
