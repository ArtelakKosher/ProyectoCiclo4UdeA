import '../assets/styles/navbar.css';
import Logo from '../assets/images/logo-bo-512.png';
import { useEffect } from "react";

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
            <input
              type="text"
              placeholder="Buscar productos (e.j. queso, leche, ...)"
            />
            <button type="submit">
              <ion-icon name="search"></ion-icon>
            </button>
          </form>
        </div>
        <div className="icons">
          <a href="" className="fa fa-user"></a>
          <a href="" className="fa fa-heart"></a>
          <a href="" className="fa fa-shopping-cart"></a>
        </div>
      </div>
      <div className="bottom-navbar">
        <ul>
          <li className="list active">
            <a>
              <span className="icon">
                <ion-icon name="home"></ion-icon>
              </span>
              <span className="text">Inicio</span>
            </a>
          </li>
          <li className="list">
            <a>
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <span className="text">Ingresar</span>
            </a>
          </li>
          <li className="list">
            <a>
              <span className="icon">
                <ion-icon name="heart"></ion-icon>
              </span>
              <span className="text">Favoritos</span>
            </a>
          </li>
          <li className="list">
            <a>
              <span className="icon">
                <ion-icon name="cart"></ion-icon>
              </span>
              <span className="text">Carrito</span>
            </a>
          </li>
          <li className="list">
            <a>
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  );
}

export default Navbar