import { Outlet } from "react-router-dom"
import NavbarApp from "../components/NavbarApp"

const MainLayout = () => {
  return(
    <>
    <NavbarApp/>
    <div className="container">
      <Outlet/>
    </div>
    </>
    
  )
}

export default MainLayout