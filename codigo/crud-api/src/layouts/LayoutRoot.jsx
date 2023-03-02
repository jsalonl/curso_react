import { Outlet } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"

const LayoutRoot = () => {
  return(
    <>
      <div className="container">
        <NavigationBar/>
        <Outlet />
      </div>
    </>
  )
}

export default LayoutRoot