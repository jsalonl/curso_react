import { useState } from "react"

const Controlado = () => {

  // const [ titulo, setTitulo ] = useState('')
  // const [ descripcion, setDescripcion ] = useState('')
  // const [ estado, setEstado ] = useState('Pendiente')

  const [ error, setError ] = useState('')
  const [ success, setSuccess ] = useState('')

  const [ todo, setTodo ] = useState({
    titulo: '',
    descripcion: '',
    estado: 'Pendiente',
    prioridad: true
  })

  const handleSubmit = (e) => {
    //Caputar los datos del formulario
    e.preventDefault()
    console.log(todo)
    // console.log(titulo, descripcion, estado)
    const { titulo, descripcion, estado } = todo
    if(!titulo.trim()) return setError('El titulo es obligatorio')
    if(!descripcion.trim()) return setError('La descripcion es obligatoria')
    if(!estado.trim()) return setError('El estado es obligatorio')
    setError('')
    setSuccess('Todo agregado correctamente')
    setTodo({
      titulo: '',
      descripcion: '',
      estado: 'Pendiente'
    })
    console.log(todo)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div className="container">
        {
            error !== '' && <div className="alert alert-danger">{error}</div>
        }
        {
            success !== '' && <div className="alert alert-success">{success}</div>
        }
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="titulo" 
          className="form-control mb-2" 
          placeholder="Ingrese Todo" 
          value={todo.titulo}
          onChange={handleChange}
          // onChange={ (e) => setTodo({ ...todo, titulo: e.target.value }) }
          // onChange={(e) => setTitulo(e.target.value)} 
        />
        <textarea 
          name="descripcion" 
          className="form-control mb-2" 
          placeholder="Ingrese descripcion"
          value={todo.descripcion}
          onChange={handleChange}
          // onChange={ (e) => setTodo({ ...todo, descripcion: e.target.value }) }
          // onChange={(e) => setDescripcion(e.target.value)} first
        />
        <div className="form-check mb-2">
          <label htmlFor="prioridad">Prioridad</label>
          <input 
            type="checkbox" 
            name="prioridad" 
            className="form-check-input" 
            id="prioridad"
            checked={todo.prioridad} 
            // onChange={ (e) => setTodo({ ...todo, prioridad: e.target.checked }) }
            onChange={handleChange}
          />
        </div>
        <select 
          title="estado" 
          name="estado" 
          className="form-select mb-2"
          value={todo.estado}
          onChange={handleChange}
          // onChange={ (e) => setTodo({ ...todo, estado: e.target.value }) }
          // onChange={(e) => setEstado(e.target.value)}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">Procesar</button>
      </form>
    </div>
  )
}

export default Controlado