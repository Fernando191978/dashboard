import React, { useState, useEffect } from 'react';
import { Spinner, Alert, Card, Button } from 'react-bootstrap';
import './Index.css';

const Index = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/1');
        if (!response.ok) throw new Error('Error al cargar los datos');
        setData(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Spinner animation="border" variant="info" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="dark-card p-4 w-100" style={{ maxWidth: '450px' }}>
      <h2 className="section-title text-center mb-4 fs-4">Bienvenido al Dashboard</h2>

      <div className="text-center mb-4">
        <Card.Img src={data.image} alt={data.name} className="character-img" />
      </div>

      <div className="text-center">
        <h3 className="text-info mb-4">{data.name}</h3>

        <div className="character-info">
          <p><strong>Especie:</strong> {data.species}</p>
          <p><strong>Estado:</strong> {data.status}</p>
          <p><strong>Género:</strong> {data.gender}</p>
          <p><strong>Origen:</strong> {data.origin?.name || 'Desconocido'}</p>
        </div>

        <Button className="btn-custom mt-3 px-4 py-2 w-100">Ver más detalles</Button>
      </div>
    </div>
  );
};

export default Index;