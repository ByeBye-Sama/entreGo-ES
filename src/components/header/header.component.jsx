import React from 'react';
import { Link } from "react-router-dom";

import { addJump } from '../../helpers/jump'

import './header.component.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);


  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector('header');
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
    addJump('homeJump', 'landing-page')
    addJump('aboutJump', 'about', -92);
    addJump('servicesJump', 'services', -92);
    addJump('workJump', 'work-with-us', -92);
    addJump('contactJump', 'contact', -92);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <header className={this.state.scroll > this.state.top ? "header-background" : ""}>
        <div className="inside-container">
          <Link className="header-logo" to="/">entreGo</Link>
          <nav>
            <ul className="header-nav">
              <li className="homeJump">I N I C I O</li>
              <li className="aboutJump">A C E R C A</li>
              <li className="servicesJump">S E R V I C I O S</li>
              <li className="workJump">S E &nbsp; C O N D U C T O R</li>
              <li className="contactJump">C O N T A C T O</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export {
  Header
}
