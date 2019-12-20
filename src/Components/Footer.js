import React, { Component } from 'react';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <FooterWrapper>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                Copyright &copy; Cigar Shop
              </div>
                            <div className="col-sm-4">
                                <ul>
                                    <li>Cigar Shop</li>
                                    <li>Address: 29 West Street NY</li>
                                    <li>Phone: (516) 282 - 6084 </li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <h4>FAQ</h4>
                                <ul>
                                    <li>Types of Cigars</li>
                                    <li>How to light a cigar</li>
                                    <li>How to cut a cigar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.div`
footer {
    background-color: black;
}
`