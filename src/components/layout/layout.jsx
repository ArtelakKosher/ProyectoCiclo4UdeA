import React from "react";
import "../../assets/styles/main.css";
import Routes from "../../routes/Routers";
import Header from "../common/Header";
import Footer from "../common/Footer";

const layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default layout;
