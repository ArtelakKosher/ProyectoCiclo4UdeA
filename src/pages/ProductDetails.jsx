import React, { useEffect, useState } from "react";
import MetaData from "../components/layout/metadata/MetaData";
import LinearProgress from "@mui/material/LinearProgress";
import { Container, Row, Col } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails, clearErrors } from "../actions/productActions";
import { useAlert } from "react-alert";

const ProductDetails = () => {
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const alert = useAlert();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, id]);

  const increaseQty = () => {
    const contador = document.querySelector(".count");

    if (contador.valueAsNumber >= product.inventario) return;

    const qty = contador.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    const contador = document.querySelector(".count");

    if (contador.valueAsNumber <= 1) return;

    const qty = contador.valueAsNumber - 1;
    setQuantity(qty);
  };

  console.log(product);

  return (
    <>
      <MetaData title="Detalles del producto" />

      {loading ? (
        <LinearProgress />
      ) : (
        <section>
          {Array.isArray(product)
            ? product.map((ProductData) => {
                return (
                  <Container key={ProductData.id}>
                    <Row>
                      <Col lg="6" md="6">
                        <div className="product__main-img">
                          <img
                            src={ProductData.image}
                            alt={ProductData.title}
                            className="w-100"
                          />
                        </div>
                      </Col>
                      <Col lg="6" md="6">
                        <h3>{ProductData.title}</h3>
                        <p id="product_id">ID del Producto {ProductData.id}</p>
                        <hr />
                      </Col>
                    </Row>
                  </Container>
                );
              })
            : null}
        </section>
      )}
    </>
  );
};

export default ProductDetails;
