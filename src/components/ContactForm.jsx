import nurseImage from "../assets/nurce_2.png";
import backgroundBox from "../assets/back_ground_nurce_2.jpg";
import InputMask from "react-input-mask";
import { FaTooth } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section
      id="contato"
      className="w-full py-16 px-4 flex justify-center bg-gray-50"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 bg-white/80 p-6 md:p-12 rounded-xl shadow-md">
        <div className="flex-1 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Pronto para <span className="text-red-700">transformar</span> seu
            sorriso?
          </h2>
          <p className="text-gray-700 mb-6">
            Agende agora mesmo sua avaliação com nossos especialistas e descubra
            o melhor caminho para o sorriso que você sempre desejou.
          </p>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Whatsapp
              </label>
              <InputMask
                mask="(99) 99999-9999"
                placeholder="(00) 00000-0000"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                inputMode="numeric"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Qual serviço você tem interesse?
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Selecione</option>
                <option>Clareamento</option>
                <option>Implante</option>
                <option>Prótese</option>
                <option>Limpeza</option>
              </select>
            </div>

            <a
              href="#"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#9c0c28] via-[#c4112f] to-[#e61938] hover:from-[#7c0a20] hover:via-[#a10d28] hover:to-[#c11430] text-white font-semibold py-3 px-6 rounded-md w-fit transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Agendar avaliação agora
              <FaTooth size={20} />
            </a>
          </form>
        </div>

        <div className="flex-1 w-full flex justify-center items-end">
          <div
            className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] rounded-3xl  overflow-visible"
            style={{
              backgroundImage: `url(${backgroundBox})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={nurseImage}
              alt="Enfermeira"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
