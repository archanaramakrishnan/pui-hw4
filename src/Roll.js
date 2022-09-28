import React, { Component } from 'react';
import './Roll.css';

class Roll extends Component {
  render() {
    return (
      <div className="cinnamon-roll">         
        <img src={this.props.imageURL} className="roll-picture" alt="a plain cinnamon roll"/>
        <b> {this.props.rollName} </b>
  
        <div className="options-box">
            <p className="options-label">Glazing:</p>
            
            <div className="options">
              <select name="Glazing">
                <option value="keep-original">Keep original</option>
                <option value="sugar-milk">Sugar milk</option>
                <option value="vanilla-milk">Vanilla milk</option>
                <option value="double-chocolate">Double chocolate</option>
              </select>
            </div>
        </div>
  
        <div className="options-box">
          <p className="options-label">Pack size: </p>
          <div className="options">
            <button type="button" className="size"> 1 </button>
            <button type="button" className="size"> 3 </button>
            <button type="button" className="size"> 6 </button>
            <button type="button" className="size"> 12 </button>
          </div>      
        </div>
  
        <div className="options-box">
          <b className="options-label price-label">$ {this.props.price} </b>
          <div className="options">
            <button type="button" className="add-to-cart"> Add to cart </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Roll;