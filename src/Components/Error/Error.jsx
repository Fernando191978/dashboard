import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.css';

const Error404 = () => (
  <Container className="text-center py-4">
    <h1 className="error-code">404</h1>
    <p className="error-message">Página no encontrada</p>

    <img
      src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
      alt="404 Not Found"
      className="error-image"
    />

    <div>
      <Button as={Link} to="/" className="btn-dark-ghost mt-4 px-4 py-2">
        ← Volver al inicio
      </Button>
    </div>
  </Container>
);

export default Error404;