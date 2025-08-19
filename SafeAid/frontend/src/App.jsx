import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import ResourceList from './pages/ResourceList';
import Contact from './pages/Contact';
import Updates from './pages/Updates';
import NavbarComponent from './components/NavbarComponent';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider, AuthContext } from './AuthContext.jsx'; // Added AuthContext to import

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <AuthProvider>
      <div>
        <NavbarComponent onSearch={handleSearch} />
        <Container className="mt-4">
          <Routes>
            
            <Route path="/" element={<Navigate to="/resources" />} />
            <Route path="/resources" element={<ResourceList searchTerm={searchTerm} />} />
            <Route
              path="/updates"
              element={
                <ProtectedRoute>
                  <Updates searchTerm={searchTerm} />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Public Route Component
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return !isAuthenticated ? children : <Navigate to="/resources" />;
};

export default App;