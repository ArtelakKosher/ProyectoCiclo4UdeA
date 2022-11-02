import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./ProductCard";
import { CCol, CContainer, CRow } from "@coreui/bootstrap-react";
import { Typography } from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { useAlert } from "react-alert";

import LinearProgress from "@mui/material/LinearProgress";

const ProductsGrid = () => {
  const { loading, products, error } = useSelector((state) => state.products);
  const alert = useAlert();

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts());
    alert.success("Productos cargados");
  }, [dispatch]);

  console.log(products);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <CContainer
          fluid
          className="mt-4 mb-4 d-flex flex-column justify-content-center align-items-center"
        >
          <Typography
            component="strong"
            variant="h2"
            align="center"
            style={{
              color: "#12284C",
              paddingTop: "0px",
              fontFamily: "Nunito Sans",
            }}
          >
            Productos
          </Typography>
          <CRow
            className="m-3"
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            md={{ cols: 3 }}
            xl={{ cols: 4 }}
            xxl={{ cols: 5 }}
          >
            {products.map((ProductData) => (
              <CCol xs key={ProductData._id}>
                <ProductCard
                  id={ProductData._id}
                  sku={ProductData.sku}
                  title={ProductData.title}
                  subtitle={ProductData.subtitle}
                  image={ProductData.image}
                  category={ProductData.category}
                  description={ProductData.description}
                  ingredients={ProductData.ingredients}
                  price={ProductData.price}
                  rating={ProductData.rating}
                  timeLeft={ProductData.timeLeft}
                  totalSales={ProductData.totalSales}
                />
              </CCol>
            ))}
          </CRow>
        </CContainer>
      )}
    </>
  );
};

export default ProductsGrid;
