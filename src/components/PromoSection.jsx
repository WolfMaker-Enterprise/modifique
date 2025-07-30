import { FaTooth } from "react-icons/fa";
import TextGradient from "./ui/TextGradiant";
import mobileVideo from "../assets/mobile.mp4";
import mobilePoster from "../assets/poster.jpg";

function PromoSection() {
  return (
    <section
      id="inicio"
      className="text-center px-4 py-16 bg-white pt-20 md:pt-32 scroll-mt-16"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 max-w-[90%] sm:max-w-[580px] mx-auto">
        Seu sorriso mais <TextGradient word="bonito e confiante" /> começa aqui
      </h1>

      <p className="text-gray-600 mt-6 max-w-md sm:max-w-xl mx-auto text-base sm:text-lg">
        Dentes amarelados, tortos ou faltando? Já não se sente tão confiante ao
        sorrir? Na Modifique Odontologia, em Gravataí, você encontra soluções
        estéticas completas para recuperar seu sorriso com naturalidade,
        conforto e segurança.
      </p>

      <div className="flex justify-center w-full mt-8">
        <a
          href="https://wa.link/3lpca3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="flex items-center gap-2 text-white py-3 px-6 sm:px-8 text-base sm:text-lg font-semibold rounded-md shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
            style={{
              backgroundImage: "linear-gradient(90deg, #8B001D, #C40129)",
            }}
          >
            Agendar avaliação agora
            <FaTooth className="text-white text-lg sm:text-xl" />
          </button>
        </a>
      </div>
      {/* Vídeo visível apenas no mobile */}
      <div className="block md:hidden mb-5 pt-10">
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
          <video
            poster={mobilePoster}
            src={mobileVideo}
            controls
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
