import { useEffect, useState } from "react"
import CardElement from "../cardsElement/CardElement"
import {useSelector} from "react-redux"
import { useLocation } from "react-router-dom"
import CategoryList from "../categoryList/categoryList"

export default function CardsContainer({products}) {
    const [catFilter, setCatFilter] = useState("")
    const [productList, setProductList] = useState([])
    const location = useLocation()
    useEffect(()=> {
    if(catFilter ==="") {
    setProductList(products)
    }
    else{
    setProductList(products.filter(product => product.category === catFilter))
    console.log(productList)
    }}
    ,[catFilter])
    return(
        <div>
            {location.pathname === "/" ? 
                <>
                <CategoryList products={products} setCatFilter={setCatFilter}/>
                {productList?.map(product => <CardElement product={product}  />)}
                </>
                :
                <>
                {products?.map(product => <CardElement product={product} />)}
                </>
            }
        </div>
    )
}