
import { Link, useNavigate } from "react-router-dom";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addProductrToOrder } from "../../redux/actions";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from "react";
import ConfirmationModal from "../Confirmation/ConfirmationModal";
import SerchBar from "../../components/searchBar/SearchBar";
import shower from "../../uploads/shower.png"
import home from "../../uploads/home.png"
import { Button } from "react-bootstrap";

export default function Cart() {    
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0)

  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const handleClick = () => {
      dispatch(addProductrToOrder(products))
      setShow(true)
  }

  useEffect(()=>{
    let tot = 0

    products.forEach(element => {
      tot += element.count*element.price
    })
    setTotal(tot)

  },[products])
    return(
    <div>
        <div>
      <Navbar className="bg-body-tertiary" style={{position: "fixed", zIndex: "3", top: "0px", width: "100%"}} >
        <Container>        
          <Link to="/" ><img src={shower} alt="" style={{height: "30px"}}/></Link>
        </Container>
        <Container style={{justifyContent: "flex-end"}}>        
          <Link to="/" ><img src={home} alt="" style={{height: "30px"}}/></Link>
        </Container>
      </Navbar>
      <div style={{top: "50px", position: "absolute"}}> 
        <CardsContainer
          products={products}
        />
      </div>
    </div>
    <div style={{position: "fixed",
    zIndex: "3",
    bottom: "0px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F8F9FA"}}>
      <Button onClick={() => handleClick() }>Confirmar Pedido</Button>
          {show && <ConfirmationModal setShow={setShow}/>}
      <span style={{fontSize: "20px", fontWeight: "bold"}}>Total: ${total}</span>
      </div>
    </div>
    )
}

// Que se vea un listado de productos guardados en la api
// --> Un formulario para editar los datos de los productos
// --> Cargar las fotos a los productos
// --> Filtrar los artículos por activos/inactivos/Categoría/nombre
// --> Ordenar por categoría/precio/nombre
// --> crear un producto en el store que guarde pedido a realizar y la pagina de confirmación como un formulario de checkout donde tiene que cargar el nombre el apellido y le aprarecen los datos del pedido

// Ordenamiento automático por Nombre
// Barra de confirmación --> total general y confirmar pedido
// Cruz para volver a la tienda
// Navbar --> icono de shower // icono de carrito con estilo vacio y lleno
// Tachito para eliminar producto del carrito
