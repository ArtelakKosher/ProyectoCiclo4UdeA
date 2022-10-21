import React from "react";

import Navbar from "../common/Navbar";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Routes from "../../routes/Routers";

import "../../assets/styles/main.css";

const layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default layout;
