import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav>
        {document.location.pathname === '/' ? '' : homeLink() }
        <div>
          <a href="https://registry.jsonresume.org/tomsapps" target="_blank">Resume</a>
        </div>
        <div>
          <a href="https://github.com/tomsapps" target="_blank">GitHub</a>
        </div>
    </nav>
  );
};

function homeLink() {
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Nav;
