import { useState, useEffect } from 'react';
import { Table, Button, Container, Card, Badge } from 'react-bootstrap';
import './Users.css';

export default function Users() {
  const [data, setData] = useState({ results: [], info: { count: 0 } });
  const [page, setPage] = useState(1);

  const apiPage = Math.ceil(page / 2);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${apiPage}`)
      .then(r => r.json())
      .then(setData)
      .catch(console.error);
  }, [apiPage]); 

  const startIndex = ((page - 1) % 2) * 10;
  const characters10 = data.results.slice(startIndex, startIndex + 10);

  const totalPages = Math.ceil(data.info.count / 10) || 1;

  return (
    <Container className="page-container py-4">
      <Card className="dark-card">
        <Card.Body>
          <h2 className="section-title text-center mb-4">Personajes de Rick and Morty</h2>

          <Table className="dark-table">
            <thead>
              <tr><th>ID</th><th>Nombre</th><th>Especie</th><th>Estado</th><th>Avatar</th></tr>
            </thead>
            <tbody>
              {characters10.map(c => (
                <tr key={c.id}>
                  <td><span className="id-badge">{c.id}</span></td>
                  <td className="user-name">{c.name}</td>
                  <td>{c.species}</td>
                  <td>
                    <Badge bg={c.status === 'Alive' ? 'success' : c.status === 'Dead' ? 'danger' : 'secondary'}>
                      {c.status}
                    </Badge>
                  </td>
                  <td><img src={c.image} alt={c.name} className="avatar-img" /></td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="pagination-container">
            <Button className="btn-dark-ghost" disabled={page === 1} onClick={() => setPage(page - 1)}>← Anterior</Button>
            <span className="page-info">Página {page} de {totalPages}</span>
            <Button className="btn-dark-ghost" disabled={page === totalPages} onClick={() => setPage(page + 1)}>Siguiente →</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}