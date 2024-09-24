import { useLoaderData } from "react-router-dom";
import { getMenu } from "../firebase/db";

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
            <p className="text-white">GRANDE - 35.5 CM PEPPERONI</p>
            <p className="text-white">$20.900</p>
            <p className="text-sm">ingredientes</p>
            <button className="btn-black my-2">Añadir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
