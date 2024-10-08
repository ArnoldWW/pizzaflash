import { useLoaderData } from "react-router-dom";
import { getMenu } from "../firebase/db";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { formatPrice } from "../utils";

/* obtener las pizzas del menú */
export async function loader() {
  const menu = await getMenu();
  return { menu };
}

export default function Menu() {
  /* obtener el menú */
  const { menu } = useLoaderData();
  /* función para agregar el producto al carrito */
  const { addProduct } = useContext(CartContext);

  return (
    <div className="max-w-[1000px] mx-auto w-[90%] grid md:grid-cols-2 gap-5">
      {menu.map((pizza) => (
        <div
          key={pizza.id}
          className="rounded-2xl bg-orange-600 flex justify-center items-center overflow-hidden px-5 pt-5 gap-2 m-h-60 relative "
        >
          {/* etiqueta de no disponible */}
          {!pizza.available && (
            <div className="absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-neutral-600 bg-opacity-35">
              <p className="text-center uppercase text-white text-4xl font-bold">
                Pizza no disponible
              </p>
            </div>
          )}

          <div className="h-full w-full">
            <img src={pizza.img} alt="pizza" />
          </div>
          <div className="font-bold w-1/2 ">
            <p className="text-white">{pizza.name}</p>
            <p className="text-white">{formatPrice(pizza.price)}</p>
            <p className="text-sm">{pizza.ingredients}</p>
            {pizza.available && (
              <button className="btn-black" onClick={() => addProduct(pizza)}>
                Añadir
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
