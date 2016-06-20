import React, { Component } from 'react';
import Nav from './nav';
import Header from './header';
import About from './about';
import Footer from './footer';

export default class App extends Component {
  render() {
    console.log("Move along dood, nothing to see here.")
    return (
      <div>
        <Nav />
        <Header />
        <section id="home">
          <div className="about">
            {this.props.children}
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
