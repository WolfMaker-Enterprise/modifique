import { FaInstagram, FaFacebookF, FaPhoneAlt, FaHome } from "react-icons/fa";
import logo from "../assets/logo_dourada.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#9f0011] to-[#63001c] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Logo e Navegação */}
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between gap-6 text-center md:text-left">
          <a href="#inicio">
            <img
              src={logo}
              alt="Logo Modifique"
              className="w-40 md:w-48 mx-auto md:mx-0"
            />
          </a>

          <nav className="flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium">
            <a href="#inicio" className="hover:text-yellow-300 transition">
              Início
            </a>
            <a href="#resultados" className="hover:text-yellow-300 transition">
              Resultados
            </a>
            <a href="#sobre" className="hover:text-yellow-300 transition">
              Sobre nós
            </a>
            <a href="#servicos" className="hover:text-yellow-300 transition">
              Serviços
            </a>
            <a href="#depoimentos" className="hover:text-yellow-300 transition">
              Depoimentos
            </a>
            <a href="#contato" className="hover:text-yellow-300 transition">
              Contato
            </a>
          </nav>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.instagram.com/modifiqueodontologia/"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Contatos */}
        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <span>(51) 99990-0116</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHome className="text-white" />
            <span className="text-center sm:text-left">
              Av. José Loureiro da Silva, 1428, Gravataí, RS
            </span>
          </div>
        </div>

        <hr className="w-full border-t border-white/30" />

        <p className="text-xs text-center text-white/70">
          © 2025 Modifique Odontologia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
