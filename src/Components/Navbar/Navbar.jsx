import { useState } from 'react';
import { Navbar as BsNavbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/users', label: 'Usuarios' },
];

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <BsNavbar expand="sm" className="custom-navbar sticky-top">
      <Container fluid className="px-4">
        <span className="navbar-brand mb-0">Dashboard - ConPila</span>

        <BsNavbar.Toggle className="custom-toggler" onClick={() => setShow(true)} />

        <BsNavbar.Offcanvas
          placement="end"
          show={show}
          onHide={() => setShow(false)}
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary">
            <Offcanvas.Title className="text-light">Menú</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto">
              {links.map(({ to, label, end }) => (
                <Nav.Link key={to} as={NavLink} to={to} end={end} className="nav-link-custom" onClick={() => setShow(false)}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </BsNavbar.Offcanvas>
      </Container>
    </BsNavbar>
  );
}