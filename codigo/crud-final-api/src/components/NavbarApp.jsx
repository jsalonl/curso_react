import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const NavbarApp = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>App</Navbar.Brand>
        <Nav className="mx-auto">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          <NavLink to="/usuarios" className="nav-link">Listar usuarios</NavLink>
          <NavLink to="/usuarios/agregar" className="nav-link">Agregar usuario</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarApp