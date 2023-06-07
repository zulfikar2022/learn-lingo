/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayOut from './LayOut/MainLayOut.jsx'
import Register from './Pages/Register/Register.jsx'
import Login from './Pages/Login/Login.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayOut></MainLayOut>,
      children:[
        {
          path:'/',
          element:<HomePage></HomePage>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
