import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import apiService from '../services/apiService';

function Contact() {
    console.log('Contact component loaded');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form submitted:', formData);
      setMessage('Thank you for your message! (Placeholder)');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setMessage('Failed to send message');
    }
  };

  return (
    <Container>
      <h2>Contact Us</h2>
      <p className="mt-3">We’d love to hear from you. Please fill out the form below.</p>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            rows={3}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
        {message && <Alert variant={message.includes('Thank') ? 'success' : 'danger'} className="mt-3">{message}</Alert>}
      </Form>
    </Container>
  );
}

export default Contact; // Must be present and correct