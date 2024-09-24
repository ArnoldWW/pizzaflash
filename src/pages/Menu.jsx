import { useLoaderData } from "react-router-dom";
import { getMenu } from "../firebase/db";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { formatPrice } from "../utils";

const PIZZAS = [
  {
    id: 1,
    name: "Nombre de la pizza",
    ingredients: "Ingredientes",
    price: "27.000",
    img: "pizzas/1.avif"
  }
];

export async function loader() {
  const menu = await getMenu();
  return { menu };
}

export default function Menu() {
  const { menu } = useLoaderData();
  const { addProduct } = useContext(CartContext);

  return (
    <div className="max-w-[1000px] mx-auto w-[90%] grid md:grid-cols-2 gap-5">
      {menu.map((pizza) => (
        <div
          key={pizza.id}
          className="rounded-2xl bg-orange-600 flex justify-center items-center overflow-hidden px-5 pt-5 gap-2 m-h-60"
        >
          <div className="h-full w-full">
            <img src={pizza.img} alt="pizza" />
          </div>
          <div className="font-bold w-1/2 ">
            <p className="text-white">{pizza.name}</p>
            <p className="text-white">{formatPrice(pizza.price)}</p>
            <p className="text-sm">{pizza.ingredients}</p>
            <button
              className="btn-black my-2"
              onClick={() => addProduct(pizza)}
            >
              Añadir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
