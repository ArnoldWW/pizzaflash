import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Layout() {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" && <p>Cargando...</p>}
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
