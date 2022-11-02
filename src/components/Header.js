import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Portfolio from "../components/pages/Portfolio";
import Resume from "../components/pages/Resume";

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <div className="rowHeader" id="header">
          <a href="https://Apom311.github.io/my-portfolio/">
            <img
              src="https://img.icons8.com/color/48/000000/astronaut.png"
              alt="Ryan Kinslow"
              class="icon"
            />
          </a>
        </div>
        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/portfolio" />} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </div>
      </HashRouter>
    );
  }
}
export default Header;
