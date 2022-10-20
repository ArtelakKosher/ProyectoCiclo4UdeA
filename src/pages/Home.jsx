import React from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Home = () => {
  return (
    // el de abajo es el fragmento
    <div>
      <Navbar />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Home; //Arrow funtion atajo: rafce
