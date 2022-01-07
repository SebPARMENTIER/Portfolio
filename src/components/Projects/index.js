// == Import npm
import React from 'react';
import {
  Card,
  Row,
  Col,
  CardGroup,
} from 'react-bootstrap';

// == Import local
import './projects.scss';
import sportFinder from 'src/assets/images/sport-finder.png';
import converter from 'src/assets/images/converter.png';
import rickAndMorty from 'src/assets/images/rick-and-morty.png';
import pokedex from 'src/assets/images/pokedex.png';
import comingSoon from 'src/assets/images/comingSoon.jpg';

// == Component
const Projects = () => (
  <div id="projects" className="projects">
    <Row>
      <div className="projects-banner">
        MES REALISATIONS
      </div>
      <div className="projects-intro">
        Voici quelques réalisations effectuées pendant ma formation. D'autres projets sont en cours d'élaboration et seront disponibles courant 2022.
      </div>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
        <CardGroup>
        <div className="projects-card">
            <Card style={{ width: '18rem', margin: '1em' }}>
              <Card.Img
                className="projects-cards-img"
                variant="top"
                src={rickAndMorty}
                alt="Rick and Morty"
              />
              <Card.Body className="projects-cards-body">
                <Card.Title className="projects-cards-title">
                  Rick and Morty
                </Card.Title>
                <Card.Text className="projects-cards-text">
                  Projet personnel.
                  Retrouvez tous les personnages, saisons et épisodes de votre série et jouez à un mini jeu.
                </Card.Text>
                <div className="projects-cards-links">
                  <Card.Link
                    className="projects-cards-link"
                    href="https://seb-rick-and-morty.netlify.app/"
                    target="_blank"
                  >
                    Go to Rick & Morty
                  </Card.Link>
                  <Card.Link
                    className="projects-cards-link"
                    href="https://github.com/SebPARMENTIER/Rick-And-Morty"
                    target="_blank"
                  >
                    GitHub Page
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="projects-cards">
            <Card style={{ width: '18rem', margin: '1em' }}>
              <Card.Img
                className="projects-cards-img"
                variant="top"
                src={sportFinder}
                alt="Sport Finder"
              />
              <Card.Body className="projects-cards-body">
                <Card.Title className="projects-cards-title">
                  Sport Finder
                </Card.Title>
                <Card.Text className="projects-cards-text">
                  Projet de fin de formation.
                  Recherchez un sport à pratiquer près de chez vous ou partout en France.
                </Card.Text>
                <div className="projects-cards-links">
                  <Card.Link
                    className="projects-cards-link"
                    href="https://sport-finder.netlify.app/"
                    target="_blank"
                  >
                    Go to Sport Finder
                  </Card.Link>
                  <Card.Link
                    className="projects-cards-link"
                    href="https://github.com/SebPARMENTIER/Sport-Finder"
                    target="_blank"
                  >
                    GitHub Page
                  </Card.Link>
                </div>
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
              <Card.Body className="projects-cards-body">
                <Card.Title className="projects-cards-title">
                  Converter
                </Card.Title>
                <Card.Text className="projects-cards-text">
                  Projet effectué pendant la formation.
                  Convertissez un montant en euros vers une autre devise.
                </Card.Text>
                <div className="projects-cards-links">
                  <Card.Link
                    className="projects-cards-link"
                    href="https://seb-converter.netlify.app/"
                    target="_blank"
                  >
                    Go to Converter
                  </Card.Link>
                  <Card.Link
                    className="projects-cards-link"
                    href="https://github.com/SebPARMENTIER/Converter"
                    target="_blank"
                  >
                    GitHub Page
                  </Card.Link>
                </div>
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
              <Card.Body className="projects-cards-body">
                <Card.Title className="projects-cards-title">
                  Pokedex
                </Card.Title>
                <Card.Text className="projects-cards-text">
                  Projet effectué pendant la formation.
                  Retrouvez les 151 premiers pokemons dans ce pokedex.
                </Card.Text>
                <div className="projects-cards-links">
                  <Card.Link
                    className="projects-cards-link"
                    href="https://seb-pokedex.herokuapp.com/"
                    target="_blank"
                  >
                    Go to Pokedex
                  </Card.Link>
                  <Card.Link
                    className="projects-cards-link"
                    href="https://github.com/SebPARMENTIER/Pokedex"
                    target="_blank"
                  >
                    GitHub Page
                  </Card.Link>
                </div>
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
              <Card.Body className="projects-cards-body">
                <Card.Title className="projects-cards-title">
                  Coming Soon
                </Card.Title>
                <Card.Text className="projects-cards-text">
                  D'autres projets seront bientôt disponibles.
                  En attendant, n'hésitez pas à visiter ma page GitHub. A bientôt.
                </Card.Text>
                <div className="projects-cards-links">
                  <Card.Link
                    className="projects-cards-link"
                    href="https://github.com/SebPARMENTIER"
                    target="_blank"
                  >
                    My GitHub Page
                  </Card.Link>
                </div>
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
