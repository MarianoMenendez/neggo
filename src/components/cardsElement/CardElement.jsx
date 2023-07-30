import React from "react";
import style from "./CardElement.module.css"
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, setQuantityToCart } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import imagen from "../../uploads/1688574833806.jpeg"; // Asegúrate de importar la imagen correcta o proporcionar la ruta correcta a la imagen.

export default function CardsElement({ product }) {
  const cart = useSelector((state) => state.cart);
  
  const {
    id,
    external_code,
    name,
    category,
    price,
    image,
    bit_active,
    bit_new,
    count,
  } = product;
  const dispatch = useDispatch();
  const location = useLocation();

  function addToOrder(e) {
    const productId = e.target.value;
    dispatch(addProductToCart(productId));
  }

  return (
    <div>
      <Card
        style={{width: "100%", height: "150px", marginBottom: "10px", border: "none", borderBottom: "1px solid grey"}}
        id={id}S
      >
        <Card.Body className={style.carta} style={{display: "flex"}}>
          <div style={{overflow: "hidden", marginRight: "15px"}}>
            <img
              src={imagen}
              alt={`img of ${name}`}
              style={{ width: "150px", height: "150px", minWidth: "60px"}}
            />
          </div>
          <div style={{width: "54%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <Card.Title style={{height: "50px"}}>{name}</Card.Title>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <span style={{fontWeight: "bold"}}>$ {price}</span>
            {location.pathname === "/cart" ? 
            <span> Subtotal $ {price*count}</span> : null }
          </div>
          {location.pathname !== "/cart" ? (
            <div className="d-flex justify-content-center mt-4">
              {cart.some((product) => product.id === id) ? (
                <div>
                <InputGroup className="mb-3">
                  <Button
                    variant="outline-secondary"
                    value={id}
                    onClick={(e) =>
                      count > 0 &&
                      dispatch(setQuantityToCart(e.target.value, count - 1))
                    }
                  >
                    -
                  </Button>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    value={count}
                    onChange={(e) =>
                      dispatch(
                        setQuantityToCart(
                          id,
                          e.target.value === "" ? 0 : parseInt(e.target.value)
                        )
                      )
                    }
                  />
                  <Button
                    variant="outline-secondary"
                    value={id}
                    onClick={(e) =>
                      dispatch(setQuantityToCart(e.target.value, count + 1))
                    }
                  >
                    +
                  </Button>
                </InputGroup>
              </div>
              ) : (
                <div>
                  <Button
                    className="btn btn-dark"
                    variant="primary"
                    value={id}
                    onClick={(e) => addToOrder(e)}
                  >
                    Agregar al Pedido
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <InputGroup className="mb-3">
                <Button
                  variant="outline-secondary"
                  value={id}
                  onClick={(e) =>
                    count > 0 &&
                    dispatch(setQuantityToCart(e.target.value, count - 1))
                  }
                >
                  -
                </Button>
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  value={count}
                  onChange={(e) =>
                    dispatch(
                      setQuantityToCart(
                        id,
                        e.target.value === "" ? 0 : parseInt(e.target.value)
                      )
                    )
                  }
                />
                <Button
                  variant="outline-secondary"
                  value={id}
                  onClick={(e) =>
                    dispatch(setQuantityToCart(e.target.value, count + 1))
                  }
                >
                  +
                </Button>
              </InputGroup>
            </div>
          )}
        </div>
        </Card.Body>
      </Card>
    </div>
  );
}

// // <Link className={style.link} to={`/details/${id}`}>
//     <div className={style.cardContainer} id={id}>
//         <div className={style.contenedorNombre}>
//             <h2 className={style.textoNombre}>{name}</h2>
//         </div>
//         <div className={style.contenedorContinente}><p>{category}</p></div>
//         <div className={style.contenedorPoblacion}><p>{price}</p></div>
//         <div className={style.contenedorImg}>
//             <img
//                 style={{height: 50}}
//                 src={image}
//                 alt={`${name} flag`}
//                 />
//         </div>
//         {location.pathname !== "/cart" ? (
//         <div>
//             <button value={id} onClick={(e)=> addToOrder(e) }>Agregar al Pedido</button>
//         </div>) :
//         <div>
//             <div>
//                 <button
//                 <input class="input-number" type="text" value={count} onChange={(e) => dispatch(setQuantityToCart(id, e.target.value === "" ? 0 : parseInt(e.target.value)))}/>
//                 <button class="input-number-increment" value={id} onClick={(e)=> dispatch(setQuantityToCart(e.target.value, count+1))}>+</button>
//             </div>
//             <button value={id} onClick={"x"}>x</button>
//         </div>
//         }

//     </div>
// // </Link>

/*
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;*/
