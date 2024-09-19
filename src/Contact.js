import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css'; 

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
        <Row className="justify-content-center"> 
          <Col md={6} className="d-flex justify-content-center"> 
            <Form className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label><i className="bi bi-person-fill"></i> Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label><i className="bi bi-envelope-fill"></i> Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label><i className="bi bi-telephone-fill"></i> Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label><i className="bi bi-chat-fill"></i> Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="submit" className="btn-submit">
                Submit <i className="bi bi-send-fill"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
