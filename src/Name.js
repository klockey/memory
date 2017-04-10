import React, { Component } from 'react'
import './App.css'
import App from './App'

class Name extends Component {
  _click =() => {
  this.props.choose(this.props.i)
}
 render() {
   const matched = this.props.matched ? 'matched' : ''
   const revealed = this.props.revealed ? 'revealed' : ''
   return (
   <div
     onClick={this._click}
     className={`${this.props.value} card ${revealed} ${matched}`}>
  </div>
   )
 }
}























export default Name
