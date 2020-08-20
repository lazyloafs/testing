import React from "react";
import Hero from "../components/Hero";
// import {Container} from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/0dqdq3m.jpg">
        <h1>Contact Me!</h1>
      </Hero>
            <p>
            Phone: (305)-495-2139 <br/>

            Address: 10 Nw 125 Ave <br/>

            Email: lazyloafs@gmail.com
            </p>
    </div>
  );
}

export default About;
