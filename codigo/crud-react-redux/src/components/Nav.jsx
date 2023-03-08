import { Link, NavLink } from "react-router-dom"

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
          <NavLink to="/users" className="nav-link text-white">Usuarios</NavLink>
          <NavLink to="/users/add" className="nav-link text-white">Agregar Usuario</NavLink>
          <NavLink to="/products" className="nav-link text-white">Productos</NavLink>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav