import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav className="navbar pull-xs-right " >
      <ul className="nav nav-link-pad">
        {document.location.pathname === '/' ? '' : homeLink() }
        <li className="nav-link">
          <a href="https://registry.jsonresume.org/tomsapps" target="_blank">Resume</a>
        </li>
        <li className="nav-link">
          <a href="https://github.com/tomsapps" target="_blank">GitHub</a>
        </li>
      </ul>
    </nav>
  );
};

function homeLink() {
  return (
    <li className="nav-link">
      <Link to="/">Home</Link>
    </li>
  );
}

export default Nav;
