import React from 'react'
import Footer from '../components/Footer';
import ProductsGrid from '../components/ProductsGrid';
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    // el de abajo es el fragmento
    <div>
      <Navbar />
      <ProductsGrid />
      <Footer />
    </div>
  );
}

export default Home; //Arrow funtion atajo: rafce

