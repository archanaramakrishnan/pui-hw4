import React, { Component } from 'react';
import '../../NavBar.css';
import original from '../../products/original-cinnamon-roll.jpg';
import apple from '../../products/apple-cinnamon-roll.jpg';
import raisin from '../../products/raisin-cinnamon-roll.jpg';
import walnut from '../../products/walnut-cinnamon-roll.jpg';
import chocolate from '../../products/double-chocolate-cinnamon-roll.jpg';
import strawberry from '../../products/strawberry-cinnamon-roll.jpg';

import Roll from '../../Roll.js';
import NavBar from '../../NavBar.js';
import Cart from '../../Cart.js';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      cartTotalPrice: 0,
      rollData: [
        {
          name: "Original cinammon roll",
          price: 2.49,
          imageURL: "products/original-cinnamon-roll.jpg"
          //TODO: add alt text here
        },
        {
          name: "Apple cinammon roll",
          price: 3.49,
          imageURL: "products/apple-cinnamon-roll.jpg"
        },
        {
          name: "Raisin cinammon roll",
          price: 2.99,
          imageURL: "products/raisin-cinnamon-roll.jpg"
        },
        {
          name: "Walnut cinammon roll",
          price: 3.49,
          imageURL: "products/walnut-cinnamon-roll.jpg"
        },
        {
          name: "Double-chocolate cinammon roll",
          price: 3.99,
          imageURL: "products/double-chocolate-cinnamon-roll.jpg"
        },
        {
          name: "Strawberry cinammon roll",
          price: 3.99,
          imageURL: "products/strawberry-cinnamon-roll.jpg"
        }
      ],
  
    }
  }

  showCart = (rollName, glazing, packSize, totalPrice) => {
    const roll = {
      name: rollName,
      glaze: glazing, 
      pack: packSize,
      price: totalPrice
    }
    this.setState(prevState => ({
      ...prevState,
      cart: [...prevState.cart, roll]
    }))
    
  }

  render() {
    return (
        <div className="App">
      <NavBar/>
      <Cart 
        rollList= {this.state.cart}
      />
      <div className="list">
        <Roll
          rollIndex={0}
          imageURL={original}
          rollName={this.state.rollData[0].name} 
          price={this.state.rollData[0].price}
          addToCart={this.showCart}  /> 
          {/* this.props.func can be called in Roll.js -> with price, etc.  this wil update the cart */}
        <Roll 
          rollIndex={1}
          imageURL={apple}
          rollName={this.state.rollData[1].name} 
          price={this.state.rollData[1].price}
          addToCart={this.showCart}  /> 
        <Roll 
          rollIndex={2}
          imageURL={raisin}
          rollName={this.state.rollData[2].name} 
          price={this.state.rollData[2].price}
          addToCart={this.showCart}    />
      </div>

      <div className="list">
        <Roll 
          rollIndex={3}
          imageURL={walnut} 
          rollName={this.state.rollData[3].name} 
          price={this.state.rollData[3].price}
          addToCart={this.showCart}    />
        <Roll 
          rollIndex={4}
          imageURL={chocolate}
          rollName={this.state.rollData[4].name} 
          price={this.state.rollData[4].price}
          addToCart={this.showCart}    />
        <Roll 
          rollIndex={5}
          imageURL={strawberry}
          rollName={this.state.rollData[5].name} 
          price={this.state.rollData[5].price}
          addToCart={this.showCart}    />
      </div>
    </div>
    );
  }
}

export default HomePage;