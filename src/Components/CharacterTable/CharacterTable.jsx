import { Table, Badge } from 'react-bootstrap';

export default function CharacterTable({ characters }) {
  return (
    <Table className="dark-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Especie</th>
          <th>Estado</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(c => (
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
  );
}