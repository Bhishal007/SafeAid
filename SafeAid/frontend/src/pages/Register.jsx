import React, { useState, useContext } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';

function Register() {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Registering...');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', userData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setMessage('Registration successful! Please log in.');
      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
      setMessage('Registration failed: ' + (err.response?.data?.message || 'Try again'));
    }
  };

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Register</h2>
        {message && <Alert variant={message.includes('successful') ? 'success' : 'danger'}>{message}</Alert>}
        <Form onSubmit={handleSubmit} className="p-3 bg-light rounded shadow-sm">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="Enter name"
              required
              className="border-primary"
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
              className="border-primary"
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
              className="border-primary"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default Register;