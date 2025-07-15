import bianca from "../assets/bianca.png";
import isadora from "../assets/isadora.png";
import rafael from "../assets/rafael.png";
import equipe from "../assets/equipe.png";
import logoBordo from "../assets/logo_bordo.png";
import TextGradient from "./ui/TextGradiant";

const specialistsData = [
  {
    name: "DRA. BIANCA BITENCOURT",
    description:
      "Cirurgiã-dentista. Atua na área de Implantodontia. Reconhecida por sua abordagem técnica, precisa e comprometida com a confiança de seus pacientes.",
    image: bianca,
  },
  {
    name: "DRA. ISADORA FORNECK",
    description:
      "Cirurgiã-dentista, especialista em Harmonização Orofacial. Se destaca pela sua combinação única de técnica refinada, olhar estético e sensibilidade humana.",
    image: isadora,
  },
  {
    name: "DR. RAFAEL SILVEIRA",
    description:
      "Cirurgião-dentista. Atua com foco nas áreas de Implantodontia e Prótese Dentária, oferecendo um atendimento ético e comprometido com o bem-estar dos pacientes.",
    image: rafael,
  },
];

const Our = () => {
  return (
    <div className="bg-white py-16 px-6 pb-24 flex flex-col items-center font-sans">
      <h2 className="text-3xl md:text-4xl text-black font-semibold mb-12 text-center">
        Nossos <TextGradient word="especialistas" />
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-stretch">
        {specialistsData.map((specialist, index) => (
          <div
            key={index}
            className="flex flex-col justify-between text-center h-full"
          >
            <div className="bg-[#f5f8fb] rounded-xl mb-6 w-full sm:max-w-[240px] mx-auto min-h-[320px] flex items-center justify-center overflow-visible">
              <img
                src={specialist.image}
                alt={specialist.name}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="px-2 flex flex-col flex-grow">
              <h3 className="text-sm font-extrabold text-[#1d1d1f] uppercase tracking-wide mb-2">
                {specialist.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {specialist.description}
              </p>
            </div>
          </div>
        ))}

        {/* Card da equipe com logo abaixo */}
        <div className="flex flex-col justify-between text-center h-full">
          <div className="rounded-xl mb-2 w-full sm:max-w-[240px] mx-auto min-h-[320px] flex items-center justify-center  overflow-visible">
            <img
              src={equipe}
              alt="Equipe Modifique Odontologia"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="flex justify-center mt-4">
            <img
              src={logoBordo}
              alt="Modifique Odontologia Logo"
              className="w-[345px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
