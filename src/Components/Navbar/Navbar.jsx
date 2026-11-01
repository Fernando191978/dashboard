import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Inicio</Link>
      <Link to="/users" style={{ color: 'white', marginRight: '15px' }}>Usuarios</Link>
      <Link to="/baneos" style={{ color: 'white' }}>Lista de Baneados</Link>
    </nav>
  );
};

export default Navbar;