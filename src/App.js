import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
import Faq from "./Components/Faq"
import Footer from "./Components/Footer"

class App extends Component {
  render(){
    return (
      <React.Fragment>
            <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5e30c93cacf08500124e18d0&product=sticky-share-buttons&cms=sop' async='async'></script>

        <Navbar />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/faq' component={Faq} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
  
}
export default App;