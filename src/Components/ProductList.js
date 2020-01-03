import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import Utility from './Utility';


export default class ProductList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container mt-5">
                        <div className="row">
                        <div className="col-md-9">
                        <Title name="Featured" title="Smokes" />
                        <img className="ad img-fluid" src="https://i1.wp.com/www.casasfumando.com/wp-content/uploads/2018/04/Famous-Smoke-Shop-Ad-700-by-150.jpg?resize=620%2C133" alt=""/>
                            <ProductConsumer>
                                {value =>{
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}/>
                                        })
                                }}
                            </ProductConsumer>
                            </div>
                            <div className="col-md-3">
                            <Utility />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

