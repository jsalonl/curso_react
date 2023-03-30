import { useState } from "react"
import { Link } from "react-router-dom"
import { useDeleteUserMutation } from "../store/apis/userApi"

const UserItem = ({ user, edit }) => {
  // console.log(user)
  const { tipoId, numeroId } = user.infoIdentificacion
  const { razonSocial: empresa, cargo } = user.infoLaboral

  const [isLoadingButton, setIsLoadingButton] = useState(false)

  const [deleteUser] = useDeleteUserMutation()

  const handleDelete = async (id) => {
    // console.log(id)
    setIsLoadingButton(true)
    await deleteUser(id).unwrap()
    setIsLoadingButton(false)
  }

  return (
    <div className="col-md-3 mb-3">
      <div className="card">
        <img src={user.imagen} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{user.nombres} {user.apellidos}</h5>
          Información de identificacion
          <ul>
            <li>Tipo id: {tipoId}</li>
            <li>Numero id: {numeroId}</li>
          </ul>
          Información laboral
          <ul>
            <li>Empresa: {empresa}</li>
            <li>Cargo: {cargo}</li>
          </ul>
        </div>
        {
          edit &&
          <div className="card-footer">
            <div className="d-flex justify-content-center gap-4">
              <Link to={`/usuarios/${user._uuid}`} className="btn btn-info">Ver detalles</Link>
              <button
                className="btn btn-danger"
                disabled={isLoadingButton}
                onClick={() => handleDelete(user._uuid)}
              >
                {
                  isLoadingButton ? "Cargando" : "Eliminar"
                }
              </button>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default UserItem