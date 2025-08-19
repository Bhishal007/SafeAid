import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import ResourceCard from '../components/resourceCard';
function ResourceList() 
{
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Shelter',
    address: '',
    status: 'Open',
    createdBy: 'tempUserId',
  });

  useEffect(() => {
    const fetchResources = async () => {
      try {
        
        const response = await axios.get('http://localhost:5000/api/resources');
        setResources(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch resources');
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/resources', formData);
      setResources([...resources, response.data]);
      setFormData({ name: '', type: 'Shelter', address: '', status: 'Open', createdBy: 'tempUserId' });
      setShowForm(false);
      setError(null);
    } catch (err) {
      setError('Failed to add resource');
    }
  };

  if (loading) return <Spinner animation="border" />;
  if (error && !showForm) return <Alert variant="danger">{error}</Alert>;

 return (
  <Container>
    <h2>Available Resources</h2>
    {!showForm && (
      <Button variant="primary" onClick={() => setShowForm(true)} className="mb-3">
        Add Resource
      </Button>
    )}
    {showForm && (
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
              >
                <option value="Shelter">Shelter</option>
                <option value="Medical">Medical</option>
                <option value="Food">Food</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={6}>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={formData.status}
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
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
        <Button variant="secondary" onClick={() => setShowForm(false)} className="mt-3 ms-2">
          Cancel
        </Button>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      </Form>
    )}
    <Row>
      {resources.map((resource) => (
        <ResourceCard key={resource._id} resource={resource} />
      ))}
    </Row>
  </Container>
);
}

export default ResourceList;