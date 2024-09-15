import { Link } from "react-router-dom";

const LINKS = [
  {
    href: "/",
    text: "inicio"
  },
  {
    href: "/",
    text: "Menu"
  },
  {
    href: "/",
    text: "carrito"
  }
];

export default function Nav() {
  return (
    <nav className="max-w-[1000px] mx-auto w-[90%] py-5 flex md:flex-row flex-col justify-between font-bold uppercase gap-5">
      <div className="flex md:flex-row flex-col justify-start gap-5">
        {LINKS.map((link) => (
          <Link to={link.href} className="hover:underline">
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex md:flex-row flex-col justify-end gap-5">
        <Link to="/login" className="hover:underline">
          Iniciar Sesión
        </Link>
        <Link to="/signup" className="hover:underline">
          Registrarse
        </Link>
      </div>
    </nav>
  );
}
