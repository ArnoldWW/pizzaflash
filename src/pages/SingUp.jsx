import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useFormik } from "formik";
import { createUser } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Nombre es requerido";
  }

  if (!values.email) {
    errors.email = "El correo es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Correo no valido";
  }

  if (!values.password) {
    errors.password = "Contraseña es requerida";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener 6 caracteres como minimo";
  }

  return errors;
};

export default function SingUp() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validate,
    onSubmit: async (values) => {
      const user = await createUser(values.name, values.email, values.password);

      if (user) {
        setUser(user);
        navigate("/");
      }
    }
  });

  return (
    <div className="max-w-[1000px] mx-auto w-[90%] my-12">
      <h1 className="text-4xl font-bold text-center mb-5">
        Registrate en pizzaflash
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className="max-w-[500px] mx-auto flex justify-center flex-col gap-5"
      >
        {formik.touched.name && formik.errors.name ? (
          <span className="text-sm text-red-500">{formik.errors.name}*</span>
        ) : null}
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
          name="name"
          type="text"
          placeholder="Nombre"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

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
          Registrarse
        </button>
      </form>
    </div>
  );
}
