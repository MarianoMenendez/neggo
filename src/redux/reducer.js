import { GET_ALL_PRODUCTS, ADD_PRODUCT_TO_CART, ADD_PRODUCTS_TO_ORDER, SET_QUANTITY_TO_CART, GET_PRODUCTS_BY_NAME } from "./action-types"
const initialState = { 
    // Usado en CardsContainer
    firstCharge: true,
    products: [],
    cart:[],
    order: {},
    productReserve: [],
    activeFilters:{
        name: ""
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type){
        case GET_ALL_PRODUCTS:
            if(action.payload){
            const products = action.payload.map(product => {
               return {
                ...product, 
                count: 0 
                }
            })
            return {...state, products: products, firstCharge: false}}
            else{return {...state, products: state.productReserve}}

        case GET_PRODUCTS_BY_NAME:
            const productsByName = action.payload.map(product => {
                const index = state.cart?.findIndex(cartProd => cartProd.id===product.id)
                if(index >= 0){
                    return{
                        ...product, 
                        count: state.cart[index].count 
                        }
                }
                else{
                    return {
                        ...product, 
                        count: 0 
                        }
                }
            })
            return {...state, products: productsByName}
        //Me mantiene el filtro cuando cambio de pestaña pero no me deja el nombre del producto que busqué, modificar.

        
        case ADD_PRODUCT_TO_CART:
            const product = state.products.find(product => product.id === action.payload)
            product.count = 1
            return {...state, cart: [...state.cart, product]}
        
        case ADD_PRODUCTS_TO_ORDER:
            console.log(action.payload)
            return {...state, order: {...state.order, products: action.payload}}
        
        case SET_QUANTITY_TO_CART:
            console.log(action.payload)
            const productsCart = state.cart.map(product => {
                if(product.id === action.payload.id){
                    product.count = action.payload.quantity
                }
                return product
            })
            return {...state, cart: [...productsCart]}


        //Necesitamos una action que permita guardar el filtro name del searchbar
            
        default:
            return {...state}
    }
}
