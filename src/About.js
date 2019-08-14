import React from "react";
import "./App.css";

class About extends React.Component {
  render() {
    const test = 1;
    return (
      <div className="about-body">
        <p>{test == 0 ? "N/A" : test}</p>
        <h2>Who Am I?</h2>
        <p>
          Visit my portfolio site:{" "}
          <a
            href="http://hellogracecho.com"
            alt="Grace Cho portfolio site"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
          >
            https://www.themoviedb.org/
          </a>
        </p>
      </div>
    );
  }
}

export default About;
