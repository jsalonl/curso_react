import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { UserProvider } from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  // </React.StrictMode>,
)
