import { useEffect, useState } from "react"
import CardElement from "../cardsElement/CardElement"
import {useSelector} from "react-redux"
import { useLocation } from "react-router-dom"

export default function CardsContainer({products}) {
    
    
    return(
        <div>
            {products?.map(product => <CardElement product={product} />)}
        </div>
    )
}