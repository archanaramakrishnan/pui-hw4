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


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollData: [
        {
          name: "Original cinammon roll",
          price: "2.49",
          imageURL: "products/original-cinnamon-roll.jpg"
          //TODO: add alt text here
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
      
      editorNoteTitle: "",
      editorNoteBody: "",
    }
  }

  render() {
    return (
        <div className="App">
      <NavBar/>

      <div className="list">
        <Roll 
          // type, price, glazing and packSize
          // type={this.state}
          // price=
          // packSize=
          rollIndex={0}
          imageURL={original}
          rollName={this.state.rollData[0].name} 
          price={this.state.rollData[0].price}  />
        <Roll 
          rollIndex={1}
          imageURL={apple}
          rollName={this.state.rollData[1].name} 
          price={this.state.rollData[1].price}  />
        <Roll 
          rollIndex={2}
          imageURL={raisin}
          rollName={this.state.rollData[2].name} 
          price={this.state.rollData[2].price}  />
      </div>

      <div className="list">
        <Roll 
          rollIndex={3}
          imageURL={walnut} 
          rollName={this.state.rollData[3].name} 
          price={this.state.rollData[3].price}  />
        <Roll 
          rollIndex={4}
          imageURL={chocolate}
          rollName={this.state.rollData[4].name} 
          price={this.state.rollData[4].price}  />
        <Roll 
          rollIndex={5}
          imageURL={strawberry}
          rollName={this.state.rollData[5].name} 
          price={this.state.rollData[5].price}  />
      </div>
    </div>
    );
  }
}

export default HomePage;