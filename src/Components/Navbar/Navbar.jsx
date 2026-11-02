import React, { useState } from 'react';
import { Navbar as BsNavbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/users', label: 'Usuarios' },
  { to: '/baneos', label: 'Lista de Baneados' },
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <BsNavbar expand="sm" className="custom-navbar sticky-top">
      <Container fluid className="px-4">
        <BsNavbar.Brand as={Link} to="/" className="navbar-brand">
          Dashboard - ConPila
        </BsNavbar.Brand>

        <BsNavbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleShow}
          className="custom-toggler"
        />

        <BsNavbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-secondary">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-light">
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto">
              {links.map(({ to, label, end }) => (
                <Nav.Link
                  key={to}
                  as={NavLink}
                  to={to}
                  end={end}
                  className="nav-link-custom"
                  onClick={handleClose}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </BsNavbar.Offcanvas>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;