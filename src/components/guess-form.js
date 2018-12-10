import React from 'react';

import './guess-form.css';

export default function GuessForm() {
    
    return (
      <form className = "guess-form"> 
        <input placeholder="Enter Your Guess"></input>
        <button type="submit">Guess</button>
      </form>
      );
    }
