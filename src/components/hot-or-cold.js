import React from 'react';

import './hot-or-cold.css';

export default function HotOrCold(props) {
  const message = props.message;
    
    return (
      <div className = "hot-or-cold"> 
        <p> {message}</p>
      </div>
      );
    }
