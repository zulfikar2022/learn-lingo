/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayOut from "./LayOut/MainLayOut.jsx";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Instructors from "./Pages/Instructors/Instructors.jsx";
import Classes from "./Pages/Classes/Classes.jsx";
import StudentDashboard from "./Pages/DashBoards/StudentDashboard.jsx";
import PrivateRoute from "./SecretRoutes/PrivateRoute.jsx";
import AdminDashboard from "./Pages/DashBoards/AdminDashboard.jsx";
import InstructorDashboard from "./Pages/DashBoards/InstructorDashboard.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";



const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path:'instructors',
        element:<Instructors></Instructors>
      },
      {
        path:'classes',
        element:<Classes></Classes>
      },
      {
        path:'studentDashboard',
        element:<PrivateRoute><StudentDashboard></StudentDashboard></PrivateRoute>
      },
      {
        path:'adminDashboard',
        element:<PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>
      },
      {
        path:'instructorDashboard',
        element:<PrivateRoute><InstructorDashboard></InstructorDashboard></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {" "}
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
