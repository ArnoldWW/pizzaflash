import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import LogIn from "./pages/login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Cart from "./pages/Cart.jsx";
import Menu, { loader as menuLoader } from "./pages/Menu.jsx";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

import "./index.css";
import AdminDashboard, {
  loader as adminDashboardLoader
} from "./pages/AdminDashboard.jsx";

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
        element: <SignUp />
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
        loader: adminDashboardLoader
      }
    ]
  }
]);

/*  crear el root del proyecto */
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
