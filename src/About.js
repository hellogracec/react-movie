import React from "react";
import "./App.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-body">
        <h2>Who Am I?</h2>
        <p>
          Visit my portfolio site:{" "}
          <a
            href="http://hellogracecho.com"
            alt="Grace Cho portfolio site"
            target="_blank"
          >
            http://hellogracecho.com
          </a>
        </p>
        <p>
          Visit my BCIT site:{" "}
          <a
            href="http://gcho.bcitwebdeveloper.ca"
            alt="Grace Cho BCIT TWD site"
            target="_blank"
          >
            http://gcho.bcitwebdeveloper.ca
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
          >
            https://www.themoviedb.org/
          </a>
        </p>
      </div>
    );
  }
}

export default About;
