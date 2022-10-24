import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: var(--artelak-blue);
`;

export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
`;

export const ImgLogo = styled.img`
  height: 50px;

  @media screen and (max-width: 388px) {
    height: 40px;
  }
`;

export const Search = styled.div`
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SearchBar = styled.form`
  height: 40px;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 0 0 0;
  background: white;
  border-radius: 20px;
`;

export const SearchBarInput = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 15px;
  font-size: 18px;
  background-color: white;
  border-radius: 20px;
`;

export const SearchBarButton = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 50%;
  min-width: 40px;
  min-height: 40px;
  color: white;
  background: var(--artelak-ocre);
  cursor: pointer;
  border-color: white;
`;

export const Menu = styled.ul`
  display: flex; /* establish flex container */
  flex-direction: column; /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center; /* center items horizontally, in this case */
  width: fit-content;
  height: calc(100vh - 80px);
  position: absolute;
  top: 80px;
  left: ${({ click }) => (click ? 0 : "-100%")};
  flex-direction: column;
  transition: 0.5s all ease-in;
  background-color: var(--artelak-blue);
`;

export const MenuNavLink = styled(NavLink)`
  text-decoration: none;
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2 rem;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 80px;

  &:hover {
    background-color: var(--artelak-lightblue);
    border-bottom: 0.3rem solid var(--artelak-ocre);
    transition: 0.4s ease-in;
    color: var(--artelak-blue);
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--artelak-blue);
  }
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
`;

export const IconLogoMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    padding-right: 1rem;
  }
`;

export const IconNavLink = styled(NavLink)`
  color: white;
  margin: 10px;
`;

export const SearchContainer = styled.div`
  display: none;
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 80px;
    position: sticky;
    top: 80;
    z-index: 99;
    background-color: var(--artelak-blue);
    margin: auto;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
