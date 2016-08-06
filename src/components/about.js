import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <ul>
      <li>
        <div className="details nohover">
          <img className="icon" src="../../style/images/code.png" alt="code"/>
          <div className="list-detail">
            <div className="title">
              <h4>Concepts</h4>
            </div>
            <p className="description">I love working in Rails && React && Redux!</p>
          </div>
        </div>
      </li>

      <li>
        <Link to="/projects" className="router-link">
          <div className="details">
            <img className="icon" src="../../style/images/vial.svg" alt="vial"/>
            <div className="list-detail">
              <div className="title">
                <h4 className="details-link">Projects</h4>
              </div>
              <p className="description">Here are some projects I've had fun with.</p>
            </div>
          </div>
        </Link>
      </li>

      <li>
        <Link to="/interests" className="router-link">
          <div className="details">
            <img className="icon" src="../../style/images/desk_light.svg" alt="letter"/>
            <div className="list-detail">
              <div className="title">
                <h4 className="details-link">Interests</h4>
              </div>
              <p className="description">Just some stuff I like.</p>
            </div>
          </div>
        </Link>
      </li>

      <li>
        <div className="details">
          <img className="icon" src="../../style/images/Love-Letter.svg" alt="letter"/>
          <div className="list-detail">
            <div className="title">
              <a className="router-link" href="mailto:&#116;&#111;&#109;&#115;&#111;&#107;&#057;&#055;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                <h4 className="details-link">Let's Connect!</h4>
              </a>
            </div>
            <p className="description">I'd love to hear from you!</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default About;
