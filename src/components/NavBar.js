import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from '../logo.svg'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/" className="navbar-brand" href="#">
          <img src={logo} className="img-responsive" alt="Logo"/>
        </Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">Products <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
          <Link to="/cart">
              <button className="btn btn-outline-light my-2 my-sm-0" type="button"> <i className="fa fa-cart-plus" aria-hidden="true"></i> My Cart</button>
          </Link>
        </div>
      </nav>
    )
  }
}
