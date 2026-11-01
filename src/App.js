import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Users from './Components/Users/Users.jsx';
import Baneos from './Components/Baneos/Baneos.jsx';
import Error404 from './Components/Error/Error.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<h1 style={{ padding: '20px' }}>Página Principal</h1>} />
        <Route path="/users" element={<Users />} />
        <Route path="/baneos" element={<Baneos />} />
        
        {/* Ruta comodín para el 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;