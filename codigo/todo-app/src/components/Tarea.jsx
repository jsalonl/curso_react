const Tarea = ({ tarea, eliminarTarea }) => {
  const { id, titulo, descripcion, estado, prioridad } = tarea
  return (
    <div className="card mb-3">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-start ">
          <h5 className={`card-title ${estado && 'text-decoration-line-through'}`}>{titulo}</h5>
          <span className="badge bg-primary">{prioridad && 'prioridad'}</span>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{descripcion}</p>
        <div className="d-flex gap-2 justify-content-center align-items-center">
            <button className="btn btn-warning">Editar</button>
            <button onClick={ () => eliminarTarea(id) } className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default Tarea