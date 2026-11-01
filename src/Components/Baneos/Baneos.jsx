import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Baneos = () => {
  const todosLosBaneados = [
    { id: 2, userName: 'marial', motivo: 'Spam', fecha: '2023-10-15' },
    { id: 5, userName: 'pedro_infiltrado', motivo: 'Conducta inapropiada', fecha: '2023-10-20' },
    { id: 8, userName: 'hacker_man', motivo: 'Intento de hackeo', fecha: '2023-10-25' },
    { id: 11, userName: 'pablo', motivo: 'Lenguaje ofensivo', fecha: '2023-10-26' },
    { id: 15, userName: 'troll_99', motivo: 'Acoso a otros usuarios', fecha: '2023-10-28' },
  ];

  const [page, setPage] = useState(1);
  const [baneadosAMostrar, setBaneadosAMostrar] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  
  const pageSize = 3;

  const nextPage = () => { if (hasNextPage) setPage(page + 1); };
  const prevPage = () => { if (hasPrevPage) setPage(page - 1); };

  useEffect(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setBaneadosAMostrar(todosLosBaneados.slice(startIndex, endIndex));
    setHasNextPage(endIndex < todosLosBaneados.length);
    setHasPrevPage(page > 1);
  }, [page]);

  return (
    <div className="contenedor-principal">
      <h2>Usuarios Baneados</h2>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th> 
            <th>Nombre de Usuario</th>
            <th>Motivo</th>
            <th>Fecha de Baneo</th>
          </tr>
        </thead>
        <tbody>
          {baneadosAMostrar.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td> 
              <td>{user.userName}</td>
              <td>{user.motivo}</td>
              <td>{user.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="contenedor-paginado">
          {hasPrevPage && (
            <button className="btn btn-secondary" onClick={prevPage}>Anterior</button>
          )}
          <span className="texto-pagina">Página {page}</span>
          {hasNextPage && (
            <button className="btn btn-secondary" onClick={nextPage}>Siguiente</button>
          )}
      </div>
    </div>);
};

export default Baneos;