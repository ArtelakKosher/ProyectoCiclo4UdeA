import {
  IconContainer,
  IconLogoMobile,
  IconNavLink,
  ImgLogo,
  Logo,
  Menu,
  MenuItem,
  MenuItemLink,
  MenuNavLink,
  NavbarContainer,
  NavbarWrapper,
  Search,
  SearchBar,
  SearchBarButton,
  SearchBarInput,
  SearchContainer,
} from "./Navbar.elements";

import imgLogo from "../../../assets/images/logos/artelak20cm.png";

import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimesCircle,
  FaHome,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <Logo>
            <ImgLogo src={imgLogo} alt="Logo Artelak" />
          </Logo>

          <Search>
            <SearchBar>
              <SearchBarInput
                type="text"
                placeholder="Buscar productos (e.j. queso)"
              />
              <SearchBarButton type="submit">
                <FaSearch size={25} />
              </SearchBarButton>
            </SearchBar>
          </Search>

          <IconContainer>
            <IconNavLink to="/home" style={}>
              <FaHome size={25} />
            </IconNavLink>

            <IconNavLink to="/login">
              <FaUser size={25} />
            </IconNavLink>

            <IconNavLink to="/favorites">
              <FaHeart size={25} />
            </IconNavLink>

            <IconNavLink to="/cart">
              <FaShoppingCart size={25} />
            </IconNavLink>

            <IconLogoMobile onClick={() => ChangeClick()}>
              {click ? <FaTimesCircle size={25} style={{color:"var(--artelak-ocre)"}}/> : <FaBars size={25} />}
            </IconLogoMobile>
          </IconContainer>

          <Menu click={click}>
            <MenuNavLink to="/home">
              <MenuItem onClick={() => ChangeClick()}>INICIO</MenuItem>
            </MenuNavLink>
            <MenuNavLink to="/products">
              <MenuItem onClick={() => ChangeClick()}>PRODUCTOS</MenuItem>
            </MenuNavLink>
            <MenuNavLink to="/login">
              <MenuItem onClick={() => ChangeClick()}>INGRESAR</MenuItem>
            </MenuNavLink>
            <MenuNavLink to="/favorites">
              <MenuItem onClick={() => ChangeClick()}>FAVORITOS</MenuItem>
            </MenuNavLink>
            <MenuNavLink to="/cart">
              <MenuItem onClick={() => ChangeClick()}>CARRITO</MenuItem>
            </MenuNavLink>
            <MenuNavLink to="/contact">
              <MenuItem onClick={() => ChangeClick()}>CONTÁCTO</MenuItem>
            </MenuNavLink>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>

      <SearchContainer>
        <SearchBar>
          <SearchBarInput
            type="text"
            placeholder="Buscar productos (e.j. queso)"
          />
          <SearchBarButton type="submit">
            <FaSearch size={25} />
          </SearchBarButton>
        </SearchBar>
      </SearchContainer>
    </>
  );
};

export default Navbar;
