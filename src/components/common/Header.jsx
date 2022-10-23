import React from "react";
import TopNavbar from "./navbar/TopNavbar";
import Navbar from "./navbar/Navbar";
import BottomNavbar from "./navbar/BottomNavbar";

const Header = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <BottomNavbar />
    </div>
  );
};

export default Header;
