import React, { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import style from "./Confirmation.module.css"
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import NavFlow from "../../components/nav/Nav"
import Button from "react-bootstrap/esm/Button";



export default function Confirmation() {
  // Estados locales
    const [inputs, setInputs] = useState({})
    const [errors, setErrors] = useState({})
    const [total, setTotal] = useState(0)
    const order = useSelector(state => state.order)
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({...inputs,...order})
    }
    const handleInputChange = (e) => {
      setInputs({...inputs, [e.target.name]: e.target.value})
    }
    useEffect(()=>{
    let tot = 0
    products.forEach(element => {tot += element.count*element.price})
    setTotal(tot)
  },[products])
    return(
      <div className={style.confirmationContainer}>
        <NavFlow></NavFlow>       
        <Form style={{ padding: '15px' }} onSubmit={(e) => handleSubmit(e)} >
          <span className={style.formTitele}>Contacto</span>
          <div >
            <div className={style.inputForm}>
              <label htmlFor="nombre">Nombre completo</label>
              <Form.Control name="name" placeholder='Escriba su nombre completo...' type="text" value={inputs.name}
                  onChange={(e) => handleInputChange(e)}
                />
              <div>
                {errors.name && <p >{errors.name}</p> }
              </div> 
            </div>
            <div>
              <div className={style.inputForm}>
                <label htmlFor="phoneCode">Celular</label>
                <div>
                  <InputGroup >
                    <InputGroup.Text>+54</InputGroup.Text>
                    <Form.Control className={style.inputPhoneCode} placeholder="011" name="phoneCode" type="text" value={inputs.phoneCode} onChange={(event) => handleInputChange(event, inputs, setInputs, setErrors)}/>
                    <Form.Control placeholder="15 1234 5678" name="phoneNumber" type="text" value={inputs.phoneNumber}
                      onChange={(event) => handleInputChange(event, inputs, setInputs, setErrors)}/>
                  </InputGroup>
                </div>
                  {/* <input className={style.formNombreInput} name="phoneCode" placeholder='011' type="text" value={inputs.phoneCode}
                    onChange={(event) => handleInputChange(event, inputs, setInputs, setErrors)}
                  />
                  <input className={style.formNombreInput} name="phoneNumber" placeholder='15 1234 5678' type="text" value={inputs.phoneNumber}
                    onChange={(event) => handleInputChange(event, inputs, setInputs, setErrors)}
                  /> */}
              </div>
              <div >
                {errors.name && <p >{errors.name}</p> }
              </div>
            </div>
             
          </div>
        <Button className={style.submitButton} type='submit' variant="primary" size="lg">Enviar Pedido $ {total} </Button>
      </Form>
  </div> 
  )
}

//Armar json de envió de pedido
//detalle de pedido en pantalla
//Total
//Volver atras
//Navbar --> volver al store o al carrito

/* <div className={style.contenedorOrden}>
  <Table responsive >
      <thead>
        <tr>
          <th>Nombre del artículo</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.price}</td>
            <td>$ {item.price * item.count}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <strong><span>Total: </span><text>${total}</text></strong>
  </div> */
