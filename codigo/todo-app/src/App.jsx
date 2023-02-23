import { useEffect, useState } from 'react';

import Formulario from './components/Formulario'
import Tareas from './components/Tareas'

// const tareasIniciales = [
//   { id: 1, titulo: 'Tarea 1', descripcion: 'Descripcion 1', estado: false, prioridad: true },
//   { id: 2, titulo: 'Tarea 2', descripcion: 'Descripcion 2', estado: false, prioridad: true },
//   { id: 3, titulo: 'Tarea 3', descripcion: 'Descripcion 3', estado: true, prioridad: false },
//   { id: 4, titulo: 'Tarea 4', descripcion: 'Descripcion 4', estado: false, prioridad: false },
// ]

const tareasIniciales = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []

const app = () => {

  const [ tareas, setTareas ] = useState(tareasIniciales)

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea])
  }

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter(tarea => tarea.id !== id)
    setTareas(nuevasTareas)
  }

  const actualizarTarea = (id, tareaActualizada) => {
    const nuevasTareas = tareas.map(tarea => tarea.id === id ? tareaActualizada : tarea)
    setTareas(nuevasTareas)
  }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mt-3">ToDo App</h1>
        </div>
        <Formulario agregarTarea={agregarTarea} />
        <div className="col-md-12">
          <Tareas tareas={tareas} eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea} />
        </div>
      </div>
    </div>
    </>
  );
}

export default app