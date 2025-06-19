import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TextGradient from "./ui/TextGradiant";

const testimonials = [
  {
    name: "Nome Sobrenome",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    rating: 5,
  },
  {
    name: "Nome Sobrenome",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    rating: 5,
  },
  {
    name: "Nome Sobrenome",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada vehicula varius.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0); //0

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); //clica sub - 1 (valor atual) -> ASYNC [EXECUCOES...]
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length); //clica add + 1 (valor atual) -> ASYNC

  return (
    <section className="py-16 px-4 text-center bg-gray-50 text-gray-900 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Quem escolhe a Modifique, <TextGradient word="recomenda" />
      </h2>
      <p className="text-gray-600 mt-2 mb-10">
        Confira o que nossos pacientes têm a dizer sobre seus resultados e
        experiências.
      </p>

      <div className="relative max-w-4xl mx-auto">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-red-900 transition-all duration-300"
        >
          <FaChevronLeft size={16} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full px-6 md:px-10 flex justify-center"
              >
                <div className="bg-white shadow-md rounded-xl p-6 max-w-md text-center">
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-orange-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="italic text-sm md:text-base">{t.text}</p>
                  <div className="mt-6 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mb-2" />
                    <p className="text-sm font-medium">{t.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-red-900 transition-all duration-300"
        >
          <FaChevronRight size={16} />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
