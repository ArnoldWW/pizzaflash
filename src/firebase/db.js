import toast from "react-hot-toast";
import { db } from "./config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

export const getMenu = async () => {
  const querySnapshot = await getDocs(collection(db, "pizzas"));
  const menu = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    menu.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return menu;
};

/* actualizar el estado de una pizza */
export const updatePizzaStatus = async (id, available) => {
  try {
    console.log(id, available);

    await updateDoc(doc(db, "pizzas", id), {
      available
    });
    toast.success("Se cambio el estado de la pizza");
  } catch (error) {
    console.error(error);
  }
};
