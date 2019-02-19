import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 mb-4">
        <div className="card text-left">
          <div className="img-thumbnail p-5"><img className="card-img-top" src={img} alt=""/></div>
          <div className="card-body text-center">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    )
  }
}
