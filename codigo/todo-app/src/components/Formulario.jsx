import { useState } from "react"
import Swal from "sweetalert2"

const Controlado = ({agregarTarea}) => {

  const [ tarea, setTarea ] = useState({
    titulo: '',
    descripcion: '',
    estado: 'Pendiente',
    prioridad: true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { titulo, descripcion, estado } = tarea
    if(!titulo.trim() || !descripcion.trim() || !estado.trim()) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
      })
    }

    setTarea({
      titulo: '',
      descripcion: '',
      estado: 'Pendiente',
      prioridad: false
    })

    agregarTarea({
      id: Date.now(),
      ...tarea,
      estado: tarea.estado === 'Completado'
    })

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tarea agregada',
      showConfirmButton: false,
      timer: 1500
    })

  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setTarea({
      ...tarea,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div className="col-md-12">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="titulo" 
          className="form-control mb-2" 
          placeholder="Ingrese Tarea" 
          value={tarea.titulo}
          onChange={handleChange}
        />
        <textarea 
          name="descripcion" 
          className="form-control mb-2" 
          placeholder="Ingrese descripcion"
          value={tarea.descripcion}
          onChange={handleChange}
        />
        <div className="form-check mb-2">
          <label htmlFor="prioridad">Prioridad</label>
          <input 
            type="checkbox" 
            name="prioridad" 
            className="form-check-input" 
            id="prioridad"
            checked={tarea.prioridad} 
            onChange={handleChange}
          />
        </div>
        <select 
          title="estado" 
          name="estado" 
          className="form-select mb-2"
          value={tarea.estado}
          onChange={handleChange}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>
        <button type="submit" className="btn btn-success">Agregar</button>
      </form>
    </div>
  )
}

export default Controlado