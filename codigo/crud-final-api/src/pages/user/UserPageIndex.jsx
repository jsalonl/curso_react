import UserItem from "../../components/UserItem"
import { useFetchUsersQuery } from "../../store/apis/userApi"

const UserPageIndex = () => {

  const { data, isLoading, isError, error } = useFetchUsersQuery()

  return(
    <div className="row">
      <h1>Listado de usuarios</h1>
        {
          isLoading && <h1>Cargando...</h1>
        }
        {
          isError && <h1>Ocurrio un error</h1>
        }
        {
          data && data.items.length>0 && data.items.map((user) =>(
            <UserItem user={user} edit={true} key={user._uuid}/>
          ))
        }
    </div>
  )
}

export default UserPageIndex