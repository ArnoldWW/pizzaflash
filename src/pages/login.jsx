export default function logIn() {
  return (
    <div className="max-w-[1000px] mx-auto w-[90%]">
      <h1 className="text-4xl font-bold text-center mb-5">
        Inicia sesion en pizzaflash
      </h1>

      <form className="max-w-[500px] mx-auto flex justify-center flex-col gap-5">
        <input
          className="border border-black rounded-lg px-5 py-2"
          type="email"
          placeholder="correo electronico"
        />
        <input
          className="border border-black rounded-lg px-5 py-2"
          type="password"
          placeholder="constraseña"
        />

        <button className="btn-orange" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
