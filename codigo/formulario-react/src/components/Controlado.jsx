import { useState } from "react"

const Controlado = () => {

  // const [ titulo, setTitulo ] = useState('')
  // const [ descripcion, setDescripcion ] = useState('')
  // const [ estado, setEstado ] = useState('Pendiente')

  const [ todo, setTodo ] = useState({
    titulo: '',
    descripcion: '',
    estado: 'Pendiente'
  })

  const handleSubmit = (e) => {
    //Caputar los datos del formulario
    e.preventDefault()
    // console.log(titulo, descripcion, estado)
    console.log(todo)
  }

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container">
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