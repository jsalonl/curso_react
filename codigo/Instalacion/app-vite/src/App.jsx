// import Boton from './components/botones/BotonGeneral'
// import Listahabilidades from './components/listas/ListaHabilidades'
// import Titulo from './components/titulos/TituloGeneral'
// import FormNoControlado from './components/formularios/NoControlado'
import { useState } from 'react'
import FormControlado from './components/formularios/Controlado'
import ListaUsuarios from './components/usuario/ListaUsuarios'

//Ejemplo
const usuariosIniciales = [
  { id:1, nombres: "nombre 1", apellidos: "apellido 1", salario: "4000000", estado:"activo" },
  { id:2, nombres: "nombre 2", apellidos: "apellido 2", salario: "2300000", estado:"inactivo" },
]

function App() {

  // const usuario = 'Diana'
  // const usuarioId = 1
  // const usuarioActivo = true
  // const usuarioAdministrativo = true
  // const habilidadesUsuario = ['HTML', 'CSS', 'JS', 'JAVA', 'REACT']

  const [ usuarios, setUsuarios ] = useState(usuariosIniciales)

  const agregarUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario])
  }

  const eliminarUsuario = (id) => {
    const usuariosFiltrados = usuarios.filter( usuario => usuario.id !== id)
    setUsuarios(usuariosFiltrados)
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-3 text-center">Primera app con react</h1>
        {/* <Titulo usuarioActivo={usuarioActivo} usuario={usuario} />
        { usuarioAdministrativo && <Boton id="botonCrearUsuario" usuarioId={usuarioId} nombreBoton="CrearUsuario" clases="btn btn-success" /> }        
        <Listahabilidades habilidadesUsuario={habilidadesUsuario} />
        <Boton id="botonEditar" usuarioId={usuarioId} nombreBoton="Editar" clases="btn btn-warning" />
        <br />
        <Boton id="botonBorrar" usuarioId={usuarioId} nombreBoton="Borrar" clases="btn btn-danger" /> */}
        {/* <FormNoControlado /> */}
        <FormControlado agregarUsuario={agregarUsuario} />
        <ListaUsuarios usuarios={usuarios} eliminarUsuario={eliminarUsuario}/>
      </div>
    </>
  )
}

export default App