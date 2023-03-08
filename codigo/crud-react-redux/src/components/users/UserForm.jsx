import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, editUser } from "../../features/users/userSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"

const UserForm = () => {

  const [ user, setUser ] = useState({
    id: "",
    name: "",
    email: ""
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const users = useSelector(state => state.users)

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email } = user
    if(!name.trim() || !email.trim()) return alert("Los campos son obligatorios")
    
    if(params.id){
      dispatch(editUser(user))
    }else{
      dispatch(addUser({
        ...user,
        id: uuid()
      }))
    }
    
    navigate("/")
  }

  useEffect(() => {
    if(params.id){
      const userFound = users.find(user => user.id === params.id)
      setUser(userFound)
    }
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input 
          type="text" 
          className="form-control" 
          name="name" 
          value={user.name}
          onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control" 
          name="email" 
          value={user.email}
          onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default UserForm