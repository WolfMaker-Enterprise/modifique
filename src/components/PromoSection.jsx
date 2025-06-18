import { FaTooth } from 'react-icons/fa';

function PromoSection() {
  return (
    <section className="text-center px-4 py-16 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        Seu sorriso mais <span className="text-red-700">bonito</span><br />
        <span className="text-red-700">e confiante</span> começa aqui
      </h1>

      <p className="text-gray-600 mt-6 max-w-xl mx-auto text-sm md:text-base">
        Tecnologia de ponta, excelência técnica e atendimento personalizado para transformar sua experiência odontológica em algo único.
      </p>

      <div className="flex justify-center w-full mt-8">
        <a
          href="https://wa.link/3lpca3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="flex items-center gap-2 text-white py-3 px-6 md:px-8 text-sm md:text-base font-semibold rounded-md shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
            style={{
              backgroundImage: 'linear-gradient(90deg, #8B001D, #C40129)',
            }}
          >
            Agendar avaliação agora
            <FaTooth className="text-white text-lg md:text-xl" />
          </button>
        </a>
      </div>
    </section>
  );
}

export default PromoSection;
