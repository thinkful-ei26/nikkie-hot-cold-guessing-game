import React from 'react';
import HotOrCold from './hot-or-cold';
import GuessForm from './guess-form';
import NumberOfGuesses from './number-of-guesses';
import ListOfGuesses from './list-of-guesses';

import './game-board.css';

export default function GameBoard() {
  const message = "Make A Guess!";
  const amount = 3; 
  const guesses = [81, 25, 300];

    return (
      <div className="game-board">
        <HotOrCold message={message}/> 
        <GuessForm /> 
        <NumberOfGuesses amount = {amount} /> 
        <ListOfGuesses guesses = {guesses} />
      </div>
      );
    }
