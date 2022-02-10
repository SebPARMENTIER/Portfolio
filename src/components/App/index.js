// == Import npm
import React from 'react';
import { Routes, Route } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// == Import local
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Skills from 'src/components/Skills';
import Stack from 'src/components/Stack'
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Container fluid="true" className="h-100">
      <Row>
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          <Header />
          <Home />
          <Skills />
          <Stack />
          <Projects />
          <Contact />
        </Col>
      </Row>
    </Container>
  </div>
);

// == Export
export default App;
