import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  render() {
    const data = this.props.cartRoll;
    console.log("data", data);
    // const rollDisplay = data.map((d) => <div>
    //     <div key={d.name}>{d.name}</div>
    //     <div key={d.glaze}>{d.glaze}</div>
    //     <div key={d.pack}>{d.pack}</div>
    //     <div key={d.price}>{d.price}</div>
    // </div>);
    // console.log(data)
    return (
        <div className="cart">
            <div className="popup">Click me to toggle the popup!
                <span className="popuptext" id="myPopup">
                    <p>Added to cart: </p>
                    <div>{} </div>
                </span>
            </div>
            {/* {rollDisplay} */}
        </div>
      
    );
  }
}

export default Cart;