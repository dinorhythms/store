import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
         <NavBar></NavBar>
         <ProductList></ProductList>
         <Details></Details>
         <Cart></Cart>
         <Default></Default>
      </React.Fragment>
    );
  }
}

export default App;
