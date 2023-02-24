import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav nav-masthead justify-content-center">
      <NavLink className="nav-link fw-bold py-1 px-0" to="/">Inicio</NavLink>
      <NavLink className="nav-link fw-bold py-1 px-0" to="/usuarios">Usuarios</NavLink>
      <NavLink className="nav-link fw-bold py-1 px-0" to="/productos">Productos</NavLink>
    </nav>
  )
}

export default Navbar