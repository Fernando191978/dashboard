import React, { useState } from 'react';
import { Table, Button, Container, Card } from 'react-bootstrap';
import './Baneos.css';

const todosLosBaneados = [
  { id: 2, userName: 'marial', motivo: 'Spam', fecha: '2023-10-15' },
  { id: 5, userName: 'pedro_infiltrado', motivo: 'Conducta inapropiada', fecha: '2023-10-20' },
  { id: 8, userName: 'hacker_man', motivo: 'Intento de hackeo', fecha: '2023-10-25' },
  { id: 11, userName: 'pablo', motivo: 'Lenguaje ofensivo', fecha: '2023-10-26' },
  { id: 15, userName: 'troll_99', motivo: 'Acoso a otros usuarios', fecha: '2023-10-28' },
];

const pageSize = 3;

const Baneos = () => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * pageSize;
  const baneados = todosLosBaneados.slice(startIndex, startIndex + pageSize);
  const hasPrevPage = page > 1;
  const hasNextPage = startIndex + pageSize < todosLosBaneados.length;

  return (
    <Container className="page-container py-4">
      <Card className="dark-card">
        <Card.Body>
          <h2 className="section-title text-center mb-4">🚫 Usuarios Baneados</h2>

          <Table striped bordered hover responsive variant="dark" className="dark-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre de Usuario</th>
                <th>Motivo</th>
                <th>Fecha de Baneo</th>
              </tr>
            </thead>
            <tbody>
              {baneados.map((user) => (
                <tr key={user.id}>
                  <td><span className="id-badge">{user.id}</span></td>
                  <td className="user-name">{user.userName}</td>
                  <td><span className="motivo-badge">{user.motivo}</span></td>
                  <td className="fecha-cell">{user.fecha}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="pagination-container">
            <Button className="btn-dark-ghost" disabled={!hasPrevPage} onClick={() => setPage(page - 1)}>
              ← Anterior
            </Button>
            <span className="page-info">Página {page}</span>
            <Button className="btn-dark-ghost" disabled={!hasNextPage} onClick={() => setPage(page + 1)}>
              Siguiente →
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Baneos;