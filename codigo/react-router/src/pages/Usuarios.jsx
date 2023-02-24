import useFetch from "../hooks/useFetch"
import { Link, useSearchParams } from "react-router-dom"

const Usuarios = () => {

  const { data, loading, error } = useFetch('https://dummyjson.com/users')

  const [searchParams, setSearchParams] = useSearchParams()

  if (loading) return <h1>Cargando...</h1>
  if (error) return <h1>Error</h1>

  const handleChange = (e) => {
    const filter = e.target.value
    if(filter){
      setSearchParams({ filter })
    }else{
      setSearchParams({})
    }
  }

  return (
    <div className="container">
      <h1>Usuarios</h1>

      <input 
        type="search" 
        className="form-control mb-3"
        placeholder="Buscar por nombre"
        value={searchParams.get("filter") || ""} 
        onChange={handleChange}
      />
      
      <table className="table table-bordered table-striped text-bg-light">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {
            data.users && data.users
            .filter((user) => {
              const filter = searchParams.get("filter")
              if(!filter) return true
              const firstName = user.firstName.toLowerCase()
              return firstName.includes(filter.toLowerCase())
            })
            .map((user) => {
              const { id, firstName, age } = user
              return (
                <tr key={id}>
                  <td>{firstName}</td>
                  <td>{age}</td>
                  <td><Link to={`/usuarios/${id}`} className="btn btn-success"> Ver </Link></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Usuarios