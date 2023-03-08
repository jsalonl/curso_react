import { createBrowserRouter } from "react-router-dom";
import UserList from "../components/users/UserList";
import UserForm from "../components/users/UserForm";
import MainLayout from "../layouts/MainLayout";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <UserList/>,
      },
      {
        path: "/add",
        element: <UserForm/>,
      },
      {
        path: "/edit/:id",
        element: <UserForm/>,
      },
      {
        path: "*",
        element: <h1>404 No encontrado</h1>,
      }
    ]
  }
])

export default MainRouter