import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import UpdateForm from '../components/UpdateForm';
import axios from 'axios';

function Updates({ searchTerm }) {
  const [updates, setUpdates] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/updates');
        setUpdates(response.data);
      } catch (err) {
        console.error('Failed to fetch updates:', err);
      }
    };
    fetchUpdates();
  }, []);

  const handleFormSubmit = () => {
    setShowForm(false);
    // Refetch updates after submission
    const fetchUpdates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/updates');
        setUpdates(response.data);
      } catch (err) {
        console.error('Failed to fetch updates:', err);
      }
    };
    fetchUpdates();
  };

  const filteredUpdates = updates.filter(update =>
    update.resourceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    update.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    update.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h2>Community Updates</h2>
      {!showForm && (
        <Button variant="primary" onClick={() => setShowForm(true)} className="mb-3">
          Add Update
        </Button>
      )}
      {showForm && <UpdateForm onSubmitSuccess={handleFormSubmit} />}
      {filteredUpdates.length > 0 && (
        <div className="mt-4">
          <h3>Recent Updates</h3>
          <ul>
            {filteredUpdates.map((update) => (
              <li key={update._id}>
                {update.description} (Status: {update.status})
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}

export default Updates;