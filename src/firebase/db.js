import "./config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore();

export const getPizzas = async () => {
  const querySnapshot = await getDocs(collection(db, "pizzas"));
  const pizzas = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    pizzas.push({
      id: doc.id,
      ...doc.data()
    });
  });

  return pizzas;
};
