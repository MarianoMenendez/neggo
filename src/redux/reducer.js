import { GET_ALL_PRODUCTS, ADD_PRODUCT_TO_CART, ADD_PRODUCTS_TO_ORDER, SET_QUANTITY_TO_CART } from "./action-types"
const initialState = { 
    // Usado en CardsContainer
    firstCharge: true,
    products: [],
    cart:[],
    order: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type){
        case GET_ALL_PRODUCTS:
            const products = action.payload.map(product => {
               return {
                ...product, 
                count: 0 
                }
            })
            return {...state, products: products, firstCharge: false}
        
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
            
        default:
            return {...state}
    }
}
