import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Index from './Components/Index/Index';
import Users from './Components/Users/Users';
import Error404 from './Components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="w-100 min-vh-100 d-flex flex-column bg-dark">
        <Navbar />

        <main className="flex-grow-1 d-flex align-items-center justify-content-center p-3 p-md-4">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;