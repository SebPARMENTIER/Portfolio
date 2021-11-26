// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

// == Import local
import './header.scss';

// == Component
const Header = () => (
  <div className="header">
    <div className="header-home">
      <Row>
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          <Link
            className="header-home-link"
            to="/"
          >
            Home
          </Link>
          <Link
            className="header-home-link"
            to="/projects"
          >
            Réalisations
          </Link>
        </Col>
      </Row>
    </div>
  </div>
);

// == Export
export default Header;
