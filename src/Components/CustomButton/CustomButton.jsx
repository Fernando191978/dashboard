import { Button } from 'react-bootstrap';

export default function CustomButton({ onClick, disabled, children, variant = "dark-ghost" }) {
  return (
    <Button 
      className={`btn-${variant}`} 
      disabled={disabled} 
      onClick={onClick}
    >
      {children}
    </Button>
  );
}