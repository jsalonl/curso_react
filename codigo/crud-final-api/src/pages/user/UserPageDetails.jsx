import { useParams } from "react-router-dom"
import UserItem from "../../components/UserItem"
import { useFetchUserByIdQuery } from "../../store/apis/userApi"

const UserPageDetails = () => {

  const { id } = useParams()

  const { data, isLoading, isError, error } = useFetchUserByIdQuery(id)
  console.log(data)

  return(
    <div className="row">
      <h1>Detalle de usuario</h1>
        {
          isLoading && <h1>Cargando...</h1>
        }
        {
          isError && <h1>Ocurrio un error</h1>
        }
        {
          data && <UserItem user={data} />
        }
    </div>
  )
}

export default UserPageDetails