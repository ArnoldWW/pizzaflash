import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import LogIn from "./pages/login.jsx";
import SingUp from "./pages/SingUp.jsx";
import Cart from "./pages/Cart.jsx";
import Menu, { loader as menuLoader } from "./pages/Menu.jsx";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

import "./index.css";

//rutas de la aplicacion
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
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
