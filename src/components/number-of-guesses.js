import React from 'react';

import './number-of-guesses.css';

export default function NumberOfGuesses(props) {
    
    return (
      <p className = "number-of-guesses">Guess #{props.amount} !</p>
      // QUESTION: why dont we need to use ${} string literal?
      );
    }
