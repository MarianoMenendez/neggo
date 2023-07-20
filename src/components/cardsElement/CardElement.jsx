import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, setQuantityToCart } from "../../redux/actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import imagen from "../../uploads/1688574833806.jpeg";

export default function CardsElement({ product }) {
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
  useEffect(() => {
    console.log(location);
    console.log(product);
    console.log(count);
  }, [count]);
  return (
    <div style={{ display: "flex" }}>
      <Card style={{ width: "30rem", height: "30rem" }} id={id}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>$ {price}</Card.Text>

          <div style={{ maxWidth: "40%", overflow: "hidden", margin: "auto" }}>
            <img
              src={imagen}
              alt={`img of ${name}`}
              style={{ width: "100%", minWidth: "60px", objectFit: "cover" }}
            />
          </div>

          {location.pathname !== "/cart" ? (
            <Button variant="primary" value={id} onClick={(e) => addToOrder(e)}>
              Agregar al Pedido
            </Button>
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
        </Card.Body>
      </Card>
    </div>
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
  );
}

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
