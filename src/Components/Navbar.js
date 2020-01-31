import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar fixed-top navber-expand-md">
        <div className="container">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link  to="/cigar-shop" className="nav-link">
            <ButtonContainer>
              Shop
              </ButtonContainer>
      </Link>
          </li>
        </ul>
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
        </div>
        
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