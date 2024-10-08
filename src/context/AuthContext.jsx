import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  //estado global
  const [user, setUser] = useState(null);
  /* admin state */
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      //si el usuario logueado es admin
      setIsAdmin(user.uid === "tTofIh3y6WYmuP1Z3i4asIjXehs1");
    } else {
      //No hay usuario logueado
      setIsAdmin(false);
    }
  }, [user]);

  //observador cuando cambia el usuario logueado
  onAuthStateChanged(auth, (user) => {
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
    <AuthContext.Provider value={{ user, isAdmin, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
