import React, { Component } from 'react';

class cart extends Component {
  render() {
    const data = this.props.rollList;
    const rollDisplay = data.map((d) => <li key={d.name}>{d.name}</li>);
    console.log(data)
    return (
        <div className="cart">
            {rollDisplay}
        </div>
      
    );
  }
}

export default cart;