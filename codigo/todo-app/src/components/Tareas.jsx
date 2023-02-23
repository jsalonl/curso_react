import Tarea from './Tarea'

const Tareas = ({ tareas, eliminarTarea, actualizarTarea }) => {
  return (
    <>
    <h1 className="text-center">Lista de tareas</h1>
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea} />
      ))}
      {
        tareas.length === 0 && (
          <h4 className="text-center">Sin tareas</h4>
        )
      }
    </>
  )
}

export default Tareas