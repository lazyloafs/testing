import React from "react";
import Hero from "../components/Hero";
// import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";

function About() {
    return (
      <div>
        <Hero backgroundImage="https://i.imgur.com/0dqdq3m.jpg">
          <h1>Portfolio!</h1>
        </Hero>
          <h3> See my Profiles! </h3>
          <div>
          <h6> <a href="https://www.linkedin.com/in/joanny-jimenez-8006901aa/"> Linkedin </a> <a href="https://github.com/lazyloafs"> Github </a> </h6>
          </div>
      </div>
    );
  }

export default About;
