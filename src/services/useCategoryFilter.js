import { useEffect } from "react"
import { useSelector } from "react-redux"

export const useCategoryFilter = (products, setProductList) => {
    const catFilter = useSelector(state => state.activeFilters.category)

    useEffect(()=> {
        if(!catFilter.length) {
            setProductList(products)
        } else{
            setProductList(products.filter(product => catFilter.includes(product.category)))
        }
    },[catFilter, products])
}