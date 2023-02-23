import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const ModalActualizar = ({ show, handleClose, tarea, actualizarTarea }) => {

  const { id, titulo, descripcion, estado, prioridad } = tarea

  const [tareaActualizada, setTareaActualizada] = useState({
    id: id,
    titulo: titulo,
    descripcion: descripcion,
    estado: estado,
    prioridad: prioridad,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setTareaActualizada({
      ...tareaActualizada,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    actualizarTarea(id, {
      ...tareaActualizada,
      estado: tareaActualizada.estado === 'Pendiente' ? false : true
    })
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" defaultValue={id} />
            <input
              type="text"
              name="titulo"
              className="form-control mb-2"
              placeholder="Ingrese Tarea"
              defaultValue={titulo}
              onChange={handleChange}
            />
            <textarea
              name="descripcion"
              className="form-control mb-2"
              placeholder="Ingrese descripcion"
              defaultValue={descripcion}
              onChange={handleChange}
            />
            <div className="form-check mb-2">
              <label htmlFor="prioridadActualizar">Prioridad</label>
              <input
                type="checkbox"
                name="prioridad"
                className="form-check-input"
                id="prioridadActualizar"
                defaultChecked={prioridad}
                onChange={handleChange}
              />
            </div>
            <select
              title="estado"
              name="estado"
              className="form-select mb-2"
              onChange={handleChange}
            >
              <option value="">Escoja una opcion</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Completado">Completado</option>
            </select>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">Actualizar</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalActualizar