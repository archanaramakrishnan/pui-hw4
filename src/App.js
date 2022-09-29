import React, { Component } from 'react';
import './App.css';
import HomePage from './views/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollData: [
        {
          name: "Original cinammon roll",
          price: "2.49",
          imageURL: "products/original-cinnamon-roll.jpg"
        },
        {
          name: "Apple cinammon roll",
          price: "3.49",
          imageURL: "products/apple-cinnamon-roll.jpg"
        },
        {
          name: "Raisin cinammon roll",
          price: "2.99",
          imageURL: "products/raisin-cinnamon-roll.jpg"
        },
        {
          name: "Walnut cinammon roll",
          price: "3.49",
          imageURL: "products/walnut-cinnamon-roll.jpg"
        },
        {
          name: "Double-chocolate cinammon roll",
          price: "3.99",
          imageURL: "products/double-chocolate-cinnamon-roll.jpg"
        },
        {
          name: "Strawberry cinammon roll",
          price: "3.99",
          imageURL: "products/strawberry-cinnamon-roll.jpg"
        }
      ],
    }
  }

  render() {
    return (
      <HomePage/>
    );
  }
}

export default App;