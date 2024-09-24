import toast from "react-hot-toast";
import "./config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";

export const auth = getAuth();

export const getUserSesion = () => {
  const currentUser = auth.currentUser;

  if (currentUser) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    return currentUser;
  } else {
    // No user is signed in.
    return null;
  }
};

export const createUser = async (name, email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name
    });
    toast.success("Usuario creado"); //mensaje de alerta
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
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

//cerrar sesion
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
