import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  const element = <FontAwesomeIcon icon={faEllipsisH} />;
  return (
    <div className="header">
      <div className="header-pane-left">
        <span>The X-Effect</span>
        <span>{element}</span>
      </div>
      <div className="header-pane-right">
        <span>Eduard Likwong</span>
        <span>Unmarked: 0</span>
      </div>
    </div>
  );
}

export default Header;
