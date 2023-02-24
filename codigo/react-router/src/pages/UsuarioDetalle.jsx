import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const UsuarioDetalle = () => {

  const { id } = useParams()
  
  const { data, loading, error } = useFetch(`https://dummyjson.com/users/${id}`)
  
  if (loading) return <h1>Cargando...</h1>
  if (error) return <h1>Error</h1>
  
  const { image, firstName, lastName, university } = data
  
  return (
    <div className="container">
      <h1>Usuario Detalle</h1>
      <div className="row">
        <div className="col-md-12">
        <div className="card text-bg-secondary">
          <img src={image} className="card-img-top" alt={firstName} />
          <div className="card-body">
            <h5 className="card-title">{firstName} {lastName}</h5>
            <p className="card-text">{university}</p>
            <Link to="/usuarios" className="btn btn-primary">Regresar</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UsuarioDetalle