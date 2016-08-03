import React, { Component } from 'react';

class Interests extends Component {
  render() {
    return (
      <div>
        <h3 className="interests-title">Fancy Logic</h3>
        <p>
          Outside of programming I like to ride bikes, make music, work on my car, and explore the outdoors with my Staffordshire Bull Terrier, Phoebe.
        </p>
        <div>
          <h5>I'm currently messing with...</h5>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Immutable.js</li>
            <li>Webpack</li>
            <li>MongoDB</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Interests;
