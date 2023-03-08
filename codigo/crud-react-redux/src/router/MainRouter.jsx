import { createBrowserRouter } from "react-router-dom";
import UserList from "../components/users/UserList";
import UserForm from "../components/users/UserForm";
import MainLayout from "../layouts/MainLayout";
import ProductList from "../components/products/ProductList";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "users",
        children: [
          {
            index: true,
            element: <UserList/>,
          },
          {
            path: "add",
            element: <UserForm/>,
          },
          {
            path: "edit/:id",
            element: <UserForm/>,
          }
        ]
      },
      {
        path: "products",
        element: <ProductList/>
      },
      {
        path: "*",
        element: <h1>404 No encontrado</h1>,
      }
    ]
  },
])

export default MainRouter