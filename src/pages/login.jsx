import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signIn } from "../firebase/auth";

//validaciones del login
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "El correo es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Correo no valido";
  }

  if (!values.password) {
    errors.password = "Contraseña es requerida";
  }

  return errors;
};

export default function logIn() {
  //estado global
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  //redirigir al inicio si el usuario ya existe
  useEffect(() => {
    console.log(user);
    if (user) return navigate("/");
  }, [user]);

  //Libreria formik para los formularios
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate,
    onSubmit: async (values) => {
      //iniciar sesion
      const user = await signIn(values.email, values.password);

      //si el usuario existe
      if (user) {
        setUser(user);
        navigate("/");
      }
    }
  });

  return (
    <div className="max-w-[1000px] mx-auto w-[90%] my-12">
      <h1 className="text-4xl font-bold text-center mb-5">
        Inicia sesion en pizzaflash
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className="max-w-[500px] mx-auto flex justify-center flex-col gap-5"
      >
        {formik.touched.email && formik.errors.email ? (
          <span className="text-sm text-red-500">{formik.errors.email}*</span>
        ) : null}
        {formik.touched.password && formik.errors.password ? (
          <span className="text-sm text-red-500">
            {formik.errors.password}*
          </span>
        ) : null}
        <input
          className="border border-black rounded-lg px-5 py-2"
          name="email"
          type="email"
          placeholder="Correo electronico"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <input
          className="border border-black rounded-lg px-5 py-2"
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />

        <button className="btn-orange" type="submit">
          Iniciar Sesión
        </button>

        <Link className="hover:underline" to="/signup">
          ¿No tienes cuenta? Regístrate
        </Link>
      </form>
    </div>
  );
}
