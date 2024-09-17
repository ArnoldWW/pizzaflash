import { Link, NavLink } from "react-router-dom";

const LINKS = [
  {
    href: "/",
    text: "inicio"
  },
  {
    href: "/menu",
    text: "Menu"
  },
  {
    href: "/cart",
    text: "carrito"
  }
];

export default function Nav() {
  return (
    <nav className="max-w-[1000px] mx-auto w-[90%] py-5 flex md:flex-row flex-col justify-between font-bold uppercase gap-5">
      <div className="flex md:flex-row flex-col justify-start gap-5">
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
          </NavLink>
        ))}
      </div>
      <div className="flex md:flex-row flex-col justify-end gap-5">
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
      </div>
    </nav>
  );
}
