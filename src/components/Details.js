import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
         const {id, company, img, price, inCart, title, info} = value.detailProduct;
         return(
           <div className="container py-5">
              {/* start title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */} 
              <div className="row">
                <div className="col-6 mx-auto text-centercol-md-6 my-3 text-capitalize">
                  <img className="img-fluid" src={img} alt="product"/>
                </div>
                <div className="col-6 mx-auto text-centercol-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>price: <span>$</span>{price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                </div>
              </div>
              {/* end product info */}
           </div>
         )
        }}     
      </ProductConsumer>
    )
  }
}
