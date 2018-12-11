import React from 'react';

import './list-of-guesses.css';

export default function ListOfGuesses(props) {
    console.log('THE props.guesses is', props.guesses);
    const listElements = props.guesses.map((guess, index)=>(
      // Why do I need to say props.guesses.map? Could I have done it differently?
      <li key={index}>
          {guess.guess} 
          {/* QUESTION: easier way to access the above? */}
        </li>
    ));

    return (
      <ul className = "list-of-guesses">
        {listElements}
      </ul>
      );
    }
