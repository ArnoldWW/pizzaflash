export default function SingUp() {
  return (
    <div className="max-w-[1000px] mx-auto w-[90%]">
      <h1 className="text-4xl font-bold text-center mb-5">
        Registrate en pizzaflash
      </h1>

      <form className="max-w-[500px] mx-auto flex justify-center flex-col gap-5">
        <input
          className="border border-black rounded-lg px-5 py-2"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="border border-black rounded-lg px-5 py-2"
          type="email"
          placeholder="Correo electronico"
        />
        <input
          className="border border-black rounded-lg px-5 py-2"
          type="password"
          placeholder="Constraseña"
        />

        <button className="btn-orange" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}
