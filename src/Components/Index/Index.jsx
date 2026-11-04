
import React from 'react';
import { Card } from 'react-bootstrap';
import './Index.css';

const Index = () => {
  return (
    <Card className="dark-card text-center p-4">
      <Card.Body>
        <Card.Title>¡Hola!</Card.Title>
        <Card.Text>Bienvenidos al Dashboard</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Index;
