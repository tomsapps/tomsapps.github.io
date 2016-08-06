import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import About from './about';
import Footer from './footer';

const App = (props) => {
  return (
    <div>
      <Nav />
      <Header />
      <section id="home">
        <div className="about">
          {props.children}
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default App;
