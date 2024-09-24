import toast from "react-hot-toast";
import { auth } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

//crear usuario
export const createUser = async (name, email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name
    });
    toast.success("Usuario creado, se inicio sesión"); //mensaje de alerta
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error("Error al crear usuario, el correo ya está en uso");
    console.error(errorMessage);
  }
};

//iniciar sesion con firebase
export const signIn = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Sesión iniciada"); //mensaje de alerta
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
    //mensaje de alerta
    toast.error("Error al iniciar sesión, revisa tus credenciales");
    return null;
  }
};

//cerrar sesion en firebase
export const logOut = async () => {
  try {
    await signOut(auth);
    toast.success("Sesión cerrada"); //mensaje de alerta
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  }
};
