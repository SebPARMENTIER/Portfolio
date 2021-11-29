// == Import npm
import React from 'react';
import { Routes, Route } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// == Import local
import Header from 'src/components/Header';
import Home from 'src/components/Home';
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
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
          </Routes>
          <Home />
          <Projects />
          <Contact />
        </Col>
      </Row>
    </Container>
  </div>
);

// == Export
export default App;
