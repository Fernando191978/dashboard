import CustomButton from '../CustomButton/CustomButton';

export default function Pagination({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div className="pagination-container">
      <CustomButton 
        disabled={currentPage === 1} 
        onClick={onPrev}
      >
        ← Anterior
      </CustomButton>
      
      <span className="page-info">
        Página {currentPage} de {totalPages}
      </span>
      
      <CustomButton 
        disabled={currentPage === totalPages} 
        onClick={onNext}
      >
        Siguiente →
      </CustomButton>
    </div>
  );
}