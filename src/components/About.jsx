import { FaTooth } from "react-icons/fa";
import backgroundRed from "../assets/back_ground_red.jpg";
import dentalProsthesis from "../assets/dental_prosthesis.png";

function About() {
  return (
    <section
      id="sobre"
      className="relative h-[860px] text-white bg-white flex items-end"
    >
      <div
        className="relative z-10 w-full h-[560px] flex items-center px-4 md:px-8"
        style={{
          backgroundImage: `url(${backgroundRed})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:w-[60%] max-w-[600px] flex flex-col gap-4 ml-auto md:ml-40">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Sobre a Modifique
          </h2>

          <p className="text-sm md:text-base leading-relaxed">
            Somos uma equipe de profissionais dedicados e apaixonados pelo que
            fazemos. Acreditamos no poder do atendimento humanizado para
            transformar experiências e criar vínculos de confiança.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
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

      <img
        src={dentalProsthesis}
        alt="Prótese Odontológica"
        className="hidden md:block z-50 absolute bottom-0 right-0 h-[750px] object-contain pointer-events-none select-none"
      />
    </section>
  );
}

export default About;
