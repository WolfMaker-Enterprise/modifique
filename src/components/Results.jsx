import smileImg from "../assets/smile.png";
import TextGradient from "./ui/TextGradiant";

function Results() {
  const images = [
    { id: 1, src: smileImg, alt: "Antes e Depois 1" },
    { id: 2, src: smileImg, alt: "Antes e Depois 2" },
    { id: 3, src: smileImg, alt: "Antes e Depois 3" },
  ];

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
        {images.map((image) => (
          <div key={image.id} className="w-60">
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-md"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
              <span>ANTES</span>
              <span>DEPOIS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Results;
