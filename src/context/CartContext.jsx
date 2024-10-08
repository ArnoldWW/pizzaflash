import { createContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

function CartProvider({ children }) {
  /* obtener el carrito del local storage */
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  //agregar el producto al carrito
  const addProduct = (product) => {
    //sumar la unidad al producto si existe
    if (cart.find((p) => p.id === product.id)) {
      const newCart = cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });

      setCart(newCart);

      /* agregar al local storage */
      localStorage.setItem("cart", JSON.stringify(newCart));

      //notificar al usuario
      return toast.success("Se agrego la unidad al producto");
    }

    //agregar el producto al carrito con una unidad inicial
    const newCart = [...cart, { ...product, quantity: 1 }];
    setCart(newCart);

    /* agregar al local storage */
    localStorage.setItem("cart", JSON.stringify(newCart));

    //notificar al usuario
    toast.success("Se agrego el producto al carrito");
  };

  const removeProduct = (product) => {
    //eliminar el producto del carrito
    const newCart = cart.filter((p) => p.id !== product.id);
    console.log(newCart);

    setCart(newCart);

    /* eliminar al local storage */
    localStorage.removeItem("cart");

    //notificar al usuario
    toast.success("Se elimino el producto del carrito");
  };

  /* remover la pizza si el admin la pone como no disponible */
  const removeProductNotAvailable = (product) => {
    /* revisar si la pizza esta en el carrito para eliminarla */
    if (!cart.find((p) => p.id === product.id)) return;

    const newCart = cart.filter((p) => p.id !== product.id);
    setCart(newCart);

    /* actualizar el local storage */
    localStorage.setItem("cart", JSON.stringify(newCart));

    //notificar al usuario
    toast.success(
      "Se elimino el producto del carrito, porque no esta disponible"
    );
  };

  //restar una unidad a un producto
  const subtractProduct = (product) => {
    //restar la unidad al producto si existe
    if (cart.find((p) => p.id === product.id)) {
      const newCart = cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });

      setCart(newCart);

      /* agregar al local storage */
      localStorage.setItem("cart", JSON.stringify(newCart));

      //notificar al usuario
      return toast.success("Se resto la unidad al producto");
    }
  };

  /* realizar el pedido, resetear el carrito */
  const order = async () => {
    //notificar al usuario
    toast.success("Se realizo el pedido");
    //resetear el carrito
    setCart([]);

    /* eliminar al local storage */
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        removeProductNotAvailable,
        subtractProduct,
        order
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;
