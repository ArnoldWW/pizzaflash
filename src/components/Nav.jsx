const LINKS = [
  {
    href: "",
    text: "inicio"
  },
  {
    href: "",
    text: "Menu"
  },
  {
    href: "",
    text: "carrito"
  }
];

export default function Nav() {
  return (
    <nav className="max-w-[1000px] mx-auto w-[90%] py-5 flex md:flex-row flex-col justify-between font-bold uppercase gap-5">
      <div className="flex md:flex-row flex-col justify-start gap-5">
        {LINKS.map((link) => (
          <a href={link.href} className="hover:underline">
            {link.text}
          </a>
        ))}
      </div>
      <div className="flex md:flex-row flex-col justify-end gap-5">
        <a href="" className="hover:underline">
          Iniciar Sesión
        </a>
        <a href="" className="hover:underline">
          Registrarse
        </a>
      </div>
    </nav>
  );
}
