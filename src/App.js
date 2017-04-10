import React, { Component } from 'react';
import './App.css';
import Name from './Name'
import GameEnd from './GameEnd'


class App extends Component {

state = {
    names: ['run','jump', 'play', 'dog', 'tree', 'frog',
            'cow','cat', 'cat', 'cow','frog','tree','dog', 
            'play','jump','run'],
    matched: [],
    picks: [],
    gameOver: false
 }

 choose = (positionOfCard) => {
   console.log(positionOfCard)
   if (this.state.picks.length < 2 && !this.state.picks.includes(positionOfCard)) {
    this.setState({
      picks: [...this.state.picks, positionOfCard]     // add the position of card to pics array
    }, () => {
      if (this.state.picks.length === 2) {  // if two picks of cards then check for win
          this.check()
      }
    })
   }
  }

 check = () => {
   console.log('in check')
   const picks = this.state.picks
      if (this.state.names[picks[0]] === this.state.names[picks[1]]) {  // if pick 1 and 2 are =
        console.log("pick 1 and 2 are equal")
        this.setState({
          matched: [...this.state.matched, ...this.state.picks]  // assign picks to matched.
        }, () => {
          if (this.state.matched.length === this.state.names.length) {  // if all matches
            window.setTimeout(() => {
              this.setState({
                picks: [],
                matched: [],
                gameOver: true
              })
            }, 3000)
          }
        })
      }
      window.setTimeout(() => {
        this.setState({
          picks: []
        })
      }, 2000)
    }

reset = () => {
        this.setState({ gameOver: false })
}

render() {
  if (this.state.gameOver) {
      return <GameEnd reset={this.reset}/>
    } else {
      return (
        <div className='cardContainer'>
          <Name i={0} value={this.state.names[0]} choose={this.choose} revealed={this.state.picks.includes(0)} matched={this.state.matched.includes(0)} />
          <Name i={1} value={this.state.names[1]} choose={this.choose} revealed={this.state.picks.includes(1)} matched={this.state.matched.includes(1)} />
          <Name i={2} value={this.state.names[2]} choose={this.choose} revealed={this.state.picks.includes(2)} matched={this.state.matched.includes(2)} />
          <Name i={3} value={this.state.names[3]} choose={this.choose} revealed={this.state.picks.includes(3)} matched={this.state.matched.includes(3)} />
          <Name i={4} value={this.state.names[4]} choose={this.choose} revealed={this.state.picks.includes(4)} matched={this.state.matched.includes(4)} />
          <Name i={5} value={this.state.names[5]} choose={this.choose} revealed={this.state.picks.includes(5)} matched={this.state.matched.includes(5)} />
          <Name i={6} value={this.state.names[6]} choose={this.choose} revealed={this.state.picks.includes(6)} matched={this.state.matched.includes(6)} />
          <Name i={7} value={this.state.names[7]} choose={this.choose} revealed={this.state.picks.includes(7)} matched={this.state.matched.includes(7)} />
          <Name i={8} value={this.state.names[8]} choose={this.choose} revealed={this.state.picks.includes(8)} matched={this.state.matched.includes(8)} />
          <Name i={9} value={this.state.names[9]} choose={this.choose} revealed={this.state.picks.includes(9)} matched={this.state.matched.includes(9)} />
          <Name i={10} value={this.state.names[10]} choose={this.choose} revealed={this.state.picks.includes(10)} matched={this.state.matched.includes(10)} />
          <Name i={11} value={this.state.names[11]} choose={this.choose} revealed={this.state.picks.includes(11)} matched={this.state.matched.includes(11)} />
          <Name i={12} value={this.state.names[12]} choose={this.choose} revealed={this.state.picks.includes(12)} matched={this.state.matched.includes(12)} />
          <Name i={13} value={this.state.names[13]} choose={this.choose} revealed={this.state.picks.includes(13)} matched={this.state.matched.includes(13)} />
          <Name i={14} value={this.state.names[14]} choose={this.choose} revealed={this.state.picks.includes(14)} matched={this.state.matched.includes(14)} />
          <Name i={15} value={this.state.names[15]} choose={this.choose} revealed={this.state.picks.includes(15)} matched={this.state.matched.includes(15)} />
        </div>
      )
    }
  }
}


export default App
