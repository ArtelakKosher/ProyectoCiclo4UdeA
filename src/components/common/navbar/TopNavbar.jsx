import "../../../assets/styles/top-navbar.css";
import Logo from "../../../assets/images/logos/artelak20cm.png";

import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";

import { Badge } from "@mui/material";

const TopNavbar = () => {
  return (
    <>
      <div className="top-navbar">
        <div className="logo">
          <img src={Logo} alt="Artelak" height="50px" />
        </div>
        <div className="search">
          <form action="" className="search-bar">
            <input type="text" placeholder="Buscar productos (e.j. queso)" />
            <button type="submit">
              <FaSearch size={25} />
            </button>
          </form>
        </div>
        <div className="icons">
          <a href="/login" className="fa">
            <FaUser size={25} />
          </a>
          <a href="/favorites" className="fa">
            <FaHeart size={25} />
          </a>
          <a href="/cart" className="fa">
            <Badge
              badgeContent={1}
              sx={{
                marginBottom: 1,
                "& .MuiBadge-badge": {
                  right: -5,
                  color: "white",
                  backgroundColor: "#cc9e6a",
                },
              }}
            >
              <FaShoppingCart size={25} />
            </Badge>
          </a>
          <a href="" className="fa">
            <FaBars size={25} />
          </a>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
