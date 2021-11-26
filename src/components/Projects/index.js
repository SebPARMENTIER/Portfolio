// == Import npm
import React from 'react';
import { Card, Row, Col, CardGroup } from 'react-bootstrap';

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
        <CardGroup>
          <div className="projects-card">
            <Card style={{ width: '18rem', margin: '1em' }}>
              <Card.Img
                className="projects-cards-img"
                variant="top"
                src={sportFinder}
                alt="Sport Finder"
              />
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
            <Card style={{ width: '18rem', margin: '1em' }}>
              <Card.Img
                className="projects-cards-img"
                variant="top"
                src={converter}
                alt="Converter"
              />
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
            <Card style={{ width: '18rem', margin: '1em' }}>
              <Card.Img
                className="projects-cards-img"
                variant="top"
                src={pokedex}
                alt="Pokedex"
              />
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
            <Card style={{ width: '18rem', margin: '1em' }}>
              <Card.Img
                className="projects-cards-img"
                variant="top"
                src={comingSoon}
                alt="Coming soon"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="projects-cards-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </CardGroup>
      </Col>
    </Row>
  </div>
);

// == Export
export default Projects;
