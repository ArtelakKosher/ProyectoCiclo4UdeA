import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "../../assets/styles/custom-colors.css";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

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
      <nav class="navbar navbar-expand-lg navbar-light bg-artelak-lightblue">
        <div class="container-fluid">
          <ul class="navbar-nav">
            {nav__links.map((item, index) => (
              <li class="nav-item" key={index}>
                <a class="nav-link" aria-current="page" href={item.path}>
                  {item.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
