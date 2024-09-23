import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 
import './Projects.css'; 
import fortressImage from './images/thefortress.png';
import basketballImage from './images/3dbasketball.png';
import kingsguardImage from './images/kingsguard.png';
import { FaReact, FaUnity, FaBlender } from 'react-icons/fa'; 

const projects = [
    {
        title: '3D Mobile Basketball Game',
        image: basketballImage,
        description: 'A commissioned mobile game project for a Capstone Project. Made using Unity Engine and Blender3D.',
        date: 'November 2024',
        tools: [<FaUnity key="unity" />, <FaBlender key="blender3d" />], 
        link: ''
    },
    {
        title: 'The Fortress Website',
        image: fortressImage,
        description: 'A commissioned website development project for a pageantry coaching service using React Framework.',
        date: 'July 2024 - August 2024',
        tools: [<FaReact key="react" />], 
        link: 'https://www.thefortressph.org' 
    },
    {
        title: 'Kingsguard',
        image: kingsguardImage,
        description: 'A 2D top-down video game developed in Unity Game Engine made during the KenneyJam2023. Ranked #104 in 453 entries.',
        date: 'July 2023',
        tools: [<FaUnity key="unity" />, <FaBlender key="blender3d" />], 
        link: 'https://ybtozen.itch.io/kingsguard' 
    },
    {
      title: 'CNSC Supply And Equipement Management System',
      image: kingsguardImage,
      description: 'A commissioned desktop application developed using .Net Framework and MySQL Database for Capstone Project.',
      date: 'July 2023',
      tools: [''], 
      link: '' 
    },
    {
      title: 'AquaGuard: Fishpond pH,Ammonia Monitoring Automatic Filtration And Ultrasonic Anti-Theft With Mobile Application',
      image: kingsguardImage,
      description: 'A commissioned internet-of-things project integrating sensors for real-time monitoring and controlwith a mobile application for Student Final Project.',
      date: 'May 2024',
      tools: [''], 
      link: '' 
    },
    {
      title: 'PreDePest',
      image: kingsguardImage,
      description: 'A commissioned project that utilizes YOLOv8 Object Detection to identify pests in rice fields, storing data in Firebase for data storage and analysis. The application aims to determine the different kind of pest present in the Philippines in accordance with weather and time.',
      date: 'December 2023 - April 2024',
      tools: [''], 
      link: '' 
    }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">Projects Made</h2>
        <Row className="justify-content-center"> 
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4 d-flex align-items-stretch"> 
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="project-date">{project.date}</div> 
                  <div className="project-tools mb-3">{project.tools}</div> 
                  {project.link && (
                    <Button 
                      variant="primary" 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-auto"
                    >
                      More
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
