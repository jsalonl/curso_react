import { useSelector } from "react-redux"

const ProductList = () => {
  const productos = useSelector(state => state.products)
  const usuarios = useSelector(state => state.users)
  return(
    <>
      <h1>Lista de productos</h1>
      {
        productos.map(producto => (
          <div key={producto.id}>
            <h3>{producto.product}</h3>
          </div>
        ))
      }
      <h1>Lista de usuarios</h1>
      {
        usuarios.map(usuario => (
          <div key={usuario.id}>
            <h3>{usuario.name}</h3>
          </div>
        ))
      }
    </>
  )
}

export default ProductList