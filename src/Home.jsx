import { useContext, useEffect } from "react";
import AuthContext from "./context/AuthContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SLIDES = [
  {
    id: 1,
    price: "$27.000",
    title: "Pizza Peperoni",
    ingredients: "Queso, peperoni y salsa de tomate",
    img: "img/hero/1.avif"
  },
  {
    id: 2,
    price: "$25.000",
    title: "Pizza Combinada",
    ingredients: "Mitad queso peperoni, mitad hawaiian",
    img: "img/hero/2.avif"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "Una pizza de 5 estrellas",
    logo: "img/rappi.png",
    alt: "logo-rappi",
    bg: "bg-black"
  },
  {
    id: 2,
    text: "Es la pizza más vendida de la plataforma",
    logo: "img/didifood.png",
    alt: "logo-didi",
    bg: "bg-black"
  },
  {
    id: 3,
    text: "Es una de las pizzas con mejores calificaciones",
    logo: "img/uber-eats.png",
    alt: "logo-uber-eats",
    bg: "bg-orange-600"
  }
];

function App() {
  return (
    <div className="max-w-[1000px] mx-auto w-[90%]">
      <section className=" bg-orange-600 rounded-2xl overflow-hidden py-14 px-8 mb-5">
        <Splide
          aria-label="Pizza destacadas"
          options={{
            arrows: false,
            rewind: true,
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false
          }}
        >
          {SLIDES.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full md:w-[60%]"
                />
                <div className="flex-1 flex flex-col gap-2">
                  <img
                    src="img/hot-ready.png"
                    alt="hot-ready"
                    className="w-[120px]"
                  />
                  <p className="text-4xl font-bold text-white">{slide.price}</p>
                  <h2 className="text-4xl font-bold uppercase text-white">
                    {slide.title}
                  </h2>
                  <p className="font-bold">{slide.ingredients}</p>

                  <a href="/" className="inline-block btn-black">
                    ORDENAR
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </section>

      <section className=" grid md:grid-cols-3 grid-cols-1 md:gap-x-5 gap-y-5">
        <div className="bg-orange-600 rounded-2xl flex flex-col md:flex-row overflow-hidden col-span-2 min-h-[250px]">
          <img
            src="img/delivery.jpg"
            alt="delivery"
            className="object-cover h-full w-full max-h-[350px]"
          />
          <div className="px-5 py-10 font-bold flex-1">
            <h2 className="text-4xl uppercase text-white mb-3">
              Domicilios Gratis
            </h2>
            <p className="">
              {/* mensaje de domicilios gratis de pizzas en bogotá corto */}
              Contamos con más de +1000 repartidores de pizzas en Bogotá y con
              domicilios gratis.
            </p>
          </div>
        </div>

        <div className="bg-orange-600 rounded-2xl px-5 py-10 flex flex-col justify-center">
          <img src="img/hot-ready.png" alt="hot-ready" className="w-[120px]" />
          <p className="font-bold">
            <span className="text-4xl text-white">10% OFF</span> Aprovecha los
            descuentos del mes de septiembre y octubre en pizzas seleccionadas
          </p>
        </div>
      </section>

      <section className=" my-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`flex flex-col justify-center items-center gap-5 ${testimonial.bg} rounded-2xl px-5 py-10 font-bold text-white`}
          >
            <p className="text-2xl text-center">"{testimonial.text}"</p>
            <div>
              <img
                src={testimonial.logo}
                alt={testimonial.alt}
                className="w-20"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
