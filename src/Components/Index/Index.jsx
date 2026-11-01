import React, { useState, useEffect } from 'react';
import { Container, Spinner, Alert, Card, Button, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const response = await fetch('https://rickandmortyapi.com/api/character/1');
        if (!response.ok) throw new Error('Error al cargar los datos');
        
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  if (error) return <Container className="mt-5"><Alert variant="danger">{error}</Alert></Container>;

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Bienvenido al Dashboard</h2>
      
      <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
          <Card className="text-center shadow-sm">
            <Card.Header as="h5" className="bg-primary text-white">
              Datos traídos desde la API de Rick and Morty
            </Card.Header>
            
           
            <div className="d-flex justify-content-center mt-3">
              <Card.Img 
                variant="top" 
                src={data.image} 
                alt={data.name} 
                style={{ width: '150px', borderRadius: '50%' }} 
              />
            </div>

            <Card.Body>
              <Card.Title className="mb-3">{data.name}</Card.Title>
              <Card.Text>
                <strong>Especie:</strong> {data.species} <br />
                <strong>Estado:</strong> {data.status} <br />
                <strong>Género:</strong> {data.gender} <br />
                <strong>Origen:</strong> {data.origin?.name || 'Desconocido'}
              </Card.Text>
              <Button variant="primary">Ver más detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;