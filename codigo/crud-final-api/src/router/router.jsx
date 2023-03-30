import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import HomePage from "../pages/HomePage"
import UserPageAdd from "../pages/user/UserPageAdd"
import UserPageDetails from "../pages/user/UserPageDetails"
import UserPageIndex from "../pages/user/UserPageIndex"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "usuarios",
        children: [
          {
            index: true,
            element: <UserPageIndex />
          },
          {
            path: "agregar",
            element: <UserPageAdd />
          },
          {
            path: ":id",
            element: <UserPageDetails />
          }
        ]
      }
    ]
  },
  {
    path: "*",
    element: <h1>Error 404 contenido no encontrado</h1>
  }

])

export default router