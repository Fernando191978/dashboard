import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const Users = () => {
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

  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  
  const pageSize = 5;

  const nextPage = () => { if (hasNextPage) setPage(page + 1); };
  const prevPage = () => { if (hasPrevPage) setPage(page - 1); };

  useEffect(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setUsers(todosLosUsuarios.slice(startIndex, endIndex));
    setHasNextPage(endIndex < todosLosUsuarios.length);
    setHasPrevPage(page > 1);
  }, [page]);

  return (
    <div className="contenedor-principal">
      <h2>Lista de Usuarios</h2>
    
      <Table className="tabla-personalizada">
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
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.banned ? 'Baneado' : 'Activo'}</td>
              <td>
                <Button variant="primary" size="sm">Editar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="contenedor-paginado">
        {hasPrevPage && <Button variant="secondary" onClick={prevPage}>Anterior</Button>}
        <span className="texto-pagina">Página {page}</span>
        {hasNextPage && <Button variant="secondary" onClick={nextPage}>Siguiente</Button>}
      </div>
    </div>
  );
};

export default Users;