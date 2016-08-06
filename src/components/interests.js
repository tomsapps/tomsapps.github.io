import React from 'react';

const Interests = () => {
  return (
    <div>
      <h3 className="interests-title">Fancy Logic</h3>
      <p>
        Outside of programming I like to ride bikes, make music, work on my car, and explore the outdoors with my Staffordshire Bull Terrier, Phoebe.
      </p>
      <div>
        <h5>I'm currently messing with...</h5>
        <ul>
          <li><a href="https://facebook.github.io/react/" target="_blank">React</a></li>
          <li><a href="http://redux.js.org/" target="_blank">Redux</a></li>
          <li><a href="http://facebook.github.io/immutable-js/" target="_blank">Immutable.js</a></li>
          <li><a href="https://flowtype.org/" target="_blank">Flow Type</a></li>
          <li><a href="https://webpack.github.io/" target="_blank">Webpack</a></li>
          <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
          <li><a href="https://www.meteor.com/" target="_blank">Meteor</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Interests;
