import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
}

  onSubmit(event) {
    event.preventDefault();
    const guess = this.guessInput.value.trim();
    console.log('THE GUESS IS', guess);
    if (guess && this.props.onAdd) {
        this.props.onAdd(guess);
    }
    console.log('HERE');
    this.guessInput.value = '';
}

render() {
  return (
      <form className="guess-form" onSubmit={(e) => this.onSubmit(e)}>
        <input placeholder = "Guess Here" type="number" min = '0' max = '100' ref={input => this.guessInput = input} />
        <button type = "submit">Guess</button>
      </form>
  );
}
}