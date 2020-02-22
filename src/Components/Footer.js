import React, { Component } from 'react';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <FooterWrapper>
                <footer>
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col-sm-6">
                                Copyright &copy; Cigar Shop
              </div>
                            <div className="col-sm-6">
                                    <p>Cigar Shop</p>
                                    <p>Address: 29 West Street NY</p>
                                    <p>Phone: (516) 282 - 6084 </p>
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

