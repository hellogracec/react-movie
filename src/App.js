import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Footer from "./Footer";
import "./App.css";
// import { Redirect } from "react-router";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
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
