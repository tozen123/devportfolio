// src/Skills.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Skills.css'; 
import { FaPython, FaJava, FaJs, FaGithub, FaPaintBrush, FaMicrochip, FaReact, FaUnity, FaNodeJs } from 'react-icons/fa';
import { SiCsharp, SiMysql, SiFirebase, SiArduino, SiBlender, SiVisualstudio, SiAndroidstudio, SiNetlify, SiFlask, SiDjango, SiBootstrap, SiJetbrains } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title">Skills</h2>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="skill-card text-center">
              <Card.Body>
                <h4>Programming Languages</h4>
                <ul className="skills-list">
                  <li><FaPython /> Python</li>
                  <li><FaJava /> Java</li>
                  <li><FaJs /> JavaScript</li>
                  <li><SiCsharp /> C#</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="skill-card text-center">
              <Card.Body>
                <h4>Tools</h4>
                <ul className="skills-list">
                  <li><SiVisualstudio /> Visual Studio</li>
                  <li><SiAndroidstudio /> Android Studio</li>
                  <li><FaUnity /> Unity3D</li>
                  <li><SiBlender /> Blender3D</li>
                  <li><SiJetbrains /> JetBrains IDE's</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="skill-card text-center">
              <Card.Body>
                <h4>Frameworks</h4>
                <ul className="skills-list">
                  <li><FaReact /> ReactJS</li>
                  <li><SiNetlify /> .Net Framework</li>
                  <li><SiDjango /> Django</li>
                  <li><SiFlask /> Flask</li>
                  <li><SiBootstrap /> Bootstrap</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="skill-card text-center">
              <Card.Body>
                <h4>IoT</h4>
                <ul className="skills-list">
                  <li><SiArduino /> Arduino</li>
                  <li><FaMicrochip /> ESP</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="skill-card text-center">
              <Card.Body>
                <h4>Database Management</h4>
                <ul className="skills-list">
                  <li><SiMysql /> MySQL</li>
                  <li><SiFirebase /> Firebase</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="skill-card text-center">
              <Card.Body>
                <h4>Technical</h4>
                <ul className="skills-list">
                  <li><FaGithub /> GitHub</li>
                  <li><FaPaintBrush /> Graphics Design</li>
                  <li>Microsoft Office</li>
                  <li>Adobe (Photoshop, After Effects, Premiere Pro)</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card className="skill-card text-center">
              <Card.Body>
                <h4>Languages</h4>
                <ul className="skills-list">
                  <li>English (Fluent)</li>
                  <li>Tagalog (Native)</li>
                  <li>Mandarin (Basic)</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
