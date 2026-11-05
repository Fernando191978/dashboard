import { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import CharacterTable from '../CharacterTable/CharacterTable'; // Asumiendo que los guardaste en Components/UI
import Pagination from '../Pagination/Pagination';
import './Users.css';

export default function Users() {
  // Estados (Lógica del Código 2)
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch (Lógica del Código 2)
  useEffect(() => {
    const fetchRickAndMorty = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        
        if (!response.ok) throw new Error('Error al traer personajes');

        const json = await response.json();
        setCharacters(json.results || []);
        setTotalPages(json.info.pages || 1); // La API nos dice cuántas páginas hay en total
      } catch (error) {
        console.error('Error al traer los personajes:', error.message);
      }
    };

    fetchRickAndMorty();
  }, [page]);

  return (
    <Container className="page-container py-4">
      <Card className="dark-card">
        <Card.Body>
          <h2 className="section-title text-center mb-4">Personajes de Rick and Morty</h2>

          {/* 1. MAP CORRECTO (mapea el estado directo de la API) */}
          <CharacterTable characters={characters} />

          {/* 2. PAGINADOR CORRECTO (usa tu componente y deshabilita el Siguiente) */}
          <Pagination 
            currentPage={page} 
            totalPages={totalPages} 
            onPrev={() => setPage(page - 1)} 
            onNext={() => setPage(page + 1)} 
          />
          
        </Card.Body>
      </Card>
    </Container>
  );
}