import TextGradient from "./ui/TextGradiant";
import { useState } from "react";

import before1 from "../assets/before1.jpg";
import after1 from "../assets/after1.jpg";
import before2 from "../assets/before2.jpg";
import after2 from "../assets/after2.jpg";
import before3 from "../assets/before3.jpg";
import after3 from "../assets/after3.jpg";

const images = [
  {
    id: 1,
    before: before1,
    after: after1,
    alt: "Sorriso 1",
  },
  {
    id: 2,
    before: before2,
    after: after2,
    alt: "Sorriso 2",
  },
  {
    id: 3,
    before: before3,
    after: after3,
    alt: "Sorriso 3",
  },
];

function ImageCompare({ before, after, alt }) {
  const [slider, setSlider] = useState(50);
  return (
    <div className="relative w-60 h-60 rounded-lg overflow-hidden shadow-md bg-gray-100 flex flex-col items-center">
      <div className="relative w-full h-full select-none">
        <img
          src={after}
          alt={alt + " antes"}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        />
        <img
          src={before}
          alt={alt + " depois"}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            zIndex: 2,
            clipPath: `inset(0 0 0 ${slider}%)`,
            transition: "none",
          }}
        />
        <div
          className="absolute top-0 h-full border-l-2 border-[#B10017] pointer-events-none"
          style={{ left: `${slider}%`, zIndex: 3 }}
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={slider}
        onChange={(e) => setSlider(Number(e.target.value))}
        className="w-full mt-2 accent-[#B10017]"
        aria-label="Deslize para comparar antes e depois"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1 px-2 w-full">
        <span>ANTES</span>
        <span>DEPOIS</span>
      </div>
    </div>
  );
}

function Results() {
  return (
    <section id="resultados" className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Resultados reais, <TextGradient word="sorriso incríveis" />
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Veja as transformações feitas com cuidado, precisão e atenção ao que
        cada paciente realmente precisa.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {images.map((img) => (
          <ImageCompare
            key={img.id}
            before={img.before}
            after={img.after}
            alt={img.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Results;
