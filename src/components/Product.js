import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './product.css';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductConsumer>
        {(value)=>{
          const {handleDetail, openModal} = value;
          return(
            <div className="col-9 mx-auto col-md-6 col-lg-3 mb-4">
              <div className="card text-left">
                <div className="img-container img-thumbnail p-5"
                onClick={()=>{
                  handleDetail(id);
                  openModal(id);
                }}
                >
                  <Link to="/details">
                    <img className="card-img-top" src={img} alt=""/>
                  </Link>
                  <button type="button" className="cart-btn btn btn-primary" 
                  disabled={inCart}
                  onClick={()=>value.addToCart(id)}
                  >
                    {inCart?(
                      <span>In Cart</span>
                    ):(
                      <i className="fa fa-cart-plus" aria-hidden="true"></i>
                    )}
                  </button>
                </div>
                <div className="card-body d-flex justify-content-between text-center">
                  <p className="card-text mr-auto">{title}</p>
                  <h4 className="card-title">$ {price}</h4>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
      
    )
  }
}
