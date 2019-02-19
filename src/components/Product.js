import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './product.css';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 mb-4">
        <div className="card text-left">
          <div className="img-container img-thumbnail p-5"
          onClick={()=>console.log('You clicked the image container')}
          >
            <Link to="/details">
              <img className="card-img-top" src={img} alt=""/>
            </Link>
            <button type="button" className="cart-btn btn btn-primary" 
            disabled={inCart}
            onClick={()=>console.log('You added to the cat')}
            >
              {inCart?(
                <span>In Cart</span>
              ):(
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
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
  }
}
