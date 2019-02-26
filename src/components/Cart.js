import React, { Component } from 'react'
import { ProductConsumer } from '../context';

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          value.cart.map(product=>{
            const {id, title, img, price, inCart, total, count} = product;
            return(
              <div>
                <p>Name: {title}</p>
                <p>Price: {price}</p>
                <p>Total: {total}</p>
                <p>Count: {count}</p>
              </div>
            )
          })
        }}
      </ProductConsumer>
    )
  }
}
