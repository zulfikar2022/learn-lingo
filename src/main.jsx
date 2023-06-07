/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayOut from './LayOut/MainLayOut.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayOut></MainLayOut>,
      children:[
        {

        }
      ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
