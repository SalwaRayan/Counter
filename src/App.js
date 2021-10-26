import React from 'react';
import './App.css';

import Counter from './components/Counter'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  substract = () => {
    if (this.state.count > 0) {
      return this.setState({count: this.state.count -= 1})
    }
  }

  increment = () => (
    this.setState({count: this.state.count += 1})
  )
  
  render() {
    return (
      <div class="box">
        <h1>Counter</h1>
        <Counter count={this.state.count} increment={this.increment}  substract={this.substract}/>
      </div>
    )
  }
} 

export default App;

