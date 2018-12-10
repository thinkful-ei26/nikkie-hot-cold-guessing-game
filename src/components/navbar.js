import React from 'react';

import './navbar.css';

export default function NavBar(props) {
  const links = props.links.map((link, index) => (
    <li key={index} index = {index}>
      <a href={link.href}>
        {link.text}
      </a>
    </li>
    ));
    
    return (
      <nav className="navbar">
        <ul>
          {links}
        </ul>
      </nav>
      );
    }
