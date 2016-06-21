import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return (
      <div>
        <header className="projects-header"><h3>Here are some projects I've had fun with!</h3></header>
        <ul>
          <li className="project-item">
            <a href="https://github.com/jbkaplan/plum-app" className=""><h4>Plum.</h4></a>
            <div>
              <p>Plum makes payments easy. Pay into a pool and claim expenses that belong to you for an event. I got to be a part a fantastic team for this project. I learned alot about mobile development and agile workflow. We used React-native, Rails and, Paypals api.</p>
            </div>
          </li>

          <li className="project-item">
            <a href="https://github.com/ldannewitz/wickipedia" className=""><h4>Wickipedia</h4></a>
            <div>
              <p>This is was my client project in phase 3 of DBC. I got to work on user authentication and authorization from scratch and ended up giving a talk to my cohort about strong params and injecting form fields in Rails.</p>
            </div>
          </li>

          <li className="project-item">
            <a href="https://github.com/lombardo-chcg/grassoverflow" className=""><h4>GrassOverflow</h4></a>
            <div>
              <p>This is a stackoverflow clone that was made during phase 2 of Dev Bootcamp. It was a good introduction to ajax and vertical slicing on a group project. This was definitely a highlight of my time at DBC, I cried out of laughter about 3 times during this project. I love to look back at it because it reminds me that there are always multiple solutions and approaches to a problem and the whole reason I started programming is because it's fun. This piece just reminds me that there's always a blue sky above dark clouds.</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
