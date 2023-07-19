import React, { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import style from "./Confirmation.module.css"



export default function Confirmation() {
  // Estados locales
    const [inputs, setInputs] = useState({})
    const [errors, setErrors] = useState({})
    const order = useSelector(state => state.order)
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({...inputs,...order})
    }
    const handleInputChange = (e) => {
      setInputs({...inputs, [e.target.name]: e.target.value})
    }

    return(
      <div className={style.contendorGeneral}>
      <div className={style.contenedorGeneralForm}>       
        <form className={style.form} onSubmit={(e) => handleSubmit(e)} >
          <h2 className={style.formTitle}>Necesitamos algunos datos</h2>
          <div className={style.contendorCuestionario}>
            <div>
              <label htmlFor="nombre">Nombre Completo:</label>
                <input className={style.formNombreInput} name="name" placeholder='Escriba su nombre completo...' type="text" value={inputs.name}
                  onChange={(e) => handleInputChange(e)}
                />
            </div>
            <div className={style.errorContainer}>
            {errors.name && <p className={style.error}>{errors.name}</p> }
            </div> 
            <div>
              <label htmlFor="phoneCode">Celular:</label>
                <input className={style.formNombreInput} name="phoneCode" placeholder='011' type="text" value={inputs.phoneCode}
                  onChange={(event) => handleInputChange(event, inputs, setInputs, setErrors)}
                />
                <input className={style.formNombreInput} name="phoneNumber" placeholder='15 1234 5678' type="text" value={inputs.phoneNumber}
                  onChange={(event) => handleInputChange(event, inputs, setInputs, setErrors)}
                />
            </div>
            <div className={style.errorContainer}>
            {errors.name && <p className={style.error}>{errors.name}</p> }
            </div> 
          
        </div>
        <button className={style.botonenviar} type='submit'>Enviar</button>
        
      </form>
  </div> 
  <div className={style.contenedorImagen}></div>
  </div>
  )
}

//Armar json de envió de pedido
//detalle de pedido en pantalla
//Total
//Volver atras
//Navbar --> volver al store o al carrito