// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    counter: 0,
  }

  increaseCount = () => {
    this.setState(prev => ({counter: prev.counter + 1}))
  }

  render() {
    const {counter} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been Clicked <span className="number">{counter}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.increaseCount}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
