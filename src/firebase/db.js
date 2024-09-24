import { db } from "./config";
import { collection, getDocs } from "firebase/firestore";

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
