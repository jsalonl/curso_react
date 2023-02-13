import { useRef, useState } from 'react'

const NoControlado = () => {

  const form = useRef(null)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    //Caputar los datos del formulario
    e.preventDefault()
    setError('')
    // console.log(form.current)
    // console.log(new FormData(form.current))
    const formData = new FormData(form.current)
    // console.log([...formData.entries()])
    
    // const dataObject = Object.fromEntries([...formData.entries()])
    const dataObject = Object.fromEntries(formData.entries())
    // console.log(dataObject)

    const { titulo, descripcion, estado } = dataObject
    
    // Validar los datos
    if(!titulo.trim()) return setError('Ingrese el titulo')
    if(!descripcion.trim()) return setError('Ingrese la descripcion')
    if(!estado.trim()) return setError('Ingrese el estado')
    
    // Enviar los datos al servidor
    console.log(titulo, descripcion, estado)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} ref={form}>
        <input type="text" name="titulo" className="form-control mb-2" placeholder="Ingrese Todo" />
        <textarea name="descripcion" className="form-control mb-2" placeholder="Ingrese descripcion" />
        <select title="estado" name="estado" className="form-select mb-2">
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">Procesar</button>
        {
          error !== '' && <div className="alert alert-danger mt-2">{error}</div>
        }
      </form>
    </div>
  )
}

export default NoControlado