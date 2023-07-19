import {GET_ALL_PRODUCTS, ADD_PRODUCT_TO_CART, ADD_PRODUCTS_TO_ORDER, SET_QUANTITY_TO_CART} from "./action-types";
import axios from "axios";


/*Las actions creators son acciones que retornan un objeto con un type y cuando sea necesario un payload*/
export const getAllProducts = () => {
    return async function(dispatch) { //Se lo tengo que pasar al middelware thunk
        try {await axios("http://localhost:3001/products/all")
              .then(res => dispatch({type: GET_ALL_PRODUCTS, payload: res.data}))
      } catch(error){
          throw alert("Surgió un problema al cargar los países, por favor recargue la página")
      }
    }
}

export const addProductToCart = (id) => {
    return {type: ADD_PRODUCT_TO_CART, payload: id}
}

export const setQuantityToCart = (id, quantity) => {
    const product = {id, quantity}
    return {type: SET_QUANTITY_TO_CART, payload: product}
}
export const addProductrToOrder = (products) => {
    return {type: ADD_PRODUCTS_TO_ORDER, payload: products}
}

