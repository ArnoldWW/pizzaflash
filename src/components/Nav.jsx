import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { logOut } from "../firebase/auth";
import CartContext from "../context/CartContext";

/* array de links para el menú de navegación */
const LINKS = [
  {
    href: "/",
    text: "inicio"
  },
  {
    href: "/menu",
    text: "Menú"
  },
  {
    href: "/cart",
    text: "carrito"
  }
];

export default function Nav() {
  /* estado para mostrar o no el menú en movil */
  const [showMenu, setShowMenu] = useState(false);

  /* obtener el usuario logueado */
  const { user, isAdmin, setUser } = useContext(AuthContext);
  /* obtener el estado del carrito */
  const { cart } = useContext(CartContext);

  /* función para cerrar sesión */
  const handleClickLogout = async () => {
    await logOut();
    setUser(null);
  };

  return (
    <>
      <button
        className="block md:hidden btn-black my-5 mx-auto"
        onClick={() => setShowMenu(!showMenu)}
      >
        Mostrar menú
      </button>
      <nav
        className={`${
          showMenu ? "flex" : "hidden"
        } max-w-[1000px] mx-auto w-[90%] md:py-5 pb-5 md:flex md:flex-row flex-col justify-between items-center font-bold uppercase gap-5`}
      >
        <div className="flex md:flex-row flex-col justify-center items-center gap-5">
          {LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive, isPending }) =>
                isPending
                  ? "opacity-50"
                  : isActive
                  ? "text-orange-600"
                  : "hover:underline"
              }
            >
              {link.text}
              {link.href === "/cart" && (
                <span className="ml-1">({cart.length})</span>
              )}
            </NavLink>
          ))}
          {isAdmin && user && (
            <NavLink
              to="/admin-dashboard"
              className={({ isActive, isPending }) =>
                isPending
                  ? "opacity-50"
                  : isActive
                  ? "text-orange-600"
                  : "hover:underline"
              }
            >
              Panel de administración
            </NavLink>
          )}
        </div>
        <div className="flex md:flex-row items-center justify-center flex-col gap-5">
          {user ? (
            <div className="flex items-center gap-5">
              <p>Hola, {user?.displayName || "admin"}</p>
              <button
                type=" button"
                className="btn-orange"
                onClick={handleClickLogout}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "opacity-50"
                    : isActive
                    ? "text-orange-600"
                    : "hover:underline"
                }
              >
                Iniciar Sesión
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "opacity-50"
                    : isActive
                    ? "text-orange-600"
                    : "hover:underline"
                }
              >
                Registrarse
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
