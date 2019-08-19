import React from "react";
import "./../App.css";
import { Spring } from "react-spring/renderprops";

class About extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 2000 }}
      >
        {props => (
          <div style={props}>
            <div className="about-body">
              <h2>Who Am I?</h2>
              <p>
                Visit my portfolio site:{" "}
                <a
                  href="https://hellogracecho.com"
                  alt="Grace Cho portfolio site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://hellogracecho.com
                </a>
              </p>
              <p>
                Visit my BCIT site:{" "}
                <a
                  href="https://gcho.bcitwebdeveloper.ca"
                  alt="Grace Cho BCIT TWD site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://gcho.bcitwebdeveloper.ca
                </a>
              </p>
              <br />
              <h2>Reference</h2>
              <p>
                The Movie Database API:{" "}
                <a
                  href="https://www.themoviedb.org/"
                  alt="The Movie DB API"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.themoviedb.org/
                </a>
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default About;
