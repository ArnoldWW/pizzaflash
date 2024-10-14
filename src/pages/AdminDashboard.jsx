import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { getMenu, updatePizzaStatus } from "../firebase/db";
import { formatPrice } from "../utils";
import CartContext from "../context/CartContext";

export async function loader() {
  const menu = await getMenu();

  return { menu };
}

export default function AdminDashboard() {
  /* obtener el usuario logueado */
  const { user, isAdmin } = useContext(AuthContext);
  const { removeProductNotAvailable } = useContext(CartContext);

  /* obtener el menú */
  const { menu } = useLoaderData();
  /* estado array para las pizzas */
  const [pizzas, setPizzas] = useState(menu);

  const navigate = useNavigate();

  //redireccionar al inicio si el usuario no está logueado
  useEffect(() => {
    if (!user || !isAdmin) return navigate("/");
  }, [user]);

  /* función para cambiar el estado de una pizza */
  const changePizzaStatus = async (pizza) => {
    if (
      confirm("¿Estás seguro de que quieres cambiar el estado de la pizza?")
    ) {
      //obtener la pizza actual del menu
      const currentPizza = pizzas.find((p) => p.id === pizza.id);

      //obtener el estado actual de la pizza
      const currentStatus = currentPizza.available;

      //actualizar el estado local del menu
      const newPizzas = pizzas.map((p) => {
        if (p.id === pizza.id) {
          return { ...p, available: !currentStatus };
        }
        return p;
      });

      setPizzas(newPizzas);

      //cambiar el estado de la pizza
      await updatePizzaStatus(pizza.id, !currentStatus);

      /* eliminar la pizza, si esta en el carrito del local storage */
      removeProductNotAvailable(pizza);
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto w-[90%]">
      <h1 className="text-4xl font-bold text-center uppercase my-5">
        Panel de administración
      </h1>

      {/* tabla con el menú de pizzas (id, img, name, price, boton para cambiar el estado) */}
      <table className="table-auto w-full border overflow-x-auto">
        <thead className="text-center border border-black uppercase">
          <tr className="text-center border border-black">
            <th className="border border-black">Imagen</th>
            <th className="border border-black">Nombre</th>
            <th className="border border-black">Precio</th>
            <th className="border border-black">Estado</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr key={pizza.id} className="border border-black">
              <td className="border border-black">
                <img src={pizza.img} alt="pizza" className="w-40 mx-auto" />
              </td>
              <td className="text-center border border-black">{pizza.name}</td>
              <td className="text-center border border-black">
                {formatPrice(pizza.price)}
              </td>
              <td className="text-center border border-black">
                <button
                  className={`${pizza.available ? "btn-orange" : "btn-black"}`}
                  onClick={() => changePizzaStatus(pizza)}
                >
                  {pizza.available ? "Disponible" : "No disponible"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
