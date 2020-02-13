import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {
  Nav,
} from "react-bootstrap";


export default class Bar extends Component {
  render() {
    return (
      <NavWrapper className="navbar fixed-top navber-expand-md">
       <Link  to="/cigar-shop" className="">
            <ButtonContainer>
              Shop
              </ButtonContainer>
      </Link>


  
    <Nav className="">
      <Link to="/faq" className="">
          <ButtonContainer>
            <span className="">
              FAQ
            </span>
          </ButtonContainer>
        </Link>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-shopping-cart">cart</i>
            </span>
          </ButtonContainer>
        </Link>
      
    </Nav>
        
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color: var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform: capitalize;
}
`

