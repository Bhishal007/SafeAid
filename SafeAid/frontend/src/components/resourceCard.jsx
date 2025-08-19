import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ResourceCard = ({ resource }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{resource.name}</Card.Title>
          <Card.Text>
            <strong>Type:</strong> {resource.type}<br />
            <strong>Address:</strong> {resource.address}<br />
            <strong>Status:</strong> {resource.status}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ResourceCard;