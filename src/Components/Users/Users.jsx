import React, { useState } from 'react';
import { Table, Button, Container, Card, Badge } from 'react-bootstrap';
import './Users.css';

const todosLosUsuarios = [
  { id: 1, userName: 'juanp', email: 'juan@mail.com', banned: false },
  { id: 2, userName: 'marial', email: 'maria@mail.com', banned: true },
  { id: 3, userName: 'carlosg', email: 'carlos@mail.com', banned: false },
  { id: 4, userName: 'anap', email: 'ana@mail.com', banned: false },
  { id: 5, userName: 'pedro', email: 'pedro@mail.com', banned: true },
  { id: 6, userName: 'lucia', email: 'lucia@mail.com', banned: false },
  { id: 7, userName: 'mario', email: 'mario@mail.com', banned: false },
  { id: 8, userName: 'sofia', email: 'sofia@mail.com', banned: true },
  { id: 9, userName: 'diego', email: 'diego@mail.com', banned: false },
  { id: 10, userName: 'laura', email: 'laura@mail.com', banned: false },
];

const pageSize = 5;

const Users = () => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * pageSize;
  const users = todosLosUsuarios.slice(startIndex, startIndex + pageSize);
  const hasPrevPage = page > 1;
  const hasNextPage = startIndex + pageSize < todosLosUsuarios.length;

  return (
    <Container className="page-container py-4">
      <Card className="dark-card">
        <Card.Body>
          <h2 className="section-title text-center mb-4">👥 Lista de Usuarios</h2>

          <Table striped bordered hover responsive variant="dark" className="dark-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre de Usuario</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td><span className="id-badge">{user.id}</span></td>
                  <td className="user-name">{user.userName}</td>
                  <td className="email-cell">{user.email}</td>
                  <td>
                    <Badge bg={user.banned ? 'danger' : 'success'}>
                      {user.banned ? 'Baneado' : 'Activo'}
                    </Badge>
                  </td>
                  <td>
                    <Button size="sm" className="btn-dark-ghost">Editar</Button>
                  </td>
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

export default Users;