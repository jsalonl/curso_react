import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "../../features/users/userSlice"

const UserList = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }

  return(
    <>
    <h1>UserList</h1>
    {
      users.map((user) => {
        return(
          <div key={user.id}>
            <h3>{user.name}</h3>
            <div className="d-flex justify-content-center gap-2">
              <button className="btn btn-danger" onClick={ () => handleDelete(user.id) }>Eliminar</button>
              <Link to={`/edit/${user.id}`} className="btn btn-warning" >Editar</Link>
            </div>
          </div>
        )
      })
    }
    </>
  )
}

export default UserList