import React from 'react';
import './Header.css';

import { FaList, FaTh, FaPlus } from 'react-icons/fa';

function Header(props) {
  return (
    <div className="header">
      <div className="header-pane-left">
        <span>The X-Effect</span>
        <div className="header-buttons">
          <ul>
            <li><FaList /></li>
            <li><FaTh /></li>
            <li><FaPlus/></li>
          </ul>
        </div>
      </div>
      <div className="header-pane-right">
        <span>Eduard Likwong</span>
        <span>Unmarked: 0</span>
      </div>
    </div>
  );
}

export default Header;
