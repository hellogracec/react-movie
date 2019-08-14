import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Footer from "./Footer";
import "./App.css";
import { NavLink } from "react-router-dom";

// import { Redirect } from "react-router";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="nav">
            <NavLink
              exact={true}
              to="/"
              activeClassName="active"
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active" className="nav-link">
              about
            </NavLink>
          </div>
          <h1>Movie Database with React</h1>
          {/* Our router goes here */}
          <Switch>
            <Route exact path="/" component={Home} />

            {/* Does a redirect. */}
            <Route path={"/about"} exact component={About} />

            {/* Shows an error page. */}
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
