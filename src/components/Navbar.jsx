import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import './Navbar.css';
import logo from './logo-blanco.png';
import { Badge } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
    height: 85px;
    background-color: #191935;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    content: url(${logo});
    height: 50px;
`

const Center = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

//Aqui va el buscar
const SearchContainer = styled.form`
    
`;

const SearchInput = styled.input`
    padding: 10px;
    border: none;
    width: 25em;
    border-radius: 5px 0 0px 5px;
`;

const SearchButton = styled.button`
    padding: 10px;
    border: none;
    background-color: white;
    border-radius: 0px 5px 5px 0;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuItem = styled.div`
    margin: 20px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo />
            </Left>
            <Center>
                <SearchContainer action="">
                    <SearchInput type="text" placeholder='Buscar productos (e.j. queso, yogurth, arequipe)'/>
                    <SearchButton>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </SearchButton>    
                </SearchContainer>
            </Center>  
            <Right>
                <MenuItem>
                    <FontAwesomeIcon icon={faUser} />
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon={faHeart} />
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right> 
        </Wrapper> 
    </Container>
  )
}

export default Navbar