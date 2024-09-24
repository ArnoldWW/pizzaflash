import React, { useContext, useEffect, useMemo } from "react";
import CartContext from "../context/CartContext";
import { formatPrice } from "../utils";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { user } = useContext(AuthContext);
  const { cart, addProduct, removeProduct, subtractProduct, order } =
    useContext(CartContext);
  const delivery = 0;

  /* calcular el total del carrito incluyendo el envio */
  const totalCart = useMemo(() => {
    const total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    return total + delivery;
  }, [cart]);

  return (
    <div className="max-w-[1000px] mx-auto w-[90%]">
      {cart.length > 0 ? (
        <>
          <ul className="flex flex-col gap-5">
            {cart.map((product) => (
              <li
                className="flex flex-col justify-between items-start md:flex-row md:items-center gap-5"
                key={product.id}
              >
                <div className="flex flex-col md:flex-row gap-2 items-center w-full">
                  <img src={product.img} alt="pizza" className="w-52" />
                  <div className="w-full">
                    <p className="uppercase font-bold">{product.name}</p>
                    <p className="text-sm">
                      <span>{product.quantity}</span> X{" "}
                      {formatPrice(product.price)}
                    </p>
                    <p className="font-bold">
                      Subtotal: {formatPrice(product.price * product.quantity)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 items-center w-full md:w-auto">
                  <button
                    className="btn-orange w-full md:w-auto"
                    onClick={() => removeProduct(product)}
                  >
                    Eliminar
                  </button>
                  {product.quantity > 1 && (
                    <button
                      className="btn-black w-full md:w-auto"
                      onClick={() => subtractProduct(product)}
                    >
                      -
                    </button>
                  )}
                  <button
                    className="btn-black w-full md:w-auto"
                    onClick={() => {
                      addProduct(product);
                    }}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <hr className="border-black my-5" />

          <div className="flex flex-col gap-5 items-start">
            <p>Envio: {formatPrice(delivery)}</p>
            <p className="text-2xl font-bold">
              Total: {formatPrice(totalCart)}
            </p>
            {/* validar si hay un usuario logueado y si es el mismo usuario que realizo el pedido */}
            {user?.uid ? (
              <button className="btn-orange w-full" onClick={order}>
                Realizar pedido
              </button>
            ) : (
              <Link className="btn-orange w-full" to="/login">
                Inicia sesión para realizar pedido
              </Link>
            )}
          </div>
        </>
      ) : (
        <p className="text-center text-2xl font-bold my-5">
          Tu carrito esta vacio
        </p>
      )}
    </div>
  );
}
