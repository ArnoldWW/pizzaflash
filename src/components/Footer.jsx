import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-[1000px] mx-auto w-[90%] my-10">
      <div className="flex gap-5 mb-2">
        <a href="#">
          <img src="img/facebook.svg" alt="logo facebook" />
        </a>
        <a href="#">
          <img src="img/instagram.svg" alt="logo instagram" />
        </a>
      </div>
      <ul className="flex justify-start gap-5 font-bold">
        <li>
          <a href="">Terminos y condiciones</a>
        </li>
        <span>|</span>
        <li>
          <a href="">Politica de privacidad</a>
        </li>
        <span>|</span>
        <li>
          <a href="">Informacion nutricional</a>
        </li>
      </ul>
      <p className="mt-2">
        ©2003-{new Date().getFullYear()} PizzaFlash. Todos los derechos
        reservados. El nombre, logotipos y marcas relacionadas de PizzaFlash®.
      </p>
    </footer>
  );
}
