import React from 'react';
import HotOrCold from './hot-or-cold';
import GuessForm from './guess-form';

import './game-board.css';

export default function GameBoard() {
  const message = "Make A Guess!";

    return (
      <div className="game-board">
        <HotOrCold message={message}/> 
        <GuessForm /> 
      {/* Form with guess input and button */}
      {/* Number of guesses */}
      {/* list of guesses */}
      </div>
      );
    }
