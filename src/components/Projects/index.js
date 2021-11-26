// == Import npm
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

// == Import local
import './projects.scss';
import sportFinder from 'src/assets/images/sport-finder.png';
import converter from 'src/assets/images/converter.png';
import pokedex from 'src/assets/images/pokedex.png';
import comingSoon from 'src/assets/images/comingSoon.jpg';

// == Component
const Projects = () => (
  <div className="projects">
    <Row>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
        <div className="projects-card">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={sportFinder} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="projects-card">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={converter} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="projects-card">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pokedex} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="projects-card">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={comingSoon} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  </div>
);

// == Export
export default Projects;
