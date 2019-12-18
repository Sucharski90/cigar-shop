import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Featured" title="Smokes" />
                        <div className="row">
                            <div className="col">
                                <img class="ad" src="https://i1.wp.com/www.casasfumando.com/wp-content/uploads/2018/04/Famous-Smoke-Shop-Ad-700-by-150.jpg?resize=620%2C133" alt=""/>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-9">
                            <ProductConsumer>
                                {value =>{
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}/>
                                        })
                                }}
                            </ProductConsumer>
                            </div>
                            <div className="col-3">
                            <div className="sticky">
                            <img className="ad my-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKEBKxn2UNOx0dt1wFQtNOuot_bn-s6Yo2DFG-QKM0e-2wMirQg&s" alt=""/>
                                <img className="ad my-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsnBtukj2ILOKleNcNFe1iSoAea-JNXkZNdZn2r9nARjLFXAVDA&s" alt=""/>
                            </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
