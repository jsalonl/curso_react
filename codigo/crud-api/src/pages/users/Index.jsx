import { useEffect } from "react";
import { Link } from "react-router-dom";
import TableUser from "../../components/tables/TableUser"
import { useUserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";

const User = () => {

  const { isLoading, data, error, fetchData } = useFetch('https://jsonplaceholder.typicode.com/users', 'GET')

  const { setUsers } = useUserContext()

  useEffect(() => {
    if (data) {
      setUsers(data)
    }
  }, [data, setUsers])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return(
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-center mt-3">
            <h1>Users</h1>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search User" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            <Link to={'/users/add'} className="btn btn-success" type="button" id="button-addon1">Add User</Link>
          </div>
          <TableUser/>
        </div>
      </div>
    </>
  )
}

export default User