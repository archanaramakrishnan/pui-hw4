import React, { Component } from 'react';
import './Roll.css';

class Roll extends Component {

  render() {
    return (
      <div className="cinnamon-roll">         
        <img src={this.props.imageURL} className="roll-picture" alt={`a ${this.props.rollName} ${this.props.imageURL}`} />
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
            <input type="radio" id={`size1-${this.props.rollIndex}`} className="size" value="1" name= {this.props.rollName} /> 
            <label htmlFor={`size1-${this.props.rollIndex}`}><div className="size"> 1 </div></label>

            <input type="radio" id={`size3-${this.props.rollIndex}`} className="size" value="3" name= {this.props.rollName} /> 
            <label htmlFor={`size3-${this.props.rollIndex}`}><div className="size"> 3 </div></label>

            <input type="radio" id={`size6-${this.props.rollIndex}`} className="size" value="6" name= {this.props.rollName} /> 
            <label htmlFor={`size6-${this.props.rollIndex}`}><div className="size"> 6 </div></label>

            <input type="radio" id={`size12-${this.props.rollIndex}`} className="size" value="12" name= {this.props.rollName} /> 
            <label htmlFor={`size12-${this.props.rollIndex}`}><div className="size"> 12 </div></label>
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