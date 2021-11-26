// == Import npm
import React from 'react';
import { Image } from 'react-bootstrap';

// == Import local
import './home.scss';
import react from 'src/assets/images/react.jpg';

// == Component
const Home = () => (
  <div className="home">
    <div className="home-img">
      <Image
        fluid
        src={react}
        alt="React code example"
      />
    </div>
    <div className="home-text">Welcome to my portfolio page</div>
  </div>
);

// == Export
export default Home;
