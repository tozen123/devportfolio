import React from 'react';
import { Container} from 'react-bootstrap'; 

function About() {
  return (
      <>

          <section id="about" className="about-section d-flex align-items-center">
              <Container className="text-center">
                  <h1 className="mb-4">About Me</h1>
                  <p className="about-text">
                      I am a dedicated software developer with a passion for creating innovative digital solutions.
                      Currently pursuing a BS in Information Technology, I have experience in freelancing commissioned game development ranging from mobile to desktop platforms, IoT projects, and web applications.
                      I am committed to continuous learning and delivering high-quality work.

                  </p>
              </Container>
          </section>
      </>
    
  );
}

export default About;
