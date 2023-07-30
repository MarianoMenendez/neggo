import React, { useEffect, useState } from "react";
import { getProductsByName, saveProductNameFilter } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styles from "./SearchBar.module.css";
import ViewCategories from "../viewCategories/ViewCategories";

/*Estableces el valor que se está escribiendo en el input*/
export default function SerchBar({products}) {
  const [productName, setProductName] =
    useState(
      ""
    ); /*Creo un estado para que vaya tomando el valor que vamos escribiendo en el input y luego pueda usar para buscar al personaje*/
  // const [productList, setProductList] = useState([]) /*Creo un estado para que vaya mostrando la lista de paises buscados en la db que van coincidiendo con el escrito*/
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    setProductName(() => {
      return event.target.value;
    });
  };
  const productNameSaved = useSelector((state) => state.activeFilters.name); //ver como implementar filtros de distinto orden

  const inputValue = () => {
    // si mi estado global tiene algo y el local no entonces devolve el global sino devolve el local
    if (productNameSaved && !productName) {
      return productNameSaved;
    } else {
      return productName;
    }
  };
  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      dispatch(getProductsByName(productName));
      dispatch(saveProductNameFilter(productName));
      // setProductList([])
    }
  };

  // const consultaPaises = async (productName) => {
  //    try {
  //         const res = await  axios.get(`http://localhost:3001/products?name=${productName}`)
  //         // setProductList(()=>{
  //         //     setError("")
  //         // return [...res.data]})
  //    } catch (error) {
  //         setError("Intente de otra forma")
  //    }
  // }

  // useEffect(
  //     ()=> {
  //         if(productName !== "") {
  //         consultaPaises(productName)
  //     } else if(productName === "" && productName.length){
  //         setProductList([])
  //         setError("")
  //         // dispatch(consultaProductName(productName))
  //     }
  // }
  //     , [productName]
  // )

  /*Esta función hace la consulta al servidor con axios */
  /*Agregas un componente character al estado characters cuando toco click en Crear devolviendo al componente padre el listado de los personajes a agregar*/
  return (
    <div className={styles.wrap}>
      {/* Creamos el serchbar */}
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchTerm}
          placeholder="Busque un producto..."
          list="options"
          value={inputValue()}
          onChange={handleInputChange}
          onKeyPress={handleSubmit}
        />
        <button type="submit" className={styles.searchButton}>
          <i className="fa fa-search"></i>
        </button>
        <datalist style={{ width: "100px" }} id="options">
          {/* {productList.map(product => <option value={product.name}>{product.name}</option>)} */}
        </datalist>
        {/*Cuando usamos el onClick y debemos pasar un parametro para que la función no se ejecute cada vez que re renderiza la página*/}
      </div>
      <ViewCategories className={styles.CategoryLists} products={products} style={{justifyContent: "right"}} />
    </div>
  );
}
