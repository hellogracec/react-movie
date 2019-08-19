import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

// import { Redirect } from "react-router";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="wrapper">
            <div className="nav">
              <div>
                <NavLink
                  exact={true}
                  to="/movie"
                  activeClassName="active"
                  className="nav-link"
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/movie/about"
                  activeClassName="active"
                  className="nav-link"
                >
                  ABOUT
                </NavLink>
              </div>
              <div>
                <a
                  href="http://gcho.bcitwebdeveloper.ca/news"
                  alt="Graceful news feed"
                  target="_blank"
                  className="news-link"
                >
                  GRACEFUL
                  <br />
                  NEWS FEED
                </a>
              </div>
            </div>

            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {props => (
                <div style={props}>
                  <h1 className="logo">
                    <span className="logo-1">Graceful</span>
                    <br />
                    <span className="logo-2">Movie Feed</span>
                  </h1>
                </div>
              )}
            </Spring>
            {/* Our router goes here */}
            <Switch>
              <Route exact path="/movie" component={Home} />

              {/* Does a redirect. */}
              <Route path={"/movie/about"} component={About} />

              {/* Shows an error page. */}
              <Route path={"/movie/*"} component={NotFound} />
            </Switch>
          </div>
          <footer>
            <p>
              <a
                href="https://hellogracecho.com"
                alt="Grace Cho portfolio site"
                target="_blank"
                rel="noopener noreferrer"
              >
                &copy; 2019 Grace Cho
              </a>
              {" | "}
              Reference{" "}
              <a
                href="https://www.themoviedb.org/"
                alt="The Movie DB API"
                target="_blank"
                rel="noopener noreferrer"
              >
                The MOVIE DB
              </a>
            </p>
          </footer>
        </div>
      </Router>
    );
  }
}
export default App;
