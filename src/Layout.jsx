import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Layout() {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 z-50 flex justify-center items-center">
          <p className="text-center text-4xl font-bold">Cargando...</p>
        </div>
      )}
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
