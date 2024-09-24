import { createContext, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  //estado global
  const [user, setUser] = useState(null);

  //observador cuando cambia el usuario logueado
  onAuthStateChanged(auth, (user) => {
    console.log("cambio de usuario");

    if (user) {
      //hay usuario logueado
      setUser(user);
    } else {
      //No hay usuario logueado
      setUser(null);
    }
  });

  //Provider para el contexto
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
