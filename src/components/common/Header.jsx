import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "../../assets/styles/custom-colors.css";
import "../../assets/styles/header.css";

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

const Header = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
