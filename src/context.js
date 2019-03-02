import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {

  state = {
      products:[],
      detailProduct,
      cart:[],
      modalOpen:false,
      modalProduct: detailProduct,
  }

  componentDidMount(){
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item=>{
      const singleItem = {...item};
      tempProducts = [...tempProducts,singleItem];
    })
    this.setState(()=>{
      return {products: tempProducts}
    })
  }

  handleDetail = (id) =>{
      const detailProduct = this.state.products.filter(product => product.id === id);
      this.setState({detailProduct: detailProduct[0]});
  }

  addToCart = (id) =>{
      let tempProducts = [...this.state.products];
      let product = tempProducts.filter(product=>product.id === id);
      product = product[0];
      product.inCart = true;
      product.count = 1;
      product.total = product.price;
      this.setState(()=>{
        return {
        products: tempProducts,
        cart: [...this.state.cart, product]
        }
      },()=>{
        console.log(this.state);
      });

  }

  openModal = id => {
    let product = this.state.products.filter(product => product.id === id);
    product = product[0];
    this.setState(() => {
      return {modalProduct:product, modalOpen:true}
    })
  }

  closeModal = () => {
    this.setState(() => {
      return {modalOpen:false}
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state, 
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };