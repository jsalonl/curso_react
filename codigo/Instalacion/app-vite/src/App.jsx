import Boton from './components/botones/BotonGeneral'
import Listahabilidades from './components/listas/ListaHabilidades'
import Titulo from './components/titulos/TituloGeneral'
import FormNoControlado from './components/formularios/NoControlado'

function App() {

  const usuario = 'Diana'
  const usuarioId = 1
  const usuarioActivo = true
  const usuarioAdministrativo = true
  const habilidadesUsuario = ['HTML', 'CSS', 'JS', 'JAVA', 'REACT']

  return (
    <>
      <div className="container">
        <h1>Primera app con react</h1>
        {/* <Titulo usuarioActivo={usuarioActivo} usuario={usuario} />
        { usuarioAdministrativo && <Boton id="botonCrearUsuario" usuarioId={usuarioId} nombreBoton="CrearUsuario" clases="btn btn-success" /> }        
        <Listahabilidades habilidadesUsuario={habilidadesUsuario} />
        <Boton id="botonEditar" usuarioId={usuarioId} nombreBoton="Editar" clases="btn btn-warning" />
        <br />
        <Boton id="botonBorrar" usuarioId={usuarioId} nombreBoton="Borrar" clases="btn btn-danger" /> */}
        <FormNoControlado />
      </div>
    </>
  )
}

export default App