import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Users from './Components/Users/Users.jsx';
import Baneos from './Components/Baneos/Baneos.jsx';
import Error404 from './Components/Error/Error.jsx';
import Index from './Components/Index/Index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/users" element={<Users />} />
        <Route path="/baneos" element={<Baneos />} />
        
        {/* Ruta comodín para el 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;