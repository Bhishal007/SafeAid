import React, { useState, useContext } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Logging in...');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', credentials, {
        headers: { 'Content-Type': 'application/json' },
      });
      login(response.data.token);
      setMessage('Login successful!');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setMessage('Login failed: ' + (err.response?.data?.message || 'Invalid credentials'));
    }
  };

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        {message && <Alert variant={message.includes('successful') ? 'success' : 'danger'}>{message}</Alert>}
        <Form onSubmit={handleSubmit} className="p-3 bg-light rounded shadow-sm">
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={credentials.email}
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
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
              className="border-primary"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;