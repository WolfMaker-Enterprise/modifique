import { FaTooth } from 'react-icons/fa';
import backgroundRed from '../assets/back_ground_red.jpg';
import dentalProsthesis from '../assets/dental_prosthesis.png';

function About() {
  return (
    <section
      id="sobre"
      className="relative h-[600px] text-white"
      style={{
        backgroundImage: `url(${backgroundRed})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 w-full h-full flex items-center px-4 md:px-8">
        <div className="md:w-[60%] max-w-[600px] flex flex-col gap-4 ml-auto md:ml-40">
          <h2 className="text-3xl md:text-4xl font-semibold">Sobre a Modifique</h2>

          <p className="text-sm md:text-base leading-relaxed">
            Vel lacinia mi convallis tortor sem pulvinar laoreet libero nulla facilisi justo fames
            donec elementum id ultrices amet ac diam auctor in sodales faucibus habitant aliquam
            maecenas mauris quis viverra praesent quam aliquet nec integer arcu tempus malesuada
            orci dolor arcu lorem facilisis nulla cursus vitae sed at.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Vel lacinia mi convallis tortor sem pulvinar laoreet libero nulla facilisi justo fames
            donec elementum id ultrices amet ac diam auctor in sodales faucibus habitant aliquam
            maecenas mauris quis viverra praesent quam aliquet nec integer arcu tempus malesuada
            orci dolor arcu lorem facilisis nulla cursus vitae sed at.
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
                backgroundImage: 'linear-gradient(to right, #facc15, #ea580c)',
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
        className="absolute bottom-0 right-0 h-full object-contain pointer-events-none select-none"
      />
    </section>
  );
}

export default About;
