// == Import npm
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// == Import local
import './skills.scss';

// == Component
const Skills = () => (
  <div id="skills" className="skills">
    <Row>
      <div className="skills-banner">
        MES COMPETENCES
      </div>
      <Col className="col-sm-auto col-md-auto col-lg-auto">
        <div className="skills-position">
          <div className="skills-text">
            <div className="skills-text-function">
              Voici les compétences acquises durant ma formation :
            </div>
            <div className="skills-text-content">
              Développer la partie <span className="span1">front-end</span> d’une application web ou web mobile en intégrant les recommandations de sécurité :
            </div>
            <div className="skills-text-content">
              <li>Maquetter une application</li>
              <li>Réaliser une interface statique et adaptable</li>
              <li>Développer une interface utilisateur web dynamique</li>
            </div>
            <div className="skills-text-content">
              Développer la partie <span className="span2">back-end</span> d’une application web ou web mobile en intégrant les recommandations de sécurité :
            </div>
            <div className="skills-text-content">
              <li>Créer une base de données</li>
              <li>Développer les composants d’accès aux données</li>
              <li>Développer la partie back-end d’une application web ou web mobile</li>
            </div>
          </div>
        </div>
      </Col>
    </Row>
   
  </div>
);

// == Export
export default Skills;
