import '../assets/styles/navbar.css';
import Logo from '../assets/images/logo-bo-512.png';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHeart, faHome, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const Navbar = () => {

  useEffect(() => {

    const list = document.querySelectorAll('.list');

    function activeLink() {
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
        event.preventDefault();
    }

    list.forEach((item) =>
    item.addEventListener('click',activeLink))

  }, [])

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
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="icons">
          <a href="" className="fa">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="" className="fa">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="" className="fa">
            <Badge
              badgeContent={1}
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "#AF7C58",
                },
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: "1.3em" }} />
            </Badge>
          </a>
          <a href="" className="fa">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </div>
      <div className="bottom-navbar">
        <ul>
          <li className="list active">
            <a>
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="text">Inicio</span>
            </a>
          </li>
          <li className="list">
            <a>
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="text">Ingresar</span>
            </a>
          </li>
          <li className="list">
            <a>
              <span className="icon">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span className="text">Favoritos</span>
            </a>
          </li>
          <li className="list">
            <a>
              <span className="icon">
                <Badge
                  badgeContent={1}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#AF7C58",
                    },
                  }}
                >
                  <ShoppingCartIcon sx={{ fontSize: "1.3em" }} />
                </Badge>
              </span>
              <span className="text">Carrito</span>
            </a>
          </li>
          
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  );
}

export default Navbar