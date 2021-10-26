import React from 'react'

import "../styles/Counter.css"

class Counter extends React.Component {
  render() {
    return (
      <div class="counter">
        <button onClick={this.props.substract}>-</button>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}

export default Counter