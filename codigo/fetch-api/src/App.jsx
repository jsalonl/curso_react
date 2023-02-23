import { useState } from 'react'
import { Button } from 'react-bootstrap'
import useFetch from './hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaUsuario from './components/usuario/TablaUsuario';

const App = () => {

  const [contador, setContador] = useState(0)

  const { data:usuarios, loading:loadingUsuarios, error:errorUsuarios } = useFetch('https://dummyjson.com/users', 'GET')

  const { data:productos, loading:loadingProductos, error:errorProductos } = useFetch('https://dummyjson.com/products', 'GET')

  console.log(usuarios)

  // Use effect con fetch
  // useEffect( () => {
  //   console.log('Se ha actualizado el contador')
  //   fetch('https://dummyjson.com/users')
  //   .then( response => {
  //     console.log(response)
  //     return response.json()
  //   })
  //   .then( data => {
  //     console.log(data)
  //     setUsuarios(data.users)
  //   })
  // },[])


  if(loadingUsuarios || loadingProductos) {
    return <h1>Cargando...</h1>
  }

  return (
    <>
      <div className="container">
        <h1>Fetch API</h1>
        <Button variant="success" className="mb-3" onClick={() => setContador(contador + 1)} >Has dado click {contador} veces</Button>
        <div className="row">
          <div className="col-md-6">
            <h3>Usuarios</h3>
            {
              errorUsuarios && <p>{errorUsuarios}</p>
            }
            <ul className="mt-3">
              {
                usuarios && usuarios.users.map((usuario) => {
                  return <li key={usuario.id}> {usuario.firstName} </li>
                })
              }
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Productos</h3>
            {
              errorProductos && <p>{errorProductos}</p>
            }
            <ul className="mt-3">
              {
                productos && productos.products.map((producto) => {
                  return <li key={producto.id}> {producto.title} </li>
                })
              }
            </ul>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TablaUsuario usuarios={usuarios} />
            </div>
          </div>
        </div>
        
      </div>
    </>
  )

}

export default App