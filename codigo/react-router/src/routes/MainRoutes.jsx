import { Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Productos from '../pages/Productos'
import Usuarios from '../pages/Usuarios'
import UsuarioDetalle from '../pages/UsuarioDetalle'

const MainRoutes = () => { 
  return(
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/usuarios" element={<Usuarios/>} />
      <Route path="/usuarios/:id" element={<UsuarioDetalle/>} />
      <Route path="/productos" element={<Productos/>} />
      <Route path="*" element={<h1>404: Ruta no encontrada</h1>} />
    </Routes>
  )
}

export default MainRoutes