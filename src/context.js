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
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
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
        this.addTotals();
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

  increment = (id) => {
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.filter(product => product.id === id);
    
    const product = selectedProduct[0];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals()})

  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.filter(product => product.id === id);
    
    const product = selectedProduct[0];

    product.count = product.count - 1;
    if(product.count ===0){
      this.removeItem(id)
    }else{
      product.total = product.count * product.price;
      this.setState(()=>{return{cart:[...tempCart]}}, ()=>{this.addTotals()})
    }
  }

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    let removedProduct = tempProducts.filter(product => product.id === id);
    removedProduct = removedProduct[0];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(()=>{
      return{
        cart:[...tempCart],
        products:[...tempProducts]
      };
    },()=>{
      this.addTotals();
    })
  }

  clearCart = () => {
    console.log('cart was cleared');
  }

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item =>(subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(()=>{
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    })
  };

  clearCart = () => {
    this.setState(()=>{
      return{cart:[]};
    },()=>{
      this.setProducts();
      this.addTotals();
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state, 
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };