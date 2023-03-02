import { Link } from "react-router-dom"
import { useUserContext } from "../../contexts/UserContext"

const TableUser = () => {

  const { users } = useUserContext()

  return(
    <>
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
        <table className="table table-bordered table-striped table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                  <Link to={`/users/${user.id}`} className="btn btn-primary btn-sm">Detail</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </>
  )
}

export default TableUser