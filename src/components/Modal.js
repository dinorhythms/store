import React, { Component } from 'react';
import './modal.css';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {value => {
             const { modalOpen, closeModal } = value;
             const {img, price, title} = value.modalProduct;
             
             if(!modalOpen){
                 return null;
             } else {
                return(
                    <div id="modalcontainer">
                        <div className="container">
                            <div className="row">
                                <div 
                                    id="modal"
                                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                                >
                                    <h5>Item added to the cart</h5>
                                    <img src={img} className="img-fluid" alt="prouct"/>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price: $ {price}</h5>
                                    <Link to="/">
                                        <button type="button" onClick={()=>closeModal()} className="btn btn-primary mb-3">Store</button>
                                    </Link>
                                    <br/>
                                    <Link to="/cart">
                                        <button type="button" onClick={()=>closeModal()} className="btn btn-primary">Go To Cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
             }
          }}
      </ProductConsumer>
    )
  }
}
