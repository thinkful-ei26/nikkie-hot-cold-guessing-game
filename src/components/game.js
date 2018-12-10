import React from 'react';

import Navbar from './navbar';
import GameBoard from './game-board';
import './game.css'

const links = [{
  text: 'About',
  href: '#'
}, {
  text: 'New Game',
  href: '#'
}];

export default function Game() {
    return (
      <div className="game">
          <Navbar links={links} /> 
        <h1>HOT or COLD?</h1>
          <GameBoard /> 
      </div>
    );
}

