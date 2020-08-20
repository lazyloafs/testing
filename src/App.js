import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Redirect } from 'react-router-dom'
import { Container } from  'react-bootstrap'
import NavbarCustom from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import { Switch } from 'react'



function App() {
  return (
    <Router>
      <div>
        <NavbarCustom />
        <Container>
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
