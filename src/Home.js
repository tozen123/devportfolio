import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram } from 'react-icons/fa';
import './Home.css'; // Make sure to have the CSS file with the styles

import myImage from './images/my_image.jpg';

const Home = () => {
  return (
    <section id="home" className="home-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-left">
            <h1>
              Hello There,
              <br /> I'm <span className="highlight">Christian Serwelas</span>
            </h1>
            <p>I'm a <span className="highlight">Software Developer</span></p>
         
            <div className="social-icons mt-4">
              <a href="https://www.linkedin.com/in/christianserwelas/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/tozen123" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/serwekun/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img src={myImage} alt="Profile" className="profile-image rounded-circle" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
