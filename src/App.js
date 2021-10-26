import React from 'react';
import './App.css';

import Counter from './components/Counter'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count1: 0,
      count2: 1
    }
  }

  substract1 = () => {
    if (this.state.count1 > 1) {
      this.setState({count1: this.state.count1 -= 1})
    }

  }

  substract2 = () => {
    if (this.state.count2 > 1) {
      if (this.state.count1 === this.state.count2 - 1) {
        this.setState({count1: this.state.count1 -= 1})
        this.setState({count2: this.state.count2 -= 1})
      } else {
        this.setState({count2: this.state.count2 -= 1})
      }
    }
  }

  increment1 = () => {
    if (this.state.count1 < 99) {
      if (this.state.count1 === this.state.count2 - 1) {
        this.setState({count1: this.state.count1 += 1})
        this.setState({count2: this.state.count2 += 1})
      } else {
        this.setState({count1: this.state.count1 += 1})
      }
    }
  }

  increment2 = () => {
    if (this.state.count2 < 99) {
      this.setState({count2: this.state.count2 += 1})
    }
  }
  
  render() {
    return (
      <div class="box">
        <h1>Counter</h1>
        <Counter count={this.state.count1} increment={this.increment1}  substract={this.substract1}/>
        <Counter count={this.state.count2} increment={this.increment2}  substract={this.substract2}/>
      </div>
    )
  }
} 

export default App;

