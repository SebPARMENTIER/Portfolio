// == Import npm
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

// == Import local
import './header.scss';

// == Component
const Header = () => (
  <Navbar fixed="top" collapseOnSelect expand="lg" bg="black" variant="dark">
    <Container>
      <Navbar.Brand className="header-home-link" style={{color: '#d15a60'}} href="#">Sébastien PARMENTIER</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="header-home-link" style={{color: '#63b4f9'}} href="#skills">Compétences</Nav.Link>
          <Nav.Link className="header-home-link" style={{color: '#63b4f9'}} href="#stack">Technos</Nav.Link>
          <Nav.Link className="header-home-link" style={{color: '#63b4f9'}} href="#projects">Réalisations</Nav.Link>
          <Nav.Link className="header-home-link" style={{color: '#63b4f9'}} href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link        
            className="header-home-link"
            style={{color: '#63b4f9'}}
            href="https://www.linkedin.com/in/sebastien-parmentier/"
            target="_blank"
          >
            <BsLinkedin />
          </Nav.Link>
          <Nav.Link
            className="header-home-link"
            style={{color: '#63b4f9'}}
            href="https://github.com/SebPARMENTIER"
            target="_blank"
          >
            <BsGithub />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// == Export
export default Header;
