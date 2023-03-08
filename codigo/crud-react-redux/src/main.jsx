import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import { store } from './app/store'
import './index.css'
import MainRouter from './router/MainRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={MainRouter}>
        <App />
      </RouterProvider>
    </Provider>
  // </React.StrictMode>,
)
