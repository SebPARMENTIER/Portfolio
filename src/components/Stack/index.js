// == Import npm
import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

// == Import local
import './stack.scss';
import backStack from 'src/assets/backFrameworkStackData.js';
import databaseStack from 'src/assets/databaseStackData.js';
import designStack from 'src/assets/designStackData.js';
import editorStack from 'src/assets/editorStackData.js';
import frontStack from 'src/assets/frontFrameworkStackData.js';
import hostingStack from 'src/assets/hostingStackData.js';
import languageStack from 'src/assets/languageStackData.js';
import systemStack from 'src/assets/systemStackData.js';

// == Component
const Stack = () => (
  <div id="stack" className="stack">
    <Row>
      <div className="stack-banner">
        MES TECHNOLOGIES WEB
      </div>
      <div className="stack-kind">
        Languages
      </div>
      <div className="stack-img">
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          {languageStack.map((stack) => (
            <div className="stack-img-single">
              <Image
                id={stack.id}
                fluid
                src={stack.image}
                alt={stack.name}
              />
            </div>
          ))}
        </Col>
      </div>
      <div className="stack-kind">
        Frameworks, Platforms and Libraries
      </div>
      <div className="stack-kind-front">
        Front
      </div>
      <div className="stack-img">
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          {frontStack.map((stack) => (
            <div className="stack-img-single">
              <Image
                id={stack.id}
                fluid
                src={stack.image}
                alt={stack.name}
              />
            </div>
          ))}
        </Col>
      </div>
      <div className="stack-kind-back">
        Back
      </div>
      <div className="stack-img">
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          {backStack.map((stack) => (
            <div className="stack-img-single">
              <Image
                id={stack.id}
                fluid
                src={stack.image}
                alt={stack.name}
              />
            </div>
          ))}
        </Col>
      </div>
      <div className="stack-kind">
        Databases and ORM
      </div>
      <div className="stack-img">
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          {databaseStack.map((stack) => (
            <div className="stack-img-single">
              <Image
                id={stack.id}
                fluid
                src={stack.image}
                alt={stack.name}
              />
            </div>
          ))}
        </Col>
      </div>
      <div className="stack-kind">
        Editors and Version Control
      </div>
      <div className="stack-img">
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          {editorStack.map((stack) => (
            <div className="stack-img-single">
              <Image
                id={stack.id}
                fluid
                src={stack.image}
                alt={stack.name}
              />
            </div>
          ))}
        </Col>
      </div>
      <div className="stack-kind">
        Design
      </div>
      <div className="stack-img">
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          {designStack.map((stack) => (
            <div className="stack-img-single">
              <Image
                id={stack.id}
                fluid
                src={stack.image}
                alt={stack.name}
              />
            </div>
          ))}
        </Col>
      </div>
      <div className="stack-kind">
        Hosting
      </div>
      <div className="stack-img">
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          {hostingStack.map((stack) => (
            <div className="stack-img-single">
              <Image
                id={stack.id}
                fluid
                src={stack.image}
                alt={stack.name}
              />
            </div>
          ))}
        </Col>
      </div>
      <div className="stack-kind">
        Operating System
      </div>
      <div className="stack-img">
        <Col className="col-sm-auto col-md-auto col-lg-auto">
          {systemStack.map((stack) => (
            <div className="stack-img-single">
              <Image
                id={stack.id}
                fluid
                src={stack.image}
                alt={stack.name}
              />
            </div>
          ))}
        </Col>
      </div>
    </Row>
  </div>
);

// == Export
export default Stack;
