import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../redux/actions"


// Ejecuta la consultas iniciales a la api una vez que carga la página y luego evita que esa consulta se realice nuevamente
export default function useStoreMount(){
    const firstCharge = useSelector(state => state.firstCharge)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(firstCharge){
          dispatch(getAllProducts())
        }
    },[dispatch])
}
