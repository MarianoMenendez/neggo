
import { Link, useNavigate } from "react-router-dom";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addProductrToOrder } from "../../redux/actions";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import ConfirmationModal from "../Confirmation/ConfirmationModal";

export default function Cart() {    
    const [modal, setModal] = useState(0)
    const products = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addProductrToOrder(products))
        setModal(1)
    }
    return(
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src="" alt="" />
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="/">
            x
          </Navbar.Brand>
        </Container>
      </Navbar>
        <CardsContainer products={products}/>
        <button onClick={() => handleClick() }>Confirmar Pedido</button>
   {modal && <ConfirmationModal setModal={setModal}/>}
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
