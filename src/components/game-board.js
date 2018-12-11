import React from 'react';
import HotOrCold from './hot-or-cold';
import GuessForm from './guess-form';
import NumberOfGuesses from './number-of-guesses';
import ListOfGuesses from './list-of-guesses';

import './game-board.css';

export default class GameBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        guesses: [],
        amount: 0,
        number: Math.floor(Math.random() * 100),
        message: 'Make a Guess!'
    }
  }

  addGuess(guess) {
    let close;
    let match = false;
    if (guess==this.state.number){
      match = true;
    }
    else if(guess>this.state.number-10 && guess<this.state.number+10){
      close = true;
    }
    else{
      close = false;
    }

    this.setState({
        guesses: [...this.state.guesses, {
            guess
        }],
        amount: this.state.amount+1,
        message: match ? 'GOT IT!' : close ? 'Hot' : 'Cold',
    });
  }

  render() {
    console.log('THE NUMBER IS', this.state.number);
    return (
      <div className="game-board">
        <HotOrCold message={this.state.message}/> 
        <GuessForm onAdd={guess => this.addGuess(guess)} /> 
        <NumberOfGuesses amount = {this.state.amount} /> 
        <ListOfGuesses guesses = {this.state.guesses} />
      </div>
      );
}
}


  // const message = "Make A Guess!";
  // const amount = 3; 
  // const guesses = [81, 25, 300];

