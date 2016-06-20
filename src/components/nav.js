import React, {Component} from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar pull-xs-right" >
        <ul className="nav">
          {document.location.pathname === '/' ? '' : homeLink() }
          <li className="nav-link">
            <a href="https://github.com/tomsapps" className="pull-xs-right">GitHub</a>
          </li>
        </ul>
      </nav>
    );
  }
}

function homeLink() {
  return (
    <li className="nav-link">
      <Link to="/" className="pull-xs-right">Home</Link>
    </li>
  );
}

export default Nav;
