import { FaTooth } from "react-icons/fa";
import backgroundRed from "../assets/back_ground_red.jpg";
import dentalProsthesis from "../assets/dental_prosthesis.png";

function About() {
  return (
    <section
      id="sobre"
      className="relative text-white bg-white flex flex-col md:flex-row items-end"
    >
      <div
        className="relative z-10 w-full flex items-center px-4 sm:px-6 md:px-8 py-16 md:py-0"
        style={{
          backgroundImage: `url(${backgroundRed})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-[60%] max-w-[600px] flex flex-col gap-4 ml-auto md:ml-40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Sobre a Modifique
          </h2>

          <p className="text-sm sm:text-base leading-relaxed">
            Somos uma equipe de profissionais dedicados e apaixonados pelo que
            fazemos. Acreditamos no poder do atendimento humanizado para
            transformar experiências e criar vínculos de confiança.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Nosso DNA é acolher cada paciente com empatia, atenção e respeito,
            oferecendo um ambiente seguro e tranquilo. Da primeira consulta aos
            tratamentos mais avançados, colocamos você no centro de tudo. Nosso
            propósito é simples, mas poderoso: te fazer sorrir com confiança.
          </p>

          <a
            href="https://wa.link/3lpca3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <button
              className="flex items-center gap-2 text-gray-900 font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
              style={{
                backgroundImage: "linear-gradient(to right, #facc15, #ea580c)",
              }}
            >
              Agendar avaliação agora
              <FaTooth className="text-gray-900 text-lg" />
            </button>
          </a>
        </div>
      </div>

      <div className="hidden md:flex relative w-full md:w-auto h-[300px] sm:h-[400px] md:h-auto justify-center md:justify-end">
        <img
          src={dentalProsthesis}
          alt="Prótese Odontológica"
          className="absolute bottom-0 right-0 h-full max-h-[600px] object-contain pointer-events-none select-none"
        />
      </div>
    </section>
  );
}

export default About;
