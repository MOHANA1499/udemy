import React, { Component } from 'react';
import Courses from './Udemy/Courses'
class App extends Component {
  state={
    addtocart : 0
  }
  render() {
    
    return (
      <div>
        <Courses />
        <button className="buttonstyle">{this.state.addtocart}</button>
      </div>
      
    )
}
}
export default App;