import React from "react";

import Header from "../common/Navbar";
import Footer from "../common/Footer";
import Routes from "../../routes/Routers";

const layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </>
  );
};

export default layout;
