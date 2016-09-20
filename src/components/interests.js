import React from 'react';

const Interests = () => {
  return (
    <div>
      <h3 className="interests-title">Fancy Logic</h3>
      <p>
        Outside of programming I like to ride bikes, make music, work on my car, and explore the outdoors with my Staffordshire Bull Terrier, Phoebe. I also really like emojis. 😵 📦 🚀 🌎
      </p>
      <p>
        Inside of programming I like contributing to open source projects as well as the Chicago tech scene. I'm a co-organizer of the <a href="http://www.meetup.com/Chicago-Emacs-User-Group/" target="_blank">Chicago Emacs User Group</a> which you should totally attend!
      </p>
      <div>
        <h5>Open Source n Stuff</h5>
        <div className="languages">
          <div><a href="https://file.pizza/" target="_blank">File.pizza</a></div>
          <div><a href="https://www.npmjs.com/package/react-native-floating-labels" target="_blank">react-native-floating-labels</a></div>

        </div>
      </div>
      <div>
        <h5>I'm currently messing with...</h5>
        <div className="languages">
          <div><a href="https://facebook.github.io/react/" target="_blank">React</a></div>
          <div><a href="http://redux.js.org/" target="_blank">Redux</a></div>
          <div><a href="http://clojure.org/" target="_blank">Clojure</a></div>
          <div><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></div>
        </div>
        <div className="languages">
          <div><a href="https://flowtype.org/" target="_blank">Flow Type</a></div>
          <div><a href="https://webpack.github.io/" target="_blank">Webpack</a></div>
          <div><a href="https://www.meteor.com/" target="_blank">Meteor</a></div>
          <div><a href="http://facebook.github.io/immutable-js/" target="_blank">Immutable.js</a></div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
