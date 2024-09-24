import { createContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    //sumar la unidad al producto si existe
    if (cart.find((p) => p.id === product.id)) {
      setCart(
        cart.map((p) => {
          if (p.id === product.id) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        })
      );
      //notificar al usuario
      return toast.success("Se agrego la unidad al producto");
    }

    //agregar el producto al carrito con una unidad inicial
    setCart([...cart, { ...product, quantity: 1 }]);
    //notificar al usuario
    toast.success("Se agrego el producto al carrito");
  };

  const removeProduct = (product) => {
    //eliminar el producto del carrito
    setCart(cart.filter((p) => p.id !== product.id));
    //notificar al usuario
    toast.success("Se elimino el producto del carrito");
  };

  //restar una unidad a un producto
  const subtractProduct = (product) => {
    //restar la unidad al producto si existe
    if (cart.find((p) => p.id === product.id)) {
      setCart(
        cart.map((p) => {
          if (p.id === product.id) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        })
      );
      //notificar al usuario
      return toast.success("Se restao la unidad al producto");
    }
  };

  /* realizar el pedido, resetear el carrito */
  const order = async () => {
    //notificar al usuario
    toast.success("Se realizo el pedido");
    //resetear el carrito
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, subtractProduct, order }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;
