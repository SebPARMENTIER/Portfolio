// == Import npm
import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

// == Import local
import './home.scss';
import react from 'src/assets/images/react.jpg';

// == Component
const Home = () => (
  <div className="home">
    <Row>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
        <div className="home-position">
          <div className="home-left">
            <div className="home-text-hello">Bonjour, je suis <span className="span3" >Sébastien PARMENTIER</span>.</div>
            <div className="home-text-function">
              Je suis <span className="span1">développeur web fullstack</span> basé à Limoges.
            </div>
            <div className="home-text-content">
              J'ai suivi une formation de développeur Web et Web Mobile Fullstack <span className="span2">JavaScrpit</span> en 2021 chez O'clock, école labellisée Grande Ecole du Numérique. Côté front, je suis spécialisé <span className="span2">React JS</span> avec <span className="span2">Redux</span>. Côté back, j'ai acquis un savoir-faire avec <span className="span2">Node.js, Express.js</span>. Concernant les systèmes de gestion de base de données, je sais utiliser <span className="span2">Postgres</span> avec des requêtes <span className="span2">SQL</span> ou avec l'ORM <span className="span2">Sequelize</span>.
            </div>
          </div>
          <div className="home-right">
            <div className="home-img">
              <Image
                fluid
                src={react}
                alt="React code example"
              />
            </div>
          </div>
        </div>
      </Col>
    </Row>
   
  </div>
);

// == Export
export default Home;
