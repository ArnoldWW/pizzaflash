import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import LogIn from "./pages/login.jsx";
import SingUp from "./pages/SingUp.jsx";
import Menu, { loader as menuLoader } from "./pages/Menu.jsx";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthContext.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/signup",
        element: <SingUp />
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </StrictMode>
);
