import React from "react";
import ProductsGrid from "../components/products/ProductsGrid"
import MetaData from "../components/metadata/MetaData";

const AllProducts = () => {
  return (
    <>
      <MetaData title="Productos" />
      <ProductsGrid />
    </>
  );
};

export default AllProducts;
