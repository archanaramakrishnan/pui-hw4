import React, { Component } from 'react';
import './NavBar.css';
import logo from './logo/logo-01.svg';


class NavBar extends Component {
  render() {
    return (
        <header>
        <img className="logo" src={logo} alt="logo of the bun bun bake shop which is a doodle of a cinammon roll"/>
        <div className="navbar">
          <a>PRODUCTS </a>
          <b className="navbar-cart">CART</b>
          <p className="cart-status">{this.props.itemCount} item</p>
          <p className="cart-status">Total: $ {this.props.totalPrice}</p>
          <hr/>
          <p className="tagline">Our hand-made cinnamon rolls</p>
        </div>
      </header>
      
    );
  }
}

export default NavBar;