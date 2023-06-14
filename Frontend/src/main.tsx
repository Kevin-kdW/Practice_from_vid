import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/layout/Layout.tsx";
import Home from "./pages/home/Home.tsx";
import Project from "./pages/project/Project.tsx";
import { AuthLoader } from "./components/layout/AuthLoader.ts";
import Projects from "./pages/projects/Projects..tsx";
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register.tsx";

const authenticatedRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "projects/:projectId",
    element: <Project />,
  },
]

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Outlet />,
        loader: AuthLoader,
        children: authenticatedRoutes
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
