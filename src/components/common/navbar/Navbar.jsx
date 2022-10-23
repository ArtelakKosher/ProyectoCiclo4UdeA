import React from "react";
import "../../../assets/styles/navbar.css";
import "../../../assets/styles/main.css";
import { NavLink} from "react-router-dom";

const nav__links = [
  {
    display: "Inicio",
    path: "/home",
  },
  {
    display: "Productos",
    path: "/products",
  },
  {
    display: "Carrito",
    path: "/cart",
  },
  {
    display: "Contacto",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
      <div className="nav__container">
        <div className="nav__wrapper">
          {/* ======= menu ======= */}
          <div className="navigation">
            <div className="menu">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
