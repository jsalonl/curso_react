import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-1">
        <h1 className="display-5 fw-bold text-center">Welcome</h1>
        <p className="fs-4">Here you create, read, update and delete and API.</p>
        <div className="d-flex justify-content-center">
          <NavLink to={'/users'} className="btn btn-primary btn-lg" type="button">Go to action</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home