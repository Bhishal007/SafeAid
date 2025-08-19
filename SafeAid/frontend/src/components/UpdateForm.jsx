import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const UpdateForm = ({ onSubmitSuccess }) => {
  const [updateData, setUpdateData] = useState({
    resourceId: '',
    userId: 'tempUserId', // Placeholder
    status: 'Open',
    description: '',
  });
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/updates', updateData);
      setMessage('Update submitted successfully!');
      setUpdateData({ resourceId: '', userId: 'tempUserId', status: 'Open', description: '' });
      if (onSubmitSuccess) onSubmitSuccess(); // Callback to parent
    } catch (err) {
      setMessage('Failed to submit update');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="formResourceId" className="mb-3">
            <Form.Label>Resource ID</Form.Label>
            <Form.Control
              type="text"
              name="resourceId"
              value={updateData.resourceId}
              onChange={handleInputChange}
              placeholder="Enter Resource ID"
              required
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formStatus" className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={updateData.status}
              onChange={handleInputChange}
              required
            >
              <option value="Open">Open</option>
              <option value="Full">Full</option>
              <option value="Closed">Closed</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}>
          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={updateData.description}
              onChange={handleInputChange}
              placeholder="Enter update description"
              rows={3}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Submit Update
      </Button>
      {message && <Alert variant={message.includes('success') ? 'success' : 'danger'} className="mt-3">{message}</Alert>}
    </Form>
  );
};

export default UpdateForm;