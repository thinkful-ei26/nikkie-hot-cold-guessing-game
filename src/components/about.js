import React from 'react';

import './about.css';

export default function About() {
    
    return (
      <div className = "about">
        <h2>About This Game</h2>
        <p>
        This is a Hot or Cold Number Guessing Game. The game goes like this:
          <br/>
          <br/>
          1. I pick a random secret number between 1 to 100 and keep it hidden.
          <br/>
          <br/>
          2. You need to guess until you can find the hidden secret number.
          <br/>
          <br/>
          3. You will get feedback on how close ("hot") or far ("cold") your guess is.
          So, Are you ready?
        </p>  
        <button>Got It!</button>
      </div>
      );
    }
