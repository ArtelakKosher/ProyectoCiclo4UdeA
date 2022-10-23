import React, { useState } from "react";
import "../../../assets/styles/bottom-nabvar.css";
import {
  FaHome,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";

import { Badge } from "@mui/material";

function BottomNavbar() {
  const [selected, setSelected] = useState(0);

  const menus = [
    {
      icon: <FaHome size={25} />,
      name: "Inicio",
      url: "/home",
    },
    {
      icon: <FaUser size={25} />,
      name: "Ingresar",
      url: "/login",
    },
    {
      icon: <FaHeart size={25} />,
      name: "Favoritos",
      url: "/favorites",
    },
    {
      icon: (
        <Badge
          badgeContent={1}
          sx={{
            marginBottom: 2,
            "& .MuiBadge-badge": {
              right: -5,
              color: "white",
              backgroundColor: "#cc9e6a",
              border: `0px solid white`,
            },
          }}
        >
          <FaShoppingCart size={25} />
        </Badge>
      ),
      name: "Carrito",
      url: "/cart"
    },
    {
      icon: <FaBars size={25} />,
      name: "Menú",
      url: "#",
    },
  ];

  return (
    <div className="bottom__nav">
      <ul className="nav__ul">
        {menus.map((val, index) => {
          return (
            <li
              onClick={() => setSelected(index)}
              key={index}
              className={`nav__li ${index === selected ? "active" : ""}`}
            >
              <a href={val.url} className="nav__icon">
                {val.icon}
              </a>
              <span className="nav__name">{val.name}</span>
            </li>
          );
        })}
        <div className="nav__indicator" />
      </ul>
    </div>
  );
}

export default BottomNavbar;
