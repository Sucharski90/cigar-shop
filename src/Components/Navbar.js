import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button' 

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar fixed-top navber-expand-sm navbar-dark px-sm-5">
        
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link exact to="/cigar-shop" className="nav-link">
              Shop
      </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-shopping-cart">cart</i>
            </span>
          </ButtonContainer>
        </Link>
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