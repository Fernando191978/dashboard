import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Index from './Components/Index/Index';
import Users from './Components/Users/Users';
import Error404 from './Components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      
        <Navbar />

        
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Error404 />} />

          </Routes>
        
    </BrowserRouter>
  );
}

export default App;