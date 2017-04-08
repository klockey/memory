import React, { Component } from 'react';
import './App.css';

class App extends Component {

 state = {
    names: ['run','jump', 'play', 'dog', 'person', 'frog',
            'cow','cat', 'cat', 'cow','frog','person','dog',
            'play','jump','run'],
    matched: [],
    picks: []
 }


 check = () => {
            console.log('in check')
           if (this.state.names[this.state.picks[0]] === this.state.names[this.state.picks[1]]) {
              this.setState ({
              //  console.log('in set state');
                matched: [...this.state.matched, this.state.picks[1]]
              })
            }
            this.state.picks = []
  }

 choose = (positionOfCard) => {
   console.log(positionOfCard)
   if (this.state.picks.length === 2) {
     
   }else {
    this.setState({
      picks: [...this.state.picks, positionOfCard]
    }, () => {
      if (this.state.picks.length === 2) {
          this.check()
      }
    })
   }
  }

render() {
    return (
      <NameList names={this.state.names} handleClick={this.choose} />
    )
  }
}

const NameList = (props) => {
  const listNames = props.names.map((name, i) => {
    return <li key={i}>
      <button onClick={() => props.handleClick(i)} id={name}>
        {name}
      </button>
    </li>
  })
 return <ul>{listNames}</ul>
}









export default App;
