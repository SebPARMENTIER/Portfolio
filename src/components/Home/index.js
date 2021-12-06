// == Import npm
import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

// == Import local
import './home.scss';
import cv from 'src/assets/cv.pdf';

// == Component
const Home = () => (
  <div className="home">
    <Row>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
        <div className="home-position">
          <div className="home-text">
            <div className="home-text-hello">Bonjour, je suis <span className="span3" >Sébastien PARMENTIER</span>.</div>
            <div className="home-text-function">
              Je suis <span className="span1">développeur web fullstack</span> basé à Limoges.
            </div>
            <div className="home-text-content">
              Dans le cadre d'une réorientation professionnelle, j'ai suivi la formation "Développeur Web et Web Mobile Fullstack <span className="span2">JavaScript"</span> en 2021 dispensée par l'école O'clock, labellisée Grande Ecole du Numérique.
            </div>
            <div className="home-text-content">
              Côté front, je suis spécialisé <span className="span2">React JS</span> avec <span className="span2">Redux</span>. Côté back, j'ai acquis un savoir-faire avec <span className="span2">Node.js, Express.js</span>. Concernant les systèmes de gestion de base de données, je sais utiliser <span className="span2">Postgres</span> avec des requêtes <span className="span2">SQL</span> ou avec l'ORM <span className="span2">Sequelize</span>.
            </div>
            <div className="home-button-intro">
              Pour en savoir plus sur mon parcours, n'hésitez pas à télécharger mon cv.
            </div>
            <div className="home-button">
              <Link to={cv} target="_blank" download="CV PARMENTIER Sébastien.pdf">
                <button className="home-button-load">
                  Mon CV
                </button>
              </Link>
            </div>
          </div>
          
            
          
        </div>
      </Col>
    </Row>
   
  </div>
);

// == Export
export default Home;
