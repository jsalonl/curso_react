import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layouts/LayoutRoot";
import Home from "../pages/Home";
import User from "../pages/users";
import AddUser from "../pages/users/Add";
import DetailUser from "../pages/users/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <User/>
          },
          {
            path: "add",
            element: <AddUser/>,
          },
          {
            path: ":userId",
            element: <DetailUser />,
          }
        ]
      }
    ]
  }
])

export default router