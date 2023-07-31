import { Link, useNavigate } from "react-router-dom";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addProductrToOrder, setQuantityToCart } from "../../redux/actions";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import ConfirmationModal from "../Confirmation/ConfirmationModal";
import SerchBar from "../../components/searchBar/SearchBar";
import shower from "../../uploads/shower.png";
import home from "../../uploads/home.png";
import { Button } from "react-bootstrap";

export default function Cart() {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);

  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleSetQuantity = (id, quantity) => {
    dispatch(setQuantityToCart(id, quantity));
  };

  const handleClick = () => {
    dispatch(addProductrToOrder(products));
    setShow(true);
  };

  useEffect(() => {
    let tot = 0;

    products.forEach((element) => {
      tot += element.count * element.price;
    });
    setTotal(tot);
  }, [products]);

  return (
    <div>
      {products.length === 0 ? (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Para centrar horizontalmente
              justifyContent: "center", // Para centrar verticalmente
              minHeight: "100vh", // Para ocupar toda la altura de la pantalla
            }}
          >
            <h1>Todavia no agregaste ningun producto al carrito</h1>
            <Link to={"/"}>Agregar productos...</Link>
          </div>
          <div>
            <Navbar
              className="bg-body-tertiary"
              style={{
                position: "fixed",
                zIndex: "3",
                top: "0px",
                width: "100%",
              }}
            >
              <Container>
                <Link to="/">
                  <img src={shower} alt="" style={{ height: "30px" }} />
                </Link>
              </Container>
              <Container style={{ justifyContent: "flex-end" }}>
                <Link to="/">
                  <img src={home} alt="" style={{ height: "30px" }} />
                </Link>
              </Container>
            </Navbar>
            <div style={{ top: "50px", position: "absolute" }}>
              <CardsContainer products={products} />
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              zIndex: "3",
              bottom: "0px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#F8F9FA",
            }}
          >
            <Button className="disabled" onClick={() => handleClick()}>
              Confirmar Pedido
            </Button>
            {show && <ConfirmationModal setShow={setShow} />}
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              Total: ${total}
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Navbar
              className="bg-body-tertiary"
              style={{
                position: "fixed",
                zIndex: "3",
                top: "0px",
                width: "100%",
              }}
            >
              <Container>
                <Link to="/">
                  <img src={shower} alt="" style={{ height: "30px" }} />
                </Link>
              </Container>
              <Container style={{ justifyContent: "flex-end" }}>
                <Link to="/">
                  <img src={home} alt="" style={{ height: "30px" }} />
                </Link>
              </Container>
            </Navbar>
            <div style={{ top: "50px", position: "absolute" }}>
              <CardsContainer products={products} />
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              zIndex: "3",
              bottom: "0px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#F8F9FA",
            }}
          >
            <Button onClick={() => handleClick()}>Confirmar Pedido</Button>
            {show && <ConfirmationModal setShow={setShow} />}
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              Total: ${total}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
