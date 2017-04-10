import React, { Component } from 'react'
import './App.css'
import App from './App'

class GameEnd extends Component {

_reset = () => {
  this.props.reset()
}

render() {
 return (
 <div className="overlay">
   <div className="dialog">
     <h3>GAME OVER</h3>
     <button onClick={this._reset}
        type="button">Play Again</button>
   </div>
  </div>
  )
 }
}


export default GameEnd
